import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL_INFO } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} — Flutter & Web Developer | Cybersecurity Student`,
  description:
    "Computer Science graduate, Flutter and web developer, currently studying cybersecurity and developing practical security knowledge.",
  keywords: [
    "Flutter Developer",
    "Web Developer",
    "Cybersecurity Student",
    "Computer Science Graduate",
    "Ethical Hacking",
    "Network Security",
    "Linux Administration",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${PERSONAL_INFO.name} — Flutter & Web Developer | Cybersecurity Student`,
    description:
      "Building Software. Securing Systems. Computer Science graduate combining software development with cybersecurity.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — Flutter & Web Developer | Cybersecurity Student`,
    description:
      "Building Software. Securing Systems. Computer Science graduate combining software development with cybersecurity.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col antialiased selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
