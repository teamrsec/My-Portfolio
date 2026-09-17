import React from "react";
import { PIPELINE_STAGES } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code2, Server, ShieldCheck, Lock } from "lucide-react";

const STAGE_ICONS = [Code2, Server, ShieldCheck, Lock];

export function SignaturePipeline() {
  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="02 // SIGNATURE METHODOLOGY"
          title="From Building to Securing"
          subtitle="How understanding application construction directly powers defensive and offensive security analysis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIPELINE_STAGES.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx];
            return (
              <div
                key={stage.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm hover:border-cyan-500/50 hover:shadow-md transition-all duration-300"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-cyan-500 transition-colors">
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
                    {stage.subtitle}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                {/* Bottom Tech Pills */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {stage.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

