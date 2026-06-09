import Marquee from "./Marquee";
import { STACK_CORE, STACK_TOOLING } from "@/lib/data";

export default function Stack() {
  return (
    <>
      <Marquee />
      <section className="section" id="stack">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow mono fade">03 — Toolkit</span>
            <h2 className="sec-title fade d1">
              The stack I reach for <em>every day</em>.
            </h2>
          </div>
          <div className="stack-grid">
            <div className="stack-col fade">
              <h3>Core</h3>
              {STACK_CORE.map((row) => (
                <div className="stack-row" key={row.k}>
                  <span className="k">{row.k}</span>
                  <span className="v">{row.v}</span>
                </div>
              ))}
            </div>
            <div className="stack-col fade d1">
              <h3>Backend &amp; Tooling</h3>
              {STACK_TOOLING.map((row) => (
                <div className="stack-row" key={row.k}>
                  <span className="k">{row.k}</span>
                  <span className="v">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
