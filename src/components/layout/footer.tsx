import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { siteConfig } from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              RB
              <span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted">
              Backend Developer. Java & Spring Boot. AI Agents.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-accent"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
