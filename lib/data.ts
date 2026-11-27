import type { Dictionary } from "@/lib/i18n";

/**
 * Locale-independent data only. Every user-facing string (names of roles,
 * descriptions, labels, cities…) lives in `lib/i18n/dictionaries/*` and is
 * looked up by the `id` fields below. Proper nouns — product names, tech tags,
 * client names — stay here because they read the same in every language.
 */

type ProjectId = keyof Dictionary["work"]["projects"];
type ExperienceId = keyof Dictionary["experience"]["items"];
type StatId = keyof Dictionary["about"]["stats"];

export const PROJECTS: {
  id: ProjectId;
  name: string;
  tags: string[];
  note?: string;
  url?: string;
  status: "shipped" | "in-progress";
  image: string;
}[] = [
  {
    id: "tahsil",
    name: "Tahsil",
    tags: ["Expo", "React Native", "Next.js 16", "Laravel 13", "TypeScript", "Tailwind CSS 4"],
    status: "shipped",
    image: "/images/projects/tahsil.png",
  },
  {
    id: "edunova-sis",
    name: "EduNova SIS",
    tags: ["React Native", "Expo", "Firebase", "Expo Router", "TypeScript"],
    note: "BFI · Paragon ISC · Atlantic ISC",
    status: "shipped",
    image: "/images/projects/edunova-sis.png",
  },
  {
    id: "didbon",
    name: "Didbon",
    tags: ["Electron", "TypeScript", "WebSocket", "esbuild"],
    url: "https://github.com/nortadzhiev-rustam/class-monitoring",
    status: "shipped",
    image: "/images/projects/didbon.png",
  },
  {
    id: "naqshlab",
    name: "Naqshlab",
    tags: ["Next.js 16", "Three.js", "Stripe", "Konva", "TypeScript"],
    url: "https://github.com/nortadzhiev-rustam/naqshlab",
    status: "in-progress",
    image: "/images/projects/naqshlab.png",
  },
  {
    id: "davom",
    name: "Davom",
    tags: ["Electron", "SQLite", "Node.js", "i18n"],
    url: "https://github.com/nortadzhiev-rustam/davom",
    status: "shipped",
    image: "/images/projects/davom.png",
  },
  {
    id: "quranapp",
    name: "QuranApp",
    tags: ["Expo", "React Native", "Expo Router", "AsyncStorage"],
    url: "https://github.com/nortadzhiev-rustam/QuranApp",
    status: "in-progress",
    image: "/images/projects/quranapp.png",
  },
  {
    id: "rudaki-website",
    name: "Rudaki School",
    tags: ["Next.js 16", "React 19", "Tailwind CSS 4", "i18n"],
    status: "in-progress",
    image: "/images/projects/rudaki-website.png",
  },
  {
    id: "andarz-web",
    name: "Andarz",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    url: "https://andarz-web.vercel.app",
    status: "shipped",
    image: "/images/projects/andarz-web.png",
  },
  {
    id: "andarz-app",
    name: "Andarz App",
    tags: ["Expo", "React Native", "Expo Router", "TypeScript", "Reanimated"],
    status: "in-progress",
    image: "/images/projects/andarz-app.png",
  },
];

export const EXPERIENCE: { id: ExperienceId }[] = [
  { id: "andarz" },
  { id: "edunova" },
  { id: "skt" },
  { id: "freelance" },
  { id: "maplebear" },
];

export const MARQUEE_WORDS = [
  "React Native", "Expo", "TypeScript", "Reanimated",
  "Firebase", "GraphQL", "Supabase", "Node.js",
];

export const STATS: { id: StatId; to: number }[] = [
  { id: "years", to: 5 },
  { id: "apps", to: 20 },
  { id: "clients", to: 12 },
];
