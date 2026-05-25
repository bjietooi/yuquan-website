import Reveal from '../components/Reveal';

const LOCATIONS = [
  {
    name: 'Beauty World',
    address: '144 Upper Bukit Timah Road',
    building: 'Beauty World Centre, #02-27',
    postal: 'Singapore 588177',
    tels: ['6737 0007', '6846 0600'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=144+Upper+Bukit+Timah+Road+Beauty+World+Centre+Singapore',
    mapEmbed: 'https://maps.google.com/maps?q=144+Upper+Bukit+Timah+Road,+Beauty+World+Centre,+Singapore+588177&output=embed',
    emoji: '🏙️',
    color: '#e8f5e9',
    accent: '#2e7d32',
    mrt: 'Beauty World MRT (DT5)',
    note: 'Ample parking available at Beauty World Centre',
  },
  {
    name: 'Bukit Timah',
    address: '587 Bukit Timah Road',
    building: 'Coronation Plaza, #03-11',
    postal: 'Singapore 259707',
    tels: ['6846 0600', '6789 0900'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=587+Bukit+Timah+Road+Coronation+Plaza+Singapore',
    mapEmbed: 'https://maps.google.com/maps?q=587+Bukit+Timah+Road,+Coronation+Plaza,+Singapore+259707&output=embed',
    emoji: '🌳',
    color: '#fff8e1',
    accent: '#f57f17',
    mrt: 'King Albert Park MRT (DT6)',
    note: 'Parking available at Coronation Plaza',
  },
  {
    name: 'Marine Parade',
    address: '1 Marine Parade Central',
    building: 'Parkway Centre, #04-02',
    postal: 'Singapore 449408',
    tels: ['6846 0600', '6789 0390'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=1+Marine+Parade+Central+Parkway+Centre+Singapore',
    mapEmbed: 'https://maps.google.com/maps?q=1+Marine+Parade+Central,+Parkway+Centre,+Singapore+449408&output=embed',
    emoji: '🌊',
    color: '#e3f2fd',
    accent: '#1565c0',
    mrt: 'Marine Parade MRT (TE26)',
    note: 'Parking available at Parkway Centre',
  },
];

export default function LocationsPage({ go }) {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <span className="section-kicker">Find Us</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(42px, 6vw, 82px)', marginBottom: 20 }}>
            We're closer<br />than you think.
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 600 }}>
            Three conveniently located centres across Singapore — each designed to be
            a warm, welcoming space for learning.
          </p>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 36 }}>
            {LOCATIONS.map(loc => (
              <a
                key={loc.name}
                href={`#loc-${loc.name.replace(' ', '-').toLowerCase()}`}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(`loc-${loc.name.replace(' ', '-').toLowerCase()}`)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  padding: '10px 22px',
                  borderRadius: 999,
                  border: `2px solid ${loc.accent}`,
                  background: loc.color,
                  color: loc.accent,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.2s',
                }}
              >
                {loc.emoji} {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location Cards ───────────────────────────────────── */}
      {LOCATIONS.map((loc, idx) => (
        <section
          key={loc.name}
          id={`loc-${loc.name.replace(' ', '-').toLowerCase()}`}
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: idx % 2 === 1 ? 'var(--paper)' : 'transparent',
            scrollMarginTop: 88,
          }}
        >
          <div className="container">
            <Reveal>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(28px, 5vw, 60px)',
                alignItems: 'stretch',
              }}>

                {/* Info card */}
                <div style={{
                  background: '#fff',
                  borderRadius: 'var(--r-xl)',
                  padding: 'clamp(28px, 4vw, 44px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,.07)',
                  border: `1px solid ${loc.accent}22`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}>

                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 52, height: 52,
                      borderRadius: 'var(--r-md)',
                      background: loc.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 26, flexShrink: 0,
                    }}>
                      {loc.emoji}
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: loc.accent, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                        Centre
                      </p>
                      <h2 style={{ fontSize: 26, fontWeight: 700, color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-display)' }}>
                        {loc.name}
                      </h2>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: 'rgba(0,0,0,.07)' }} />

                  {/* Address block */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 20, marginTop: 2 }}>📍</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', margin: '0 0 2px' }}>{loc.address}</p>
                      <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: '0 0 2px' }}>{loc.building}</p>
                      <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0 }}>{loc.postal}</p>
                    </div>
                  </div>

                  {/* Phone block */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 20, marginTop: 2 }}>📞</span>
                    <div>
                      {loc.tels.map(t => (
                        <a key={t} href={`tel:+65${t.replace(/\s/g,'')}`} style={{
                          display: 'block',
                          fontSize: 15,
                          fontWeight: 600,
                          color: loc.accent,
                          textDecoration: 'none',
                          marginBottom: 2,
                        }}>
                          +65 {t}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* MRT */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <span style={{ fontSize: 20 }}>🚇</span>
                    <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0 }}>{loc.mrt}</p>
                  </div>

                  {/* Parking */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <span style={{ fontSize: 20 }}>🚗</span>
                    <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0 }}>{loc.note}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      padding: '13px 24px',
                      borderRadius: 'var(--r-md)',
                      background: loc.accent,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 15,
                      textDecoration: 'none',
                      marginTop: 'auto',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Get Directions →
                  </a>
                </div>

                {/* Map embed */}
                <div style={{
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,.1)',
                  minHeight: 320,
                  background: loc.color,
                }}>
                  <iframe
                    title={`Map – ${loc.name}`}
                    src={loc.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', minHeight: 340 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Ready to visit us?</h2>
              <p>Book a trial class and come see us in person at any of our centres.</p>
              <button className="btn btn-primary" onClick={() => go && go('contact')}>
                Contact Us <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
