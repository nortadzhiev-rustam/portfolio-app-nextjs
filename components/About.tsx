import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { STATS } from "@/lib/data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow mono">02 — About</span>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-statement">
              I build the kind of apps people{" "}
              <em>actually enjoy</em> using — fluid, fast, and quietly thoughtful.
            </p>
          </Reveal>
          <Reveal className="about-body" delay={0.08}>
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
          </Reveal>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 0.08}>
              <div className="num">
                <StatCounter to={s.to} />
                <span className="plus">+</span>
              </div>
              <div className="label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
