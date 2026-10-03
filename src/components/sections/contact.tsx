"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/common/icons";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { FadeLeft } from "@/components/common/animated";
import { siteConfig } from "@/data";
import { useLanguage } from "@/i18n/language-provider";

export function Contact() {
  const { dictionary } = useLanguage();

  return (
    <SectionWrapper
      id="contact"
      title={dictionary.contact.title}
      subtitle={dictionary.contact.subtitle}
    >
      <FadeLeft>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-muted mb-8 text-base leading-relaxed sm:text-lg">
            {dictionary.contact.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="border-border bg-card text-muted hover:border-primary/30 hover:text-accent flex items-center gap-3 rounded-xl border px-5 py-3 text-sm transition-all"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-card text-muted hover:border-primary/30 hover:text-accent flex items-center gap-3 rounded-xl border px-5 py-3 text-sm transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              {siteConfig.github.replace("https://", "")}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-card text-muted hover:border-primary/30 hover:text-accent flex items-center gap-3 rounded-xl border px-5 py-3 text-sm transition-all"
            >
              <LinkedinIcon className="h-4 w-4" />
              {siteConfig.linkedin.replace("https://", "")}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-card text-muted hover:border-primary/30 hover:text-accent flex items-center gap-3 rounded-xl border px-5 py-3 text-sm transition-all"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </FadeLeft>
    </SectionWrapper>
  );
}
