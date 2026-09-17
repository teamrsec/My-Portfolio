import React from "react";
import Link from "next/link";
import {
  CYBER_MODULES,
  HANDS_ON_LEARNING,
  WHATS_NEXT,
  ETHICAL_SECURITY_DISCLAIMER,
} from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Shield,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Network,
  Server,
  ShieldAlert,
  Search,
  Key,
  Compass,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Network,
  Terminal,
  Server,
  ShieldAlert,
  Search,
  Key,
};

export function CyberSection() {
  return (
    <section
      id="cybersecurity"
      className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="06 // CYBERSECURITY SPECIALIZATION"
          title="Cybersecurity Learning Journey"
          subtitle="From software engineering foundations into understanding how systems can be tested, analyzed, defended, and secured."
          action={
            <Button
              href="/cybersecurity"
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Full Cybersecurity Syllabus
            </Button>
          }
        />

        {/* Ethical Disclaimer Callout */}
        <div className="mb-10 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 font-mono">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              Ethical &amp; Controlled Scope:{" "}
            </span>
            <span>{ETHICAL_SECURITY_DISCLAIMER}</span>
          </div>
        </div>

        {/* Academic Coursework Modules Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-500" />
              <span>Core Specialization Modules (IBT College)</span>
            </h3>
            <span className="font-mono text-xs text-slate-500">
              {CYBER_MODULES.filter((m) => m.status === "Completed").length} Completed ·{" "}
              {CYBER_MODULES.filter((m) => m.status === "In Progress").length} Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CYBER_MODULES.map((module) => {
              const isCompleted = module.status === "Completed";

              return (
                <div
                  key={module.title}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 flex flex-col justify-between shadow-xs hover:border-cyan-500/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[11px] text-slate-400 truncate">
                        {module.institution || "Coursework"}
                      </span>
                      <Badge
                        variant={isCompleted ? "completed" : "in-progress"}
                        size="sm"
                      >
                        {module.status}
                      </Badge>
                    </div>

                    <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                      {module.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                      {module.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1">
                    {module.keyTopics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hands-On Learning & What's Next Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Hands-On Learning Exposure */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Current Hands-On Lab Exposure</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HANDS_ON_LEARNING.map((item) => {
                const Icon = ICON_MAP[item.icon] || Shield;
                return (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What's Next Roadmap */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>What&apos;s Next: Active Roadmap</span>
            </h3>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 space-y-3 shadow-xs">
              {WHATS_NEXT.map((item) => (
                <div
                  key={item.target}
                  className="pb-3 border-b border-slate-100 dark:border-slate-800/80 last:border-none last:pb-0"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {item.target}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.focus}
                  </p>
                </div>
              ))}

              <div className="pt-2 text-center">
                <Link
                  href="/cybersecurity"
                  className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore dedicated cybersecurity curriculum &amp; goals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

