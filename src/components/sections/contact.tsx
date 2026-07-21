"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/common/icons";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { FadeLeft } from "@/components/common/animated";
import { siteConfig } from "@/data";

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Contact">
      <FadeLeft>
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-8 text-base leading-relaxed text-muted sm:text-lg">
            I am always open to new opportunities, collaborations, and
            interesting projects. Whether you have a question or just want to
            say hello, feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              {siteConfig.github.replace("https://", "")}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
              {siteConfig.linkedin.replace("https://", "")}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-accent"
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
