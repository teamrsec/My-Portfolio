"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Clock, ArrowLeft, ArrowRight, PenTool, Terminal } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Cybersecurity",
    "Development",
    "Flutter",
    "Web Development",
    "Networking",
    "Linux",
    "Security Labs",
    "Career Journey",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS.filter((p) => p.published)
      : BLOG_POSTS.filter((p) => p.published && p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 cyber-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>

        <SectionHeader
          tag="DISPATCHES // WRITE-UPS"
          title="Documenting the Journey"
          subtitle="Cybersecurity notes, development lessons, project breakdowns, labs, and technical write-ups will appear here as the journey continues."
        />

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/50 shadow-xs"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Beautiful Empty State / Coming Soon Announcement */}
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-8 sm:p-12 text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
            <PenTool className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Documenting the journey in real time.
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            As I progress through my IBT College cybersecurity program, capture-the-flag
            labs, and software engineering builds, in-depth technical post-mortems and
            tutorials will be published here.
          </p>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-full">
            <Terminal className="w-3.5 h-3.5 text-cyan-500" />
            <span>Upcoming topics: PortSwigger labs, Wireshark packet anatomy &amp; Flutter caching</span>
          </div>
        </div>

        {filteredPosts.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
            Published Technical Notes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 flex flex-col justify-between shadow-xs hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="cyan">{post.category}</Badge>
                    <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-medium">
                      {post.date}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
