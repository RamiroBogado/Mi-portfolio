"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { technologies } from "@/data";
import type { TechCategory, ExperienceLevel } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<TechCategory, string> = {
  Backend: "⚙️",
  Frontend: "🎨",
  Database: "🗄️",
  AI: "🤖",
  DevOps: "🚀",
  Tools: "🔧",
};

const levelColors: Record<ExperienceLevel, string> = {
  Advanced: "bg-accent text-foreground",
  Intermediate: "bg-primary/20 text-accent",
  Learning: "bg-card text-muted border border-border",
};

const categoryOrder: TechCategory[] = [
  "Backend",
  "Frontend",
  "Database",
  "AI",
  "DevOps",
  "Tools",
];

const techIcons: Record<string, string> = {
  java: "☕",
  spring: "🍃",
  "nodejs": "🟢",
  express: "⚡",
  typescript: "🔷",
  javascript: "🟨",
  nextjs: "▲",
  react: "⚛️",
  tailwind: "🌊",
  bootstrap: "🅱️",
  mysql: "🐬",
  sql: "🗃️",
  mongodb: "🍃",
  mcp: "🔌",
  langgraph: "🕸️",
  rag: "📚",
  aiops: "🤖",
  context: "🧩",
  docker: "🐳",
  git: "📦",
  github: "🐙",
  postman: "📮",
  linux: "🐧",
  api: "🔗",
  database: "💾",
  maven: "📋",
};

function getTechIcon(name: string): string {
  const key = name.toLowerCase().replace(/\s+/g, "");
  return techIcons[key] || "•";
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
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {categoryOrder.map(
          (category, index) =>
            grouped[category].length > 0 && (
              <StaggerItem
                key={category}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0
                    ? "md:pl-12 md:ml-auto md:w-1/2"
                    : "md:pr-12 md:w-1/2"
                } ml-0 pl-12`}
              >
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xl">{categoryIcons[category]}</span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {grouped[category].map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{getTechIcon(tech.name)}</span>
                          <span className="text-sm text-muted">{tech.name}</span>
                        </div>
                        <span
                          className={cn(
                            "rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
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
