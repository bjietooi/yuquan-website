import Reveal from '../components/Reveal';

const LOCATION = {
  name: 'Guillemard',
  address: '231 Mountbatten Road',
  building: 'BLK G1-02',
  postal: 'Singapore 397999',
  tel: '6789 0700',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=231+Mountbatten+Road+Singapore+397999',
  mapEmbed: 'https://maps.google.com/maps?q=231+Mountbatten+Road,+Singapore+397999&output=embed',
  emoji: '🏫',
  mrt: 'Mountbatten MRT (CC7)',
  note: 'Street parking available along Mountbatten Road',
};

export default function PreschoolLocationPage({ go }) {
  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #fff8f0 60%, #fff5f8 100%)',
          paddingBottom: 64,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 340, height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <span className="section-kicker">Find Us · 我们的位置</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(42px, 6vw, 80px)', marginBottom: 20 }}>
            Come visit<br />our centre.
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 520 }}>
            Conveniently located at Mountbatten, our warm and welcoming preschool
            is designed to feel like a second home for your child.
          </p>
        </div>
      </section>

      {/* ── Location card ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(28px, 5vw, 56px)',
              alignItems: 'stretch',
              maxWidth: 960,
              margin: '0 auto',
            }}>

              {/* Info card */}
              <div style={{
                background: '#fff',
                borderRadius: 'var(--r-xl)',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 4px 24px rgba(0,0,0,.07)',
                border: '1px solid rgba(76,175,80,.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 56, height: 56,
                    borderRadius: 'var(--r-md)',
                    background: 'var(--jade-mist)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, flexShrink: 0,
                  }}>
                    {LOCATION.emoji}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--jade)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                      Centre
                    </p>
                    <h2 style={{ fontSize: 26, fontWeight: 700, color: 'var(--ink)', margin: 0, fontFamily: 'var(--font-display)' }}>
                      {LOCATION.name}
                    </h2>
                  </div>
                </div>

                <div style={{ height: 1, background: 'rgba(0,0,0,.07)' }} />

                {/* Address */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, marginTop: 2 }}>📍</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', margin: '0 0 2px' }}>{LOCATION.address}</p>
                    <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: '0 0 2px' }}>{LOCATION.building}</p>
                    <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0 }}>{LOCATION.postal}</p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: 22 }}>📞</span>
                  <a
                    href={`tel:+65${LOCATION.tel.replace(/\s/g, '')}`}
                    style={{ fontSize: 15, fontWeight: 600, color: 'var(--jade)', textDecoration: 'none' }}
                  >
                    +65 {LOCATION.tel}
                  </a>
                </div>

                {/* MRT */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: 22 }}>🚇</span>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0 }}>{LOCATION.mrt}</p>
                </div>

                {/* Parking */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: 22 }}>🚗</span>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0 }}>{LOCATION.note}</p>
                </div>

                {/* Office hours */}
                <div style={{
                  background: 'var(--jade-mist)',
                  borderRadius: 'var(--r-md)',
                  padding: '16px 20px',
                }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--jade)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>
                    Operating Hours
                  </p>
                  {[
                    { day: 'Monday – Friday', time: '7:00 am – 7:00 pm' },
                    { day: 'Saturday', time: '7:00 am – 1:00 pm' },
                    { day: 'Sunday & Public Holidays', time: 'Closed' },
                  ].map((h, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '6px 0',
                      borderBottom: i < 2 ? '1px solid rgba(0,0,0,.07)' : 'none',
                    }}>
                      <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{h.day}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{h.time}</span>
                    </div>
                  ))}
                </div>

                {/* Directions CTA */}
                <a
                  href={LOCATION.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '13px 24px',
                    borderRadius: 'var(--r-md)',
                    background: 'var(--jade)',
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
                minHeight: 360,
                background: 'var(--jade-mist)',
              }}>
                <iframe
                  title="Yuquan Preschool – Guillemard"
                  src={LOCATION.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: 420 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2>Ready to visit us?</h2>
              <p>Book a tour and come see our warm learning environment in person.</p>
              <button className="btn btn-primary" onClick={() => go('preschool-contact')}>
                Contact Us <span className="btn-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
