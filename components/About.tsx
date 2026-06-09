import StatCounter from "./StatCounter";
import { STATS } from "@/lib/data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sec-head fade">
          <span className="eyebrow mono">02 — About</span>
        </div>

        <div className="about-grid">
          <p className="about-statement fade">
            I build the kind of apps people{" "}
            <em>actually enjoy</em> using — fluid, fast, and quietly thoughtful.
          </p>
          <div className="about-body fade d1">
            <p>
              I&apos;m Rustam, a React Native developer based in Dushanbe,
              Tajikistan. I specialise in Expo — shipping cross-platform apps
              that load instantly, animate beautifully, and feel native on every device.
            </p>
            <p>
              I care about the small things: a spring that lands just right, a
              gesture that feels obvious, an interface that gets out of the way.
              Good engineering you can feel but never notice.
            </p>
            <p>
              Currently freelancing and open to product work, contracts, and
              collaborations.
            </p>
          </div>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`stat fade${i === 1 ? " d1" : i === 2 ? " d2" : ""}`}
            >
              <div className="num">
                <StatCounter to={s.to} />
                <span className="plus">+</span>
              </div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
