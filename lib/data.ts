export const PROJECTS = [
  {
    name: "EduNova SIS",
    desc: "Cross-platform school information system shipped for three international schools — BFI (Myanmar), Paragon ISC (Cambodia), and Atlantic ISC. Role-based dashboards for teachers, students, parents, and guardians. Firebase push notifications, OTA updates, QR pickup, multi-language, and an in-app messaging system.",
    tags: ["React Native", "Expo", "Firebase", "Expo Router", "TypeScript"],
    label: "EduNova SIS — school platform",
    note: "BFI · Paragon ISC · Atlantic ISC",
    status: "shipped" as const,
  },
  {
    name: "Naqshlab",
    desc: "Print-on-demand storefront with an in-browser design studio — customise products on a Three.js / Konva canvas, pay via Stripe, and manage orders through a full admin panel.",
    tags: ["Next.js 16", "Three.js", "Stripe", "Konva", "TypeScript"],
    label: "Naqshlab — print-on-demand",
    url: "https://github.com/nortadzhiev-rustam/naqshlab",
    status: "in-progress" as const,
  },
  {
    name: "QuranApp",
    desc: "Cross-platform Quran reader for iOS and Android. Multilingual translations (EN / RU / TR), Tajweed colour rules, bookmarks, search, and a clean auto / light / dark reading mode.",
    tags: ["Expo", "React Native", "Expo Router", "AsyncStorage"],
    label: "QuranApp — Quran reader",
    url: "https://github.com/nortadzhiev-rustam/QuranApp",
    status: "in-progress" as const,
  },
  {
    name: "Andarz",
    desc: "Official site for Andarz LLC, an educational publisher in Tajikistan — courses, blog, auth, and a contact form with full multilingual support (EN / RU / TJ).",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    label: "Andarz — education platform",
    url: "https://andarz-web.vercel.app",
    status: "shipped" as const,
  },
  {
    name: "Andarz App",
    desc: "Mobile school portal for Andarz LLC — role-based dashboards for teachers, parents, and students, with themed UI, file-based routing, and settings scaffolding. Backend integration in progress.",
    tags: ["Expo", "React Native", "Expo Router", "TypeScript", "Reanimated"],
    label: "Andarz App — school portal",
    status: "in-progress" as const,
  },
  {
    name: "Mecenate",
    desc: "Patreon-style mobile feed with real-time post updates over WebSocket, smooth list animations with Reanimated, and a polished post detail screen.",
    tags: ["React Native", "Expo", "MobX", "Reanimated", "WebSocket"],
    label: "Mecenate — content feed",
    url: "https://github.com/nortadzhiev-rustam/mecenate-test-app",
    status: "shipped" as const,
  },
];

export const EXPERIENCE = [
  {
    yr: "2026 — Now",
    role: "React Native Developer",
    org: "LLC Andarz — mobile school management platform serving institutions across Central Asia.",
    place: "Dushanbe",
  },
  {
    yr: "2025 — 2026",
    role: "Full-Stack Mobile Developer",
    org: "EduNova Asia — built & shipped a multi-tenant SIS used by 10+ schools across 3 countries.",
    place: "Yangon",
  },
  {
    yr: "2024 — 2025",
    role: "ICT & Computing Teacher",
    org: "SKT International School — taught programming; managed the school SIS.",
    place: "Yangon",
  },
  {
    yr: "2022 — 2024",
    role: "Freelance Developer",
    org: "Self-employed — full-stack projects for schools, end to end.",
    place: "Remote",
  },
  {
    yr: "2019 — 2024",
    role: "ICT Teacher & Developer",
    org: "Maple Bear — programming instruction and school-wide technology integration.",
    place: "Luanda",
  },
];

export const STACK_CORE = [
  { k: "React Native", v: "Expert" },
  { k: "Expo / EAS", v: "Expert" },
  { k: "TypeScript", v: "Expert" },
  { k: "React / Next.js", v: "Advanced" },
  { k: "Reanimated 3 + Gesture Handler", v: "Advanced" },
];

export const STACK_TOOLING = [
  { k: "Node.js / Express", v: "Advanced" },
  { k: "Firebase / Supabase", v: "Advanced" },
  { k: "GraphQL / REST", v: "Advanced" },
  { k: "Redux Toolkit / Zustand", v: "Advanced" },
  { k: "Figma / Jest / Detox", v: "Comfortable" },
];

export const MARQUEE_WORDS = [
  "React Native", "Expo", "TypeScript", "Reanimated",
  "Firebase", "GraphQL", "Supabase", "Node.js",
];

export const STATS = [
  { to: 5, label: "Years building mobile" },
  { to: 20, label: "Apps shipped to stores" },
  { to: 12, label: "Happy clients worldwide" },
];
