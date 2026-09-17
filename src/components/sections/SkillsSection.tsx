"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge, BadgeProps } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { Code, Smartphone, Globe, Shield, Terminal } from "lucide-react";

const CATEGORY_ICONS = {
  programming: Code,
  mobile: Smartphone,
  web: Globe,
  cybersecurity: Shield,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.categoryKey === activeCategory);

  const getProficiencyVariant = (level: string): BadgeProps["variant"] => {
    switch (level) {
      case "Advanced":
        return "emerald";
      case "Intermediate":
        return "cyan";
      case "Beginner":
        return "slate";
      case "Learning":
        return "amber";
      case "Hands-on exposure":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="05 // SKILLS ARCHITECTURE"
          title="Technical Capabilities &amp; Learning Vectors"
          subtitle="Honest proficiency levels based on hands-on software shipping and active cybersecurity training—no fabricated percentages."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer",
              activeCategory === "all"
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs"
                : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.categoryKey];
            const isActive = activeCategory === cat.categoryKey;
            return (
              <button
                key={cat.categoryKey}
                type="button"
                onClick={() => setActiveCategory(cat.categoryKey)}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-cyan-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/50 shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => {
            const Icon = CATEGORY_ICONS[group.categoryKey];
            const isCyber = group.categoryKey === "cybersecurity";

            return (
              <div
                key={group.categoryKey}
                className={cn(
                  "rounded-2xl border bg-white dark:bg-slate-900/90 p-6 shadow-sm flex flex-col justify-between transition-all duration-200",
                  isCyber
                    ? "border-cyan-500/30 dark:border-cyan-500/30 ring-1 ring-cyan-500/10"
                    : "border-slate-200 dark:border-slate-800"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center",
                          isCyber
                            ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {group.title}
                      </h3>
                    </div>

                    {isCyber && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                        IBT College &amp; Labs
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 text-xs font-mono"
                      >
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <Badge
                          variant={getProficiencyVariant(skill.level)}
                          size="sm"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {isCyber && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>
                      Defensive hardening &amp; ethical testing in controlled environments.
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

