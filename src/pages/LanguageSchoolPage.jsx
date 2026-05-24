import { IMG } from '../data/images';
import Reveal from '../components/Reveal';
import SharedSections from '../components/SharedSections';

export default function LanguageSchoolPage({ go, fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Language School · 课程补习</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            We build real<br />Chinese ability.
          </h1>
          <div className="hero-zh" style={{ marginTop: 18 }}>中文补习课程</div>
          <p className="page-hero-lede">
            From preschool to adults — structured, joyful, and results-driven
            Mandarin education for every learner.
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
              <div className="collage-item"><img src={IMG.tuition[0]} alt="Adults in class" /></div>
              <div className="collage-item"><img src={IMG.tuition[1]} alt="Small group learning" /></div>
              <div className="collage-item"><img src={IMG.students[1]} alt="Child learning" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programmes */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">Our Programmes</span>
            <h2 className="section-title">Pick your learning path.</h2>
            <p className="section-lede">
              Yuquan understands the challenges at each academic level. Our curriculum
              builds a solid foundation for every stage.
            </p>
          </Reveal>
          <div className="curriculum">
            {[
              { ic: '🌱', bg: 'var(--jade-soft)',  title: 'Preschool',          zh: 'Nursery to Kindergarten',  desc: 'We build strong foundations through joyful learning — guiding children towards early character recognition and independent reading, preparing them confidently for primary school.' },
              { ic: '📚', bg: '#e8f8f5',           title: 'Primary',            zh: 'Primary 1 to Primary 6',   desc: 'We deepen literacy and reading foundations in alignment with the MOE syllabus, systematically developing exam skills to equip students to approach the PSLE with confidence.' },
              { ic: '🎯', bg: '#fff8e8',           title: 'Secondary',          zh: 'Secondary 1 to Secondary 4', desc: 'Clear strategies and effective methods to support students through the critical O-Level phase. Targeted training helps students achieve stronger results.' },
              { ic: '👤', bg: '#eef0fb',           title: 'Adult',              zh: 'All proficiency levels',   desc: 'Not just for children — our adult programme is designed for anyone wanting to build real conversational ability, improve reading, or prepare for proficiency tests like the HSK.' },
              { ic: '🗓️', bg: '#fde8ec',           title: 'Holiday Programmes', zh: 'All school levels · School holidays', desc: 'Thoughtfully curated holiday programmes combining structured language learning with meaningful experiential activities — building stronger foundations, key skills, confidence, and appreciation for Chinese language and culture.' },
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

      {/* Why Yuquan */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Why Yuquan</span>
            <h2 className="section-title">Not your ordinary tuition.</h2>
            <p className="section-lede">
              Six reasons thousands of Singapore families have trusted Yuquan for a generation.
            </p>
          </Reveal>
          <div className="curriculum">
            {[
              { ic: '🌟', bg: 'var(--jade-soft)', title: 'Established & Trusted for 30 Years',          zh: '三十年信赖',   desc: 'Serving generations of families with a proven approach to Chinese language education since our founding.' },
              { ic: '👩‍🏫', bg: 'var(--butter)',   title: 'Experienced & Professional Educators',        zh: '专业教师团队', desc: 'A team of dedicated educators with strong academic foundations, ensuring every student receives personalised guidance.' },
              { ic: '📖', bg: 'var(--peach)',     title: 'Proprietary Curriculum & Teaching Framework', zh: '自研课程框架', desc: 'Carefully designed to emphasise effective learning approaches, helping children learn efficiently while building lasting confidence.' },
              { ic: '🏆', bg: 'var(--sky)',       title: 'Excellent Results',                           zh: '成绩优秀',     desc: 'Students achieve outstanding results in national examinations such as the PSLE, and perform strongly in the HSK.' },
              { ic: '😄', bg: 'var(--blush)',     title: 'Fun & Engaging Learning Experience',         zh: '快乐学习',     desc: 'Interactive and inquiry-based learning lets children experience Chinese naturally and joyfully, cultivating a lasting interest.' },
              { ic: '🎋', bg: 'var(--lavender)',  title: 'Strong Foundations Beyond Exams',            zh: '超越考试',     desc: 'We help students build Chinese fundamentals that support long-term learning, confidence, and real-life language use.' },
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
