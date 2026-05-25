import { useState } from 'react';
import Reveal from '../components/Reveal';

const CONTACT_METHODS = [
  {
    icon: '📞',
    label: 'Hotline',
    value: '+65 6846 0600',
    href: 'tel:+6568460600',
    color: '#e8f5e9',
    accent: '#2e7d32',
    sub: 'Mon – Sat, 9am – 7pm',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'yuquan@yuquan.com.sg',
    href: 'mailto:yuquan@yuquan.com.sg',
    color: '#fff8e1',
    accent: '#f57f17',
    sub: 'We reply within 1 business day',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+65 6846 0600',
    href: 'https://wa.me/6568460600',
    color: '#e3f2fd',
    accent: '#25D366',
    sub: 'Quick replies during business hours',
  },
];

const CENTRES = ['Beauty World', 'Bukit Timah', 'Marine Parade', 'No preference'];
const PROGRAMMES = ['Preschool (Nursery – K2)', 'Primary (P1 – P6)', 'Secondary (S1 – S4)', 'Adult', 'Holiday Programme', 'Not sure yet'];

export default function ContactPage({ fireConfetti }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', centre: '', programme: '', message: '', consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.programme) errs.programme = 'Please select a programme.';
    if (!form.consent) errs.consent = 'Please agree to be contacted.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    if (fireConfetti) fireConfetti(e);
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 'var(--r-md)',
    border: `1.5px solid ${errors[field] ? '#e53935' : 'rgba(0,0,0,.15)'}`,
    fontSize: 15,
    color: 'var(--ink)',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  });

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: 'var(--ink)',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  };

  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <span className="section-kicker">Get in Touch</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(42px, 6vw, 82px)', marginBottom: 20 }}>
            We'd love<br />to hear from you.
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 580 }}>
            Whether you have questions about our programmes, want to book a trial class,
            or just want to say 你好 — our team is happy to help.
          </p>
        </div>
      </section>

      {/* ── Contact Methods ───────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
            maxWidth: 900,
            margin: '0 auto 64px',
          }}>
            {CONTACT_METHODS.map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <a
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    padding: 28,
                    background: '#fff',
                    borderRadius: 'var(--r-xl)',
                    border: `1px solid ${m.accent}33`,
                    boxShadow: '0 2px 16px rgba(0,0,0,.06)',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,.06)';
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--r-md)',
                    background: m.color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 24, marginBottom: 16,
                  }}>
                    {m.icon}
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: m.accent, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 6px' }}>
                    {m.label}
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px' }}>
                    {m.value}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: 0 }}>
                    {m.sub}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* ── Form ─────────────────────────────────────────── */}
          <Reveal>
            <div style={{
              maxWidth: 760,
              margin: '0 auto',
              background: '#fff',
              borderRadius: 'var(--r-xl)',
              boxShadow: '0 4px 32px rgba(0,0,0,.08)',
              padding: 'clamp(28px, 5vw, 52px)',
              border: '1px solid rgba(0,0,0,.06)',
            }}>

              {submitted ? (
                /* ── Success state ── */
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 12, color: 'var(--ink)' }}>
                    Message received!
                  </h2>
                  <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: 420, margin: '0 auto' }}>
                    Thank you, <strong>{form.name}</strong>. Our team will be in touch within one business day.
                    We look forward to welcoming you to Yuquan!
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: 28 }}
                    onClick={() => { setForm({ name:'', email:'', phone:'', centre:'', programme:'', message:'', consent:false }); setSubmitted(false); }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                    Send us a message
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginBottom: 32 }}>
                    Fill in the form and we'll get back to you within one business day.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>

                      {/* Name */}
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Sarah Lim"
                          value={form.name}
                          onChange={set('name')}
                          style={inputStyle('name')}
                          onFocus={e => e.target.style.borderColor = 'var(--jade)'}
                          onBlur={e => e.target.style.borderColor = errors.name ? '#e53935' : 'rgba(0,0,0,.15)'}
                        />
                        {errors.name && <p style={{ color: '#e53935', fontSize: 12, margin: '4px 0 0' }}>{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={set('email')}
                          style={inputStyle('email')}
                          onFocus={e => e.target.style.borderColor = 'var(--jade)'}
                          onBlur={e => e.target.style.borderColor = errors.email ? '#e53935' : 'rgba(0,0,0,.15)'}
                        />
                        {errors.email && <p style={{ color: '#e53935', fontSize: 12, margin: '4px 0 0' }}>{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+65 9123 4567"
                          value={form.phone}
                          onChange={set('phone')}
                          style={inputStyle('phone')}
                          onFocus={e => e.target.style.borderColor = 'var(--jade)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,.15)'}
                        />
                      </div>

                      {/* Programme */}
                      <div>
                        <label style={labelStyle}>Programme Interested In *</label>
                        <select
                          value={form.programme}
                          onChange={set('programme')}
                          style={{ ...inputStyle('programme'), cursor: 'pointer', appearance: 'auto' }}
                          onFocus={e => e.target.style.borderColor = 'var(--jade)'}
                          onBlur={e => e.target.style.borderColor = errors.programme ? '#e53935' : 'rgba(0,0,0,.15)'}
                        >
                          <option value="">Select a programme…</option>
                          {PROGRAMMES.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        {errors.programme && <p style={{ color: '#e53935', fontSize: 12, margin: '4px 0 0' }}>{errors.programme}</p>}
                      </div>

                      {/* Centre */}
                      <div>
                        <label style={labelStyle}>Preferred Centre</label>
                        <select
                          value={form.centre}
                          onChange={set('centre')}
                          style={{ ...inputStyle('centre'), cursor: 'pointer', appearance: 'auto' }}
                          onFocus={e => e.target.style.borderColor = 'var(--jade)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,.15)'}
                        >
                          <option value="">Select a centre…</option>
                          {CENTRES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>

                      {/* Message */}
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={labelStyle}>Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your child's level, any specific goals, or questions you have…"
                          value={form.message}
                          onChange={set('message')}
                          style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.6 }}
                          onFocus={e => e.target.style.borderColor = 'var(--jade)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,.15)'}
                        />
                      </div>

                      {/* Consent */}
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={set('consent')}
                            style={{ marginTop: 3, width: 16, height: 16, accentColor: 'var(--jade)', cursor: 'pointer', flexShrink: 0 }}
                          />
                          <span style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                            I agree to be contacted by Yuquan Language School regarding my enquiry.
                            Your information will not be shared with third parties.
                          </span>
                        </label>
                        {errors.consent && <p style={{ color: '#e53935', fontSize: 12, margin: '4px 0 0 28px' }}>{errors.consent}</p>}
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '15px 24px', fontSize: 16 }}
                    >
                      Send Message <span className="btn-arrow">→</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Office Hours ─────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div style={{
              maxWidth: 760, margin: '0 auto',
              background: 'var(--jade-mist)',
              borderRadius: 'var(--r-xl)',
              padding: 'clamp(28px, 4vw, 44px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 24,
              alignItems: 'center',
            }}>
              <div>
                <span className="section-kicker" style={{ marginBottom: 8, display: 'block' }}>Office Hours</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>
                  When to reach us
                </h3>
              </div>
              {[
                { day: 'Monday – Friday', time: '9:00 am – 7:00 pm' },
                { day: 'Saturday', time: '9:00 am – 5:00 pm' },
                { day: 'Sunday & Public Holidays', time: 'Closed' },
              ].map((h, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: 'var(--r-md)',
                  padding: '16px 20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,.05)',
                }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--jade)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h.day}</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{h.time}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
