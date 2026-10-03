"use client";

import {
  Coffee,
  Leaf,
  Database,
  Globe,
  Package,
  Server,
  Zap,
  Atom,
  FileJson,
  FileCode,
  Palette,
  Columns2,
  FileSpreadsheet,
  Plug,
  GitBranch,
  BookOpen,
  Cpu,
  Puzzle,
  Box,
  GitFork,
  Send,
  Terminal,
  Rocket,
  Wrench,
  Monitor,
  Brain,
  Braces,
  Shield,
  Key,
  Code,
  Sparkles,
  RefreshCw,
  ListChecks,
  FlaskConical,
  Kanban,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { technologies } from "@/data";
import type { TechCategory, ExperienceLevel } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Leaf,
  Database,
  Globe,
  Package,
  Server,
  Zap,
  Atom,
  FileJson,
  FileCode,
  Palette,
  Columns2,
  FileSpreadsheet,
  Plug,
  GitBranch,
  BookOpen,
  Cpu,
  Puzzle,
  Box,
  GitFork,
  Send,
  Terminal,
  Braces,
  Shield,
  Key,
  Code,
  Sparkles,
  RefreshCw,
  ListChecks,
  FlaskConical,
  Kanban,
};

const categoryIcons: Record<TechCategory, LucideIcon> = {
  Backend: Server,
  Frontend: Monitor,
  Database,
  AI: Brain,
  DevOps: Rocket,
  Tools: Wrench,
};

const levelColors: Record<ExperienceLevel, string> = {
  Advanced: "bg-accent text-foreground",
  Intermediate: "bg-primary/20 text-accent",
  Learning: "bg-card text-muted border border-border",
};

const categoryOrder: TechCategory[] = ["Backend", "Frontend", "Database", "AI", "DevOps", "Tools"];

function TechIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name] : undefined;
  if (!Icon) return <span className="text-muted text-sm">•</span>;
  return <Icon className="text-muted h-4 w-4" />;
}

export function TechStack() {
  const grouped = categoryOrder.reduce(
    (acc, category) => {
      acc[category] = technologies.filter((t) => t.category === category);
      return acc;
    },
    {} as Record<TechCategory, typeof technologies>
  );

  return (
    <SectionWrapper id="tech-stack" title="Tech Stack" subtitle="Technologies">
      <StaggerContainer className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-px" />

        {categoryOrder.map(
          (category, index) =>
            grouped[category].length > 0 && (
              <StaggerItem
                key={category}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:ml-auto md:w-1/2 md:pl-12" : "md:w-1/2 md:pr-12"
                } ml-0 pl-12`}
              >
                <div className="border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    {(() => {
                      const CatIcon = categoryIcons[category];
                      return <CatIcon className="text-accent h-5 w-5" />;
                    })()}
                    <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {grouped[category].map((tech) => (
                      <div key={tech.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TechIcon name={tech.iconName} />
                          <span className="text-muted text-sm">{tech.name}</span>
                        </div>
                        <span
                          className={cn(
                            "rounded-md px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase",
                            levelColors[tech.level]
                          )}
                        >
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
        )}
      </StaggerContainer>
    </SectionWrapper>
  );
}
