"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./Reveal";

const BADGE_TEXT = "AVAILABLE FOR PROJECTS • REACT NATIVE • EXPO • ";

export default function HeroBadge() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className="hero-badge"
      href="#contact"
      aria-label="Available for projects — get in touch"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
    >
      <motion.div
        className="badge-spin"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="badge-arc" d="M60 16 a44 44 0 1 1 -0.01 0" fill="none" />
          </defs>
          <text className="badge-text">
            <textPath href="#badge-arc">{BADGE_TEXT}</textPath>
          </text>
        </svg>
      </motion.div>
      <span className="badge-core" aria-hidden="true">
        <Image
          className="badge-avatar"
          src="/images/R.jpeg"
          alt=""
          width={92}
          height={92}
          priority
        />
      </span>
    </motion.a>
  );
}
