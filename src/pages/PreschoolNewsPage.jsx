import { useState } from 'react';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';

/* ─── Tags ───────────────────────────────────────────────────────── */

const TAGS = [
  { id: 'all',           label: 'All',               color: '#1a1a2e', bg: '#f0f0f5' },
  { id: 'classroom',     label: 'Classroom Stories',  color: '#2e7d32', bg: '#e8f5e9' },
  { id: 'parenting',     label: 'Parenting Tips',     color: '#1565c0', bg: '#e3f2fd' },
  { id: 'events',        label: 'Events',             color: '#e65100', bg: '#fff3e0' },
  { id: 'announcements', label: 'Announcements',      color: '#6a1b9a', bg: '#f3e5f5' },
  { id: 'development',   label: 'Child Development',  color: '#c62828', bg: '#ffebee' },
  { id: 'press',         label: 'Press',              color: '#37474f', bg: '#eceff1' },
];

/* ─── Mock posts ─────────────────────────────────────────────────── */

const POSTS = [
  {
    id: 1,
    tag: 'classroom',
    featured: true,
    date: 'May 8, 2025',
    title: "When Kai Started Dreaming in Chinese: A Classroom Milestone",
    excerpt:
      "At four years old, Kai began narrating his dreams in Mandarin before switching to English mid-sentence. His teacher shares how it happened — and why it is one of the most exciting signs of true bilingual development we celebrate at Yuquan.",
    image: IMG.kindergarten,
    readTime: '4 min read',
  },
  {
    id: 2,
    tag: 'events',
    featured: false,
    date: 'Apr 22, 2025',
    title: "Mid-Autumn Festival: Lanterns, Mooncakes & Little Storytellers",
    excerpt:
      "Families gathered on a warm September evening as our K1 and K2 children retold the legend of Chang Er using shadow puppets they had crafted themselves. A magical night of culture and creativity.",
    image: IMG.students[0],
    readTime: '3 min read',
  },
  {
    id: 3,
    tag: 'parenting',
    featured: false,
    date: 'Apr 5, 2025',
    title: "5 Things You Can Do at Home to Support Your Child's Chinese",
    excerpt:
      "You do not need to speak Mandarin yourself to nurture it at home. Our head of curriculum shares five simple, playful habits — from bedtime audio stories to labelling kitchen items — that make a real difference between classes.",
    image: IMG.tuition[0],
    readTime: '5 min read',
  },
  {
    id: 4,
    tag: 'development',
    featured: false,
    date: 'Mar 18, 2025',
    title: "Why Messy Play is Serious Business: The Science of Sensory Learning",
    excerpt:
      "Paint-covered hands, sandpit excavations, water tables — these are not just fun. Research in early childhood development shows that sensory play builds neural pathways critical for language, maths, and emotional regulation.",
    image: IMG.students[1],
    readTime: '5 min read',
  },
  {
    id: 5,
    tag: 'announcements',
    featured: false,
    date: 'Mar 3, 2025',
    title: "Extended Hours Now Available: 7am – 7pm Monday to Friday",
    excerpt:
      "Following feedback from our parent community, we have extended our operating hours to 7am–7pm on weekdays. We hope this gives families greater flexibility without compromising on the warm, unhurried environment your child deserves.",
    image: IMG.tuition[1],
    readTime: '2 min read',
  },
  {
    id: 6,
    tag: 'classroom',
    featured: false,
    date: 'Feb 20, 2025',
    title: "Our Youngest Calligraphers: K1 Brush Painting Day",
    excerpt:
      "Armed with ink brushes and oversized rice paper, our Kindergarten 1 class spent the morning learning the basic strokes of Chinese calligraphy. The concentration on their faces — and the pride on the walls — said it all.",
    image: IMG.kindergarten,
    readTime: '3 min read',
  },
  {
    id: 7,
    tag: 'parenting',
    featured: false,
    date: 'Feb 6, 2025',
    title: "The Bilingual Advantage: What the Research Actually Says",
    excerpt:
      "Studies from MIT, UCL, and NUS consistently show that bilingual children develop stronger executive function, better multitasking, and earlier theory of mind. Here is what the science means for your child — and how Yuquan's approach is designed around it.",
    image: IMG.students[2],
    readTime: '6 min read',
  },
  {
    id: 8,
    tag: 'events',
    featured: false,
    date: 'Jan 25, 2025',
    title: "Chinese New Year Open House 2025: A Morning of Red, Gold & Laughter",
    excerpt:
      "Parents joined us for lion dances, red packet folding, and a very spirited round of 恭喜发财 sung by our Playgroup class. A wonderful way to ring in the Year of the Snake together.",
    image: IMG.students[0],
    readTime: '3 min read',
  },
  {
    id: 9,
    tag: 'development',
    featured: false,
    date: 'Jan 10, 2025',
    title: "Tones Before Texts: Why Mandarin Pronunciation Matters Most at Age 3",
    excerpt:
      "The tonal system of Mandarin is best acquired before age 7, when the auditory cortex is most plastic. Our early years specialists explain how we prioritise spoken fluency before introducing characters — and why this sequencing makes all the difference.",
    image: IMG.tuition[0],
    readTime: '5 min read',
  },
  {
    id: 10,
    tag: 'classroom',
    featured: false,
    date: 'Dec 10, 2024',
    title: "Our Annual Longkang Fishing Trip: Learning That Gets Your Feet Wet",
    excerpt:
      "Nets, boots, and buckets in hand, our K2 class headed out for their annual longkang fishing excursion. Back in class, they documented their catch in both English and Chinese — a lesson in science, language, and local heritage all at once.",
    image: IMG.kindergarten,
    readTime: '3 min read',
  },
  {
    id: 11,
    tag: 'announcements',
    featured: false,
    date: 'Nov 20, 2024',
    title: "Yuquan Preschool Awarded SPARK Certification by ECDA",
    excerpt:
      "We are proud to announce that Yuquan Preschool has been awarded SPARK (Supporting Preschools to Achieve SPARK) certification — a quality mark for early childhood centres in Singapore, recognising our curriculum, staff development, and learning environment.",
    image: IMG.students[1],
    readTime: '2 min read',
  },
  {
    id: 12,
    tag: 'press',
    featured: false,
    date: 'Nov 4, 2017',
    title: "Shin Min Daily: The Preschool Raising Singapore's Most Confident Bilingual Learners",
    excerpt:
      "新明日报 visits Yuquan Preschool and speaks with Mdm Song about the founding vision, the in-house curriculum, and why parents from across Singapore choose to make the journey to Guillemard.",
    image: IMG.press[0].src,
    readTime: '3 min read',
  },
];

/* ─── Tag badge ──────────────────────────────────────────────────── */

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

/* ─── Featured card ──────────────────────────────────────────────── */

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
              display: 'block', position: 'absolute', inset: 0,
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
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
            fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3, margin: 0,
          }}>
            {post.title}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, margin: 0 }}>
            {post.excerpt}
          </p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 14, fontWeight: 700, color: 'var(--jade)', marginTop: 4,
          }}>
            Read article{' '}
            <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Post card ──────────────────────────────────────────────────── */

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
          display: 'flex', flexDirection: 'column', height: '100%',
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', overflow: 'hidden', height: 200, flexShrink: 0 }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
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
            fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.4, margin: 0,
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
            marginTop: 'auto', paddingTop: 10,
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 13, fontWeight: 700, color: 'var(--jade)',
          }}>
            Read more{' '}
            <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>→</span>
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function PreschoolNewsPage() {
  const [activeTag, setActiveTag] = useState('all');

  const featured = POSTS.find(p => p.featured);
  const filtered = POSTS.filter(p => !p.featured && (activeTag === 'all' || p.tag === activeTag));

  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #fff8f0 45%, #fff5f8 100%)',
          paddingBottom: 72,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: -60, right: -60, width: 320, height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40, width: 240, height: 240,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,183,77,.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <span className="section-kicker">News & Resources · 新闻与资源</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 6vw, 78px)', marginBottom: 20 }}>
            Stories from<br />
            <span style={{ color: 'var(--jade)' }}>our little world.</span>
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 540 }}>
            Classroom moments, parenting insights, child development research, and
            the latest happenings from Yuquan Preschool.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            {[
              { num: '20+', label: 'Years of stories' },
              { num: '12',  label: 'Articles this year' },
              { num: '6',   label: 'Topics covered' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 800, color: 'var(--jade)', margin: '0 0 4px' }}>
                  {s.num}
                </p>
                <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: 0, fontWeight: 600 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky tag filter ─────────────────────────────────── */}
      <section style={{
        position: 'sticky', top: 72, zIndex: 10,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,.07)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '14px 0', overflowX: 'auto' }}>
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
                    fontWeight: 700, fontSize: 13,
                    cursor: 'pointer', whiteSpace: 'nowrap',
                    transition: 'all 0.18s', outline: 'none',
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured ──────────────────────────────────────────── */}
      {(activeTag === 'all' || activeTag === featured?.tag) && featured && (
        <section className="section" style={{ paddingBottom: 32 }}>
          <div className="container">
            <FeaturedCard post={featured} />
          </div>
        </section>
      )}

      {/* ── Grid ──────────────────────────────────────────────── */}
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
              maxWidth: 680, margin: '0 auto',
              background: 'linear-gradient(135deg, var(--jade) 0%, #2e7d32 100%)',
              borderRadius: 'var(--r-xl)',
              padding: 'clamp(36px, 5vw, 56px)',
              textAlign: 'center', color: '#fff',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200, borderRadius: '50%',
                border: '40px solid rgba(255,255,255,.08)',
                pointerEvents: 'none',
              }} />
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,.2)',
                borderRadius: 999, padding: '4px 14px',
                fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 16,
              }}>
                Stay in the Loop
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 4vw, 32px)',
                fontWeight: 700, margin: '0 0 14px', lineHeight: 1.3,
              }}>
                Get updates from<br />Yuquan Preschool
              </h2>
              <p style={{ fontSize: 15, opacity: 0.88, lineHeight: 1.7, margin: '0 0 28px', maxWidth: 400, marginInline: 'auto' }}>
                Classroom stories, parenting tips, and event invitations — once a month, no spam.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    padding: '13px 20px', borderRadius: 'var(--r-md)',
                    border: 'none', fontSize: 15, width: 250,
                    outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
                  }}
                />
                <button
                  className="btn"
                  style={{
                    background: '#fff', color: 'var(--jade)',
                    fontWeight: 800, padding: '13px 24px',
                    border: 'none', borderRadius: 'var(--r-md)',
                    fontSize: 15, cursor: 'pointer',
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
