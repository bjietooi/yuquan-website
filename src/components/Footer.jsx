import { IMG } from '../data/images';

/* Footer content per brand. The preschool and language school share a layout
   but have their own logo, links, address, contact, and copyright. */
const FOOTERS = {
  preschool: {
    logo: IMG.preschoolLogo,
    logoAlt: 'Yuquan Preschool',
    tagline: '健康 · 快乐 · 睿智 — A warm bilingual childcare & kindergarten where little ones grow up curious and confident. Since 2005.',
    linksTitle: 'Explore',
    links: [
      { label: 'Curriculum',  page: 'preschool-curriculum' },
      { label: 'Our Story',   page: 'preschool-story' },
      { label: 'Locations',   page: 'preschool-location' },
      { label: 'Contact Us',  page: 'preschool-contact' },
    ],
    address: ['231 Mountbatten Road, BLK G1-02', 'Singapore 397999'],
    hours: 'Mon–Fri · 7am–7pm',
    email: 'yuquan@yuquan.com.sg',
    phone: { label: '+65 6789 0700', href: 'tel:+6567890700' },
    ctaPage: 'preschool-contact',
    ctaLabel: 'Book a tour →',
    copyright: '© 2026 Yuquan Preschool',
  },
  language: {
    logo: IMG.logo,
    logoAlt: 'Yuquan Language School',
    tagline: '健康 · 快乐 · 睿智 — A trusted name in Chinese & English education that builds real language ability. Since 1996.',
    linksTitle: 'Explore',
    links: [
      { label: 'Programmes',         page: 'programmes' },
      { label: 'Holiday Programmes', page: 'holiday-programmes' },
      { label: 'Locations',          page: 'locations' },
      { label: 'Contact Us',         page: 'contact' },
    ],
    address: ['Beauty World · Bukit Timah', 'Marine Parade'],
    hours: 'Mon–Sun · by appointment',
    email: 'yuquan@yuquan.com.sg',
    phone: { label: '+65 6846 0600', href: 'tel:+6568460600' },
    ctaPage: 'contact',
    ctaLabel: 'Enquire now →',
    copyright: '© 2026 Yuquan Language School',
  },
};

export default function Footer({ go, variant = 'language' }) {
  const f = FOOTERS[variant] || FOOTERS.language;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img className="footer-logo" src={f.logo} alt={f.logoAlt} />
            <p style={{ color: 'var(--ink-soft)', maxWidth: 320, fontSize: 15, marginTop: 14 }}>
              {f.tagline}
            </p>
          </div>
          <div className="footer-col">
            <h4>{f.linksTitle}</h4>
            {f.links.map((l) => (
              <a key={l.label} href="#" onClick={(e) => { e.preventDefault(); go(l.page); }}>{l.label}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <p>{f.address[0]}<br />{f.address[1]}</p>
            <p>{f.hours}</p>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <a href={`mailto:${f.email}`}>{f.email}</a>
            <a href={f.phone.href}>{f.phone.label}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); go(f.ctaPage); }}>{f.ctaLabel}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{f.copyright}</span>
          <span>Healthy · Happy · Wise · 健康 · 快乐 · 睿智</span>
        </div>
      </div>
    </footer>
  );
}
