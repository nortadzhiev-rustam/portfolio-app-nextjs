import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Instrument_Serif,
  Hanken_Grotesk,
  JetBrains_Mono,
  Cormorant_Garamond,
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

/* Hanken Grotesk and JetBrains Mono both ship Cyrillic, so RU/TJ render in the
   same body and mono faces as English — `subsets` only governs which files get
   preloaded, not which @font-face rules are emitted. Instrument Serif is the
   exception: it has no Cyrillic at all (its only subsets are latin/latin-ext),
   so the display face is swapped per locale in globals.css. */
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

/* Display serif for the RU and TJ pages, which globals.css selects on :lang().
   `cyrillic-ext` is the subset carrying the Tajik letters (ҳ, ҷ, ӯ, ӣ, қ, ғ);
   without it those fall back to a system serif. Weight 400 only — every
   --font-display rule sets font-weight: 400. `preload: false` keeps the files
   off the English page, which never renders this face. */
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic", "cyrillic-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif-cyrillic",
  display: "swap",
  preload: false,
});

const fontVariables = [
  instrumentSerif.variable,
  hankenGrotesk.variable,
  jetbrainsMono.variable,
  cormorantGaramond.variable,
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
