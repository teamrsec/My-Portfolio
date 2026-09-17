import React from "react";
import Link from "next/link";
import {
  CYBER_MODULES,
  HANDS_ON_LEARNING,
  WHATS_NEXT,
  ETHICAL_SECURITY_DISCLAIMER,
} from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Terminal,
  ArrowLeft,
  Crosshair,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Journey & Learning Path",
  description:
    "Explore the deliberate transition from software engineering into defensive architecture, packet analysis, and ethical penetration testing.",
};

export default function CybersecurityPage() {
  const completedModules = CYBER_MODULES.filter((m) => m.status === "Completed");
  const inProgressModules = CYBER_MODULES.filter((m) => m.status === "In Progress");

  return (
    <div className="pt-28 pb-20 cyber-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>IBT College Specialist Studies (June 2026 – Dec 2026)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-50">
            Cybersecurity Journey
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            From software development to understanding how systems can be tested,
            attacked, and secured.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
            This page outlines my active coursework, laboratory environments, and
            offensive security trajectory. I am an aspiring security practitioner
            developing hands-on competency in controlled settings.
          </p>
        </div>

        {/* Prominent Ethical Disclaimer */}
        <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 mb-12 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 font-mono uppercase tracking-wider">
              Ethical Security Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
              {ETHICAL_SECURITY_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* Academic Modules Grid */}
        <div className="space-y-12 mb-16">
          {/* Completed Foundations */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Completed Foundations
                  </h2>
                  <p className="text-xs text-slate-500">
                    Core systems, networking, and OS administration completed during BSc and preparatory curricula.
                  </p>
                </div>
              </div>
              <Badge variant="completed">
                {completedModules.length} Modules Finished
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 flex flex-col justify-between shadow-xs hover:border-emerald-500/40 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-slate-400">
                        {module.institution}
                      </span>
                      <Badge variant="completed">Completed</Badge>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {module.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Syllabus Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {module.keyTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress Modules */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Clock className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Active &amp; Advanced Coursework
                  </h2>
                  <p className="text-xs text-slate-500">
                    Enterprise hardening, forensics investigation, and ethical penetration testing.
                  </p>
                </div>
              </div>
              <Badge variant="in-progress">
                {inProgressModules.length} In Progress
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgressModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-cyan-500/30 dark:border-cyan-500/30 bg-white dark:bg-slate-900/90 p-6 flex flex-col justify-between shadow-xs ring-1 ring-cyan-500/10"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                        {module.institution}
                      </span>
                      <Badge variant="in-progress">In Progress</Badge>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {module.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Syllabus Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {module.keyTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hands-On Lab Operations vs What's Next */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Hands-on */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
              <Terminal className="w-4 h-4 text-cyan-500" />
              <span>Hands-On Learning Protocols</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HANDS_ON_LEARNING.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-4"
                >
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Next */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
              <Crosshair className="w-4 h-4 text-emerald-500" />
              <span>What&apos;s Next (Controlled Targets)</span>
            </h2>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 space-y-4">
              {WHATS_NEXT.map((target) => (
                <div
                  key={target.target}
                  className="pb-3 border-b border-slate-100 dark:border-slate-800 last:border-none last:pb-0"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {target.target}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {target.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {target.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 text-center space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Interested in collaboration or discussing security fundamentals?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I am always eager to talk software architecture, network defense, lab findings, or job opportunities.
          </p>
          <div>
            <Button href="/#contact" variant="primary" size="md">
              Reach Out via Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

