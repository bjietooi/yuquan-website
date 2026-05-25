import { useEffect, useRef } from 'react';
import { IMG } from '../data/images';
import Reveal from '../components/Reveal';

/* ─── Data ──────────────────────────────────────────────────────── */

const PROGRAMMES = [
  {
    id: 'preschool',
    level: 'Preschool',
    range: 'Nursery to Kindergarten',
    emoji: '🌱',
    color: '#e8f5e9',
    accent: '#4caf50',
    tagline: 'Building foundations through joyful learning',
    image: IMG.kindergarten,
    body: 'Designed for the preschool years, our Happy Chinese Curriculum builds strong foundations through joyful learning — guiding children towards early character recognition and independent reading, and preparing them confidently for primary school.',
    courses: [
      { label: 'N1, N2, K1, K2', desc: 'Chinese Literacy and Reading Programme' },
      { label: 'K2', desc: 'Primary 1 Preparation Class (Hanyu Pinyin)' },
    ],
  },
  {
    id: 'primary',
    level: 'Primary',
    range: 'Primary 1 to Primary 6',
    emoji: '📚',
    color: '#fff8e1',
    accent: '#f9a825',
    tagline: 'Strengthening literacy and confidence',
    image: IMG.tuition[0],
    body: 'During the primary years, we deepen literacy and reading foundations in alignment with the MOE syllabus, systematically developing exam skills to equip students to approach the PSLE with confidence.',
    courses: [
      { label: 'P1', desc: 'Hanyu Pinyin, Character Recognition, Reading, and Comprehension Practice' },
      { label: 'P2, P3, P4, P5', desc: 'Comprehension, Oral, and Composition' },
      { label: 'P6', desc: 'PSLE Intensive Programme' },
    ],
  },
  {
    id: 'secondary',
    level: 'Secondary',
    range: 'Secondary 1 to Secondary 4',
    emoji: '🎯',
    color: '#e8eaf6',
    accent: '#5c6bc0',
    tagline: 'Developing advanced language and academic skills',
    image: IMG.tuition[1],
    body: 'In the secondary years, we adopt clear strategies and effective methods to support students through the critical O-Level phase. With targeted training and systematic preparation, we help students improve efficiently and achieve stronger results.',
    courses: [
      { label: 'S1, S2, S3, S4', desc: 'Comprehension and Composition' },
    ],
  },
  {
    id: 'adult',
    level: 'Adult',
    range: 'All proficiency levels',
    emoji: '👤',
    color: '#fce4ec',
    accent: '#e91e63',
    tagline: 'Real conversational ability at any stage of life',
    image: IMG.students[0],
    body: 'Our adult programme is designed for anyone wanting to build real conversational ability, improve reading, or prepare for proficiency tests like the HSK. Whether you are a beginner or looking to refine fluency, we meet you where you are and help you grow.',
    courses: [
      { label: 'Beginner – Intermediate', desc: 'Conversational Chinese and Reading Foundations' },
      { label: 'Advanced', desc: 'HSK Preparation and Business Chinese' },
    ],
  },
];

const COMMITMENTS = [
  { icon: '🏅', text: 'High-quality, research-based Chinese language education' },
  { icon: '😄', text: 'Fun and engaging learning experiences' },
  { icon: '📈', text: 'Strong academic outcomes' },
  { icon: '💬', text: 'Long-term language confidence' },
];

/* ─── Scroll helper ─────────────────────────────────────────────── */

export function scrollToProgramme(id) {
  const el = document.getElementById(`prog-${id}`);
  if (el) {
    const offset = 90; // nav height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

/* ─── Component ─────────────────────────────────────────────────── */

export default function ProgrammesPage({ fireConfetti, scrollToSection }) {
  const ranOnce = useRef(false);

  useEffect(() => {
    if (scrollToSection && !ranOnce.current) {
      ranOnce.current = true;
      // small delay so the page has painted
      setTimeout(() => scrollToProgramme(scrollToSection), 80);
    }
  }, [scrollToSection]);

  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <span className="section-kicker">Our Programmes</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 28 }}>
            A programme<br />for every stage.
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 760 }}>
            Yuquan understands the challenges a child faces at each academic level. As a child
            progresses from Preschool to Secondary, our curriculum is designed to build a solid
            foundation for each level — focusing not just on exams but on cultivating a genuine
            love for the Chinese language and culture.
          </p>

          {/* Quick-jump pills */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 40,
            justifyContent: 'center',
          }}>
            {PROGRAMMES.map(p => (
              <button
                key={p.id}
                onClick={() => scrollToProgramme(p.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 999,
                  border: `2px solid ${p.accent}`,
                  background: p.color,
                  color: p.accent,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = p.accent;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = p.color;
                  e.currentTarget.style.color = p.accent;
                }}
              >
                <span>{p.emoji}</span> {p.level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Commitment ───────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div style={{
              background: 'linear-gradient(135deg, var(--jade-mist) 0%, #fff 100%)',
              borderRadius: 'var(--r-xl)',
              padding: 'clamp(32px, 5vw, 56px)',
              border: '1px solid rgba(0,0,0,.05)',
              boxShadow: 'var(--shadow-soft)',
            }}>
              <span className="section-kicker">Our Commitment</span>
              <h2 className="section-title" style={{ marginBottom: 12 }}>
                25+ Years of Excellence
              </h2>
              <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: 700, marginBottom: 36 }}>
                With more than 25 years of excellence, Yuquan continues to be a trusted partner
                for parents seeking professional and effective Chinese language education for their children.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 20,
              }}>
                {COMMITMENTS.map((c, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14,
                      padding: '18px 20px',
                      background: '#fff',
                      borderRadius: 'var(--r-md)',
                      boxShadow: '0 2px 12px rgba(0,0,0,.06)',
                    }}>
                      <span style={{ fontSize: 24, lineHeight: 1 }}>{c.icon}</span>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5, margin: 0 }}>
                        {c.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Programme Sections ───────────────────────────────── */}
      {PROGRAMMES.map((prog, idx) => {
        const flip = idx % 2 === 1;
        return (
          <section
            key={prog.id}
            id={`prog-${prog.id}`}
            className="section"
            style={{
              paddingTop: 80,
              paddingBottom: 80,
              background: idx % 2 === 0 ? 'transparent' : 'var(--paper)',
            }}
          >
            <div className="container">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(32px, 6vw, 72px)',
                alignItems: 'center',
              }}>

                {/* Image side */}
                <Reveal delay={flip ? 120 : 0}>
                  <div style={{ order: flip ? 2 : 1 }}>
                    <div style={{
                      borderRadius: 'var(--r-xl)',
                      overflow: 'hidden',
                      boxShadow: '0 16px 48px rgba(0,0,0,.13)',
                      aspectRatio: '4/3',
                      background: prog.color,
                    }}>
                      <img
                        src={prog.image}
                        alt={prog.level}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Text side */}
                <Reveal delay={flip ? 0 : 120}>
                  <div style={{ order: flip ? 1 : 2 }}>
                    {/* Level badge */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10,
                      padding: '8px 18px',
                      background: prog.color,
                      borderRadius: 999,
                      marginBottom: 20,
                      border: `1.5px solid ${prog.accent}22`,
                    }}>
                      <span style={{ fontSize: 22 }}>{prog.emoji}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: prog.accent, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {prog.level} · {prog.range}
                      </span>
                    </div>

                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(28px, 3.5vw, 42px)',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      lineHeight: 1.2,
                      marginBottom: 16,
                    }}>
                      {prog.tagline}
                    </h2>

                    <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 32 }}>
                      {prog.body}
                    </p>

                    {/* Courses */}
                    <div style={{
                      background: '#fff',
                      borderRadius: 'var(--r-lg)',
                      border: `1px solid ${prog.accent}33`,
                      overflow: 'hidden',
                      boxShadow: '0 2px 12px rgba(0,0,0,.05)',
                    }}>
                      <div style={{
                        padding: '14px 20px',
                        background: prog.color,
                        borderBottom: `1px solid ${prog.accent}22`,
                      }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: prog.accent, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                          Courses Offered
                        </p>
                      </div>
                      {prog.courses.map((c, ci) => (
                        <div key={ci} style={{
                          display: 'flex', gap: 16,
                          padding: '16px 20px',
                          borderBottom: ci < prog.courses.length - 1 ? '1px solid rgba(0,0,0,.05)' : 'none',
                          alignItems: 'flex-start',
                        }}>
                          <span style={{
                            flexShrink: 0,
                            padding: '3px 10px',
                            background: prog.color,
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 700,
                            color: prog.accent,
                            whiteSpace: 'nowrap',
                          }}>
                            {c.label}
                          </span>
                          <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.5 }}>
                            {c.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Find the right programme for your child.</h2>
              <p>Book a trial class and let our teachers show you what's possible.</p>
              <button className="btn btn-primary" onClick={fireConfetti}>
                Book a trial class <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
