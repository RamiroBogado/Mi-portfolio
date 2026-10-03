"use client";

import { ArrowDown, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig, heroBadges } from "@/data";
import { useLanguage } from "@/i18n/language-provider";
import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <div className="pointer-events-none relative hidden items-center justify-center lg:flex">
      <div className="relative h-[400px] w-[400px]">
        <div className="from-primary/20 via-secondary/10 animate-pulse-glow absolute inset-0 rounded-full bg-gradient-to-br to-transparent" />

        <div className="border-border bg-card/50 absolute top-1/2 left-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border backdrop-blur-sm">
          <div className="space-y-3 text-center">
            <div className="flex justify-center gap-2">
              {["{", "}", "<", "/", ">"].map((char, i) => (
                <span
                  key={i}
                  className="text-accent font-mono text-2xl font-bold"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              <span className="bg-primary/10 text-accent rounded-md px-2 py-0.5 font-mono text-xs">
                @Component
              </span>
              <span className="bg-primary/10 text-accent rounded-md px-2 py-0.5 font-mono text-xs">
                @Bean
              </span>
              <span className="bg-primary/10 text-accent rounded-md px-2 py-0.5 font-mono text-xs">
                @Service
              </span>
            </div>
            <p className="text-muted font-mono text-xs">public class Developer</p>
          </div>
        </div>

        <div className="border-border bg-card/50 absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-xl border backdrop-blur-sm">
          <span className="text-accent font-mono text-lg">JDK</span>
        </div>
        <div className="border-border bg-card/50 absolute -bottom-2 -left-6 flex h-16 w-24 items-center justify-center rounded-xl border backdrop-blur-sm">
          <span className="text-accent font-mono text-xs">Spring</span>
        </div>
        <div className="border-border bg-card/50 absolute top-20 -right-8 flex h-12 w-20 items-center justify-center rounded-xl border backdrop-blur-sm">
          <span className="text-accent font-mono text-xs">AI</span>
        </div>

        <div className="border-primary/10 absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border" />
        <div className="border-primary/5 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border" />
      </div>
    </div>
  );
}

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
      <div className="bg-primary/5 pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-secondary/5 pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-16 lg:gap-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent mb-4 text-sm font-medium tracking-widest uppercase">
                {dictionary.hero.eyebrow}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
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
              className="text-muted mb-8 max-w-xl text-base leading-relaxed sm:text-lg"
            >
              {dictionary.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  {dictionary.hero.viewProjects}
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-4 w-4" />
                  {dictionary.hero.downloadCv}
                </a>
              </Button>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </Button>
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
          className="text-muted hover:text-foreground flex flex-col items-center gap-2 text-xs transition-colors"
        >
          <span>{dictionary.hero.scroll}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
