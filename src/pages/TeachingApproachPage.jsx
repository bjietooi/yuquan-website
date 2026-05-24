import { IMG } from '../data/images';
import Reveal from '../components/Reveal';

export default function TeachingApproachPage({ fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Our Method · 教学方法</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            How we build<br />real ability.
          </h1>
          <p className="page-hero-lede" style={{ marginTop: 24 }}>
            A structured, proven approach that aligns with school syllabus while
            developing genuine Mandarin and English proficiency beyond textbooks.
          </p>
        </div>
      </section>

      {/* Teaching Approach - Dual Track */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="section-kicker">Our Framework</span>
            <h2 className="section-title">Dual-Track Learning System</h2>
            <p className="section-lede">
              Every student benefits from two complementary approaches working together.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 900, margin: '0 auto 48px' }}>
              <div className="curri-card">
                <div className="curri-icon" style={{ background: 'var(--jade-soft)', fontSize: 26 }}>📚</div>
                <div className="curri-title">Foundation Building</div>
                <div className="curri-zh">基础夯实</div>
                <p className="curri-desc">
                  Character recognition, phonics, grammar structures, reading comprehension.
                  Aligned with school syllabus so classroom learning reinforces what we teach.
                </p>
              </div>
              <div className="curri-card">
                <div className="curri-icon" style={{ background: '#e8f8f5', fontSize: 26 }}>🎯</div>
                <div className="curri-title">Ability Systems</div>
                <div className="curri-zh">能力体系</div>
                <p className="curri-desc">
                  Speaking, listening, writing, independent reading. Real-world language use
                  that goes beyond answers on a page. Confidence that sticks.
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
            {[
              'Independent reading ability',
              'Exam confidence',
              'Writing fluency',
              'Long-term retention',
              'Conversational depth',
              'Cultural understanding',
              'Academic success',
              'Lifelong interest',
            ].map((benefit, i) => (
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
            {[
              { title: 'Unlocks Reading', desc: 'Recognize characters, read independently. No more waiting for an adult to decode the page.' },
              { title: 'Builds Confidence', desc: 'Success in reading translates to confidence. Confidence drives learners to read more, learn more.' },
              { title: 'Supports Writing', desc: 'Character knowledge is the foundation for writing. Understand structure, compose with intention.' },
              { title: 'Enables Exams', desc: 'PSLE, HSK, secondary exams — all built on character recognition and understanding.' },
            ].map((item, i) => (
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
            {[
              { q: 'How do you know what my child needs?', a: 'We assess before we teach. Every student starts with placement testing so we know their exact level, strengths, and gaps. No guessing.' },
              { q: 'What if my child is ahead (or behind)?', a: 'Curriculum flexibility is built in. Smaller class sizes mean we move at each student's pace, not the middle of the pack. Stretch the advanced, support the struggling.' },
            ].map((item, i) => (
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
