import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE, isLocale } from "@/lib/i18n/config";

/** Pick the best locale from a cookie, then Accept-Language, then the default. */
function resolveLocale(req: NextRequest) {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = req.headers.get("accept-language");
  if (header) {
    const ranked = header
      .split(",")
      .map((part) => {
        const [tag, ...params] = part.trim().split(";");
        const q = params.find((p) => p.trim().startsWith("q="));
        return { tag: tag.toLowerCase(), q: q ? Number(q.split("=")[1]) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of ranked) {
      const base = tag.split("-")[0];
      const match = LOCALES.find((l) => l === base);
      if (match) return match;
    }
  }

  return DEFAULT_LOCALE;
}

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes, and anything that looks like a static file.
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
