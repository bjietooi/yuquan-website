import { IMG } from '../data/images';
import Reveal from '../components/Reveal';

export default function PreschoolStoryPage({ go }) {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          background: 'linear-gradient(135deg, #fff8f0 0%, #fff5f8 50%, #f0fdf4 100%)',
          paddingBottom: 72,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 360, height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,183,77,.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60, width: 280, height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <span className="section-kicker">Our Story · 关于我们</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(42px, 6vw, 80px)', marginBottom: 16 }}>
            Yuquan Preschool
          </h1>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 3vw, 28px)',
            color: 'var(--jade)',
            fontWeight: 700,
            marginBottom: 28,
          }}>
            Start Your Child's Bilingual Journey Today.
          </p>

          {/* Image strip */}
          <Reveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr 1fr',
              gap: 14,
              maxWidth: 820,
              margin: '0 auto',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
            }}>
              {[IMG.students[0], IMG.kindergarten, IMG.students[2]].map((src, i) => (
                <div key={i} style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={src} alt="Yuquan Preschool" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 820, margin: '0 auto' }}>

            <Reveal>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 40,
              }}>
                <div style={{ flex: 1, height: 2, background: 'var(--jade)', opacity: 0.2, borderRadius: 2 }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 800,
                  color: 'var(--jade)',
                  whiteSpace: 'nowrap',
                }}>
                  A Truly Bilingual Preschool
                </span>
                <div style={{ flex: 1, height: 2, background: 'var(--jade)', opacity: 0.2, borderRadius: 2 }} />
              </div>
            </Reveal>

            <Reveal>
              <div style={{
                background: 'var(--jade-mist)',
                borderRadius: 'var(--r-xl)',
                padding: 'clamp(28px, 4vw, 52px)',
                borderLeft: '5px solid var(--jade)',
                marginBottom: 40,
              }}>
                <p style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  color: 'var(--ink)',
                  lineHeight: 1.85,
                  fontWeight: 500,
                  margin: 0,
                  fontStyle: 'italic',
                }}>
                  "Bilingual education is not just what we teach — it is how children
                  learn, connect, and thrive every day."
                </p>
              </div>
            </Reveal>

            <Reveal>
              <p style={{
                fontSize: 17,
                color: 'var(--ink-soft)',
                lineHeight: 1.9,
                marginBottom: 28,
              }}>
                At Yuquan Preschool, bilingual education is at the heart of our brand
                and our promise. We have intentionally designed a learning environment
                where English and Chinese coexist seamlessly, shaping how children think,
                communicate, and engage with the world.
              </p>
            </Reveal>

            <Reveal>
              <p style={{
                fontSize: 17,
                color: 'var(--ink-soft)',
                lineHeight: 1.9,
                marginBottom: 48,
              }}>
                Rooted in our commitment to holistic development, we go beyond academic
                learning to nurture each child's confidence, character, creativity, and
                curiosity. At Yuquan, we are not just educating children — we are shaping
                thoughtful, resilient, and globally ready learners for the future.
              </p>
            </Reveal>

            {/* Values strip */}
            <Reveal>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 16,
                marginBottom: 56,
              }}>
                {[
                  { emoji: '💬', label: 'Confidence',  bg: 'var(--peach)',     desc: 'Every child finds their voice in two languages.' },
                  { emoji: '🌟', label: 'Character',   bg: 'var(--butter)',    desc: 'Kindness, resilience, and integrity from day one.' },
                  { emoji: '🎨', label: 'Creativity',  bg: 'var(--blush)',     desc: 'Ideas bloom when children feel safe to explore.' },
                  { emoji: '🔍', label: 'Curiosity',   bg: 'var(--jade-soft)', desc: 'Questions are celebrated, not just answers.' },
                ].map((v, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <div style={{
                      background: v.bg,
                      borderRadius: 'var(--r-xl)',
                      padding: '24px 20px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: 32, marginBottom: 10 }}>{v.emoji}</div>
                      <p style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)', margin: '0 0 6px' }}>{v.label}</p>
                      <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Curious about our philosophy?</h2>
              <p>Discover the values that guide everything we do at Yuquan Preschool.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => go('preschool-philosophy')}>
                  Our Philosophy <span className="btn-arrow">→</span>
                </button>
                <button className="btn btn-ghost" onClick={() => go('preschool')}
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
                  Back to Preschool
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
