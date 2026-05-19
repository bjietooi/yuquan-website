/**
 * SharedSections
 * Sections appended to both PreschoolPage and LanguageSchoolPage:
 * Pillars → Stats → A Day at Yuquan → Parent Voices → Founder → In The Press → CTA
 */
import { IMG } from '../data/images';
import Reveal from './Reveal';
import Founder from './Founder';

export default function SharedSections({ fireConfetti }) {
  return (
    <>
      {/* ── Our Pillars ── */}
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Our Pillars</span>
            <h2 className="section-title">Three gentle promises.</h2>
            <p className="section-lede">
              Every day at Yuquan rests on three quiet ideas — the kind that
              shape not just school, but a childhood.
            </p>
          </Reveal>
          <div className="pillars">
            {[
              { img: IMG.sprouts, emojiBg: 'var(--jade-soft)', zh: '健康', en: 'Healthy',
                desc: 'Nutritious meals, outdoor play, mindful little routines. Bodies and minds, both nourished.' },
              { emoji: '🎈', emojiBg: 'var(--peach)', zh: '快乐', en: 'Happy',
                desc: "Laughter is the curriculum's secret sauce. Music, art, friendships — joyful by design." },
              { emoji: '📖', emojiBg: 'var(--sky)', zh: '睿智', en: 'Wise',
                desc: 'Curiosity nudged, languages woven in, big questions taken seriously by small humans.' },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="pillar">
                  <div className={`pillar-emoji ${p.img ? 'has-img' : ''}`} style={{ background: p.emojiBg, fontSize: 38 }}>
                    {p.img ? <img src={p.img} alt="" /> : p.emoji}
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

      {/* ── Stats ── */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="stats">
            {[
              { num: '20+',    label: 'Years teaching' },
              { num: '2,400+', label: 'Little graduates' },
              { num: '1:6',    label: 'Teacher ratio' },
              { num: '100%',   label: 'Bilingual every day' },
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

      {/* ── A Day at Yuquan ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">A day at Yuquan</span>
            <h2 className="section-title">Small moments, gently held.</h2>
            <p className="section-lede">
              A peek inside the classrooms, garden, and the everyday wonders
              of growing up bilingual.
            </p>
          </Reveal>
          <Reveal>
            <div className="daily-strip">
              {[
                { tag: 'Morning circle · 早安圈', src: IMG.kindergarten },
                { tag: 'Friends · 好朋友',         src: IMG.students[1] },
                { tag: 'Story time · 故事时间',    src: IMG.students[2] },
                { tag: 'Garden day · 花园日',      src: IMG.students[0] },
                { tag: 'Chinese class · 中文课',   src: IMG.tuition[0] },
                { tag: 'Composition · 作文',       src: IMG.tuition[1] },
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

      {/* ── Parent Voices ── */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Parents' Voices</span>
            <h2 className="section-title">Loved by little families.</h2>
          </Reveal>
          <div className="testimonials">
            {[
              { q: 'My daughter sings in Mandarin in the bath now. We have NO IDEA where she learnt it — but Yuquan, thank you.',
                name: 'Priya & Arjun', role: 'Parent · K2', color: 'var(--peach-deep)', tag: 'Since 2023' },
              { q: "The teachers actually know my son. Not 'one of 30' — they know how he likes his apples cut.",
                name: 'Wei Ling', role: 'Parent · Nursery', color: 'var(--jade)', tag: 'Since 2024' },
              { q: "Drop-off used to be tears. Now it's a sprint into class. The vibe here is just… warm.",
                name: 'Tom & Mira', role: 'Parent · Pre-Nursery', color: 'var(--lavender-deep)', tag: 'Since 2025' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="testi">
                  <div className="testi-tag">{t.tag}</div>
                  <p className="testi-quote">"{t.q}"</p>
                  <div className="testi-person">
                    <div className="testi-avatar" style={{ background: t.color }}>{t.name[0]}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Founder ── */}
      <Founder />

      {/* ── In The Press ── */}
      <section className="press-section">
        <div className="container">
          <Reveal className="press-head">
            <span className="section-kicker">In the press</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              Featured by Singapore's papers.
            </h2>
            <p className="section-lede" style={{ margin: '14px auto 0', maxWidth: 560 }}>
              Over the years, our little school has had its moments in the spotlight.
            </p>
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

      {/* ── Final CTA ── */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <svg className="cta-shape s1" width="300" height="300" viewBox="0 0 100 100">
                <path d="M50 5 C55 35 65 45 95 50 C65 55 55 65 50 95 C45 65 35 55 5 50 C35 45 45 35 50 5 Z" fill="white"/>
              </svg>
              <svg className="cta-shape s2" width="180" height="180" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="white"/>
              </svg>
              <h2>Come say 你好.</h2>
              <p>Book a 30-minute tour. Bring your little one. We'll have tea, they'll have crayons.</p>
              <button className="btn btn-primary" onClick={fireConfetti}>
                Book a tour <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
