"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { StaggerContainer, StaggerItem } from "@/components/common/animated";
import { experiences } from "@/data";
import { useLanguage } from "@/i18n/language-provider";

export function Experience() {
  const { locale, dictionary } = useLanguage();
  const items = experiences[locale];

  return (
    <SectionWrapper
      id="experience"
      title={dictionary.experience.title}
      subtitle={dictionary.experience.subtitle}
    >
      <StaggerContainer className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-px" />

        {items.map((exp, index) => (
          <StaggerItem
            key={index}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0 ? "md:ml-auto md:w-1/2 md:pl-12 md:text-right" : "md:w-1/2 md:pr-12"
            } ml-0 pl-12`}
          >
            <div className="border-border bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-sm">
              <span className="text-accent text-xs font-medium tracking-wider uppercase">
                {exp.period}
              </span>
              <h3 className="text-foreground mt-1 text-lg font-semibold">{exp.role}</h3>
              <p className="text-muted text-sm">{exp.company}</p>
              <ul className="mt-3 space-y-1.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted text-sm leading-relaxed">
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
