"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { EASE } from "./Reveal";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function Nav({
  t,
  locale,
}: {
  t: Dictionary["nav"];
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav${scrolled ? " scrolled" : ""}`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
    >
      <a className="brand" href="#top">
        <span className="mark">
          <Image src="/images/R.jpeg" alt="" width={34} height={34} />
        </span>
        <span>
          Rustam Nortadzhiev
          <span className="brand-loc">{t.location}</span>
        </span>
      </a>

      <div className="nav-links">
        <a href="#work"><span className="num">01</span>{t.work}</a>
        <a href="#about"><span className="num">02</span>{t.about}</a>
        <a href="#stack"><span className="num">03</span>{t.stack}</a>
        <a href="#experience"><span className="num">04</span>{t.experience}</a>
      </div>

      <div className="nav-right">
        <LanguageSwitcher locale={locale} label={t.language} names={t.languages} />
        <ThemeToggle label={t.themeToggle} />
        <a className="nav-cta" href="#contact">{t.cta}</a>
      </div>
    </motion.nav>
  );
}
