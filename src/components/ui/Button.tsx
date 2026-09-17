import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "emerald";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  leftIcon,
  rightIcon,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm shadow-cyan-600/20 focus-visible:ring-cyan-500",
    cyan: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 focus-visible:ring-cyan-500",
    emerald:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 focus-visible:ring-emerald-500",
    secondary:
      "bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-900 dark:text-slate-100 border border-slate-300/60 dark:border-slate-700/60 focus-visible:ring-slate-400",
    outline:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 focus-visible:ring-slate-400",
    ghost:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}

