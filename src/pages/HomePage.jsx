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

        {/* Top brand mark */}
        <div className="gateway-brand">
          <img src={IMG.logo} alt="Yuquan" className="gateway-logo" />
        </div>

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

          {/* ── Preschool card: char LEFT, content RIGHT, badge BOTTOM-LEFT ── */}
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
              <div className="gc-btn">Explore <span className="gc-arrow">→</span></div>
            </div>
            <div className="gc-badge">
              <img src={IMG.preschoolLogo} alt="Yuquan Preschool" />
            </div>
          </div>

          {/* ── Language School card: content LEFT, char RIGHT, badge TOP-RIGHT ── */}
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
              <div className="gc-btn">Explore <span className="gc-arrow">→</span></div>
            </div>
            <div className="gc-char-col">
              <img src={IMG.btnLanguageSchool} className="gc-char-img" alt="" />
            </div>
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
          <span className="gf-dot" />
          <button onClick={() => go('about')}>About Us</button>
        </nav>
        <div className="gf-contact">
          <a href="mailto:hello@yuquan.sg">hello@yuquan.sg</a>
          <span>·</span>
          <a href="tel:+6562345678">+65 6234 5678</a>
        </div>
        <p className="gf-copy">
          © 2026 Yuquan · Healthy · Happy · Wise · 健康 · 快乐 · 睿智
        </p>
      </footer>

    </div>
  );
}
