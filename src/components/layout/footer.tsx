"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { siteConfig } from "@/data";
import { useLanguage } from "@/i18n/language-provider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { dictionary } = useLanguage();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="#" className="text-foreground text-lg font-semibold tracking-tight">
              RB
              <span className="text-accent">.</span>
            </a>
            <p className="text-muted text-sm">{dictionary.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="border-border text-muted hover:border-primary/50 hover:text-accent flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
              aria-label={dictionary.footer.emailLabel}
              title={dictionary.footer.emailLabel}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-muted hover:border-primary/50 hover:text-accent flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-muted hover:border-primary/50 hover:text-accent flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="border-border text-muted hover:border-primary/50 hover:text-accent flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
              aria-label={dictionary.footer.backToTopLabel}
              title={dictionary.footer.backToTopLabel}
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-6 text-center">
          <p className="text-muted text-xs">
            &copy; {currentYear} {siteConfig.name}. {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
