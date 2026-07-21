"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { experiences } from "@/data";

export function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Career">
      <StaggerContainer className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {experiences.map((exp, index) => (
          <StaggerItem
            key={index}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0
                ? "md:text-right md:ml-auto md:w-1/2 md:pl-12"
                : "md:w-1/2 md:pr-12"
            } ml-0 pl-12`}>

            <div className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-sm hover:shadow-primary/5">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {exp.period}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-sm text-muted">{exp.company}</p>
              <ul className="mt-3 space-y-1.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
