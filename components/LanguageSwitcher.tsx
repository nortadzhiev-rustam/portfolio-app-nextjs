"use client";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_COOKIE,
  LOCALE_SHORT_LABELS,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";

/** Swap the leading locale segment of the current path for `next`. */
function localizedPath(pathname: string, next: Locale) {
  const segments = pathname.split("/");
  if (segments[1] && isLocale(segments[1])) {
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  }
  return `/${next}${pathname === "/" ? "" : pathname}`;
}

export default function LanguageSwitcher({
  locale,
  label,
  names,
}: {
  locale: Locale;
  label: string;
  names: Dictionary["nav"]["languages"];
}) {
  const pathname = usePathname();

  const remember = (next: Locale) => {
    // One year, so the proxy honours the choice on later visits.
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
  };

  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {LOCALES.map((l) => {
        const current = l === locale;
        return (
          // Deliberately a plain anchor, not next/link: changing the locale
          // changes the root layout, and a soft navigation would re-render
          // <html>, discarding the `dark` class the pre-paint theme script
          // sets. A full document load keeps lang, metadata and theme in sync.
          <a
            key={l}
            href={localizedPath(pathname, l)}
            hrefLang={l}
            aria-current={current ? "true" : undefined}
            aria-label={names[l]}
            onClick={() => remember(l)}
          >
            {LOCALE_SHORT_LABELS[l]}
          </a>
        );
      })}
    </div>
  );
}
