"use client";

import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll";
import { useLanguage } from "@/i18n/language-provider";

export function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 500;
  const { dictionary } = useLanguage();

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "border-border bg-card text-muted hover:border-primary/50 hover:text-accent hover:shadow-primary/10 fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-label={dictionary.backToTop.label}
      title={dictionary.backToTop.label}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
