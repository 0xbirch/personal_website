export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  resumeUrl?: string;
  socials: { label: string; href: string; icon: string }[];
}

export interface ResearchProject {
  title: string;
  description: string;
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
  year: number;
  status: "published" | "preprint" | "in-progress" | "unpublished";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  paperUrl?: string;
  paperCitation?: string;
  codeUrl?: string;
  year: number;
}

export interface WorkItem {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  year: string;
  gpa?: string;
  courses?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
