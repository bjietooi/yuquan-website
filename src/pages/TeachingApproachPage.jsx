import { useState } from 'react';
import Reveal from '../components/Reveal';

function VennDiagram() {
  // Geometry
  // L: cx=430 cy=260 r=190  →  spans x 240–620
  // R: cx=720 cy=260 r=190  →  spans x 530–910
  // Distance 290 < 380 (sum of radii) → overlaps 90px each side
  // Overlap centre x = (530+620)/2 = 575

  const CX_L = 430, CX_R = 720, CY = 260, R = 190;
  const EDGE_L = CX_L - R;   // 240 – left boundary
  const EDGE_R = CX_R + R;   // 910 – right boundary
  const OV_CX  = Math.round((CX_L + R + CX_R - R) / 2); // 575 – overlap centre

  const foundationPoints = [
    'Character Recognition',
    'Building Vocabulary',
    'Sentence Structure',
    'Reading Confidence',
  ];

  const schoolPoints = [
    'Exam Techniques',
    'Composition',
    'Comprehension',
    'Listening',
    'Oral',
  ];

  // Vertical centre for connector lines
  const LINE_Y = CY;
  // Left text right-edge / right text left-edge
  const TEXT_R_EDGE = EDGE_L - 18;  // 222
  const TEXT_L_EDGE = EDGE_R + 18;  // 928

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      {/* Subtitle as HTML */}
      <p style={{
        textAlign: 'center',
        fontSize: 'clamp(13px, 1.4vw, 17px)',
        fontWeight: 800,
        letterSpacing: '0.12em',
        color: '#1e2a22',
        marginBottom: 32,
        textTransform: 'uppercase',
      }}>
        Yuquan Dual-Track Chinese Learning System
      </p>

      <style>{`
        @keyframes vennFadeIn {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes vennFadeInR {
          from { opacity: 0; transform: translateX(6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .vp-l { opacity:0; animation: vennFadeIn  0.45s ease-out forwards; }
        .vp-r { opacity:0; animation: vennFadeInR 0.45s ease-out forwards; }
      `}</style>

      <svg
        viewBox="0 0 1150 560"
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ── Circles ─────────────────────────────── */}
        <circle cx={CX_L} cy={CY} r={R} fill="#F5A623" opacity="0.88" />
        <circle cx={CX_R} cy={CY} r={R} fill="#F9DC6E" opacity="0.85" />

        {/* ── Left label inside circle ─────────────── */}
        <text
          x={CX_L - 65} y={CY - 10}
          fontSize="18" fontWeight="800"
          fill="#fff" textAnchor="middle"
          fontStyle="italic" pointerEvents="none"
        >
          <tspan x={CX_L - 65} dy="0">FOUNDATION</tspan>
          <tspan x={CX_L - 65} dy="24">BUILDING</tspan>
        </text>

        {/* ── Right label inside circle ────────────── */}
        <text
          x={CX_R + 65} y={CY - 10}
          fontSize="18" fontWeight="800"
          fill="#5a3e00" textAnchor="middle"
          fontStyle="italic" pointerEvents="none"
        >
          <tspan x={CX_R + 65} dy="0">SCHOOL</tspan>
          <tspan x={CX_R + 65} dy="24">SYLLABUS</tspan>
        </text>

        {/* ── Centre: REAL CHINESE ABILITY ─────────── */}
        <text
          x={OV_CX} y={CY - 30}
          fontSize="22" fontWeight="900"
          fill="#1e2a22" textAnchor="middle"
          pointerEvents="none" letterSpacing="0.5"
        >
          <tspan x={OV_CX} dy="0">REAL</tspan>
          <tspan x={OV_CX} dy="26">CHINESE</tspan>
          <tspan x={OV_CX} dy="26">ABILITY</tspan>
        </text>

        {/* ── Dotted connector lines ───────────────── */}
        <line
          x1={TEXT_R_EDGE} y1={LINE_Y}
          x2={EDGE_L}      y2={LINE_Y}
          stroke="#aaa" strokeWidth="1.5"
          strokeDasharray="5,4"
        />
        <line
          x1={EDGE_R}      y1={LINE_Y}
          x2={TEXT_L_EDGE} y2={LINE_Y}
          stroke="#aaa" strokeWidth="1.5"
          strokeDasharray="5,4"
        />

        {/* ── Left points (outside, right-aligned) ─── */}
        {foundationPoints.map((pt, i) => {
          const total = foundationPoints.length;
          const startY = CY - ((total - 1) * 26) / 2;
          return (
            <text
              key={`l${i}`}
              x={TEXT_R_EDGE} y={startY + i * 26}
              fontSize="15" fontWeight="500"
              fill="#1e2a22" textAnchor="end"
              pointerEvents="none"
              className="vp-l"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {pt}
            </text>
          );
        })}

        {/* ── Right points (outside, left-aligned) ─── */}
        {schoolPoints.map((pt, i) => {
          const total = schoolPoints.length;
          const startY = CY - ((total - 1) * 26) / 2;
          return (
            <text
              key={`r${i}`}
              x={TEXT_L_EDGE} y={startY + i * 26}
              fontSize="15" fontWeight="500"
              fill="#1e2a22" textAnchor="start"
              pointerEvents="none"
              className="vp-r"
              style={{ animationDelay: `${i * 0.1 + 0.25}s` }}
            >
              {pt}
            </text>
          );
        })}

        {/* ── Bottom caption ───────────────────────── */}
        <text
          x={OV_CX} y={CY + R + 44}
          fontSize="15" fontWeight="600"
          fill="#555" textAnchor="middle"
          pointerEvents="none"
        >
          <tspan x={OV_CX} dy="0">Confident and Capable</tspan>
          <tspan x={OV_CX} dy="20">Chinese Learner</tspan>
        </text>
      </svg>
    </div>
  );
}

export default function TeachingApproachPage({ fireConfetti }) {
  const charRecognitionBenefits = [
    'Independent reading ability',
    'Exam confidence',
    'Writing fluency',
    'Long-term retention',
    'Conversational depth',
    'Cultural understanding',
    'Academic success',
    'Lifelong interest',
  ];

  const characterImportance = [
    { title: 'Unlocks Reading', desc: 'Recognize characters, read independently. No more waiting for an adult to decode the page.' },
    { title: 'Builds Confidence', desc: 'Success in reading translates to confidence. Confidence drives learners to read more, learn more.' },
    { title: 'Supports Writing', desc: 'Character knowledge is the foundation for writing. Understand structure, compose with intention.' },
    { title: 'Enables Exams', desc: 'PSLE, HSK, secondary exams — all built on character recognition and understanding.' },
  ];

  const personalisedQA = [
    { q: 'How do you know what my child needs?', a: 'We assess before we teach. Every student starts with placement testing so we know their exact level, strengths, and gaps. No guessing.' },
    { q: 'What if my child is ahead or behind?', a: 'Curriculum flexibility is built in. Smaller class sizes mean we move at each students pace, not the middle of the pack. Stretch the advanced, support the struggling.' },
  ];

  return (
    <div className="page">
      <section className="page-hero" style={{ paddingBottom: 80 }}>
        <div className="container">
          <span className="section-kicker">Our teaching approach</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)', marginBottom: 56 }}>
            Dual Track Chinese<br />Learning System
          </h1>

          <Reveal>
            <VennDiagram />
          </Reveal>
        </div>
      </section>

      {/* Dual Track */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 32 }}>
              Beyond School Syllabus: Building Real Chinese Ability from the Foundation
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 800, margin: '0 auto 48px' }}>
              At Yuquan, we believe that effective Chinese learning should not only help children cope with schoolwork and examinations, but also build the foundation for long-term language ability.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 1000, margin: '0 auto' }}>
              <div style={{
                padding: 40,
                background: 'linear-gradient(135deg, #e8c763 0%, #dab86d 100%)',
                borderRadius: 'var(--r-xl)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg) rotateY(-8deg)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              }}>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1e2a22',
                  marginBottom: 20,
                }}>
                  1. Foundation Building
                </h3>
                <p style={{
                  fontSize: 16,
                  color: '#1e2a22',
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>
                  We place strong emphasis on character recognition, because it is the foundation of Chinese language learning.
                </p>
                <p style={{
                  fontSize: 16,
                  color: '#1e2a22',
                  lineHeight: 1.6,
                }}>
                  Character recognition is not separate from school results. It directly affects reading, comprehension, writing, and long-term Chinese ability.
                </p>
              </div>

              <div style={{
                padding: 40,
                background: 'linear-gradient(135deg, #f4e4a0 0%, #f0d89b 100%)',
                borderRadius: 'var(--r-xl)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg) rotateY(8deg)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
              }}>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1e2a22',
                  marginBottom: 20,
                }}>
                  2. School Syllabus Support
                </h3>
                <p style={{
                  fontSize: 16,
                  color: '#1e2a22',
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>
                  We help students strengthen what they learn in school and excel in exams.
                </p>
                <p style={{
                  fontSize: 16,
                  color: '#1e2a22',
                  lineHeight: 1.6,
                }}>
                  This helps children keep up with school requirements and build confidence in their academic performance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Foundation Matters */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">The Foundation</span>
            <h2 className="section-title">Character Recognition is the Roof</h2>
            <p className="section-lede">
              Everything rests on this. A strong character foundation changes everything.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
            {charRecognitionBenefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  padding: 24,
                  background: 'var(--paper)',
                  borderRadius: 'var(--r-md)',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}>
                  <span style={{ color: 'var(--jade)', fontSize: 18, marginTop: 2 }}>✓</span>
                  <p style={{ fontSize: 15, color: 'var(--ink)', fontWeight: 600 }}>{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Character Recognition Matters */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>
              Why is character recognition important?
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, maxWidth: 1000, margin: '0 auto' }}>
            {characterImportance.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  padding: 32,
                  background: 'white',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid rgba(0,0,0,.06)',
                  boxShadow: 'var(--shadow-soft)',
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 12,
                    color: 'var(--ink)',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Learning */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Personalized</span>
            <h2 className="section-title">Every Student, Their Own Pace</h2>
          </Reveal>

          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {personalisedQA.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'var(--jade-mist)',
                    padding: '18px 24px',
                    borderRadius: 'var(--r-lg)',
                    marginBottom: 14,
                    borderLeft: '4px solid var(--jade)',
                  }}>
                    <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>
                      {item.q}
                    </p>
                  </div>
                  <div style={{
                    background: 'white',
                    padding: '20px 24px',
                    borderRadius: 'var(--r-lg)',
                    border: '1px solid rgba(0,0,0,.06)',
                  }}>
                    <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
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
              <h2>See our method in action.</h2>
              <p>Book a trial class. Watch how our teachers engage real learning, not just compliance.</p>
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
