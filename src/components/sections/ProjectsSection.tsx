import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ExternalLink, ShieldAlert } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectsSection() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="04 // FEATURED WORK"
          title="Featured Engineering Projects"
          subtitle="Real-world mobile apps, full-stack systems, machine learning pipelines, and cryptographic exploration."
          action={
            <Button
              href="/projects"
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              All Projects ({PROJECTS.length})
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <Image
                  src={project.image}
                  alt={`${project.title} preview screenshot`}
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

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Educational Security Note if present (e.g., MD5) */}
                  {project.securityNote && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 font-mono">
                      <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                      <span className="line-clamp-2">{project.securityNote}</span>
                    </div>
                  )}
                </div>

                {/* Tech Chips */}
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

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="cyan"
                      size="sm"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Case Study
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
      </div>
    </section>
  );
}

