/**
 * SharedSections
 * Sections appended to both PreschoolPage and LanguageSchoolPage:
 * Pillars → Stats → A Day at Yuquan → Parent Voices → Founder → In The Press → CTA
 */
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { IMG, PS } from '../data/images';
import Reveal from './Reveal';
import Founder from './Founder';

const DEFAULT_TESTIMONIALS = [
  { q: 'My daughter sings in Mandarin in the bath now. We have NO IDEA where she learnt it — but Yuquan, thank you.',
    name: 'Priya & Arjun', role: 'Parent · K2', color: 'var(--peach-deep)', tag: 'Since 2023' },
  { q: "The teachers actually know my son. Not 'one of 30' — they know how he likes his apples cut.",
    name: 'Wei Ling', role: 'Parent · Nursery', color: 'var(--jade)', tag: 'Since 2024' },
  { q: "Drop-off used to be tears. Now it's a sprint into class. The vibe here is just… warm.",
    name: 'Tom & Mira', role: 'Parent · Pre-Nursery', color: 'var(--lavender-deep)', tag: 'Since 2025' },
];

/* Expandable testimonial card — collapsed shows an excerpt, click reveals the
   full review with a smooth height animation. */
const TESTI_COLLAPSED_H = 150;

function TestiCard({ t }) {
  const [open, setOpen] = useState(false);
  const [fullH, setFullH] = useState(0);
  const [overflowing, setOverflowing] = useState(false);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = innerRef.current;
      if (!el) return;
      setFullH(el.scrollHeight);
      setOverflowing(el.scrollHeight > TESTI_COLLAPSED_H + 8);
    };
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [t.q]);

  const toggle = () => {
    if (!overflowing) return;
    if (innerRef.current) setFullH(innerRef.current.scrollHeight);
    setOpen(o => !o);
  };

  return (
    <div
      className="testi"
      onClick={toggle}
      role={overflowing ? 'button' : undefined}
      tabIndex={overflowing ? 0 : undefined}
      aria-expanded={overflowing ? open : undefined}
      onKeyDown={e => {
        if (overflowing && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(); }
      }}
      style={{ cursor: overflowing ? 'pointer' : 'default' }}
    >
      <div className="testi-tag">{t.tag}</div>
      <div style={{
        position: 'relative',
        maxHeight: open ? fullH : TESTI_COLLAPSED_H,
        overflow: 'hidden',
        transition: 'max-height 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
        marginBottom: 14,
      }}>
        <p className="testi-quote" ref={innerRef} style={{ marginBottom: 0, whiteSpace: 'pre-line' }}>"{t.q}"</p>
        {!open && overflowing && (
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: 56,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), var(--paper))',
            pointerEvents: 'none',
          }} />
        )}
      </div>
      {overflowing && (
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5,
          color: 'var(--jade)', marginBottom: 18,
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          {open ? 'Show less' : 'Read full review'}
          <span aria-hidden="true" style={{
            display: 'inline-block', transition: 'transform 0.35s ease',
            transform: open ? 'rotate(180deg)' : 'none',
          }}>↓</span>
        </div>
      )}
      <div className="testi-person">
        <div className="testi-avatar" style={{ background: t.color }}>{t.name[0]}</div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

/* Horizontal carousel of testimonial cards — arrows + dots, scroll-snap.
   Shows every review; slide through them on any screen size. */
function TestimonialCarousel({ items }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = () => {
    const track = trackRef.current;
    const slide = track && track.querySelector('.testi-slide');
    return slide ? slide.getBoundingClientRect().width + 22 : (track ? track.clientWidth : 300);
  };

  const update = () => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    const maxScroll = track.scrollWidth - track.clientWidth;
    setActive(Math.round(track.scrollLeft / s));
    setPages(maxScroll <= 2 ? 1 : Math.round(maxScroll / s) + 1);
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= maxScroll - 2);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [items.length]);

  const move = dir => trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });
  const goTo = i => trackRef.current?.scrollTo({ left: i * step(), behavior: 'smooth' });

  return (
    <div className="testi-carousel">
      <div className="testi-track" ref={trackRef}>
        {items.map((t, i) => (
          <div className="testi-slide" key={i}>
            <TestiCard t={t} />
          </div>
        ))}
      </div>

      {pages > 1 && (
        <div className="testi-controls">
          <button className="testi-arrow" onClick={() => move(-1)} disabled={atStart} aria-label="Previous reviews">←</button>
          <div className="testi-dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={`testi-dot${i === active ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>
          <button className="testi-arrow" onClick={() => move(1)} disabled={atEnd} aria-label="More reviews">→</button>
        </div>
      )}
    </div>
  );
}

export default function SharedSections({ fireConfetti, testimonials = DEFAULT_TESTIMONIALS }) {
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
                { tag: 'Morning circle · 早安圈', src: PS.daily.morning },
                { tag: 'Friends · 好朋友',         src: PS.daily.friends },
                { tag: 'Story time · 故事时间',    src: PS.daily.story },
                { tag: 'Garden day · 花园日',      src: PS.daily.garden },
                { tag: 'Chinese class · 中文课',   src: PS.daily.chinese },
                { tag: 'Composition · 作文',       src: PS.daily.composition },
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
          <Reveal>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
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
