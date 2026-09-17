"use client";

import React, { useState } from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Cybersecurity", "Development", "Other"];

  const filteredCerts =
    selectedCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="08 // VALIDATION"
          title="Certifications &amp; Credentials"
          subtitle="Accredited certifications spanning cybersecurity fundamentals, network defense, full-stack development, and professional competencies."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer",
                selectedCategory === category
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={`${cert.issuer}-${cert.name}`}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 flex flex-col justify-between shadow-xs hover:border-cyan-500/40 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge
                    variant={
                      cert.category === "Cybersecurity"
                        ? "emerald"
                        : cert.category === "Development"
                        ? "cyan"
                        : "slate"
                    }
                  >
                    {cert.category}
                  </Badge>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-medium text-cyan-700 dark:text-cyan-400 mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </span>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

