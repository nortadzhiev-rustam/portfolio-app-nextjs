# Rustam Nortadzhiev — Portfolio

React Native developer portfolio built with **Next.js 14** (App Router), TypeScript, and a
custom warm-editorial design system.

## Tech

- **Next.js 14** — App Router, server + client components
- **TypeScript** — strict mode
- `next/font/google` — Instrument Serif, Hanken Grotesk, JetBrains Mono (zero layout shift)
- Inline theme script in `layout.tsx` — prevents flash of unstyled dark/light content
- Pure CSS custom properties — no Tailwind, no styled-components

## Design system

| Token      | Value                |
|------------|----------------------|
| Paper (light) | `#f4f1ea` warm off-white |
| Ink (light)   | `#1c1813` warm near-black |
| Accent (light)| `#bf5a34` terracotta      |
| Accent (dark) | `#e58a5b` peach-terracotta|
| Display font  | Instrument Serif          |
| UI font       | Hanken Grotesk            |
| Mono font     | JetBrains Mono            |

Dark mode is toggled via `.dark` on `<html>` (stored in `localStorage`).

## Getting started

```bash
npm install
npm run dev
# → http://localhost:3000
```

```bash
npm run build   # production build
npm start       # production server
```

## Project structure

```
app/
  layout.tsx       # root layout, fonts, theme-flash script
  page.tsx         # home page — composes all sections
  globals.css      # design tokens + all styles

components/
  Nav.tsx          # fixed nav, scrolled state
  Hero.tsx         # full-height hero, line-reveal animation
  About.tsx        # bio, stats with animated counters
  Work.tsx         # project list, cursor-following preview
  Stack.tsx        # tech stack + marquee strip
  Experience.tsx   # timeline rows
  Contact.tsx      # big CTA + social links
  Footer.tsx       # local time + credits
  Marquee.tsx      # infinite scroll strip
  ThemeToggle.tsx  # light/dark toggle button
  Reveal.tsx       # IntersectionObserver scroll-reveal wrapper
  StatCounter.tsx  # animated number counter
  Clock.tsx        # live local time display

lib/
  data.ts          # all content: projects, experience, stack, stats
```

## Customising content

All content lives in **`lib/data.ts`** — swap out projects, experience,
and stack rows without touching any component.

## Deploying

Works out of the box on [Vercel](https://vercel.com):
```bash
npx vercel
```
