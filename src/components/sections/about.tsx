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
            <p className="text-muted text-base leading-relaxed sm:text-lg">
              Backend Developer specialized in Java and Spring Boot, with hands-on experience
              building REST APIs, designing database schemas, and implementing client-server
              architectures. Currently pursuing a Bachelor&apos;s in Information Systems (UNLA, 4th
              year) and a postgraduate diploma in AI Agent Architecture covering MCP, LangGraph, and
              RAG.
            </p>
            <p className="text-muted text-base leading-relaxed sm:text-lg">
              I complement my software development skills with over 10 years of technical expertise
              from electronics repair, computer maintenance, and high-pressure operational roles in
              emergency response coordination — experience that sharpened my diagnostic thinking,
              quality standards, and ability to perform under pressure.
            </p>
          </div>
        </FadeLeft>

        <FadeRight className="lg:col-span-3">
          <StaggerContainer className="space-y-0">
            {aboutTimeline.map((item, index) => (
              <StaggerItem key={index}>
                <div className="group border-border relative border-l-2 pb-8 pl-6 last:pb-0">
                  <div className="border-primary bg-background group-hover:bg-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 transition-colors" />
                  <h3 className="text-foreground text-lg font-semibold">{item.title}</h3>
                  {item.subtitle && <p className="text-accent mt-1 text-sm">{item.subtitle}</p>}
                  {item.description && (
                    <p className="text-muted mt-2 text-sm leading-relaxed">{item.description}</p>
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
