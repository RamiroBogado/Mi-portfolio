"use client";

import { ArrowDown, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";
import { siteConfig, heroBadges } from "@/data";
import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <div className="pointer-events-none relative hidden lg:flex items-center justify-center">
      <div className="relative h-[400px] w-[400px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent animate-pulse-glow" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <div className="space-y-3 text-center">
            <div className="flex justify-center gap-2">
              {["{", "}", "<", "/", ">"].map((char, i) => (
                <span
                  key={i}
                  className="text-2xl font-mono font-bold text-accent"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-mono text-accent">
                @Component
              </span>
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-mono text-accent">
                @Bean
              </span>
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-mono text-accent">
                @Service
              </span>
            </div>
            <p className="font-mono text-xs text-muted">
              public class Developer
            </p>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="font-mono text-lg text-accent">JDK</span>
        </div>
        <div className="absolute -bottom-2 -left-6 h-16 w-24 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="font-mono text-xs text-accent">Spring</span>
        </div>
        <div className="absolute top-20 -right-8 h-12 w-20 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="font-mono text-xs text-accent">AI</span>
        </div>

        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-16 lg:gap-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                {siteConfig.title}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 flex flex-wrap gap-2"
            >
              {heroBadges.map((badge) => (
                <Badge key={badge.label} dot>
                  {badge.label}
                </Badge>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:shadow-md hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-base font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </a>
              <div className="flex gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-transparent text-muted transition-all duration-200 hover:border-primary/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-transparent text-muted transition-all duration-200 hover:border-primary/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <HeroIllustration />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
