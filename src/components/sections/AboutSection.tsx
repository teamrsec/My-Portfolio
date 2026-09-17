import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  ShieldAlert,
  Code,
  TerminalSquare,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="01 // BACKGROUND & PHILOSOPHY"
          title="Bridging Software Engineering & Security"
          subtitle="A Computer Science graduate with strong mobile and web foundations, purposefully expanding into defensive engineering and offensive security."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              I graduated in 2025 with a degree in{" "}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                Computer Science &amp; Engineering
              </strong>
              , earning an 82/100 score on the National University Exit Examination.
              Throughout my degree, I developed a strong foundation in software
              engineering, algorithms, operating systems, networking, and distributed
              architectures.
            </p>

            <p>
              My hands-on development journey centered around{" "}
              <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">
                Flutter, mobile app engineering, and full-stack web platforms
              </strong>
              . From contributing to the <span className="text-slate-900 dark:text-slate-100 font-medium">Sheqlee</span> marketplace
              during my Flutter internship to engineering speech-to-text pipelines
              and localized e-commerce systems, I focused on building real, usable
              software with clean code and reliable state management.
            </p>

            <p>
              While building applications, I became fascinated by what happens beneath
              the application layer—how networks transport packets, how services authenticate
              tokens, and how architectural oversights create exploitable vulnerabilities.
              That curiosity led me to pursue advanced studies in{" "}
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Cybersecurity at IBT College (June 2026 – December 2026)
              </strong>
              .
            </p>

            {/* Signature Philosophy Callout */}
            <div className="p-5 rounded-xl border-l-4 border-l-cyan-500 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                Guiding Philosophy
              </span>
              <p className="text-slate-800 dark:text-slate-200 font-medium italic text-base">
                &ldquo;Understanding how software is built makes it possible to think
                more deeply about how that software can be tested and secured.&rdquo;
              </p>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              My long-term aspiration is to fuse software development expertise with
              rigorous security methodologies, growing toward offensive security and
              red-team operations.
            </p>
          </div>

          {/* Right Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card variant="interactive" className="p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    CS &amp; Engineering Graduate (2025)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Strong academic foundation. Exit Exam score: 82/100.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="interactive" className="p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    Advanced Cybersecurity Specialist
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    IBT College (2026) · Networks, Linux, Windows Server, Forensics &amp; Penetration Testing.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="interactive" className="p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    Flutter &amp; Web Development
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Production mobile internship experience on Sheqlee, full-stack React &amp; Node.js, and Python ML.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="interactive" className="p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                  <TerminalSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    Practical Security Mindset
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Active lab work in packet analysis, Linux hardening, and authorized testing.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

