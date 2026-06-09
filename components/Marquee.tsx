"use client";
import { MARQUEE_WORDS } from "@/lib/data";

export default function Marquee() {
  const doubled = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((w, i) => (
          <span className="marquee-item" key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}
