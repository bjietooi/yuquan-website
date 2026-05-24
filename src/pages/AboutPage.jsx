import { IMG } from '../data/images';
import Reveal from '../components/Reveal';
import Founder from '../components/Founder';

export default function AboutPage({ fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">About · 语言学校</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            Real Chinese Ability,<br />Built with Purpose.
          </h1>
          <p className="page-hero-lede" style={{ marginTop: 24 }}>
            Yuquan Language School specializes in building genuine Mandarin and English
            language ability for learners from preschool through adulthood — combining
            structured excellence with joyful, meaningful learning.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats">
            {[
              { num: '30+',    label: 'Years Teaching' },
              { num: '1000+',  label: 'Active Learners' },
              { num: '1:8',    label: 'Max Class Size' },
              { num: '100%',   label: 'Bilingual' },
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

      {/* Meet Our Founder */}
      <Founder />

      {/* Media Presence */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Our Journey</span>
            <h2 className="section-title">Our Journey in the Spotlight</h2>
          </Reveal>
          <Reveal>
            <div className="daily-strip">
              {[
                { tag: 'Classroom moments', src: IMG.kindergarten },
                { tag: 'Learning together', src: IMG.students[0] },
                { tag: 'Happy learners', src: IMG.students[1] },
                { tag: 'Community vibes', src: IMG.students[2] },
                { tag: 'Teaching moments', src: IMG.tuition[0] },
                { tag: 'Language immersion', src: IMG.tuition[1] },
                { tag: 'Joyful learning', src: IMG.kindergarten },
                { tag: 'Growing together', src: IMG.students[0] },
              ].map((d, i) => (
                <div key={i} className="daily-item">
                  <img src={d.src} alt={d.tag} />
                  <div className="daily-tag">{d.tag}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* In The Press */}
      <section className="press-section">
        <div className="container">
          <Reveal className="press-head">
            <span className="section-kicker">Media</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              Our Story in the Media.
            </h2>
          </Reveal>
          <Reveal>
            <div className="press-grid">
              {IMG.press.map((p, i) => (
                <div key={i} className="press-card">
                  <img src={p.src} alt={`${p.paper} · ${p.date}`} loading="lazy" />
                  <div className="press-card-label">
                    <div className="press-card-paper">{p.paper}</div>
                    <div className="press-card-date">{p.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision, Mission, Approach */}
      <section className="section">
        <div className="container">
          <div className="pillars">
            {[
              { emoji: '🎯', emojiBg: 'var(--jade-soft)', zh: '愿景', en: 'Our Vision',
                desc: 'Learners who speak, read, and write with genuine confidence in both Mandarin and English — and actually enjoy doing it.' },
              { emoji: '📚', emojiBg: 'var(--peach)', zh: '方法', en: 'Our Approach',
                desc: 'Small classes. Expert teachers. Curriculum that builds real ability, not just exam scores. Learning that sticks.' },
              { emoji: '💎', emojiBg: 'var(--sky)', zh: '承诺', en: 'Our Promise',
                desc: 'Every student sees measurable progress. Every parent gets honest updates. Every lesson builds something that lasts.' },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="pillar">
                  <div className="pillar-emoji" style={{ background: p.emojiBg, fontSize: 38 }}>
                    {p.emoji}
                  </div>
                  <div className="pillar-zh">{p.zh}</div>
                  <div className="pillar-en">{p.en}</div>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Come say 你好.</h2>
              <p>Book a 30-minute tour. Bring your little one. We'll have tea, they'll have crayons.</p>
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
