import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Calendar,
  User,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Engineering Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === resolvedParams.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-28 pb-20 cyber-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Directory</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan">{project.category}</Badge>
            <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
            </span>
            <span className="flex items-center gap-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
              <User className="w-3.5 h-3.5" />
              <span>{project.role}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-50">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.longDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.github && (
              <Button
                href={project.github}
                external
                variant="outline"
                size="sm"
                leftIcon={<GithubIcon className="w-4 h-4" />}
              >
                Inspect GitHub Repository
              </Button>
            )}
            {project.demo && (
              <Button
                href={project.demo}
                external
                variant="primary"
                size="sm"
                leftIcon={<ExternalLink className="w-4 h-4" />}
              >
                Live Production Demo
              </Button>
            )}
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden mb-12 shadow-xl">
          <Image
            src={project.image}
            alt={`${project.title} detailed architectural showcase`}
            width={1000}
            height={560}
            priority
            className="w-full h-auto object-cover object-center"
          />
        </div>

        {/* Security Note Banner if present (e.g. MD5) */}
        {project.securityNote && (
          <div className="mb-10 p-5 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200 font-mono">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-700 dark:text-amber-400 block mb-1">
                Cryptographic &amp; Security Analysis Note:
              </span>
              <p className="text-xs leading-relaxed">{project.securityNote}</p>
            </div>
          </div>
        )}

        {/* Main Case Study Content Grid */}
        <div className="space-y-12">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-3 shadow-xs">
              <h3 className="font-mono text-xs uppercase tracking-wider text-red-500 dark:text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem ||
                  "Addressing architectural bottlenecks and delivering a responsive, fault-tolerant solution for real-world user scenarios."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-3 shadow-xs">
              <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Technical Solution</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution ||
                  "Engineered modular components, reliable client-server data synchronization, and optimized resource caching."}
              </p>
            </div>
          </div>

          {/* Architecture & Flow */}
          {project.architecture && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 space-y-4 shadow-xs">
              <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>System Architecture &amp; Implementation</span>
              </h3>
              <ul className="space-y-2.5">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 space-y-4 shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Lessons Learned Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.challenges && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-3 shadow-xs">
                <h3 className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Key Challenges Overcome</span>
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.lessons && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-3 shadow-xs">
                <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  <span>Engineering Takeaways</span>
                </h3>
                <ul className="space-y-2">
                  {project.lessons.map((l) => (
                    <li
                      key={l}
                      className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Future Improvements */}
          {project.futureImprovements && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 space-y-3 shadow-xs">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Next Steps &amp; Future Iterations</span>
              </h3>
              <ul className="space-y-2">
                {project.futureImprovements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Project Footer Card */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-cyan-500/50 hover:shadow-md transition-all duration-200"
            >
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Next Case Study
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {nextProject.category} · {nextProject.role}
                </p>
              </div>
              <div className="mt-3 sm:mt-0 flex items-center gap-1 font-mono text-xs text-cyan-600 dark:text-cyan-400">
                <span>Read case study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

