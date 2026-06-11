"use client";
import { useCallback, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal, { EASE } from "./Reveal";
import { PROJECTS } from "@/lib/data";

const previewVariants = {
  hide: { opacity: 0, scale: 0.85, x: "-50%", y: "-50%" },
  show: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
};

export default function Work() {
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 160, damping: 22, mass: 0.6 });
  const springY = useSpring(cursorY, { stiffness: 160, damping: 22, mass: 0.6 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  const onEnter = useCallback((lbl: string) => {
    setLabel(lbl);
    setActive(true);
  }, []);

  const onLeave = useCallback(() => setActive(false), []);

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
            <Reveal delay={0.08}>
              <h2 className="sec-title">
                Things I&apos;ve designed, built &amp; <em>shipped</em>.
              </h2>
            </Reveal>
          </div>

          <div className="work-list">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                className={`project${p.url ? "" : " no-link"}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.06 }}
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cursor-following preview, driven by motion springs */}
      <motion.div className="preview-anchor" style={{ x: springX, y: springY }}>
        <motion.div
          className="preview"
          variants={previewVariants}
          initial="hide"
          animate={active ? "show" : "hide"}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="ph" data-label={label} />
        </motion.div>
      </motion.div>
    </>
  );
}
