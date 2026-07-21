"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { educationList } from "@/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="Studies">
      <StaggerContainer className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {educationList.map((edu, index) => (
          <StaggerItem
            key={index}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0
                ? "md:pl-12 md:text-right md:ml-auto md:w-1/2"
                : "md:pr-12 md:ml-0 md:w-1/2"
            } ml-0 pl-12`}
          >
            <div className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="mb-1 text-sm text-accent">{edu.institution}</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-xs text-muted">{edu.period}</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                  {edu.status}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
