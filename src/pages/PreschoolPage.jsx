import { IMG } from '../data/images';
import Reveal from '../components/Reveal';
import SharedSections from '../components/SharedSections';

export default function PreschoolPage({ go, fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Preschool · 幼儿园</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            A cosy bilingual<br />nest for tiny humans.
          </h1>
          <div className="hero-zh" style={{ marginTop: 18 }}>18 个月 — 6 岁</div>
          <p className="page-hero-lede">
            Four age groups, two languages, and an enormous amount of crayons.
            Every classroom is warm, lived-in, and built around how children
            actually grow.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 30 }}>
            <button className="btn btn-primary" onClick={fireConfetti}>
              Book a tour <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => go('language-school')}>
              See Language School
            </button>
          </div>
          <Reveal>
            <div className="hero-collage">
              <div className="collage-item"><img src={IMG.students[0]} alt="Yuquan child" /></div>
              <div className="collage-item"><img src={IMG.kindergarten} alt="Yuquan classroom" /></div>
              <div className="collage-item"><img src={IMG.students[2]} alt="Yuquan child" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Age groups */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">By age group</span>
            <h2 className="section-title">Right-sized rooms for every stage.</h2>
            <p className="section-lede">
              Each room is its own little universe — paced, scaled, and styled
              for the children who live in it.
            </p>
          </Reveal>
          <div className="age-cards">
            {[
              { cls: 'c1', num: '18', small: 'mo', name: 'Playgroup',       zh: '幼儿班', tag: 'Half-day' },
              { cls: 'c2', num: '3',  small: 'yr', name: 'Nursery',         zh: '幼一班', tag: 'Half / Full' },
              { cls: 'c3', num: '4',  small: 'yr', name: 'Kindergarten 1',  zh: '幼二班', tag: 'Half / Full' },
              { cls: 'c4', num: '5',  small: 'yr', name: 'Kindergarten 2',  zh: '幼三班', tag: 'Half / Full' },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={`age-card ${a.cls}`}>
                  <div className="age-tag">{a.tag}</div>
                  <div>
                    <div className="age-num">{a.num}<small>{a.small}</small></div>
                  </div>
                  <div>
                    <div className="age-name">{a.name}</div>
                    <div className="age-zh">{a.zh}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Day timeline */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">A day in our world</span>
            <h2 className="section-title">From sunrise giggles<br />to sleepy stories.</h2>
          </Reveal>
          <Reveal>
            <div className="timeline">
              {[
                { time: '8:00',  emoji: '☀️', bg: 'var(--butter)',    title: 'Morning circle',   zh: '早安圈 · songs, weather, who\'s here today' },
                { time: '9:00',  emoji: '🥕', bg: 'var(--peach)',     title: 'Snack & free play', zh: '点心时间 · fruit, water, choosing centres' },
                { time: '10:00', emoji: '📖', bg: 'var(--sky)',       title: 'Chinese immersion', zh: '中文课 · stories, songs, characters' },
                { time: '11:00', emoji: '🎨', bg: 'var(--blush)',     title: 'Creative arts',     zh: '美术课 · paint, paste, marvellous mess' },
                { time: '12:00', emoji: '🍚', bg: 'var(--jade-soft)', title: 'Lunch together',    zh: '午餐 · family-style, every day' },
                { time: '13:00', emoji: '🌙', bg: 'var(--lavender)',  title: 'Quiet rest',        zh: '午睡 · with cosy blankets' },
                { time: '14:30', emoji: '🌳', bg: 'var(--jade-soft)', title: 'Outdoor garden',    zh: '花园时间 · running, digging, watering' },
                { time: '15:30', emoji: '🎵', bg: 'var(--peach)',     title: 'Music & movement',  zh: '音乐课 · big feelings, small bodies' },
              ].map((t, i) => (
                <div key={i} className="tl-row">
                  <div className="tl-time">{t.time}</div>
                  <div className="tl-dot" />
                  <div className="tl-card">
                    <div className="tl-emoji" style={{ background: t.bg, fontSize: 22 }}>{t.emoji}</div>
                    <div>
                      <div className="tl-title">{t.title}</div>
                      <div className="tl-zh">{t.zh}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Our curriculum</span>
            <h2 className="section-title">Play, but with intention.</h2>
            <p className="section-lede">
              A bilingual, theme-based programme that quietly weaves language,
              motor skills, social-emotional growth, and a sense of wonder
              into every hour.
            </p>
          </Reveal>
          <div className="curriculum">
            {[
              { ic: '🌏', bg: 'var(--jade-soft)', title: 'Bilingual immersion', zh: '中英双语',  desc: 'Half the day in Mandarin, half in English — no translation, just gentle context. Children pick up both naturally.' },
              { ic: '🧩', bg: 'var(--butter)',    title: 'Theme-based play',    zh: '主题学习',  desc: 'Every fortnight, a new theme — bugs, weather, family. All subjects flow from it, so learning sticks.' },
              { ic: '💗', bg: 'var(--blush)',     title: 'Social & emotional',  zh: '情感教育',  desc: 'Naming feelings, taking turns, gentle conflict-resolution. The quiet life skills that matter most.' },
              { ic: '🎨', bg: 'var(--peach)',     title: 'Art & expression',    zh: '艺术表达',  desc: 'Big paper, real paint, real scissors. The making is more important than the finished thing.' },
              { ic: '🌱', bg: 'var(--jade-soft)', title: 'Outdoor learning',    zh: '户外探索',  desc: 'A garden patch, a sandpit, a balcony of herbs. Outside happens every single day, rain or shine.' },
              { ic: '📚', bg: 'var(--sky)',       title: 'Pre-literacy & maths', zh: '读写算数', desc: 'Phonics, characters, numbers — at the pace each child is ready for. No rushing, no left-behinds.' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="curri-card">
                  <div className="curri-icon" style={{ background: c.bg, fontSize: 26 }}>{c.ic}</div>
                  <div className="curri-title">{c.title}</div>
                  <div className="curri-zh">{c.zh}</div>
                  <p className="curri-desc">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared sections: Pillars → Stats → Daily Life → Testimonials → Founder → Press → CTA ── */}
      <SharedSections fireConfetti={fireConfetti} />

    </div>
  );
}
