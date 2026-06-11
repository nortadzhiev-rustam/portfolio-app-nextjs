import Reveal from "./Reveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow mono">04 — Experience</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="sec-title">
              A short <em>history</em> of the work.
            </h2>
          </Reveal>
        </div>
        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.yr} className="exp-row" delay={(i % 2) * 0.08}>
              <span className="yr">{e.yr}</span>
              <div>
                <div className="role">{e.role}</div>
                <div className="org">{e.org}</div>
              </div>
              <span className="place">{e.place}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
