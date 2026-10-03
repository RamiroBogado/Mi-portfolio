"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { educationList } from "@/data";
import { useLanguage } from "@/i18n/language-provider";
import { GraduationCap } from "lucide-react";

export function Education() {
  const { locale, dictionary } = useLanguage();
  const items = educationList[locale];

  return (
    <SectionWrapper
      id="education"
      title={dictionary.education.title}
      subtitle={dictionary.education.subtitle}
    >
      <StaggerContainer className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-px" />

        {items.map((edu, index) => (
          <StaggerItem
            key={index}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0
                ? "md:ml-auto md:w-1/2 md:pl-12 md:text-right"
                : "md:ml-0 md:w-1/2 md:pr-12"
            } ml-0 pl-12`}
          >
            <div className="border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-sm">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                  <GraduationCap className="text-accent h-5 w-5" />
                </div>
              </div>
              <h3 className="text-foreground mb-1 text-lg font-semibold">{edu.degree}</h3>
              <p className="text-accent mb-1 text-sm">{edu.institution}</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-muted text-xs">{edu.period}</span>
                <span className="bg-primary/10 text-accent rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase">
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
