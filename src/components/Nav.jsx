import { useState, useRef, useEffect } from 'react';
import { IMG } from '../data/images';

/* ─── Navigation configs ────────────────────────────────────────── */

const HOME_LINKS = [
  { id: 'home',            label: 'Home',            navigate: 'home' },
  { id: 'preschool',       label: 'Preschool',       navigate: 'preschool' },
  { id: 'language-school', label: 'Language School', navigate: 'language-school' },
];

const PRESCHOOL_LINKS = [
  { id: 'ps-home', label: 'Home', navigate: 'preschool' },
  {
    id: 'ps-about', label: 'About Us',
    dropdown: [
      { id: 'ps-story',      label: 'Our Story',      navigate: 'preschool-story' },
      { id: 'ps-philosophy', label: 'Our Philosophy', navigate: 'preschool-philosophy' },
    ],
  },
  { id: 'ps-curriculum', label: 'Curriculum',       navigate: 'preschool-curriculum' },
  { id: 'ps-news',       label: 'News & Resources', navigate: 'preschool-news' },
  { id: 'ps-locations',  label: 'Locations',        navigate: 'preschool-location' },
  { id: 'ps-contact',    label: 'Contact Us',       navigate: 'preschool-contact' },
];

const LANGUAGE_SCHOOL_LINKS = [
  { id: 'ls-home', label: 'Home', navigate: 'language-school' },
  {
    id: 'ls-about', label: 'About Us',
    dropdown: [
      { id: 'ls-story',    label: 'Our Story',         navigate: 'about' },
      { id: 'ls-teaching', label: 'Teaching Approach', navigate: 'teaching-approach' },
    ],
  },
  {
    id: 'ls-programmes', label: 'Programmes',
    dropdown: [
      { id: 'prog-preschool', label: 'Preschool', navigate: 'programmes#preschool' },
      { id: 'prog-primary',   label: 'Primary',   navigate: 'programmes#primary' },
      { id: 'prog-secondary', label: 'Secondary', navigate: 'programmes#secondary' },
      { id: 'prog-adult',     label: 'Adult',     navigate: 'programmes#adult' },
    ],
  },
  { id: 'ls-holiday',  label: 'Holiday Programmes', navigate: 'holiday-programmes' },
  { id: 'ls-news',     label: 'News & Resources',   navigate: 'news' },
  { id: 'ls-location', label: 'Location',           navigate: 'locations' },
  { id: 'ls-contact',  label: 'Contact Us',         navigate: 'contact' },
];

/* ─── Dropdown-aware link component ────────────────────────────── */

function NavItem({ item, current, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const baseOf = (nav) => nav?.split('#')[0];
  const isActive = (item.navigate != null && baseOf(item.navigate) === current) ||
    item.dropdown?.some(d => d.navigate != null && baseOf(d.navigate) === current);

  if (!item.dropdown) {
    return (
      <button
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={() => item.navigate && onNavigate(item.navigate)}
      >
        {item.label}
      </button>
    );
  }

  return (
    <div
      className={`nav-dd-wrap ${open ? 'open' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`nav-link nav-link-dd ${isActive ? 'active' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {item.label}
        <span className="nav-chev" />
      </button>
      <div className="nav-dd-menu" role="menu">
        {item.dropdown.map(d => (
          <button
            key={d.id}
            role="menuitem"
            className="nav-dd-item"
            onClick={() => { d.navigate && onNavigate(d.navigate); setOpen(false); }}
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Schools switcher — pinned right of nav ────────────────────── */

function SchoolSwitcher({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const SCHOOLS = [
    { id: 'sw-preschool',  label: 'Yuquan Preschool', navigate: 'preschool',       logo: IMG.preschoolLogo, logoBg: 'transparent' },
    { id: 'sw-langschool', label: 'Language School',  navigate: 'language-school', logo: IMG.logo,          logoBg: 'var(--jade)' },
  ];

  return (
    <div
      ref={ref}
      style={{ position: 'relative', marginLeft: 10 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Pill button */}
      <button
        onClick={() => onNavigate('home')}
        style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '5px 13px',
          borderRadius: 999,
          border: '1.5px solid rgba(0,0,0,0.25)',
          background: 'transparent',
          color: 'var(--ink)',
          fontSize: 13.5, fontWeight: 600,
          cursor: 'pointer',
          transition: 'border-color 0.18s, opacity 0.18s',
          opacity: 0.65,
          fontFamily: 'inherit',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.65'}
      >
        Schools
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 1 }}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          background: '#fff',
          borderRadius: 'var(--r-xl)',
          boxShadow: '0 8px 32px rgba(0,0,0,.14)',
          border: '1px solid rgba(0,0,0,.08)',
          padding: '8px',
          minWidth: 220,
          zIndex: 200,
        }}>
          {SCHOOLS.map(s => (
            <button
              key={s.id}
              onClick={() => { onNavigate(s.navigate); setOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', padding: '10px 12px',
                borderRadius: 'var(--r-md)',
                border: 'none', background: 'none',
                cursor: 'pointer', textAlign: 'left',
                fontSize: 14, fontWeight: 600, color: 'var(--ink)',
                transition: 'background 0.15s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--jade-mist)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              {/* Logo badge */}
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: s.logoBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img
                  src={s.logo}
                  alt={s.label}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: s.logoBg !== 'transparent' ? 4 : 0 }}
                />
              </div>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Nav ──────────────────────────────────────────────────── */

export default function Nav({ current, go, onCta }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const handleNav = (key) => {
    go(key);
    setMenuOpen(false);
    setMobileExpanded({});
  };

  const isPreschool     = ['preschool', 'preschool-story', 'preschool-philosophy', 'preschool-location', 'preschool-contact', 'preschool-curriculum', 'preschool-news'].includes(current);
  const isLanguageSchool = ['language-school','about','teaching-approach','programmes','locations','contact','holiday-programmes','news'].includes(current);
  const isHome          = !isPreschool && !isLanguageSchool;

  const links   = isPreschool ? PRESCHOOL_LINKS :
                  isLanguageSchool ? LANGUAGE_SCHOOL_LINKS :
                  HOME_LINKS;

  const logoSrc = isPreschool ? IMG.preschoolLogo :
                  isLanguageSchool ? IMG.logo :
                  null;

  const toggleGroup = (id) =>
    setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">

          {/* Logo — left */}
          <div className="nav-brand-slot">
            {logoSrc && (
              <a className="brand" href="#" onClick={(e) => { e.preventDefault(); handleNav(isPreschool ? 'preschool' : 'language-school'); }}>
                {isLanguageSchool ? (
                  /* Language school logo is white — give it a jade background pill */
                  <div style={{
                    background: 'var(--jade)',
                    borderRadius: 10,
                    padding: '4px 10px',
                    display: 'flex', alignItems: 'center',
                  }}>
                    <img className="brand-logo" src={logoSrc} alt="Yuquan Language School" />
                  </div>
                ) : (
                  <img className="brand-logo" src={logoSrc} alt="Yuquan Preschool" />
                )}
              </a>
            )}
          </div>

          {/* Desktop links — centre */}
          <div className={`nav-links ${!isHome ? 'nav-links-compact' : ''}`}>
            {links.map(l => (
              <NavItem key={l.id} item={l} current={current} onNavigate={handleNav} />
            ))}
            {isHome && (
              <button
                className="btn btn-primary nav-cta"
                onClick={onCta}
                style={{ padding: '11px 20px', fontSize: 14.5, marginLeft: 8 }}
              >
                Book a tour <span className="btn-arrow">→</span>
              </button>
            )}
          </div>

          {/* Right slot — Schools pill + hamburger */}
          <div className="nav-end-slot" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {!isHome && <SchoolSwitcher onNavigate={handleNav} />}
            <button
              className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
          {links.map(l => l.dropdown ? (
            <div key={l.id} className="nav-mobile-group">
              <button
                className={`nav-link nav-mobile-group-btn ${mobileExpanded[l.id] ? 'expanded' : ''}`}
                onClick={() => toggleGroup(l.id)}
              >
                {l.label}
                <span className="nav-chev nav-chev-mobile" />
              </button>
              {mobileExpanded[l.id] && (
                <div className="nav-mobile-sub-group">
                  {l.dropdown.map(d => (
                    <button
                      key={d.id}
                      className="nav-link nav-mobile-sub-item"
                      onClick={() => handleNav(d.navigate)}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={l.id}
              className={`nav-link ${current === l.navigate ? 'active' : ''}`}
              onClick={() => handleNav(l.navigate)}
            >
              {l.label}
            </button>
          ))}

          {/* Mobile school switcher */}
          {!isHome && (
            <div style={{ borderTop: '1px solid rgba(0,0,0,.08)', marginTop: 8, paddingTop: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px 4px' }}>
                Switch School
              </p>
              {[
                { id: 'sw-ps',  label: 'Yuquan Preschool', navigate: 'preschool',       logo: IMG.preschoolLogo, logoBg: 'transparent' },
                { id: 'sw-ls',  label: 'Language School',  navigate: 'language-school', logo: IMG.logo,          logoBg: 'var(--jade)' },
              ].map(s => (
                <button
                  key={s.id}
                  className="nav-link"
                  onClick={() => handleNav(s.navigate)}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '8px 4px' }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                    background: s.logoBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <img src={s.logo} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: s.logoBg !== 'transparent' ? 3 : 0 }} />
                  </div>
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {isHome && (
            <button
              className="btn btn-primary"
              onClick={() => { onCta(); setMenuOpen(false); }}
              style={{ marginTop: 8 }}
            >
              Book a tour <span className="btn-arrow">→</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
