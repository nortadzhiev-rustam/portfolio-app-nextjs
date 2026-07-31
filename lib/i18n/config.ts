export const LOCALES = ["en", "ru", "tg"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie the middleware reads to remember an explicit language choice. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Short labels for the nav switcher. Full names are per-locale, in the
 *  dictionaries — hard-coding native names here would put Cyrillic in the
 *  markup of the English page and pull down Cyrillic fonts nobody reads. */
export const LOCALE_SHORT_LABELS: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  tg: "TJ",
};

/** BCP-47 tags for <html lang> and Intl formatting. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  ru: "ru",
  tg: "tg",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
