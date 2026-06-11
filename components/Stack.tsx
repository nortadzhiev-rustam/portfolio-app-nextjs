import Marquee from "./Marquee";
import Reveal from "./Reveal";
import { STACK_CORE, STACK_TOOLING } from "@/lib/data";

export default function Stack() {
  return (
    <>
      <Marquee />
      <section className="section" id="stack">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <span className="eyebrow mono">03 — Toolkit</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="sec-title">
                The stack I reach for <em>every day</em>.
              </h2>
            </Reveal>
          </div>
          <div className="stack-grid">
            <Reveal className="stack-col">
              <h3>Core</h3>
              {STACK_CORE.map((row) => (
                <div className="stack-row" key={row.k}>
                  <span className="k">{row.k}</span>
                  <span className="v">{row.v}</span>
                </div>
              ))}
            </Reveal>
            <Reveal className="stack-col" delay={0.08}>
              <h3>Backend &amp; Tooling</h3>
              {STACK_TOOLING.map((row) => (
                <div className="stack-row" key={row.k}>
                  <span className="k">{row.k}</span>
                  <span className="v">{row.v}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
