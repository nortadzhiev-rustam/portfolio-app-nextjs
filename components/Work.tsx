"use client";
import { useCallback, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Reveal, { EASE } from "./Reveal";
import { PROJECTS } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

const previewVariants = {
  hide: { opacity: 0, scale: 0.85, x: "-50%", y: "-50%" },
  show: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
};

export default function Work({ t }: { t: Dictionary["work"] }) {
  const [label, setLabel] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
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

  const onEnter = useCallback((lbl: string, img?: string) => {
    setLabel(lbl);
    setImage(img);
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
              <span className="eyebrow mono">{t.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="sec-title">
                {t.titlePre}
                <em>{t.titleEm}</em>
                {t.titlePost}
              </h2>
            </Reveal>
          </div>

          <div className="work-list">
            {PROJECTS.map((p, i) => {
              const copy = t.projects[p.id];
              return (
              <motion.article
                key={p.id}
                className={`project${p.url ? "" : " no-link"}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.06 }}
                onMouseEnter={() => onEnter(copy.label, p.image)}
                onMouseLeave={onLeave}
                onClick={() => openProject(p.url)}
                role={p.url ? "link" : undefined}
                tabIndex={p.url ? 0 : undefined}
                onKeyDown={(e) => p.url && e.key === "Enter" && openProject(p.url)}
                aria-label={copy.label}
              >
                <span className="p-index">0{i + 1}</span>
                <h3 className="p-name">{p.name}</h3>
                <div className="p-meta">
                  <p className="p-desc">{copy.desc}</p>
                  <div className="tags">
                    {p.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                    {p.status === "in-progress" && (
                      <span className="tag tag-wip">{t.inProgress}</span>
                    )}
                    {p.note && (
                      <span className="tag tag-note">{p.note}</span>
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
              );
            })}
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
          <div className="ph" data-label={image ? undefined : label}>
            {image && (
              <Image
                src={image}
                alt=""
                fill
                sizes="280px"
                className="ph-img"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
