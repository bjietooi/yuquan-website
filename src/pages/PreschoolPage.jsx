import { IMG } from '../data/images';
import Reveal from '../components/Reveal';
import SharedSections from '../components/SharedSections';

const PRESCHOOL_TESTIMONIALS = [
  { q: 'Yuquan Preschool is a wonderful school that truly promotes bilingual education. I am grateful that my daughter, who has just transferred over in K2, has progressed very well in Mandarin within a short span of time. She used to be extremely hesitant to speak a word of Mandarin, and yet she is now able to converse with me in Mandarin. Yuquan has also taught her well in Art, English and Mathematics. Teachers are very warm and nurturing. My daughter looks forward to school daily and will miss it once she graduates to P1 next year.',
    name: 'Chan Rachel', role: 'Parent · K2', color: 'var(--peach-deep)', tag: '★★★★★' },
  { q: "My little girl has been with Yuquan since Playgroup. She has been happy from day one and progressed well in both Chinese and English. This lovely little preschool has a special Chinese language programme which uses the founder's own materials and approach, and it works really well. My daughter is in K1 now and can already read many Chinese characters and probably a hundred Chinese idioms. The small class size, the neighbourhood feeling, the lovely garden and outdoor playground, the 'auntie-cooked' food, and of course the teachers who genuinely love the kids and their jobs are all why we love this preschool.",
    name: 'Maggie Kuang', role: 'Parent · K1', color: 'var(--jade)', tag: '★★★★★' },
  { q: 'I found this school by chance while walking around looking at preschools near my house. I rang the bell and the principal showed me around. The first thing that struck me was that the children all greeted me without being told, and they all seemed so happy. I knew I had found the right place for my children. Both of my children have attended Yuquan from Playgroup up to Kindergarten. The homely environment and wonderful teachers treat them like family and have instilled in them the right values of respect, courtesy and empathy, besides the usual academics. The intensive Mandarin curriculum has laid a very strong foundation for their future. Today my children are confident in both Chinese and English and far exceed their peers. Soft skills like gardening, caring for insects and school outings gave them the joy of learning and going to school.',
    name: 'Ethan Li', role: 'Parent · Playgroup to K2', color: 'var(--lavender-deep)', tag: '★★★★★' },
  { q: "If you are looking for a preschool with heart — a place where your child will learn happily, pick up strong academic and social skills, and good moral values — Yuquan Preschool is the place to go. My two kids are in K1 and K2, and here are our top three reasons:\n\n1. Bilingualism — many schools use English for perhaps 80% of the curriculum; at Yuquan the split is closer to 50-50, which matters since children pick up languages fastest in preschool. My kids are effectively bilingual and strong in both spoken and written English and Chinese.\n\n2. A nurturing, warm environment — just one class per level, so everyone knows each other, with a real 'kampung' spirit. The older children help care for the younger ones, and the teachers are loving yet firm, instilling good values and habits.\n\n3. A holistic curriculum — a wide range of activities included at no extra charge, like melodica, table tennis, calligraphy and gymnastics. The children even garden in the school's mini garden and harvest the crop (bittergourd included!) for their lunch.\n\nTwo thumbs up for Yuquan Preschool!",
    name: 'Melanie Chen', role: 'Parent · K1 & K2', color: '#5a9bd4', tag: '★★★★★' },
];

export default function PreschoolPage({ go, fireConfetti }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">Preschool · 幼儿园</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}>
            A cosy bilingual<br />nest for little learners.
          </h1>
          <div className="hero-zh" style={{ marginTop: 18 }}>18 months to 6 years</div>
          <p className="page-hero-lede">
            At Yuquan Preschool, learning begins in a space where children feel
            at home. Every classroom is warm, lived-in, and thoughtfully shaped
            around how children learn, play, and grow.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 30 }}>
            <button className="btn btn-primary" onClick={fireConfetti}>
              Book a tour <span className="btn-arrow">→</span>
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
            <h2 className="section-title">A Place for Every Little Learner</h2>
            <p className="section-lede">
              Every stage is thoughtfully designed to meet children where they
              are, helping them feel safe, supported, and ready to grow.
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
                { time: '7:00',  emoji: '🍳', bg: 'var(--butter)',    title: 'Breakfast & Mixed-Age Play',     zh: 'A gentle start to the day with breakfast, free play, and warm interactions across age groups.' },
                { time: '9:00',  emoji: '📚', bg: 'var(--sky)',       title: 'Morning Learning Session',        zh: 'Focused, age-appropriate learning through language, numeracy, stories, songs, and hands-on activities.' },
                { time: '9:30',  emoji: '🌳', bg: 'var(--jade-soft)', title: 'Outdoor Play',                    zh: 'Fresh air, movement, and active play that supports physical development, confidence, and social interaction.' },
                { time: '10:00', emoji: '🍎', bg: 'var(--peach)',     title: 'Fruit Time',                      zh: 'A refreshing break for children to enjoy fruits and recharge for the rest of the morning.' },
                { time: '10:30', emoji: '🔍', bg: 'var(--blush)',     title: 'Discovery & Classroom Learning',  zh: 'Guided lessons, creative exploration, and meaningful classroom activities.' },
                { time: '12:00', emoji: '🍚', bg: 'var(--jade-soft)', title: 'Lunch',                           zh: 'A nourishing lunch prepared for children to enjoy in a calm and familiar environment.' },
                { time: '13:00', emoji: '🌙', bg: 'var(--lavender)',  title: 'Rest & Nap Time',                 zh: 'Children rest on their own individual beds in a comfortable and hygienic nap environment.' },
                { time: '14:30', emoji: '📖', bg: 'var(--butter)',    title: 'Tea Break & Story Time',          zh: 'A cosy routine with tea break, stories, and quiet moments to ease children back into the day.' },
                { time: '15:30', emoji: '✏️', bg: 'var(--sky)',       title: 'Afternoon Learning Session',      zh: 'Enriching lessons and activities that support language, creativity, confidence, and whole-child development.' },
                { time: '17:00', emoji: '🧸', bg: 'var(--peach)',     title: 'Play & Wind-Down Time',           zh: 'The day ends with relaxed play, social interaction, and a smooth transition before home time.' },
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
      <SharedSections fireConfetti={fireConfetti} testimonials={PRESCHOOL_TESTIMONIALS} />

    </div>
  );
}
