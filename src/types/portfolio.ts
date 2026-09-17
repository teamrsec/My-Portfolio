export type ProficiencyLevel =
  | "Advanced"
  | "Intermediate"
  | "Beginner"
  | "Learning"
  | "Hands-on exposure";

export type ModuleStatus = "Completed" | "In Progress" | "Exploring" | "Planned";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  twitter: string;
  telegram: string;
  blog: string;
  resume: string;
  profileImage: string;
  primaryRole: string;
  supportingRole: string;
  primaryHeadline: string;
  supportingHeadline: string;
  missionStatement: string;
  heroParagraphs: string[];
  metadataBadge: {
    role: string;
    focus: string;
    status: string;
    mode: string;
  };
}

export interface JourneyMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  status: "completed" | "current" | "future";
  tags?: string[];
}

export interface PipelineStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyConcepts: string[];
}

export interface SkillItem {
  name: string;
  level: ProficiencyLevel;
  icon?: string;
  notes?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: "programming" | "mobile" | "web" | "cybersecurity";
  description: string;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "Mobile" | "Full Stack" | "AI & Python" | "Security & Tools";
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  role: string;
  date: string;
  featured: boolean;
  securityNote?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  lessons?: string[];
  futureImprovements?: string[];
}

export interface CyberModule {
  title: string;
  status: ModuleStatus;
  institution?: string;
  description: string;
  keyTopics: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
  description: string;
  category: "Cybersecurity" | "Development" | "Other";
}

export interface ExperienceItem {
  role: string;
  company: string;
  project: string;
  timeline: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  scoreHighlight?: string;
  description: string;
  coursework?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: boolean;
  content?: string;
}

