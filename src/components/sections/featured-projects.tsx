"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/common/icons";
import { GitHubStats } from "@/components/common/github-stars";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data";

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Work">
      <StaggerContainer className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-px" />

        {featuredProjects.map((project, index) => (
          <StaggerItem
            key={project.id}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0 ? "md:ml-auto md:w-1/2 md:pl-12" : "md:w-1/2 md:pr-12"
            } ml-0 pl-12`}
          >
            <div className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:shadow-sm">
              <div className="relative mb-4 h-40 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="text-foreground mb-2 text-lg font-semibold">{project.title}</h3>

              <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent flex items-center gap-2 text-sm transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source Code
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent flex items-center gap-2 text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                <div className="ml-auto">
                  <GitHubStats repo={project.repo} />
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
