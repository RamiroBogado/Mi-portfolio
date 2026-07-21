"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/common/animated";
import { aboutTimeline } from "@/data";

export function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Background">
      <div className="grid gap-12 lg:grid-cols-5">
        <FadeLeft className="lg:col-span-2">
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Backend Developer in training, specialized in Java and Spring Boot, with hands-on experience designing and implementing
              REST APIs, client-server architecture, and SQL/NoSQL database modeling. Currently in the 4th year of my Bachelor's in
              Information Systems (UNLA), complemented by a postgraduate diploma in Software Development and AI Agent
              Architecture, focused on Model Context Protocol (MCP), LangGraph, Retrieval-Augmented Generation (RAG), and AI-Ops.
            </p>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I don't yet have formal work experience as a developer, but I back my learning with hands-on, end-to-end personal projects
              (public repositories listed below), and bring over 10 years of experience as an Electronics Technician and in
              computer/console repair, along with operational roles under pressure in monitoring and emergency response centers —
              experience that has sharpened my diagnostic ability, attention to quality, and comfort managing high-pressure situations.
            </p>

            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Objective: to join as a Backend Developer Jr./Trainee on projects involving scalable solutions and the application of AI to
              software development.
            </p>

          </div>
        </FadeLeft>

        <FadeRight className="lg:col-span-3">
          <StaggerContainer className="space-y-0">
            {aboutTimeline.map((item, index) => (
              <StaggerItem key={index}>
                <div className="group relative border-l-2 border-border pl-6 pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="mt-1 text-sm text-accent">{item.subtitle}</p>
                  )}
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeRight>
      </div>
    </SectionWrapper>
  );
}
