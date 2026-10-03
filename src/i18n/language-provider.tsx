"use client";

import { createContext, use, useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/types";
import { LANGUAGE_STORAGE_KEY, dictionaries, type Dictionary } from "@/i18n/dictionaries";

interface LanguageContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Module-level locale store. The server snapshot is always English (which
// matches the current hardcoded UI), while the client snapshot reads the
// saved choice or detects the browser language. useSyncExternalStore keeps
// SSR and hydration consistent without setState-in-effect cascading renders.
let cachedLocale: Locale | null = null;
const listeners = new Set<() => void>();

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === "es" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

function detectBrowserLocale(): Locale {
  try {
    const lang = window.navigator.language?.toLowerCase() ?? "";
    return lang.startsWith("es") ? "es" : "en";
  } catch {
    return "en";
  }
}

function getLocaleSnapshot(): Locale {
  if (cachedLocale) return cachedLocale;
  // Client-only: reads the saved choice, falls back to browser detection
  // only when there is no saved choice. Never runs on the server.
  cachedLocale = readStoredLocale() ?? detectBrowserLocale();
  return cachedLocale;
}

function getServerLocaleSnapshot(): Locale {
  return "en";
}

function subscribeLocale(listener: () => void): () => void {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== LANGUAGE_STORAGE_KEY) return;
    if (event.newValue !== "es" && event.newValue !== "en") return;
    cachedLocale = event.newValue;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function persistLocale(next: Locale) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  } catch {
    // Storage may be unavailable (private mode, disabled cookies).
    // The in-memory locale still applies for the current session.
  }
}

function updateLocale(next: Locale) {
  cachedLocale = next;
  persistLocale(next);
  document.documentElement.lang = next;
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getServerLocaleSnapshot);

  // Keep <html lang> in sync as an external-system write only (no setState).
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    updateLocale(next);
  }, []);

  const toggle = useCallback(() => {
    updateLocale(getLocaleSnapshot() === "en" ? "es" : "en");
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, dictionary: dictionaries[locale], setLocale, toggle }),
    [locale, setLocale, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = use(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
