"use client";

import React, { useState, useEffect } from "react";
import { PIPELINE_STAGES } from "@/data/portfolioData";
import { ArrowRight, Code2, Server, ShieldAlert, LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";

const STAGE_ICONS = [Code2, Server, ShieldAlert, LockKeyhole];

export function PipelineInteractive() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Gentle automatic cycle every 5 seconds (pauses on user interaction)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentStage = PIPELINE_STAGES[activeStageIndex];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 shadow-sm">
      {/* Top stage pill selector */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            PHILOSOPHY PIPELINE:
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          {PIPELINE_STAGES.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx];
            const isActive = idx === activeStageIndex;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-xs font-semibold"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                )}
                aria-pressed={isActive}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-cyan-500" : "text-slate-400")} />
                <span>{stage.title}</span>
                {idx < PIPELINE_STAGES.length - 1 && (
                  <ArrowRight className="w-2.5 h-2.5 text-slate-300 dark:text-slate-700 ml-1 hidden sm:inline-block" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Presentation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 space-y-2.5">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
            <span>PHASE {currentStage.step}</span>
            <span>·</span>
            <span>{currentStage.subtitle}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {currentStage.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {currentStage.description}
          </p>
          <div className="pt-2 flex flex-wrap gap-1.5">
            {currentStage.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Concept Box */}
        <div className="md:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 p-4 space-y-2">
          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block">
            Focus Elements:
          </span>
          <ul className="space-y-1.5">
            {currentStage.keyConcepts.map((concept) => (
              <li
                key={concept}
                className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                <span>{concept}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

