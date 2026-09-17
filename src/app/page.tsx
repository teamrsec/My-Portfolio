import React from "react";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SignaturePipeline } from "@/components/sections/SignaturePipeline";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CyberSection } from "@/components/sections/CyberSection";
import { ExperienceEdu } from "@/components/sections/ExperienceEdu";
import { Certifications } from "@/components/sections/Certifications";
import { GithubSection } from "@/components/sections/GithubSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <Hero />
      <AboutSection />
      <SignaturePipeline />
      <ProjectsSection />
      <SkillsSection />
      <CyberSection />
      <ExperienceEdu />
      <Certifications />
      <GithubSection />
      <ContactSection />
    </div>
  );
}
