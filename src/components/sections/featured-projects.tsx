"use client";

import { GithubIcon } from "@/components/common/icons";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data";

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Work">
      <StaggerContainer className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {featuredProjects.map((project, index) => (
          <StaggerItem
            key={project.id}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0
                ? "md:pl-12 md:ml-auto md:w-1/2"
                : "md:pr-12 md:w-1/2"
            } ml-0 pl-12`}
          >
            <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5">
              <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">
                      {project.title.includes("Chat") && "💬"}
                      {project.title.includes("Appointment") && "📅"}
                      {project.title.includes("Game") && "🎮"}
                      {project.title.includes("Video") && "🎮"}
                    </div>
                    <p className="text-xs font-mono text-muted">{project.id}</p>
                  </div>
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-border bg-transparent px-3 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Source
                  </a>
                )}

              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
