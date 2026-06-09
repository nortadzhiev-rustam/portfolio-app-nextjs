"use client";
import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that adds `.in` to every
 * element that carries `.fade` — same pattern as the vanilla JS version.
 * Add <RevealInit /> once in page.tsx and you're done.
 */
export default function RevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            (en.target as HTMLElement).classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll<HTMLElement>(".fade").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
