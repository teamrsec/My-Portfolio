import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4",
        align === "center" && "text-center md:flex-col md:items-center",
        className
      )}
    >
      <div className={cn(align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl")}>
        {tag && (
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-cyan-500/60" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
              {tag}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

