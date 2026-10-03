export type Locale = "es" | "en";

export interface NavLink {
  label: string;
  href: string;
}

export interface Badge {
  label: string;
  variant?: "default" | "outline" | "secondary";
}

export interface TimelineItem {
  year?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface Technology {
  name: string;
  category: TechCategory;
  level: ExperienceLevel;
  iconName?: string;
}

export type TechCategory = "Backend" | "Frontend" | "Database" | "AI" | "DevOps" | "Tools";

export type ExperienceLevel = "Advanced" | "Intermediate" | "Learning";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repo: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
}
