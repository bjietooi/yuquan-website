import { useState, useRef, useEffect } from 'react';
import { IMG } from '../data/images';

/* ─── Navigation configs ────────────────────────────────────────── */

const SCHOOL_SWITCHER = {
  id: 'school-switcher',
  label: 'Schools',
  navigate: 'home',
  outlined: true,            // render as stroke pill, no fill
  dropdown: [
    { id: 'sw-preschool',  label: 'Yuquan Preschool', navigate: 'preschool',       logo: IMG.preschoolLogo },
    { id: 'sw-langschool', label: 'Language School',  navigate: 'language-school', logo: IMG.logo },
  ],
};

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
  SCHOOL_SWITCHER,
];

const LANGUAGE_SCHOOL_LINKS = [
  SCHOOL_SWITCHER,
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
  SCHOOL_SWITCHER,
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

  // Items with BOTH navigate + dropdown: click navigates; hover reveals dropdown
  const hasDirectNav = Boolean(item.navigate);

  const outlinedStyle = item.outlined ? {
    border: '1.5px solid currentColor',
    borderRadius: 999,
    padding: '5px 14px',
    opacity: 0.7,
  } : {};

  return (
    <div
      className={`nav-dd-wrap ${open ? 'open' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={item.outlined ? { marginLeft: 8 } : {}}
    >
      <button
        className={`nav-link nav-link-dd ${isActive ? 'active' : ''}`}
        style={outlinedStyle}
        onClick={() => hasDirectNav ? onNavigate(item.navigate) : setOpen(o => !o)}
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
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            {d.logo && (
              <img
                src={d.logo}
                alt={d.label}
                style={{ height: 22, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
              />
            )}
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

          {/* Logo */}
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

          {/* Hamburger */}
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
                onClick={() => {
                  if (l.navigate) { handleNav(l.navigate); }
                  else { toggleGroup(l.id); }
                }}
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
                      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      {d.logo && (
                        <img
                          src={d.logo}
                          alt={d.label}
                          style={{ height: 18, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
                        />
                      )}
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
