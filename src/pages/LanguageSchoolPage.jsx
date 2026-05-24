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

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="section-kicker">Testimonials</span>
            <h2 className="section-title">Loved by Parents</h2>
            <p className="section-lede">
              Real stories of joy and growth from our community.
            </p>
          </Reveal>
          <div className="testimonials">
            {[
              { q: 'My daughter loves going here. The teachers are really patient and kind. After a year, her Chinese improved from barely passing to almost full marks. I encourage all parents to send their kids here!',
                name: 'Jenny Teo', role: 'Parent of Primary student', color: 'var(--jade)', tag: '★★★★★' },
              { q: 'My twins were resistant to learning Chinese. After attending Yuquan, they are more receptive. The teachers are very attentive and connect well with children. My kids adore their teacher.',
                name: 'Lilian Teo', role: 'Parent of Primary 1 twins', color: 'var(--peach-deep)', tag: '★★★★★' },
              { q: "We've been attending since the children were 3. Yuquan has given them a strong foundation in Mandarin and a deep love for the language. Grateful to all the caring and patient teachers!",
                name: 'Pearlly Chang', role: 'Parent of P2 & P4 students', color: 'var(--butter-deep)', tag: '★★★★★' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="testi">
                  <div className="testi-tag">{t.tag}</div>
                  <p className="testi-quote">"{t.q}"</p>
                  <div className="testi-person">
                    <div className="testi-avatar" style={{ background: t.color }}>{t.name[0]}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
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
              <svg className="cta-shape s1" width="300" height="300" viewBox="0 0 100 100">
                <path d="M50 5 C55 35 65 45 95 50 C65 55 55 65 50 95 C45 65 35 55 5 50 C35 45 45 35 50 5 Z" fill="white"/>
              </svg>
              <svg className="cta-shape s2" width="180" height="180" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="white"/>
              </svg>
              <h2>Begin your journey today.</h2>
              <p>Book a trial class & give your child a head start. See why thousands of Singapore families choose Yuquan.</p>
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
