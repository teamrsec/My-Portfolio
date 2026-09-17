"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, FileDown, ShieldCheck, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Work", href: "/projects" },
  { name: "Security", href: "/cybersecurity" },
  { name: "Experience", href: "/#experience" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-slate-900 dark:text-slate-100 font-mono focus-visible:outline-none"
          aria-label="Portfolio Home"
        >
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px] flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[4px] flex items-center justify-center text-cyan-400 group-hover:text-emerald-300 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase">
              Dev &amp; Security
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm shadow-sm"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.filter((link) => link.name !== "Home").map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors",
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-800 shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/40"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />
          <Button
            href={PERSONAL_INFO.resume}
            external
            variant="cyan"
            size="sm"
            leftIcon={<FileDown className="w-3.5 h-3.5" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.name === "Security" && (
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                )}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <Button
                href={PERSONAL_INFO.resume}
                external
                variant="cyan"
                size="sm"
                className="w-full"
                leftIcon={<FileDown className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
