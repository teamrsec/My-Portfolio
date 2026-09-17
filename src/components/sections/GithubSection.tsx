"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Star, GitFork, BookMarked, ArrowUpRight, Loader2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface RepoItem {
  id: string | number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}

interface GitHubApiResponseItem {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

export function GithubSection() {
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGithubRepos() {
      if (!PERSONAL_INFO.githubUsername || PERSONAL_INFO.githubUsername === "[YOUR GITHUB]") {
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=4`
        );
        if (res.ok) {
          const data = (await res.json()) as GitHubApiResponseItem[];
          if (Array.isArray(data)) {
            const mapped: RepoItem[] = data.map((item) => ({
              id: item.id,
              name: item.name,
              description: item.description || "Public repository and code exploration.",
              language: item.language || "Dart / Python",
              stars: item.stargazers_count,
              forks: item.forks_count,
              url: item.html_url,
              updatedAt: new Date(item.updated_at).toLocaleDateString(),
            }));
            setRepos(mapped);
          }
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubRepos();
  }, []);

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="09 // OPEN SOURCE & CODE"
          title="Curated Repositories"
          subtitle="Selected public code repositories demonstrating engineering patterns, algorithms, and security scripts."
          action={
            <Button
              href={PERSONAL_INFO.github}
              external
              variant="outline"
              size="sm"
              leftIcon={<GithubIcon className="w-4 h-4" />}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              GitHub Profile
            </Button>
          }
        />

        {loading ? (
          <div className="flex items-center justify-center p-12">
            <Loader2 className="w-6 h-6 animate-spin text-cyan-500" />
            <span className="ml-2 font-mono text-xs text-slate-500">
              Querying repository status...
            </span>
          </div>
        ) : error ? (
          <p className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-8 text-center text-sm text-slate-600 dark:text-slate-400">
            GitHub repositories are temporarily unavailable. Visit the GitHub profile to explore public work.
          </p>
        ) : repos.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-8 text-center text-sm text-slate-600 dark:text-slate-400">
            Public repositories will appear here when they are available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 flex flex-col justify-between shadow-xs hover:border-cyan-500/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm">
                      <BookMarked className="w-4 h-4 text-cyan-500" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:underline"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span>{repo.language}</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>View Code</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
