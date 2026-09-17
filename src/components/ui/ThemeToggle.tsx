"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-2 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors shadow-sm ${className}`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-200 rotate-0 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-200 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
}

