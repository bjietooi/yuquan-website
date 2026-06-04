import { IMG } from '../data/images';
import Reveal from '../components/Reveal';
import Founder from '../components/Founder';

export default function AboutPage({ fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Our Story · 关于我们</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            Real Chinese Ability,<br />Built with Purpose.
          </h1>
          <p className="page-hero-lede" style={{ marginTop: 24 }}>
            Founded in 1996, Yuquan Language School is an established Chinese language
            institution registered with the Singapore Government and the Ministry of
            Education. Over nearly three decades, Yuquan has built a strong reputation as
            a trusted provider of quality Chinese education, supporting generations of
            learners across Singapore.
          </p>
          <p className="page-hero-lede" style={{ marginTop: 18 }}>
            We believe that effective language learning begins with solid fundamentals and
            the right approach. By balancing academic rigour with enjoyable learning
            experiences, our programmes support steady progress and lasting confidence.
            Through a proven, systematic methodology, we cultivate strong language
            proficiency and a genuine appreciation for Chinese — equipping learners with
            skills that support academic success and lifelong learning.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats">
            {[
              { num: '1996',  label: 'Founded' },
              { num: '1',     label: 'Shared Mission' },
              { num: '30+',   label: 'Years of Experience' },
              { num: '100k',  label: 'Students Taught' },
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

      {/* Vision, Mission, Core Values */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">What we stand for</span>
            <h2 className="section-title">Vision, Mission &amp; Values.</h2>
          </Reveal>
          <div className="pillars" style={{ marginTop: 40 }}>
            {[
              { emoji: '🎯', emojiBg: 'var(--jade-soft)', zh: '愿景', en: 'Our Vision',
                points: [
                  { en: 'Creating Value for Children through Chinese Language', zh: '让华语教学开启人生价值' },
                  { en: 'Happy Learning with Yuquan', zh: '让艺全带您走上快乐学习之路' },
                ] },
              { emoji: '🚀', emojiBg: 'var(--peach)', zh: '使命', en: 'Our Mission',
                points: [
                  { en: 'To be the top choice for Chinese learning worldwide', zh: '成为世界华人学习华语的首选' },
                  { en: 'To be a global Chinese language teacher training base', zh: '成为全球华语教师培训基地' },
                  { en: 'To be a leader in Chinese reading education', zh: '成为华语阅读教育的引领者' },
                ] },
              { emoji: '💎', emojiBg: 'var(--sky)', zh: '价值观', en: 'Our Core Values',
                points: [
                  { en: 'Professional & Motivated', zh: '专业进取' },
                  { en: 'Education with Love', zh: '爱心教育' },
                  { en: 'Self-realisation', zh: '实现自我' },
                ] },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="pillar">
                  <div className="pillar-emoji" style={{ background: p.emojiBg, fontSize: 38 }}>
                    {p.emoji}
                  </div>
                  <div className="pillar-zh">{p.zh}</div>
                  <div className="pillar-en">{p.en}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {p.points.map((pt, j) => (
                      <li key={j}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink)', lineHeight: 1.4 }}>{pt.en}</div>
                        <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', marginTop: 3 }}>{pt.zh}</div>
                      </li>
                    ))}
                  </ul>
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
