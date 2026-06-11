import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow mono">05 — Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="big">
            Let&apos;s build something <em>worth opening.</em>
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
            GitHub ↗
          </a>
          <a
            className="social"
            href="https://linkedin.com/in/rustam-nortadzhiev"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a className="social" href="mailto:rustamnortadzhiev@gmail.com">
            Email ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
