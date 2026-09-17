"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name.trim().length < 2 ||
      formData.email.trim().length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) ||
      formData.subject.trim().length < 3 ||
      formData.subject.trim().length > 150 ||
      formData.message.trim().length < 10 ||
      formData.message.trim().length > 2000
    ) {
      setStatus("error");
      setStatusMessage("Please check your name, email, subject, and message before sending.");
      return;
    }
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
        setStatusMessage("Something went wrong while sending your message. Please try again or contact me directly by email.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong while sending your message. Please try again or contact me directly by email.");
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="10 // COMMUNICATION"
          title="Let's Connect"
          subtitle="Whether you're interested in my development work, cybersecurity journey, collaboration, or simply want to connect, I'd be happy to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 space-y-6 shadow-xs">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <span className="font-mono text-xs font-semibold">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      LinkedIn
                    </span>
                    <span className="font-mono text-xs font-semibold">
                      Professional Network
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      GitHub
                    </span>
                    <span className="font-mono text-xs font-semibold">
                      Source Code &amp; Repos
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Telegram
                    </span>
                    <span className="font-mono text-xs font-semibold">
                      Direct Messaging
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Location: {PERSONAL_INFO.location}</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to Inquiries</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 shadow-xs">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-500" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                All inquiries are validated and safely processed. No credentials or keys are exposed.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-600 dark:text-slate-300 font-medium mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-600 dark:text-slate-300 font-medium mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-600 dark:text-slate-300 font-medium mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to talk about?"
                    required
                    minLength={3}
                    maxLength={150}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-600 dark:text-slate-300 font-medium mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={2000}
                    placeholder="Tell me a little about your project, opportunity, or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors resize-none font-sans"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  isLoading={status === "loading"}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  {status === "loading" ? "Sending message..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
