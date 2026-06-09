"use client";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: "d1" | "d2";
}

export default function Reveal({ children, className = "", delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          obs.unobserve(el);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cls = ["fade", delay ?? "", className].filter(Boolean).join(" ");
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
