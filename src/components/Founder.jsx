import { IMG } from '../data/images';
import Reveal from './Reveal';

export default function Founder() {
  return (
    <section className="section founder-section">
      <div className="container">
        <div className="founder-inner">
          <div className="founder-stage">
            <div className="founder-frame">
              <img src={IMG.founder} alt="Madam Song with students" />
            </div>
            <div className="founder-badge fb-1">
              <div className="fb-num">30+</div>
              <div className="fb-label">years teaching<br />Chinese</div>
            </div>
            <div className="founder-badge fb-2">
              <div className="fb-num">'93</div>
              <div className="fb-label">in Singapore<br />since 1993</div>
            </div>
            <svg className="founder-blob" viewBox="0 0 200 200" aria-hidden="true">
              <path d="M44 90 C 44 30 100 12 138 38 C 180 66 188 130 150 162 C 110 196 38 168 32 122 C 28 100 44 110 44 90 Z" fill="var(--jade-soft)"/>
            </svg>
          </div>

          <div className="founder-content">
            <Reveal>
              <span className="section-kicker">Meet our founder · 创办人</span>
              <h2 className="section-title founder-name">
                宋老师 <span className="founder-en">· Madam Song</span>
              </h2>
              <p className="founder-role">Founder &amp; Guiding Light</p>

              <p className="founder-quote">
                <span className="founder-qmark">"</span>
                Children fall in love with a language when the people teaching it
                fall in love with them first.
              </p>

              <div className="founder-bio">
                <p>
                  Madam Song has devoted more than <strong>30 years</strong> to
                  Chinese language education — inspiring students to develop a
                  genuine love for the language, mentoring teachers, and quietly
                  transforming the way Chinese is taught.
                </p>
                <p>
                  Since <strong>1993</strong>, she has been actively engaged in
                  Chinese language education in Singapore, accumulating extensive
                  teaching experience and shaping innovative learning approaches
                  — many of which now sit at the heart of Yuquan.
                </p>
                <p>
                  Earlier in her career, she taught at <em>Shenyang Art Infant
                  Normal School</em> in China, where she trained teachers in
                  early childhood education.
                </p>
              </div>

              <div className="founder-creds">
                <div className="cred">
                  <div className="cred-ic">🎓</div>
                  <div>
                    <div className="cred-t">M.A. Chinese Language &amp; Literature</div>
                    <div className="cred-s">南京大学 · Nanjing University</div>
                  </div>
                </div>
                <div className="cred">
                  <div className="cred-ic">🎵</div>
                  <div>
                    <div className="cred-t">Further studies in Music</div>
                    <div className="cred-s">沈阳师范大学 · Shenyang Normal University</div>
                  </div>
                </div>
                <div className="cred">
                  <div className="cred-ic">🧒</div>
                  <div>
                    <div className="cred-t">Early Childhood Education</div>
                    <div className="cred-s">沈阳幼儿艺术师范 · Shenyang Art Infant Normal</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
