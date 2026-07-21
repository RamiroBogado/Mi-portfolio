"use client";

import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll";

export function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 500;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted shadow-lg transition-all duration-300 hover:border-primary/50 hover:text-accent hover:shadow-primary/10",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
