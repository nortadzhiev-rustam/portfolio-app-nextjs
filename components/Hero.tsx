"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBadge from "./HeroBadge";
import { EASE } from "./Reveal";

const MARK_POSITIONS = ["tl", "tr", "bl", "br"] as const;

const lineVariants = {
  hidden: { y: "0.6em", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.95, ease: EASE, delay: 0.05 + i * 0.13 },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <header className="section hero" id="top" ref={ref}>
      <motion.div className="wrap" style={{ y: parallaxY, opacity: fade }}>
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <span className="status">
            <span className="dot" />
            Available for projects — 2026
          </span>
          <span className="mono">Portfolio / Vol.01</span>
        </motion.div>

        <h1>
          <span className="hero-line">
            <motion.span
              className="hero-line-inner"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Mobile apps that
            </motion.span>
          </span>
          <span className="hero-line">
            <motion.span
              className="hero-line-inner"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <em className="hero-em">
                feel effortless.
                <svg
                  className="hero-underline"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M4 13 C 60 5, 140 17, 200 9 C 240 4, 275 9, 296 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={6}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
                  />
                </svg>
              </em>
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
        >
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
        </motion.div>
      </motion.div>

      <HeroBadge />

      {MARK_POSITIONS.map((pos, i) => (
        <motion.span
          key={pos}
          className={`hero-mark ${pos}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 + i * 0.12 }}
        >
          +
        </motion.span>
      ))}

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll</span>
        <span className="sh-line" />
      </motion.div>
    </header>
  );
}
