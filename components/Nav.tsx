"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="brand" href="#top">
        <span className="mark">R</span>
        <span>
          Rustam Nortadzhiev
          <span className="brand-loc"> — Dushanbe</span>
        </span>
      </a>

      <div className="nav-links">
        <a href="#work"><span className="num">01</span>Work</a>
        <a href="#about"><span className="num">02</span>About</a>
        <a href="#stack"><span className="num">03</span>Stack</a>
        <a href="#experience"><span className="num">04</span>Experience</a>
      </div>

      <div className="nav-right">
        <ThemeToggle />
        <a className="nav-cta" href="#contact">Get in touch</a>
      </div>
    </nav>
  );
}
