import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, PERSONAL_INFO } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Clock, Terminal } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.filter((post) => post.published).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Technical Notes`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 cyber-grid min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Technical Notes</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="cyan">{post.category}</Badge>
            <span className="font-mono text-xs text-amber-600 dark:text-amber-400">
              {post.date}
            </span>
            <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
            {post.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-3 font-mono text-xs text-slate-500">
            <span>Author: {PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>Topic: {post.category}</span>
          </div>
        </header>

        {/* Content Box / Draft Notice */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-start gap-3">
            <Terminal className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                Article in Preparation
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                This write-up is currently being compiled from active lab notes and research.
                The full walkthrough, code samples, packet captures, and takeaways will be published here upon completion.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Executive Abstract
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
            <p className="text-xs text-slate-500">
              Key topics explored in this article include protocol inspection, system call tracing,
              resilient code patterns, and mitigation strategies for real-world development environments.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <Link
              href="/blog"
              className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all notes</span>
            </Link>

            <Link
              href="/#contact"
              className="text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Have thoughts or feedback? Let&apos;s connect &rarr;
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
