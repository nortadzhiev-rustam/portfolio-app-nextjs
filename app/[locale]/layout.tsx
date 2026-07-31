import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Instrument_Serif,
  Hanken_Grotesk,
  JetBrains_Mono,
  Cormorant_Garamond,
  Inter,
  IBM_Plex_Mono,
} from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  getDictionary,
  isLocale,
  type Locale,
} from "@/lib/i18n";
import "../globals.css";

/* ── Latin faces: the design's typography, used as-is on the English page ──
   Instrument Serif and Hanken Grotesk carry Latin only, so RU/TJ swap display
   and body/UI per :lang() in globals.css (measured coverage, not assumed — a
   declared Google subset does not mean the glyphs exist). JetBrains Mono covers
   Russian, but none of the Tajik letters (ҳ, ҷ, ӯ, ӣ, қ, ғ), so Tajik swaps the
   mono face while Russian keeps the original. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-var",
  display: "swap",
});

/* ── Cyrillic counterparts, selected by :lang() in globals.css ──────────────
   All three are verified to carry the full Tajik set. `cyrillic-ext` is the
   subset those letters live in, so it is required alongside `cyrillic`.
   `preload: false` throughout: next/font preloads every declared subset, which
   would make English visitors fetch Cyrillic files they never render. */

// Display — stands in for Instrument Serif. Weight 400 only: every
// --font-display rule sets font-weight: 400.
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic", "cyrillic-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif-cyrillic",
  display: "swap",
  preload: false,
});

// Body/UI — stands in for Hanken Grotesk, matching its neutral grotesque tone.
const inter = Inter({
  subsets: ["cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-cyrillic",
  display: "swap",
  preload: false,
});

// Mono — Tajik only. JetBrains Mono covers Russian, so RU keeps the original.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-tajik",
  display: "swap",
  preload: false,
});

const fontVariables = [
  instrumentSerif.variable,
  hankenGrotesk.variable,
  jetbrainsMono.variable,
  cormorantGaramond.variable,
  inter.variable,
  ibmPlexMono.variable,
].join(" ");

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l], `/${l}`])),
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      locale: LOCALE_TAGS[locale],
      type: "website",
    },
  };
}

/** Inline theme script — runs before first paint to prevent flash */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('rn-theme');
    var dark = t === 'dark' || (t === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch(e){}
})();
`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={LOCALE_TAGS[locale as Locale]}
      className={fontVariables}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
