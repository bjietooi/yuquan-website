import Reveal from '../components/Reveal';

const PILLARS = [
  {
    zh: '健康',
    en: 'Healthy',
    pinyin: 'Jiàn Kāng',
    sub: 'is the foundation of all growth.',
    body: 'We nurture not only physical well-being, but also emotional security, ensuring every child grows in a safe and supportive environment.',
    emoji: '🌱',
    bg: 'var(--jade-soft)',
    accent: '#2e7d32',
    border: '#a5d6a7',
  },
  {
    zh: '快乐',
    en: 'Happy',
    pinyin: 'Kuài Lè',
    sub: 'is the key to meaningful learning.',
    body: 'When children enjoy the process, they stay curious, engaged, and motivated to explore the world around them.',
    emoji: '☀️',
    bg: 'var(--butter)',
    accent: '#f57f17',
    border: '#ffe082',
  },
  {
    zh: '睿智',
    en: 'Wise',
    pinyin: 'Ruì Zhì',
    sub: 'is the outcome we strive for.',
    body: 'Beyond knowledge, we cultivate thinking skills, confidence, and sound judgment — empowering children to become independent learners for the future.',
    emoji: '✨',
    bg: 'var(--sky)',
    accent: '#1565c0',
    border: '#90caf9',
  },
];

export default function PreschoolPhilosophyPage({ go }) {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          background: 'linear-gradient(160deg, #f0fdf4 0%, #fffde7 55%, #fce4ec 100%)',
          paddingBottom: 80,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: '20%', width: 260, height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,183,77,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="section-kicker">Our Philosophy · 我们的理念</span>

          {/* Chinese characters — the centrepiece */}
          <Reveal>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(20px, 5vw, 56px)',
              margin: '24px 0 16px',
            }}>
              {PILLARS.map((p, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(52px, 8vw, 96px)',
                    fontWeight: 900,
                    color: p.accent,
                    lineHeight: 1,
                    textShadow: '0 2px 12px rgba(0,0,0,.08)',
                  }}>
                    {p.zh}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: p.accent, marginTop: 6, letterSpacing: '0.08em' }}>
                    {p.en}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'var(--ink-soft)',
              letterSpacing: '0.12em',
              marginBottom: 8,
            }}>
              Healthy · Happy · Wise
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--ink-soft)',
              letterSpacing: '0.18em',
              marginBottom: 28,
            }}>
              健康为本 · 快乐为桥 · 睿智为远
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="page-hero-lede" style={{ maxWidth: 580, margin: '0 auto' }}>
              Healthy in body, happy in heart, and wise in mind — we prepare every
              child for a confident start in life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Three pillars ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            maxWidth: 1000,
            margin: '0 auto',
          }}>
            {PILLARS.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{
                  background: '#fff',
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,.07)',
                  border: `1px solid ${p.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}>
                  {/* Coloured top band */}
                  <div style={{
                    background: p.bg,
                    padding: '32px 32px 28px',
                    textAlign: 'center',
                    borderBottom: `3px solid ${p.border}`,
                  }}>
                    <div style={{ fontSize: 44, marginBottom: 12 }}>{p.emoji}</div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(48px, 6vw, 72px)',
                      fontWeight: 900,
                      color: p.accent,
                      lineHeight: 1,
                    }}>
                      {p.zh}
                    </div>
                    <div style={{
                      fontSize: 13,
                      color: p.accent,
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      marginTop: 6,
                      textTransform: 'uppercase',
                    }}>
                      {p.pinyin}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '28px 32px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      fontWeight: 800,
                      color: 'var(--ink)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}>
                      <span style={{ color: p.accent }}>{p.en}</span> {p.sub}
                    </p>
                    <p style={{
                      fontSize: 15,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.8,
                      margin: 0,
                    }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Chinese motto ────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div style={{
              maxWidth: 700,
              margin: '0 auto',
              background: 'var(--jade-mist)',
              borderRadius: 'var(--r-xl)',
              padding: 'clamp(32px, 5vw, 56px)',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: 'clamp(18px, 3vw, 26px)',
                letterSpacing: '0.22em',
                color: 'var(--jade)',
                fontWeight: 700,
                margin: '0 0 16px',
              }}>
                健康为本，快乐为桥，睿智为远。
              </p>
              <p style={{
                fontSize: 'clamp(14px, 2vw, 17px)',
                color: 'var(--ink-soft)',
                lineHeight: 1.85,
                margin: 0,
                fontStyle: 'italic',
              }}>
                "Healthy in body, happy in heart, and wise in mind —
                we prepare every child for a confident start in life."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>See our philosophy in action.</h2>
              <p>Come visit us and experience a day of learning at Yuquan Preschool.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => go('preschool')}>
                  Explore Preschool <span className="btn-arrow">→</span>
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => go('preschool-story')}
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}
                >
                  Our Story
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
