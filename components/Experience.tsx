import Reveal from "./Reveal";
import { EXPERIENCE } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function Experience({ t }: { t: Dictionary["experience"] }) {
  return (
    <section className="section" id="experience">
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
        <div>
          {EXPERIENCE.map((e, i) => {
            const item = t.items[e.id];
            return (
              <Reveal key={e.id} className="exp-row" delay={(i % 2) * 0.08}>
                <span className="yr">{item.yr}</span>
                <div>
                  <div className="role">{item.role}</div>
                  <div className="org">{item.org}</div>
                </div>
                <span className="place">{item.place}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
