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
      { id: 'ps-story',      label: 'Our Story',      navigate: 'about' },
      { id: 'ps-philosophy', label: 'Our Philosophy', navigate: 'about' },
    ],
  },
  { id: 'ps-curriculum', label: 'Curriculum',       navigate: null },
  { id: 'ps-news',       label: 'News & Resources', navigate: null },
  { id: 'ps-locations',  label: 'Locations',        navigate: null },
  { id: 'ps-contact',    label: 'Contact Us',       navigate: null },
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

  // null navigate = stub page (not built yet) — never highlight, click is no-op
  // Support "page#section" navigate values by comparing only the base page name
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

/* ─── Main Nav ──────────────────────────────────────────────────── */

export default function Nav({ current, go, onCta }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const handleNav = (key) => {
    go(key);
    setMenuOpen(false);
    setMobileExpanded({});
  };

  const isPreschool     = current === 'preschool';
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

          {/* Logo slot — always occupies space so links stay centred on home */}
          <div className="nav-brand-slot">
            {logoSrc && (
              <a className="brand" href="#" onClick={(e) => { e.preventDefault(); handleNav(isPreschool ? 'preschool' : 'language-school'); }}>
                <img className="brand-logo" src={logoSrc} alt="Yuquan" />
              </a>
            )}
          </div>

          {/* Desktop links */}
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

          {/* Right slot — hamburger */}
          <div className="nav-end-slot">
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
