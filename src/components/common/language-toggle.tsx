"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-provider";

export function LanguageToggle() {
  const { locale, toggle, dictionary } = useLanguage();

  const label = dictionary.language.action;
  const shortLabel = locale === "en" ? "ES" : "EN";

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={label} title={label}>
      <span aria-hidden="true" className="text-xs font-semibold tracking-wide">
        {shortLabel}
      </span>
    </Button>
  );
}
