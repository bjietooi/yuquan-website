import { IMG } from '../data/images';
import Mascot from '../components/Mascot';
import Reveal from '../components/Reveal';
import Founder from '../components/Founder';

export default function HomePage({ go, fireConfetti }) {
  return (
    <div className="page">
      {/* SCHOOL SELECTION */}
      <section className="school-selector">
        <div className="container">
          <div className="selector-content">
            <Reveal>
              <h2 className="selector-title">Welcome to Yuquan</h2>
              <p className="selector-subtitle">Two connected learning spaces under one community</p>
            </Reveal>

            <div className="school-cards-container">
              <Reveal delay={100}>
                <div className="school-card preschool-card" onClick={() => go('preschool')}>
                  <div className="school-logo-wrapper">
                    <img className="school-logo-large" src={IMG.preschoolLogo} alt="Yuquan Preschool" />
                  </div>
                  <h3 className="school-name">Yuquan Preschool</h3>
                  <p className="school-subtitle-small">18 months to 6 years</p>
                  <p className="school-desc">Bilingual play-based learning. Curious. Confident. Wonder-full.</p>
                  <div className="school-cta">Explore <span className="arrow">→</span></div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="school-card language-card" onClick={() => go('language-school')}>
                  <div className="school-logo-wrapper">
                    <img className="school-logo-large" src={IMG.logo} alt="Yuquan Language School" />
                  </div>
                  <h3 className="school-name">Language School</h3>
                  <p className="school-subtitle-small">Ages 4 to grown-ups</p>
                  <p className="school-desc">Structured Chinese & English. Bold voices. Real fluency.</p>
                  <div className="school-cta">Explore <span className="arrow">→</span></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot">✿</span>
                Bilingual preschool since 2005
              </span>
              <h1 className="hero-title">
                <span className="w">Healthy<span className="underline" /></span>
                <span className="w">Happy<span className="underline" /></span>
                <span className="w">Wise<span className="underline" /></span>
              </h1>
              <div className="hero-zh">健康 · 快乐 · 睿智</div>
              <p className="hero-lede">
                A warm little world where little ones grow up bilingual, curious,
                and full of wonder — from 18 months to 6 years.
              </p>
              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={fireConfetti}>
                  Book a tour <span className="btn-arrow">→</span>
                </button>
                <button className="btn btn-ghost" onClick={() => go('preschool')}>
                  See programmes
                </button>
              </div>
              <div className="hero-meta">
                <div><strong>20+</strong>years teaching</div>
                <div><strong>2</strong>languages, one classroom</div>
                <div><strong>1:6</strong>teacher ratio</div>
              </div>
            </div>

            <div className="hero-stage">
              <div className="stage-bg" />
              <Mascot />
              <div className="polaroid hero-photo-1">
                <img src={IMG.students[0]} alt="A Yuquan child" />
                <div className="polaroid-cap">Garden day · 花园日</div>
              </div>
              <div className="polaroid hero-photo-2">
                <img src={IMG.students[1]} alt="Yuquan friends" />
                <div className="polaroid-cap">Best friends · 好朋友</div>
              </div>
              <div className="stage-sticker sticker-1">
                <span className="ico" style={{ background: 'var(--butter)' }}>🌱</span>
                <span>Play-based</span>
              </div>
              <div className="stage-sticker sticker-3">
                <span className="ico" style={{ background: 'var(--sky)' }}>语</span>
                <span>双语 Bilingual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {[1, 2].map(dup => (
            <div key={dup} className="marquee-item">
              <span>健康 · Healthy</span><span className="dot" />
              <span>快乐 · Happy</span><span className="dot" />
              <span>睿智 · Wise</span><span className="dot" />
              <span>18 months → 6 years</span><span className="dot" />
              <span>双语 · Bilingual</span><span className="dot" />
              <span>Since 2005</span><span className="dot" />
            </div>
          ))}
        </div>
      </div>

      {/* Programmes */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">Our Programmes</span>
            <h2 className="section-title">Two paths, one playful philosophy.</h2>
            <p className="section-lede">
              Whether your little one is starting their journey at 18 months
              or topping up their Chinese and English along the way — we have a
              cosy spot for them.
            </p>
          </Reveal>

          <div className="programmes">
            <Reveal>
              <div className="prog-card peach" onClick={() => go('preschool')}>
                <div className="prog-card-logo">
                  <img src={IMG.preschoolLogo} alt="Preschool" />
                </div>
                <svg className="prog-shape" width="220" height="220" viewBox="0 0 100 100">
                  <path d="M50 5 C75 5 95 25 95 50 C95 78 70 95 50 95 C26 95 5 75 5 50 C5 22 27 5 50 5 Z" fill="rgba(255,255,255,0.4)"/>
                </svg>
                <div style={{ position: 'relative', maxWidth: '60%' }}>
                  <div className="prog-zh">幼儿园</div>
                  <div className="prog-title">Preschool</div>
                  <p className="prog-desc">
                    A bilingual nest for ages 18 months to 6 years. Play, music,
                    mandarin, mess, magic.
                  </p>
                </div>
                <div className="prog-cta" style={{ position: 'relative' }}>
                  Step inside <span className="arrow">→</span>
                </div>
                <div className="prog-card-photo">
                  <img src={IMG.kindergarten} alt="Yuquan preschool" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="prog-card sky" onClick={() => go('language-school')}>
                <div className="prog-card-logo">
                  <img src={IMG.logo} alt="Language School" />
                </div>
                <svg className="prog-shape" width="220" height="220" viewBox="0 0 100 100">
                  <path d="M50 5 C55 35 65 45 95 50 C65 55 55 65 50 95 C45 65 35 55 5 50 C35 45 45 35 50 5 Z" fill="rgba(255,255,255,0.4)"/>
                </svg>
                <div style={{ position: 'relative', maxWidth: '60%' }}>
                  <div className="prog-zh">课程补习</div>
                  <div className="prog-title">Language School</div>
                  <p className="prog-desc">
                    Structured Chinese & English for children, teens,
                    and grown-ups too.
                  </p>
                </div>
                <div className="prog-cta" style={{ position: 'relative' }}>
                  Step inside <span className="arrow">→</span>
                </div>
                <div className="prog-card-photo">
                  <img src={IMG.tuition[0]} alt="Yuquan Language School" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section" style={{ paddingTop: 20 }}>
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
                desc: 'Laughter is the curriculum\'s secret sauce. Music, art, friendships — joyful by design.' },
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

      {/* Stats */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="stats">
            {[
              { num: '20+', label: 'Years teaching' },
              { num: '2,400+', label: 'Little graduates' },
              { num: '1:6', label: 'Teacher ratio' },
              { num: '100%', label: 'Bilingual every day' },
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

      {/* Daily life */}
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
                { tag: 'Friends · 好朋友', src: IMG.students[1] },
                { tag: 'Story time · 故事时间', src: IMG.students[2] },
                { tag: 'Garden day · 花园日', src: IMG.students[0] },
                { tag: 'Chinese class · 中文课', src: IMG.tuition[0] },
                { tag: 'Composition · 作文', src: IMG.tuition[1] },
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

      {/* Testimonials */}
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
              { q: 'The teachers actually know my son. Not \'one of 30\' — they know how he likes his apples cut.',
                name: 'Wei Ling', role: 'Parent · Nursery', color: 'var(--jade)', tag: 'Since 2024' },
              { q: 'Drop-off used to be tears. Now it\'s a sprint into class. The vibe here is just… warm.',
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

      {/* Founder */}
      <Founder />

      {/* Press */}
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

      {/* CTA banner */}
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
              <svg className="cta-shape s3" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="10"/>
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
    </div>
  );
}
