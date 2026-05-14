import { IMG } from '../data/images';
import Reveal from '../components/Reveal';

export default function EnrichmentPage({ go, fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Enrichment · 课程补习</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            Bigger words.<br />Bolder voices.
          </h1>
          <div className="hero-zh" style={{ marginTop: 18 }}>中英补习课程</div>
          <p className="page-hero-lede">
            Small-group Chinese and English enrichment for ages 4 through to
            grown-ups. Structured where it should be, joyful everywhere else.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 30 }}>
            <button className="btn btn-primary" onClick={fireConfetti}>
              Enquire about a class <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => go('preschool')}>
              See preschool
            </button>
          </div>
          <Reveal>
            <div className="hero-collage">
              <div className="collage-item"><img src={IMG.tuition[0]} alt="Enrichment class" /></div>
              <div className="collage-item"><img src={IMG.tuition[1]} alt="Composition class" /></div>
              <div className="collage-item"><img src={IMG.students[1]} alt="Yuquan students" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two language tracks */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">Two languages</span>
            <h2 className="section-title">Pick a path, or take both.</h2>
            <p className="section-lede">
              Children often join both tracks. Adults mostly come for the
              language they're trying to find again.
            </p>
          </Reveal>
          <div className="enrich-grid">
            <Reveal>
              <div className="enrich-card chinese">
                <div className="enrich-zh">中文</div>
                <div className="enrich-en">Chinese Enrichment</div>
                <p className="enrich-desc">
                  Reading, writing, characters, conversation. From first strokes
                  through to confident essay writing.
                </p>
                <div className="enrich-chips">
                  <span className="chip">汉语拼音 Hanyu Pinyin</span>
                  <span className="chip">阅读理解 Reading</span>
                  <span className="chip">作文 Composition</span>
                  <span className="chip">口语 Conversation</span>
                  <span className="chip">书法 Calligraphy</span>
                </div>
                <div className="enrich-card-photo">
                  <img src={IMG.tuition[1]} alt="Chinese class" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="enrich-card english">
                <div className="enrich-zh" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>Abc</div>
                <div className="enrich-en">English Enrichment</div>
                <p className="enrich-desc">
                  Phonics, vocabulary, creative writing, public speaking.
                  Confidence with grammar and a little flair.
                </p>
                <div className="enrich-chips">
                  <span className="chip">Phonics</span>
                  <span className="chip">Creative writing</span>
                  <span className="chip">Comprehension</span>
                  <span className="chip">Speech & drama</span>
                  <span className="chip">Grammar</span>
                </div>
                <div className="enrich-card-photo">
                  <img src={IMG.tuition[0]} alt="English class" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Classes & schedules</span>
            <h2 className="section-title">When we meet.</h2>
            <p className="section-lede">
              Small classes — typically 4 to 8 students. After-school slots for
              kids and teens; evenings and weekends for adults.
            </p>
          </Reveal>
          <Reveal>
            <div className="schedule">
              <div className="sched-row head">
                <div>Class</div><div>Level</div><div>When</div><div>Group size</div>
              </div>
              {[
                { name: 'Little Readers',      zh: '小小读者',   level: 'Ages 4–6',  when: 'Tue/Thu · 3pm',   size: '1:4' },
                { name: 'Chinese Foundation',  zh: '中文基础班', level: 'P1–P3',    when: 'Mon/Wed · 4pm',   size: '1:6' },
                { name: 'Composition Lab',     zh: '作文工坊',   level: 'P4–P6',    when: 'Sat · 9:30am',    size: '1:6' },
                { name: 'Speech & Drama',      zh: '演讲与戏剧', level: 'Ages 7–12', when: 'Fri · 4:30pm',    size: '1:8' },
                { name: 'Teen Mandarin',       zh: '青少年华文', level: 'Sec 1–4',  when: 'Sat · 2pm',       size: '1:6' },
                { name: 'Adult Mandarin',      zh: '成人中文',   level: 'All levels', when: 'Wed · 7:30pm',  size: '1:8' },
              ].map((s, i) => (
                <div key={i} className="sched-row">
                  <div>
                    <div className="sched-name">{s.name}</div>
                    <div className="sched-zh">{s.zh}</div>
                  </div>
                  <div><span className="sched-pill">{s.level}</span></div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{s.when}</div>
                  <div style={{ color: 'var(--ink-soft)' }}>{s.size}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Why join us</span>
            <h2 className="section-title">Tutoring, but not the dreary kind.</h2>
          </Reveal>
          <div className="curriculum">
            {[
              { ic: '🧑‍🏫', bg: 'var(--jade-soft)', title: 'Real teachers',    zh: '专业老师',   desc: 'Every tutor is qualified, MOE-trained, and actually delighted to teach. No part-timers shuffling through.' },
              { ic: '👥',   bg: 'var(--butter)',    title: 'Tiny classes',     zh: '小班制',     desc: 'Maximum 8 students. Often fewer. Every child gets seen, heard, and stretched at the right pace.' },
              { ic: '📝',   bg: 'var(--peach)',     title: 'MOE-aligned',      zh: '教育部纲要', desc: 'Materials map directly to the Singapore syllabus — so school feels easier, not parallel.' },
              { ic: '💬',   bg: 'var(--sky)',       title: 'Parent updates',   zh: '家长沟通',   desc: 'Short, real notes after every term. No PDFs you\'ll never read — just what changed.' },
              { ic: '🎭',   bg: 'var(--blush)',     title: 'Beyond textbooks', zh: '课外活动',   desc: 'Speech, drama, calligraphy, debates. Language lives outside the workbook.' },
              { ic: '🪴',   bg: 'var(--lavender)',  title: 'Adult classes too', zh: '成人课程',  desc: 'Pick up the Mandarin you grew up with — judgement-free, conversation-first.' },
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

      {/* CTA */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <svg className="cta-shape s2" width="180" height="180" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="white"/>
              </svg>
              <svg className="cta-shape s1" width="240" height="240" viewBox="0 0 100 100">
                <path d="M50 5 C55 35 65 45 95 50 C65 55 55 65 50 95 C45 65 35 55 5 50 C35 45 45 35 50 5 Z" fill="white"/>
              </svg>
              <h2>Try a class on us.</h2>
              <p>The first trial class is complimentary. Bring a friend and you both get a fun little gift.</p>
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
