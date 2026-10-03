"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LanguageToggle } from "@/components/common/language-toggle";
import { navLinks } from "@/data";
import { useLanguage } from "@/i18n/language-provider";
import { useScrollPosition } from "@/hooks/use-scroll";
import { motion, AnimatePresence } from "framer-motion";

function useFocusTrap(isOpen: boolean, onClose: () => void) {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      const first = menuRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    }, 100);

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return menuRef;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  const menuRef = useFocusTrap(isOpen, () => setIsOpen(false));
  const { locale, dictionary } = useLanguage();
  const links = navLinks[locale];

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 border-border border-b backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-foreground hover:text-accent text-lg font-semibold tracking-tight transition-colors"
        >
          RB
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:bg-card hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-border bg-background/95 border-b backdrop-blur-xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.nav.menuLabel}
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:bg-card hover:text-foreground block rounded-lg px-3 py-2.5 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
