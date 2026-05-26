import { useState } from 'react';
import Reveal from '../components/Reveal';

/* ─── Data ───────────────────────────────────────────────────────── */

const LEVELS = [
  { name: 'Playgroup',      age: '18 months – 2.5 years' },
  { name: 'Nursery 1',      age: '2.5 – 3 years' },
  { name: 'Nursery 2',      age: '3 – 4 years' },
  { name: 'Kindergarten 1', age: '4 – 5 years' },
  { name: 'Kindergarten 2', age: '5 – 6 years' },
];

const FEES = [
  { level: 'Childcare (PG – K2)', session: 'Full Day', fee: '$2,000 / mo' },
  { level: 'Childcare (PG – K2)', session: 'Half Day', fee: '$1,500 / mo' },
];

const SUBJECTS = [
  'English', 'Chinese', 'Math', 'Science',
  'Social Studies', 'Reading', 'Phonics', 'Creative Writing',
  'Experiential Learning', 'Art & Craft', 'Music & Movement', 'Outdoor Exploration',
];

const SPECIAL = [
  { label: 'Table Tennis', emoji: '🏓' },
  { label: 'Calligraphy',  emoji: '🖌️' },
  { label: 'Chinese Art',  emoji: '🎨' },
  { label: 'Melodica',     emoji: '🎵' },
  { label: 'Tea Appreciation', emoji: '🍵' },
];

const WHY = [
  {
    emoji: '🌏',
    title: 'True Bilingual Mastery',
    bg: 'var(--jade-soft)',
    accent: '#2e7d32',
    body: 'We go beyond simple exposure by developing strong proficiency in both Chinese and English. With a carefully designed curriculum and consistent language use, children gain the confidence and ability to use both languages effectively in the long run.',
  },
  {
    emoji: '🌱',
    title: 'A Holistic Learning Experience',
    bg: 'var(--butter)',
    accent: '#f57f17',
    body: "We believe education begins with the development of the whole child. Our programme supports each child's intellectual, social, emotional, and physical growth in a balanced and nurturing environment. Through diverse experiences — from language and arts to movement and exploration — we encourage children to discover their interests, build confidence, and grow into well-rounded individuals.",
  },
  {
    emoji: '💛',
    title: 'Character Development',
    bg: 'var(--blush)',
    accent: '#c62828',
    body: 'We place strong emphasis on values such as respect, responsibility and resilience. We create a nurturing environment where every child feels valued and respected. Through daily interactions and guided experiences, children learn to care for others, take ownership of their actions and develop the confidence to navigate challenges.',
  },
  {
    emoji: '🔭',
    title: 'Expanding Horizons',
    bg: 'var(--sky)',
    accent: '#1565c0',
    body: 'We take learning beyond the classroom through thoughtfully curated excursions. From art galleries, museums and cultural centres to fire stations, sports events and local experiences like longkang fishing, children gain meaningful exposure to the world around them. These experiences spark curiosity, build confidence and broaden their perspectives from a young age.',
  },
  {
    emoji: '🚀',
    title: 'Future-Ready Learners',
    bg: 'var(--jade-soft)',
    accent: '#2e7d32',
    body: 'Through nurturing independence, critical thinking, and a love for learning, we guide children to become confident, thoughtful, and capable learners — ready not just for school, but for the future.',
  },
];

const FAQS = [
  {
    q: 'What sets us apart from other bilingual preschools in Singapore?',
    a: "Most bilingual preschools in Singapore offer exposure — typically through English-speaking environments with Chinese taught as a subject or limited immersion.\n\nIn a largely English-speaking environment like Singapore, true bilingualism requires more than just exposure — it requires depth, structure, and consistency.\n\nAt Yuquan, Chinese is not treated as a standalone subject, but as a core language that is systematically developed from an early age. Backed by our established Chinese language school, we have developed our own curriculum and teaching approach that builds strong literacy foundations and supports confident language use over time. Alongside this, we maintain a strong English environment, ensuring children are equally confident in both languages.\n\nWe don't just aim for bilingual exposure — we cultivate true bilingual ability.",
  },
  {
    q: 'Do we charge extra for special programmes?',
    a: 'No, we do not charge extra for enrichment classes.\n\nIn many schools, special programmes (often known as enrichment classes) come at an additional cost, which can sometimes mean that not every child gets to participate.\n\nAt Yuquan, we believe education should be equitable. All special programmes are included in our curriculum, so every child learns, explores, and grows together — no one is left on the sidelines.',
  },
  {
    q: 'What kind of meals do children have at Yuquan?',
    a: "Children at Yuquan enjoy freshly cooked meals prepared daily in our in-house kitchen.\n\nWe believe mealtimes are an important part of a child's day — not just for nutrition, but also for comfort and routine. By preparing meals on-site, we ensure every child receives warm, balanced, and nourishing food every day.",
  },
];

/* ─── FAQ accordion item ─────────────────────────────────────────── */

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--r-xl)',
      border: '1px solid rgba(0,0,0,.08)',
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(0,0,0,.05)',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
          padding: '22px 28px',
          background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{
          fontSize: 22, color: 'var(--jade)', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.25s',
          display: 'inline-block',
        }}>
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 28px 24px' }}>
          {item.a.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.8, margin: i > 0 ? '12px 0 0' : 0 }}>
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Section divider ────────────────────────────────────────────── */

function SectionHeading({ label }) {
  return (
    <Reveal>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
        <div style={{ flex: 1, height: 2, background: 'var(--jade)', opacity: 0.18, borderRadius: 2 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--jade)', whiteSpace: 'nowrap' }}>
          {label}
        </span>
        <div style={{ flex: 1, height: 2, background: 'var(--jade)', opacity: 0.18, borderRadius: 2 }} />
      </div>
    </Reveal>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function PreschoolCurriculumPage({ go }) {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #fff8f0 55%, #fff5f8 100%)',
          paddingBottom: 64,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 340, height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-kicker">Curriculum · 课程</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(42px, 6vw, 80px)', marginBottom: 20 }}>
            Learning with<br />purpose & joy.
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 560 }}>
            A thoughtfully designed bilingual curriculum that nurtures the whole child —
            intellectually, socially, emotionally, and physically.
          </p>

          {/* Quick-jump pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 36 }}>
            {[
              { label: 'Age Groups & Fees', id: 'levels' },
              { label: 'Our Programme',     id: 'programme' },
              { label: 'Why Yuquan',        id: 'why' },
              { label: 'FAQ',               id: 'faq' },
            ].map(pill => (
              <button
                key={pill.id}
                onClick={() => document.getElementById(pill.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{
                  padding: '9px 20px', borderRadius: 999,
                  border: '2px solid var(--jade)',
                  background: 'transparent', color: 'var(--jade)',
                  fontWeight: 700, fontSize: 13, cursor: 'pointer',
                  transition: 'all 0.18s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--jade)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--jade)'; }}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Age Groups & Fees ─────────────────────────────────── */}
      <section id="levels" className="section" style={{ scrollMarginTop: 88 }}>
        <div className="container">
          <SectionHeading label="Programme Levels & Age Groups" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28,
            maxWidth: 900,
            margin: '0 auto 0',
          }}>
            {/* Age groups table */}
            <Reveal>
              <div style={{
                background: '#fff',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,.07)',
                border: '1px solid rgba(0,0,0,.06)',
              }}>
                <div style={{ background: 'var(--jade)', padding: '16px 24px' }}>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 15, margin: 0, letterSpacing: '0.04em' }}>Age Groups</p>
                </div>
                {LEVELS.map((l, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '14px 24px',
                    background: i % 2 === 0 ? '#fff' : 'var(--jade-mist)',
                    borderBottom: i < LEVELS.length - 1 ? '1px solid rgba(0,0,0,.05)' : 'none',
                  }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{l.name}</span>
                    <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{l.age}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Fees table */}
            <Reveal delay={80}>
              <div style={{
                background: '#fff',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,.07)',
                border: '1px solid rgba(0,0,0,.06)',
              }}>
                <div style={{ background: '#f57f17', padding: '16px 24px' }}>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 15, margin: 0, letterSpacing: '0.04em' }}>School Fees</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#fff8e1' }}>
                  {['Level', 'Session', 'Full Fee'].map(h => (
                    <div key={h} style={{ padding: '12px 16px', fontSize: 12, fontWeight: 800, color: '#f57f17', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid rgba(245,127,23,.2)' }}>{h}</div>
                  ))}
                </div>
                {FEES.map((f, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                    background: i % 2 === 0 ? '#fff' : '#fff8f0',
                    borderBottom: i < FEES.length - 1 ? '1px solid rgba(0,0,0,.05)' : 'none',
                  }}>
                    <div style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{f.level}</div>
                    <div style={{ padding: '14px 16px', fontSize: 14, color: 'var(--ink-soft)' }}>{f.session}</div>
                    <div style={{ padding: '14px 16px', fontSize: 15, fontWeight: 800, color: '#f57f17' }}>{f.fee}</div>
                  </div>
                ))}
                <div style={{ padding: '14px 20px', background: '#fff8e1' }}>
                  <p style={{ fontSize: 12, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>
                    * Fees are before government subsidies. Please enquire for subsidy eligibility.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our Programme ─────────────────────────────────────── */}
      <section id="programme" className="section" style={{ scrollMarginTop: 88, background: 'var(--paper)' }}>
        <div className="container">
          <SectionHeading label="Our Programme" />

          {/* Core subjects */}
          <Reveal>
            <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: 'var(--jade)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Core Subjects
            </p>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 12,
              justifyContent: 'center', maxWidth: 760, margin: '0 auto 48px',
            }}>
              {SUBJECTS.map((s, i) => (
                <span key={i} style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  background: '#fff',
                  border: '1.5px solid rgba(0,0,0,.1)',
                  fontSize: 14, fontWeight: 600, color: 'var(--ink)',
                  boxShadow: '0 2px 8px rgba(0,0,0,.05)',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Special programmes */}
          <Reveal>
            <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#f57f17', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
              Special Programmes <span style={{ fontWeight: 400, color: 'var(--ink-soft)', textTransform: 'none', letterSpacing: 0 }}>— included, no extra charge</span>
            </p>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 14,
              justifyContent: 'center', maxWidth: 680, margin: '0 auto',
            }}>
              {SPECIAL.map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '12px 22px',
                  borderRadius: 999,
                  background: '#fff8e1',
                  border: '1.5px solid rgba(245,127,23,.25)',
                  fontSize: 14, fontWeight: 700, color: 'var(--ink)',
                }}>
                  <span style={{ fontSize: 18 }}>{s.emoji}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Yuquan ────────────────────────────────────────── */}
      <section id="why" className="section" style={{ scrollMarginTop: 88 }}>
        <div className="container">
          <SectionHeading label="Why Choose Yuquan Preschool?" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
            maxWidth: 1000,
            margin: '0 auto',
          }}>
            {WHY.map((w, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{
                  background: '#fff',
                  borderRadius: 'var(--r-xl)',
                  padding: '28px 28px 32px',
                  boxShadow: '0 4px 20px rgba(0,0,0,.06)',
                  border: '1px solid rgba(0,0,0,.06)',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 'var(--r-md)',
                    background: w.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26, marginBottom: 16,
                  }}>
                    {w.emoji}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18, fontWeight: 800,
                    color: w.accent, margin: '0 0 10px',
                  }}>
                    {w.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.8, margin: 0 }}>
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="section" style={{ scrollMarginTop: 88, background: 'var(--paper)' }}>
        <div className="container">
          <SectionHeading label="Frequently Asked Questions" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 820, margin: '0 auto' }}>
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <FaqItem item={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Ready to enrol?</h2>
              <p>Come visit us and see our curriculum in action.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => go('preschool-contact')}>
                  Enquire Now <span className="btn-arrow">→</span>
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => go('preschool-location')}
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}
                >
                  Find Us
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
