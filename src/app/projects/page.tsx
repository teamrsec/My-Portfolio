"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, ArrowRight, ExternalLink, ShieldAlert, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Mobile", "Full Stack", "AI & Python", "Security & Tools"];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 cyber-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="PORTFOLIO // DIRECTORY"
          title="Engineering Projects &amp; Case Studies"
          subtitle="Explore end-to-end applications spanning Flutter mobile engineering, MERN full-stack architectures, audio ML pipelines, and cryptographic exploration."
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/50 shadow-xs"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech, title, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs font-mono placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Try adjusting your search query or switching to another category.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <Image
                    src={project.image}
                    alt={`${project.title} mockup`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="cyan">{project.category}</Badge>
                    <span className="px-2 py-0.5 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/60 text-[10px] font-mono">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      {project.role}
                    </span>

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {project.securityNote && (
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 font-mono">
                        <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                        <span className="line-clamp-2">{project.securityNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech stack & actions */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <Button
                        href={`/projects/${project.slug}`}
                        variant="cyan"
                        size="sm"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Deep Dive Case Study
                      </Button>

                      {project.github && (
                        <Button
                          href={project.github}
                          external
                          variant="ghost"
                          size="sm"
                          leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
                        >
                          Code
                        </Button>
                      )}

                      {project.demo && (
                        <Button
                          href={project.demo}
                          external
                          variant="ghost"
                          size="sm"
                          leftIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

