import Reveal from '../components/Reveal';
import Founder from '../components/Founder';

export default function AboutPage({ fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">About · 关于我们</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            A little school<br />built with a lot of love.
          </h1>
          <p className="page-hero-lede" style={{ marginTop: 24 }}>
            Yuquan started in 2005 with one classroom, one teacher, and four
            children. Twenty years later, the classroom is bigger — but the
            small-school feeling stayed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            {[
              { num: '2005',   label: 'Founded' },
              { num: '20',     label: 'Teachers' },
              { num: '2,400+', label: 'Alumni' },
              { num: '1',      label: 'Little school' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="stat">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Founder />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Come meet the team.</h2>
              <p>The fastest way to know if Yuquan is right for your family is to come spend 30 minutes with us.</p>
              <button className="btn btn-primary" onClick={fireConfetti}>
                Book a tour <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
