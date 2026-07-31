import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { STATS } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow mono">{t.eyebrow}</span>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-statement">
              {t.statementPre}
              <em>{t.statementEm}</em>
              {t.statementPost}
            </p>
          </Reveal>
          <Reveal className="about-body" delay={0.08}>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </Reveal>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.id} className="stat" delay={i * 0.08}>
              <div className="num">
                <StatCounter to={s.to} />
                <span className="plus">+</span>
              </div>
              <div className="label">{t.stats[s.id]}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
