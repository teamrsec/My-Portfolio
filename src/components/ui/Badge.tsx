import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "cyan"
    | "emerald"
    | "amber"
    | "slate"
    | "outline"
    | "completed"
    | "in-progress"
    | "exploring"
    | "planned";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center font-mono font-medium rounded-full transition-colors";

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  const variantClasses = {
    default:
      "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
    cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30",
    emerald:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
    amber:
      "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30",
    slate:
      "bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
    outline:
      "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-transparent",
    completed:
      "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
    "in-progress":
      "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 animate-pulse",
    exploring:
      "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30",
    planned:
      "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20",
  };

  return (
    <span
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {props["aria-hidden"] !== true && variant === "in-progress" && (
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-1.5 animate-ping" />
      )}
      {children}
    </span>
  );
}

