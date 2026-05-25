import { useState } from 'react';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';

/* ─── Tag config ────────────────────────────────────────────────── */

const TAGS = [
  { id: 'all',           label: 'All',             color: '#1a1a2e',  bg: '#f0f0f5' },
  { id: 'student',       label: 'Student Stories',  color: '#1565c0',  bg: '#e3f2fd' },
  { id: 'tips',          label: 'Teaching Tips',    color: '#2e7d32',  bg: '#e8f5e9' },
  { id: 'events',        label: 'Events',           color: '#e65100',  bg: '#fff3e0' },
  { id: 'announcements', label: 'Announcements',    color: '#6a1b9a',  bg: '#f3e5f5' },
  { id: 'culture',       label: 'Chinese Culture',  color: '#c62828',  bg: '#ffebee' },
  { id: 'press',         label: 'Press',            color: '#37474f',  bg: '#eceff1' },
];

/* ─── Mock posts ─────────────────────────────────────────────────── */

const POSTS = [
  {
    id: 1,
    tag: 'student',
    featured: true,
    date: 'May 12, 2025',
    title: "From Preschool to HSK 4: Liu Yanying's Extraordinary Journey",
    excerpt:
      "At just 6 years old, Yanying became one of the youngest students in Singapore to pass HSK Level 4 with 244/300. Her mother shares how daily storytelling and Yuquan's immersive method made all the difference.",
    image: IMG.students[0],
    readTime: '5 min read',
  },
  {
    id: 2,
    tag: 'events',
    featured: false,
    date: 'Apr 28, 2025',
    title: 'Yuquan Dragon Boat Festival 2025: A Morning of Culture & Dumplings',
    excerpt:
      'Families gathered at our Beauty World centre to celebrate 端午节 with zongzi-making, dragon boat paper crafts, and a retelling of the Qu Yuan legend for young learners.',
    image: IMG.kindergarten,
    readTime: '3 min read',
  },
  {
    id: 3,
    tag: 'tips',
    featured: false,
    date: 'Apr 10, 2025',
    title: '5 Ways to Practise Mandarin at Home Without Flashcards',
    excerpt:
      'Flashcards have their place, but language acquisition thrives in context. Our lead curriculum designer shares five everyday habits — from labelling your fridge to bedtime audio stories — that keep Chinese alive between classes.',
    image: IMG.tuition[0],
    readTime: '4 min read',
  },
  {
    id: 4,
    tag: 'announcements',
    featured: false,
    date: 'Mar 25, 2025',
    title: 'New Saturday Intensive Slots Now Open at Marine Parade',
    excerpt:
      "By popular demand, we've opened additional Saturday morning slots for Primary and Secondary students at our Marine Parade centre. Spaces are limited — enquire early to secure your child's spot.",
    image: IMG.tuition[1],
    readTime: '2 min read',
  },
  {
    id: 5,
    tag: 'culture',
    featured: false,
    date: 'Mar 8, 2025',
    title: 'The Art of Chinese Calligraphy: More Than Beautiful Strokes',
    excerpt:
      'Calligraphy is woven into the very DNA of the Chinese language. We explore how learning brushwork helps students understand character structure, stroke order, and the philosophy behind each radical.',
    image: IMG.students[1],
    readTime: '6 min read',
  },
  {
    id: 6,
    tag: 'press',
    featured: false,
    date: 'Nov 4, 2017',
    title: "Shin Min Daily: The School That Raised Singapore's Youngest HSK Achievers",
    excerpt:
      "新明日报 spotlights Yuquan's unique curriculum and interviews the families of three record-breaking young students who achieved HSK certification before age eight.",
    image: IMG.press[0].src,
    readTime: '3 min read',
  },
  {
    id: 7,
    tag: 'tips',
    featured: false,
    date: 'Feb 20, 2025',
    title: 'Why Tones Matter: The Science Behind Mandarin Pitch Perception',
    excerpt:
      "Research shows that tonal discrimination is easiest to acquire before age 7. Here's what the neuroscience says — and how Yuquan's early-years programme is designed around this critical window.",
    image: IMG.students[2],
    readTime: '5 min read',
  },
  {
    id: 8,
    tag: 'student',
    featured: false,
    date: 'Feb 5, 2025',
    title: "I Used to Hate Chinese. Now It's My Favourite Subject. — Marcus, Age 14",
    excerpt:
      "Secondary student Marcus Wong shares his candid story: from dreading Chinese tuition to scoring A2 for O-Levels and voluntarily joining our Debate in Mandarin elective.",
    image: IMG.tuition[0],
    readTime: '4 min read',
  },
  {
    id: 9,
    tag: 'events',
    featured: false,
    date: 'Jan 18, 2025',
    title: 'Highlights from Our Chinese New Year Concert & Showcase 2025',
    excerpt:
      'Students from Nursery right through to Secondary performed original skits, recited Tang poetry, and wowed parents with a live 快板 beatbox performance. A night to remember.',
    image: IMG.kindergarten,
    readTime: '3 min read',
  },
  {
    id: 10,
    tag: 'culture',
    featured: false,
    date: 'Dec 12, 2024',
    title: 'The Story Behind 成语: Why Chinese Idioms Make Your Child Sound Brilliant',
    excerpt:
      'A single four-character idiom can replace an entire paragraph. We unpack five favourites — from 半途而废 to 一石二鸟 — and explain how Yuquan weaves them naturally into every level of instruction.',
    image: IMG.students[0],
    readTime: '5 min read',
  },
  {
    id: 11,
    tag: 'announcements',
    featured: false,
    date: 'Nov 28, 2024',
    title: 'Yuquan Earns EduTrust Certification Renewal for 2025–2028',
    excerpt:
      "We're proud to announce our third consecutive EduTrust certification — Singapore's quality mark for private education institutions — recognising our standards in curriculum, student welfare, and governance.",
    image: IMG.tuition[1],
    readTime: '2 min read',
  },
  {
    id: 12,
    tag: 'press',
    featured: false,
    date: 'Jul 3, 2003',
    title: 'Lianhe Wanbao: A Different Kind of Chinese School',
    excerpt:
      '联合晚报 visits our founding Beauty World centre and speaks with Principal Chen about the philosophy that set Yuquan apart from the very beginning — and why parents were willing to travel across Singapore for classes.',
    image: IMG.press[1].src,
    readTime: '3 min read',
  },
];

/* ─── Tag badge ─────────────────────────────────────────────────── */

function TagBadge({ tagId, small = false }) {
  const t = TAGS.find(t => t.id === tagId) || TAGS[0];
  return (
    <span style={{
      display: 'inline-block',
      padding: small ? '3px 10px' : '4px 13px',
      borderRadius: 999,
      background: t.bg,
      color: t.color,
      fontSize: small ? 11 : 12,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}>
      {t.label}
    </span>
  );
}

/* ─── Featured card ─────────────────────────────────────────────── */

function FeaturedCard({ post }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          background: '#fff',
          boxShadow: hovered ? '0 20px 56px rgba(0,0,0,.13)' : '0 4px 24px rgba(0,0,0,.08)',
          border: '1px solid rgba(0,0,0,.06)',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s, transform 0.3s',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 280 }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.5s ease',
              position: 'absolute', inset: 0,
            }}
          />
          {/* Featured pill */}
          <div style={{
            position: 'absolute', top: 16, left: 16,
            background: 'var(--jade)',
            color: '#fff',
            fontSize: 11, fontWeight: 800,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: 999,
            boxShadow: '0 2px 8px rgba(0,0,0,.2)',
          }}>
            ✦ Featured
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: 'clamp(28px, 4vw, 44px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <TagBadge tagId={post.tag} />
            <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{post.date}</span>
            <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>· {post.readTime}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.3,
            margin: 0,
          }}>
            {post.title}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, margin: 0 }}>
            {post.excerpt}
          </p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 14, fontWeight: 700, color: 'var(--jade)',
            marginTop: 4,
          }}>
            Read article <span style={{ fontSize: 16, transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}>→</span>
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Regular post card ─────────────────────────────────────────── */

function PostCard({ post, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          boxShadow: hovered ? '0 16px 40px rgba(0,0,0,.11)' : '0 2px 16px rgba(0,0,0,.06)',
          border: '1px solid rgba(0,0,0,.06)',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s, transform 0.3s',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', overflow: 'hidden', height: 200, flexShrink: 0 }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,.35) 0%, transparent 55%)',
          }} />
          <div style={{ position: 'absolute', bottom: 12, left: 14 }}>
            <TagBadge tagId={post.tag} small />
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{post.date}</span>
            <span style={{ fontSize: 12, color: 'rgba(0,0,0,.2)' }}>·</span>
            <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{post.readTime}</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 17,
            fontWeight: 700,
            color: 'var(--ink)',
            lineHeight: 1.4,
            margin: 0,
          }}>
            {post.title}
          </h3>
          <p style={{
            fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {post.excerpt}
          </p>
          <span style={{
            marginTop: 'auto',
            paddingTop: 10,
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 13, fontWeight: 700, color: 'var(--jade)',
          }}>
            Read more
            <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main page ─────────────────────────────────────────────────── */

export default function NewsPage() {
  const [activeTag, setActiveTag] = useState('all');

  const featured = POSTS.find(p => p.featured);
  const filtered = POSTS.filter(p => !p.featured && (activeTag === 'all' || p.tag === activeTag));

  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          paddingBottom: 72,
          background: 'linear-gradient(135deg, #f0fdf4 0%, #fafff7 40%, #fff8f0 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40,
          width: 240, height: 240, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,152,0,.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <span className="section-kicker">News & Resources</span>
          <h1
            className="hero-title"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 20 }}
          >
            Stories, tips &<br />
            <span style={{ color: 'var(--jade)' }}>everything Chinese.</span>
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 560 }}>
            Insights from our teachers, celebrations of student milestones, cultural deep-dives,
            and the latest news from our three centres.
          </p>

          {/* Stats strip */}
          <div style={{
            display: 'flex', gap: 32, flexWrap: 'wrap',
            marginTop: 40,
            justifyContent: 'center',
          }}>
            {[
              { num: '20+', label: 'Years of stories' },
              { num: '12', label: 'Articles this year' },
              { num: '3', label: 'Press features' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 36, fontWeight: 800,
                  color: 'var(--jade)', margin: '0 0 4px',
                }}>
                  {s.num}
                </p>
                <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: 0, fontWeight: 600 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tag filter bar ────────────────────────────────────── */}
      <section style={{ padding: '0 0 0', position: 'sticky', top: 72, zIndex: 10, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,.07)' }}>
        <div className="container">
          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap',
            padding: '14px 0',
            overflowX: 'auto',
          }}>
            {TAGS.map(t => {
              const active = activeTag === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTag(t.id)}
                  style={{
                    padding: '7px 18px',
                    borderRadius: 999,
                    border: `2px solid ${active ? t.color : 'rgba(0,0,0,.12)'}`,
                    background: active ? t.color : '#fff',
                    color: active ? '#fff' : 'var(--ink)',
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.18s',
                    outline: 'none',
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured post ─────────────────────────────────────── */}
      {(activeTag === 'all' || activeTag === featured?.tag) && featured && (
        <section className="section" style={{ paddingBottom: 32 }}>
          <div className="container">
            <FeaturedCard post={featured} />
          </div>
        </section>
      )}

      {/* ── Article grid ──────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: activeTag === 'all' ? 0 : undefined }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-soft)' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 17, fontWeight: 600 }}>No articles in this category yet.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 28,
            }}>
              {filtered.map((post, i) => (
                <PostCard key={post.id} post={post} delay={i * 60} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{
              maxWidth: 700,
              margin: '0 auto',
              background: 'linear-gradient(135deg, var(--jade) 0%, #2e7d32 100%)',
              borderRadius: 'var(--r-xl)',
              padding: 'clamp(36px, 5vw, 56px)',
              textAlign: 'center',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative ring */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200, borderRadius: '50%',
                border: '40px solid rgba(255,255,255,.08)',
                pointerEvents: 'none',
              }} />
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,.2)',
                borderRadius: 999,
                padding: '4px 14px',
                fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Stay Updated
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 34px)',
                fontWeight: 700,
                margin: '0 0 14px',
                lineHeight: 1.3,
              }}>
                Get our best articles<br />delivered to your inbox
              </h2>
              <p style={{ fontSize: 15, opacity: 0.88, lineHeight: 1.7, margin: '0 0 28px', maxWidth: 440, marginInline: 'auto' }}>
                Teaching tips, student milestones, cultural stories — once a month, no spam.
              </p>
              <div style={{
                display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap',
              }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    padding: '13px 20px',
                    borderRadius: 'var(--r-md)',
                    border: 'none',
                    fontSize: 15,
                    width: 260,
                    outline: 'none',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  className="btn"
                  style={{
                    background: '#fff',
                    color: 'var(--jade)',
                    fontWeight: 800,
                    padding: '13px 24px',
                    border: 'none',
                    borderRadius: 'var(--r-md)',
                    fontSize: 15,
                    cursor: 'pointer',
                  }}
                >
                  Subscribe →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
