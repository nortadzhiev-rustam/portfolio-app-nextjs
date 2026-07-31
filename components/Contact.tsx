import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/i18n";

export default function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow mono">{t.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="big">
            {t.titlePre}
            <em>{t.titleEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <a
            className="email-link"
            href="mailto:rustamnortadzhiev@gmail.com"
          >
            rustamnortadzhiev@gmail.com <span className="arr">↗</span>
          </a>
        </Reveal>
        <Reveal className="socials" delay={0.2}>
          <a
            className="social"
            href="https://github.com/nortadzhiev-rustam"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.github} ↗
          </a>
          <a
            className="social"
            href="https://linkedin.com/in/rustam-nortadzhiev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.linkedin} ↗
          </a>
          <a className="social" href="mailto:rustamnortadzhiev@gmail.com">
            {t.email} ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
