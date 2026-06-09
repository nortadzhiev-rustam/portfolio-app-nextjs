"use client";
import { useRef, useState, useCallback } from "react";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/data";

export default function Work() {
  const previewRef = useRef<HTMLDivElement>(null);
  const phRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const px = useRef(0);
  const py = useRef(0);
  const tx = useRef(0);
  const ty = useRef(0);
  const rafId = useRef<number | null>(null);

  const loop = useCallback(() => {
    px.current += (tx.current - px.current) * 0.14;
    py.current += (ty.current - py.current) * 0.14;
    const el = previewRef.current;
    if (el) {
      el.style.transform = `translate(calc(${px.current}px - 50%), calc(${py.current}px - 50%))`;
    }
    rafId.current = requestAnimationFrame(loop);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    tx.current = e.clientX;
    ty.current = e.clientY;
  }, []);

  const onEnter = useCallback((lbl: string) => {
    setLabel(lbl);
    previewRef.current?.classList.add("show");
    if (!rafId.current) loop();
  }, [loop]);

  const onLeave = useCallback(() => {
    previewRef.current?.classList.remove("show");
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null; }
  }, []);

  const openProject = useCallback((url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      <section className="section" id="work" onMouseMove={onMouseMove}>
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow mono">01 — Selected Work</span>
            </Reveal>
            <Reveal delay="d1">
              <h2 className="sec-title">
                Things I&apos;ve designed, built &amp; <em>shipped</em>.
              </h2>
            </Reveal>
          </div>

          <div className="work-list">
            {PROJECTS.map((p, i) => (
              <article
                key={p.name}
                className={`project fade${p.url ? "" : " no-link"}`}
                onMouseEnter={() => onEnter(p.label)}
                onMouseLeave={onLeave}
                onClick={() => openProject(p.url)}
                role={p.url ? "link" : undefined}
                tabIndex={p.url ? 0 : undefined}
                onKeyDown={(e) => p.url && e.key === "Enter" && openProject(p.url)}
                aria-label={p.label}
              >
                <span className="p-index">0{i + 1}</span>
                <h3 className="p-name">{p.name}</h3>
                <div className="p-meta">
                  <p className="p-desc">{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                    {p.status === "in-progress" && (
                      <span className="tag tag-wip">In progress</span>
                    )}
                    {"note" in p && p.note && (
                      <span className="tag tag-note">{p.note as string}</span>
                    )}
                  </div>
                </div>
                <span className="p-arrow">
                  <svg width={34} height={34} viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cursor-following preview */}
      <div className="preview" ref={previewRef} style={{ left: 0, top: 0 }}>
        <div className="ph" ref={phRef} data-label={label} />
      </div>
    </>
  );
}
