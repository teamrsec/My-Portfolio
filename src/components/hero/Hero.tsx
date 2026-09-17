import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { PipelineInteractive } from "@/components/hero/PipelineInteractive";
import {
  ArrowRight,
  FileDown,
  Mail,
  ShieldAlert,
  Code2,
  Activity,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden cyber-grid"
      aria-label="Introduction"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{PERSONAL_INFO.supportingRole}</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
              Building Software. <br />
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                Securing Systems.
              </span>
            </h1>

            {/* Supporting Bio Paragraphs */}
            <div className="space-y-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              <p>{PERSONAL_INFO.heroParagraphs[0]}</p>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                {PERSONAL_INFO.heroParagraphs[1]}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View My Work
              </Button>
              <Button
                href={PERSONAL_INFO.resume}
                external
                variant="outline"
                size="lg"
                leftIcon={<FileDown className="w-4 h-4" />}
              >
                Download CV
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                size="lg"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Status Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-500" />
                <span>Flutter · React · Python · TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-500" />
                <span>IBT College Cybersecurity (2026)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Framed Card & Engineering Profile */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 blur-sm -z-10" />

              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Visual card header */}
                <div className="px-4 py-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-700 dark:text-slate-300 font-semibold">
                      dev_profile.sys
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Profile Image representation */}
                <div className="relative aspect-[4/3] bg-slate-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    width={600}
                    height={450}
                    priority
                    unoptimized
                    className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Corner technical stamps */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                    BSc CS &apos;25
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        ROLE
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {PERSONAL_INFO.metadataBadge.role}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        FOCUS
                      </span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {PERSONAL_INFO.metadataBadge.focus}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        STATUS
                      </span>
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                        {PERSONAL_INFO.metadataBadge.status}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        MODE
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {PERSONAL_INFO.metadataBadge.mode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Micro-Interaction */}
        <div className="pt-2">
          <PipelineInteractive />
        </div>
      </div>
    </section>
  );
}
