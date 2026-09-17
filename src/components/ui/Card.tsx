import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "cyber" | "interactive";
  glow?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  glow = false,
  ...props
}: CardProps) {
  const baseClasses =
    "relative rounded-xl transition-all duration-200 overflow-hidden hover:-translate-y-1 hover:shadow-md";

  const variantClasses = {
    default:
      "bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-sm",
    elevated:
      "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-md hover:shadow-lg dark:shadow-slate-950/40",
    bordered:
      "bg-transparent border border-slate-300 dark:border-slate-800/80 text-slate-900 dark:text-slate-100",
    cyber:
      "bg-slate-50/90 dark:bg-slate-900/60 backdrop-blur-sm border border-cyan-500/30 dark:border-cyan-500/20 text-slate-900 dark:text-slate-100 shadow-sm hover:border-cyan-500/50",
    interactive:
      "bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        glow && "ring-1 ring-cyan-500/20 shadow-cyan-500/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
