import React from "react";
import { EXPERIENCES, EDUCATION } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export function ExperienceEdu() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="07 // TRACK RECORD"
          title="Education &amp; Experience"
          subtitle="Real software contributions and academic training in computer science and enterprise cybersecurity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <span>Engineering Experience</span>
            </h3>

            <div className="order-1 lg:order-2 space-y-6">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.role}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-xs hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {exp.project}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.timeline}</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 mb-4">
                    {exp.company}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Core Responsibilities:
                    </span>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Formal Education</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-xs hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {edu.period}
                    </span>
                    {edu.scoreHighlight && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-semibold">
                        {edu.scoreHighlight}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.coursework && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Key Curricular Modules:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
