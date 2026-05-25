import { useState } from 'react';
import { IMG } from '../data/images';
import Reveal from '../components/Reveal';

/* ─── Data ──────────────────────────────────────────────────────── */

const PROGRAMMES = [
  {
    id: 'hanxuele',
    name: 'Hanxuele (Happy Chinese)',
    subtitle: 'Character Recognition & Reading Camp',
    emoji: '📖',
    color: '#e8f5e9',
    accent: '#2e7d32',
    image: IMG.kindergarten,
    desc: 'A structured programme designed to strengthen students\' character recognition and reading abilities, helping them build strong Chinese literacy foundations. Through engaging activities and progressive learning, students develop the confidence to read independently.',
    tags: ['Preschool', 'Primary 1–3', 'All Levels'],
  },
  {
    id: 'psle',
    name: 'PSLE Intensive Programme',
    subtitle: 'Primary 6 Exam Preparation',
    emoji: '🎯',
    color: '#fff3e0',
    accent: '#e65100',
    image: IMG.tuition[0],
    desc: 'A focused preparation programme designed to strengthen key PSLE components, including comprehension, composition, oral, and exam strategies. Students receive targeted coaching that builds both skill and confidence heading into the national exam.',
    tags: ['Primary 6', 'Exam Prep', 'Intensive'],
  },
  {
    id: 'publicspeaking',
    name: 'Public Speaking Camp',
    subtitle: 'Confident Expression in Chinese',
    emoji: '🎤',
    color: '#f3e5f5',
    accent: '#6a1b9a',
    image: IMG.students[1],
    desc: 'A dynamic programme that develops students\' confidence in expression, presentation skills, and effective communication in Chinese. Students learn to articulate ideas clearly, handle questions on the spot, and express themselves with poise.',
    tags: ['Primary', 'Secondary', 'Communication'],
  },
  {
    id: 'pinyin',
    name: 'Hanyu Pinyin Class',
    subtitle: 'Pinyin Intensive Programme',
    emoji: '🔤',
    color: '#e3f2fd',
    accent: '#1565c0',
    image: IMG.students[2],
    desc: 'A systematic course designed to help students quickly master Hanyu Pinyin, building a strong foundation for pronunciation, reading, and independent learning. Ideal for new learners or those who need to consolidate their phonetics before primary school.',
    tags: ['Preschool', 'Primary 1–2', 'Foundation'],
  },
  {
    id: 'culture',
    name: 'Chinese Culture Camp',
    subtitle: 'Immersive Cultural Experience',
    emoji: '🏮',
    color: '#fce4ec',
    accent: '#b71c1c',
    image: IMG.students[0],
    desc: 'Through hands-on crafts and engaging cultural activities, students immerse themselves in Chinese culture while learning through meaningful experiences. The programme nurtures curiosity and fosters a deeper interest in the Chinese language and cultural heritage.',
    tags: ['All Ages', 'Cultural', 'Hands-On'],
  },
];

const EVENTS = [
  {
    year: '2016',
    zh: '第一届全国成语大赛',
    en: '1st National Chinese Idiom Competition',
    emoji: '🏆',
    color: '#fff8e1',
    accent: '#f57f17',
    desc: 'Co-organised with Mediacorp Capital 95.8FM and Nanyang Girls\' High School, this landmark competition attracted over 1,200 participants in the preliminary round — one of Singapore\'s most prominent Chinese language competitions that year. Challenges covered idiom comprehension, practical usage, cultural knowledge, and language expression.',
  },
  {
    year: '2011',
    zh: '快速阅读训练营',
    en: 'Chinese Speed Reading Holiday Camp',
    emoji: '⚡',
    color: '#e3f2fd',
    accent: '#1565c0',
    desc: 'Two sessions held at Republic Polytechnic attracted over 700 participants from primary school to adult learners. Participants learned to dramatically improve reading speed — from an average of 200–300 characters per minute to 2,000+ characters per minute — while maintaining comprehension.',
  },
  {
    year: '2007',
    zh: '小学生三天华语训练营',
    en: 'Primary School Chinese Training Camp',
    emoji: '🌟',
    color: '#e8f5e9',
    accent: '#2e7d32',
    desc: 'Co-organised with Mediacorp Capital 95.8FM, the three-day camp attracted over 300 primary school students. Students mastered 40 Chinese idioms in three days through engaging activities, while Capital 95.8FM hosts Wu Jieling, Zeng Shenglian, Liang Ping, and Xu Bing joined students in reading and recording idioms.',
  },
];

const FAQS = [
  {
    q: 'Who are the holiday programmes suitable for?',
    a: 'Our holiday programmes cater to a wide range of learners — from preschoolers and primary school students to secondary students and adults. Each programme is clearly labelled with the recommended age group or level.',
  },
  {
    q: 'When do the holiday programmes run?',
    a: 'Programmes are held during Singapore school holidays — including March, June, September, and December holidays. Dates and schedules are announced a few weeks before each school holiday period.',
  },
  {
    q: 'How many students are in each class?',
    a: 'We keep class sizes small — typically 8 to 12 students — to ensure every child receives personalised attention and meaningful engagement throughout the camp.',
  },
  {
    q: 'Do I need to be an existing Yuquan student to enrol?',
    a: 'Not at all! Our holiday programmes are open to all students, whether or not they attend our regular classes. They are a great way to experience Yuquan before committing to a full-term programme.',
  },
  {
    q: 'What languages are used during the programmes?',
    a: 'Our holiday programmes are taught primarily in Chinese (Mandarin), though our teachers are bilingual and will support younger or less confident learners in English when needed.',
  },
  {
    q: 'How do I register?',
    a: 'You can register by contacting any of our centres directly via phone, WhatsApp, or email. Our team will help you select the most suitable programme for your child and confirm enrolment.',
  },
];

/* ─── Scroll helper ─────────────────────────────────────────────── */

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

/* ─── FAQ Item ──────────────────────────────────────────────────── */

function FaqItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      border: '1px solid rgba(0,0,0,.08)',
      background: '#fff',
      marginBottom: 12,
      boxShadow: open ? '0 4px 20px rgba(0,0,0,.08)' : '0 1px 4px rgba(0,0,0,.04)',
      transition: 'box-shadow 0.25s',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
          padding: '20px 24px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, flex: 1 }}>{q}</span>
        <span style={{
          fontSize: 20, color: 'var(--jade)', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.25s',
          lineHeight: 1,
        }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 22px', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, margin: '16px 0 0' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function HolidayProgrammesPage({ fireConfetti }) {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(80px, 10vw, 130px) 0 clamp(48px, 6vw, 72px)',
        background: 'linear-gradient(160deg, #fff9ee 0%, #fef3f3 50%, #f0f8ff 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: '#F5A623', opacity: 0.08 }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: '#e91e63', opacity: 0.06 }} />
        <div style={{ position: 'absolute', top: 60, right: '10%', width: 120, height: 120, borderRadius: '50%', background: '#2e7d32', opacity: 0.07 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <span className="section-kicker" style={{ marginBottom: 16 }}>Holiday Programmes</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)', marginBottom: 24, lineHeight: 1.1 }}>
              Learn more.<br />
              <span style={{ color: 'var(--jade)' }}>Discover more.</span>
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              maxWidth: 680,
              margin: '0 auto 44px',
            }}>
              Thoughtfully curated programmes combining structured language development with
              meaningful experiential activities — building stronger foundations, key skills,
              and a lasting love for Chinese language and culture.
            </p>

            {/* Quick-jump pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {PROGRAMMES.map(p => (
                <button
                  key={p.id}
                  onClick={() => scrollTo(`hp-${p.id}`)}
                  style={{
                    padding: '9px 18px',
                    borderRadius: 999,
                    border: `2px solid ${p.accent}`,
                    background: p.color,
                    color: p.accent,
                    fontWeight: 700, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = p.accent; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = p.color; e.currentTarget.style.color = p.accent; }}
                >
                  {p.emoji} {p.name.split('(')[0].trim()}
                </button>
              ))}
              <button
                onClick={() => scrollTo('hp-achievements')}
                style={{
                  padding: '9px 18px', borderRadius: 999,
                  border: '2px solid #455a64',
                  background: '#eceff1', color: '#455a64',
                  fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#455a64'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#eceff1'; e.currentTarget.style.color = '#455a64'; }}
              >
                🏅 Achievements
              </button>
              <button
                onClick={() => scrollTo('hp-faq')}
                style={{
                  padding: '9px 18px', borderRadius: 999,
                  border: '2px solid var(--jade)',
                  background: 'var(--jade-mist)', color: 'var(--jade)',
                  fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--jade)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--jade-mist)'; e.currentTarget.style.color = 'var(--jade)'; }}
              >
                ❓ FAQ
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Programme Sections ───────────────────────────────── */}
      {PROGRAMMES.map((prog, idx) => (
        <section
          key={prog.id}
          id={`hp-${prog.id}`}
          style={{
            padding: 'clamp(56px, 7vw, 88px) 0',
            background: idx % 2 === 0 ? 'transparent' : 'var(--paper)',
            scrollMarginTop: 88,
          }}
        >
          <div className="container">
            <Reveal>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(28px, 5vw, 64px)',
                alignItems: 'center',
              }}>
                {/* Image */}
                <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                  <div style={{
                    borderRadius: 'var(--r-xl)', overflow: 'hidden',
                    boxShadow: '0 16px 48px rgba(0,0,0,.12)',
                    aspectRatio: '4/3', background: prog.color, position: 'relative',
                  }}>
                    <img src={prog.image} alt={prog.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                    {/* Floating badge */}
                    <div style={{
                      position: 'absolute', top: 16, left: 16,
                      background: '#fff', borderRadius: 999,
                      padding: '6px 14px',
                      fontSize: 13, fontWeight: 700, color: prog.accent,
                      boxShadow: '0 2px 12px rgba(0,0,0,.12)',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      {prog.emoji} Holiday Programme
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {prog.tags.map(t => (
                      <span key={t} style={{
                        padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700,
                        background: prog.color, color: prog.accent,
                        border: `1px solid ${prog.accent}33`,
                      }}>{t}</span>
                    ))}
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(26px, 3.2vw, 40px)',
                    fontWeight: 700, color: 'var(--ink)',
                    lineHeight: 1.2, marginBottom: 8,
                  }}>
                    {prog.name}
                  </h2>
                  <p style={{
                    fontSize: 15, fontWeight: 600, color: prog.accent,
                    marginBottom: 20, letterSpacing: '0.01em',
                  }}>
                    {prog.subtitle}
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 28 }}>
                    {prog.desc}
                  </p>

                  <button
                    className="btn btn-primary"
                    style={{ background: prog.accent, borderColor: prog.accent }}
                    onClick={fireConfetti}
                  >
                    Enquire Now <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── Achievements ─────────────────────────────────────── */}
      <section id="hp-achievements" style={{ padding: 'clamp(56px, 7vw, 88px) 0', background: 'var(--paper)', scrollMarginTop: 88 }}>
        <div className="container">

          {/* HSK Achievements */}
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-kicker">Our Achievements</span>
              <h2 className="section-title">Results Speak for Themselves</h2>
            </div>
          </Reveal>

          <Reveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 28, marginBottom: 56,
            }}>
              {/* HSK card */}
              <div style={{
                background: 'linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%)',
                borderRadius: 'var(--r-xl)', padding: 36,
                border: '1px solid #f9a825aa',
                boxShadow: '0 4px 24px rgba(0,0,0,.06)',
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🏅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
                  HSK Achievements
                </h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 20 }}>
                  At Yuquan, we focus on developing genuine Chinese language proficiency rather than
                  relying solely on examination training. With strong systematic foundations, many
                  students achieve outstanding HSK results — even without specialised HSK prep.
                </p>
                <div style={{ borderTop: '1px solid rgba(0,0,0,.08)', paddingTop: 20 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#f57f17', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Remarkable Results
                  </p>
                  {[
                    { name: 'Liu Yanying (age 6)', result: 'HSK Level 4 · 244/300', note: 'Adult-level exam' },
                    { name: 'Liu Shanling (age 4)', result: 'HSK Level 1 · 186/200', note: 'Adult-level exam' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      padding: '12px 16px', background: '#fff', borderRadius: 'var(--r-md)',
                      marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      flexWrap: 'wrap', gap: 8, boxShadow: '0 1px 6px rgba(0,0,0,.06)',
                    }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{s.name}</p>
                        <p style={{ fontSize: 12, color: 'var(--ink-soft)', margin: 0 }}>{s.note}</p>
                      </div>
                      <span style={{
                        padding: '4px 12px', borderRadius: 999, fontSize: 13, fontWeight: 700,
                        background: '#fff8e1', color: '#f57f17', border: '1px solid #f9a82555',
                      }}>{s.result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What HSK means */}
              <div style={{
                background: '#fff', borderRadius: 'var(--r-xl)', padding: 36,
                border: '1px solid rgba(0,0,0,.07)', boxShadow: '0 4px 24px rgba(0,0,0,.06)',
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🌏</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
                  What HSK Means
                </h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 24 }}>
                  HSK is the globally recognised benchmark for Chinese language proficiency. Our students achieve these milestones as a natural outcome of authentic, long-term language mastery.
                </p>
                {[
                  { level: 'HSK Level 4–5', desc: 'Qualifies students to apply for programmes taught in Chinese at universities in China' },
                  { level: 'HSK Level 5+', desc: 'Indicates ability to study and work effectively in a Chinese-speaking environment' },
                ].map((h, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    padding: '16px 0', borderBottom: i < 1 ? '1px solid rgba(0,0,0,.07)' : 'none',
                  }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700,
                      background: 'var(--jade-soft)', color: 'var(--jade)',
                      flexShrink: 0, whiteSpace: 'nowrap',
                    }}>{h.level}</span>
                    <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Events */}
          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>Past Events</h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {EVENTS.map((ev, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--r-xl)', overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,.07)', border: '1px solid rgba(0,0,0,.07)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,.07)'; }}
                >
                  <div style={{ background: ev.color, padding: '24px 24px 20px', borderBottom: `3px solid ${ev.accent}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{ fontSize: 28 }}>{ev.emoji}</span>
                      <span style={{
                        fontSize: 13, fontWeight: 800, color: ev.accent,
                        padding: '3px 10px', background: '#fff', borderRadius: 999,
                        boxShadow: '0 1px 6px rgba(0,0,0,.08)',
                      }}>{ev.year}</span>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1.3 }}>{ev.en}</h3>
                    <p style={{ fontSize: 14, color: ev.accent, margin: '4px 0 0', fontWeight: 600 }}>{ev.zh}</p>
                  </div>
                  <div style={{ padding: 24 }}>
                    <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>{ev.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="hp-faq" style={{ padding: 'clamp(56px, 7vw, 88px) 0', scrollMarginTop: 88 }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-kicker">FAQs</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 540, margin: '0 auto' }}>
                Everything you need to know about our holiday programmes.
              </p>
            </div>
          </Reveal>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <FaqItem q={faq.q} a={faq.a} idx={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Ready to enrol this holiday?</h2>
              <p>Spaces are limited. Contact us to secure your child's spot before the holiday period.</p>
              <button className="btn btn-primary" onClick={fireConfetti}>
                Enquire Now <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
