"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Double rAF ensures browser has painted before triggering transition
    requestAnimationFrame(() =>
      requestAnimationFrame(() => el.classList.add("revealed"))
    );
  }, []);

  return (
    <header className="section hero" id="top" ref={ref}>
      <div className="wrap">
        <div className="hero-top">
          <span className="status">
            <span className="dot" />
            Available for projects — 2026
          </span>
          <span className="mono">Portfolio / Vol.01</span>
        </div>

        <h1>
          <span className="hero-line">
            <span className="hero-line-inner line1">Mobile apps that</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner line2">
              <em>feel effortless.</em>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-actions">
            <a className="btn btn-solid" href="#work">
              View work <span className="arr">↗</span>
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <p className="hero-blurb">
            React Native &amp; Expo developer crafting fast, native-feeling apps
            with motion that lands just right.
          </p>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="sh-line" />
      </div>
    </header>
  );
}
