import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow mono fade">04 — Experience</span>
          <h2 className="sec-title fade d1">
            A short <em>history</em> of the work.
          </h2>
        </div>
        <div>
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.yr}
              className={`exp-row fade${i % 2 === 1 ? " d1" : ""}`}
            >
              <span className="yr">{e.yr}</span>
              <div>
                <div className="role">{e.role}</div>
                <div className="org">{e.org}</div>
              </div>
              <span className="place">{e.place}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
