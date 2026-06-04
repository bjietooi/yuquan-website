import { IMG } from '../data/images';

export default function HomePage({ go }) {
  return (
    <div className="gateway">

      {/* ── Ambient background ── */}
      <div className="gateway-bg" aria-hidden="true">
        <div className="g-orb g-orb-1" />
        <div className="g-orb g-orb-2" />
        <div className="g-orb g-orb-3" />
        <div className="g-orb g-orb-4" />
      </div>

      {/* ── Main content ── */}
      <main className="gateway-main">

        {/* Heading */}
        <div className="gateway-headline">
          <h1 className="gateway-title">Welcome to Yuquan</h1>
          <p className="gateway-subtitle">
            Two schools. One community.<br />
            Where would you like to begin?
          </p>
        </div>

        {/* School selector cards */}
        <div className="gateway-cards">

          {/* ── Preschool card: char LEFT · content RIGHT ── */}
          <div
            className="gateway-card preschool-gateway"
            onClick={() => go('preschool')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && go('preschool')}
          >
            <div className="gc-char-col">
              <img src={IMG.btnPreschool} className="gc-char-img" alt="" />
            </div>
            <div className="gc-info-col">
              <h2 className="gc-name">Yuquan<br />Preschool</h2>
              <p className="gc-tagline">18 Months – 6 Years<br />Bilingual Childcare &amp; Kindergarten</p>
              <div className="gc-bottom">
                <div className="gc-btn">Explore <span className="gc-arrow">→</span></div>
              </div>
            </div>
            {/* Badge: direct child of card so it can be absolute over the character */}
            <div className="gc-badge">
              <img src={IMG.preschoolLogo} alt="Yuquan Preschool" />
            </div>
          </div>

          {/* ── Language School card: content LEFT · char RIGHT ── */}
          <div
            className="gateway-card language-gateway"
            onClick={() => go('language-school')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && go('language-school')}
          >
            <div className="gc-info-col">
              <h2 className="gc-name">Yuquan<br />Language School</h2>
              <p className="gc-tagline">A Trusted Name in Chinese<br />&amp; English Education Since 1996</p>
              <div className="gc-bottom">
                <div className="gc-btn">Explore <span className="gc-arrow">→</span></div>
              </div>
            </div>
            <div className="gc-char-col">
              <img src={IMG.btnLanguageSchool} className="gc-char-img" alt="" />
            </div>
            {/* Badge: direct child of card so it can be absolute over the character */}
            <div className="gc-badge">
              <img src={IMG.logo} alt="Yuquan Language School" />
            </div>
          </div>

        </div>
      </main>

      {/* ── Minimal footer ── */}
      <footer className="gateway-footer">
        <nav className="gf-links" aria-label="Quick links">
          <button onClick={() => go('preschool')}>Preschool</button>
          <span className="gf-dot" />
          <button onClick={() => go('language-school')}>Language School</button>
        </nav>
        <p className="gf-copy">
          © 2026 Yuquan
        </p>
      </footer>

    </div>
  );
}
