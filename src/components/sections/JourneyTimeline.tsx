import React from "react";
import { JOURNEY_TIMELINE } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function JourneyTimeline() {
  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="03 // CHRONOLOGY"
          title="My Engineering Journey"
          subtitle="From academic foundations and production Flutter software into hands-on cybersecurity research and controlled lab challenges."
        />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12 pb-4">
          {JOURNEY_TIMELINE.map((item) => {
            const isCompleted = item.status === "completed";
            const isCurrent = item.status === "current";
            const isFuture = item.status === "future";

            return (
              <div key={item.title} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Dot */}
                <div
                  className={cn(
                    "absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110",
                    isCompleted &&
                      "bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-500",
                    isCurrent &&
                      "bg-cyan-50 dark:bg-cyan-950 border-cyan-500 text-cyan-500 shadow-sm shadow-cyan-500/30",
                    isFuture &&
                      "bg-slate-50 dark:bg-slate-900 border-slate-400 dark:border-slate-600 text-slate-400 border-dashed"
                  )}
                >
                  {isCompleted && <CheckCircle2 className="w-4 h-4" />}
                  {isCurrent && <Clock className="w-4 h-4 animate-spin-slow" />}
                  {isFuture && <Sparkles className="w-4 h-4" />}
                </div>

                {/* Left Desktop Period Indicator */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>

                {/* Timeline Content Card */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-xs hover:border-cyan-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="md:hidden font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {item.period}
                    </span>
                    <Badge
                      variant={
                        isCompleted
                          ? "completed"
                          : isCurrent
                          ? "in-progress"
                          : "planned"
                      }
                    >
                      {isCompleted
                        ? "Completed"
                        : isCurrent
                        ? "Active Focus"
                        : "Future Milestone"}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 mt-0.5 mb-2">
                    {item.subtitle}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

