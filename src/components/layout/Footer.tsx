import React from "react";
import Link from "next/link";
import { PERSONAL_INFO, ETHICAL_SECURITY_DISCLAIMER } from "@/data/portfolioData";
import { Send, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-slate-900 dark:text-slate-100">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-mono">
                CS &apos;25
              </span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400">
              {PERSONAL_INFO.primaryHeadline}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {PERSONAL_INFO.supportingHeadline}
            </p>

            {/* Social Icon Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Channel or Chat"
                className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  About &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/cybersecurity"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Cybersecurity Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Experience &amp; Education
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Technical Write-Ups
                </Link>
              </li>
            </ul>
          </div>

          {/* External & Meta Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>Curriculum Vitae (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Disclaimer Notice */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 mb-8 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Ethical Statement:{" "}
            </span>
            {ETHICAL_SECURITY_DISCLAIMER}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px]">
            Designed for performance &amp; security consciousness.
          </p>
        </div>
      </div>
    </footer>
  );
}

