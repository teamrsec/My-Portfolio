import { NextResponse } from "next/server";

const submissions = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_SUBMISSIONS_PER_WINDOW = 3;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    if (website) {
      return NextResponse.json({ error: "Unable to process this request." }, { status: 400 });
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const address = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const current = submissions.get(address);
    const rate = current && current.resetAt > now
      ? current
      : { count: 0, resetAt: now + WINDOW_MS };
    if (rate.count >= MAX_SUBMISSIONS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }
    rate.count += 1;
    submissions.set(address, rate);

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || email.trim().length > 254 || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3 || subject.trim().length > 150) {
      return NextResponse.json(
        { error: "Please provide a subject between 3 and 150 characters." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 2000) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const cleanPayload = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      subject: subject.trim().slice(0, 150),
      message: message.trim().slice(0, 2000),
    };

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      return NextResponse.json(
        { error: "Contact delivery is not configured yet. Please contact me directly by email." },
        { status: 503 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: cleanPayload.email,
        subject: cleanPayload.subject,
        text: `Name: ${cleanPayload.name}\nEmail: ${cleanPayload.email}\n\n${cleanPayload.message}`,
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      console.error("[CONTACT_DELIVERY_FAILED]", resendResponse.status);
      return NextResponse.json(
        { error: "Something went wrong while sending your message." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. Thanks for reaching out — I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
