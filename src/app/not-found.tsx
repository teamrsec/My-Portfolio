import React from "react";
import { Button } from "@/components/ui/Button";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 cyber-grid">
      <div className="max-w-md w-full text-center space-y-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
            HTTP 404 // RESOURCE_NOT_FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            The endpoint or resource you requested does not exist or has been relocated within the system tree.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="sm" leftIcon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button href="/projects" variant="outline" size="sm">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}

