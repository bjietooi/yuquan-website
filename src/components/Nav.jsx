import { useState } from 'react';
import { IMG } from '../data/images';

const LINKS = [
  { key: 'home', label: 'Home' },
  { key: 'preschool', label: 'Preschool' },
  { key: 'language-school', label: 'Language School' },
  { key: 'about', label: 'About' },
];

export default function Nav({ current, go, onCta }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (key) => {
    go(key);
    setMenuOpen(false);
  };

  const showLogo = current !== 'home';
  const logoSrc = current === 'preschool' ? IMG.preschoolLogo :
                  current === 'language-school' ? IMG.logo :
                  IMG.logo;

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          {showLogo && (
            <a className="brand" href="#" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
              <img className="brand-logo" src={logoSrc} alt="Yuquan" />
            </a>
          )}

          {/* Desktop links */}
          <div className="nav-links" style={!showLogo ? { marginLeft: 'auto' } : {}}>
            {LINKS.map(l => (
              <button
                key={l.key}
                className={`nav-link ${current === l.key ? 'active' : ''}`}
                onClick={() => handleNav(l.key)}
              >
                {l.label}
              </button>
            ))}
            <button className="btn btn-primary nav-cta" onClick={onCta} style={{ padding: '11px 20px', fontSize: 14.5, marginLeft: 8 }}>
              Book a tour <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Hamburger */}
          <button className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
          {LINKS.map(l => (
            <button
              key={l.key}
              className={`nav-link ${current === l.key ? 'active' : ''}`}
              onClick={() => handleNav(l.key)}
            >
              {l.label}
            </button>
          ))}
          <button className="btn btn-primary" onClick={() => { onCta(); setMenuOpen(false); }} style={{ marginTop: 8 }}>
            Book a tour <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
