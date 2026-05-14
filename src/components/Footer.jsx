import { IMG } from '../data/images';

export default function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img className="footer-logo" src={IMG.logo} alt="Yuquan" />
            <p style={{ color: 'var(--ink-soft)', maxWidth: 320, fontSize: 15, marginTop: 14 }}>
              健康 · 快乐 · 睿智 — Bilingual education that nurtures confident, curious learners. Since 2005.
            </p>
          </div>
          <div className="footer-col">
            <h4>Programmes</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('preschool'); }}>Preschool</a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('enrichment'); }}>Enrichment</a>
            <a href="#">Holiday camps</a>
            <a href="#">Parent-child classes</a>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <p>123 Yuquan Lane<br />Singapore 567890</p>
            <p>Mon–Fri · 8am–6pm</p>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <a href="mailto:hello@yuquan.sg">hello@yuquan.sg</a>
            <a href="tel:+6562345678">+65 6234 5678</a>
            <a href="#">Book a tour →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Yuquan Language School</span>
          <span>Healthy · Happy · Wise · 健康 · 快乐 · 睿智</span>
        </div>
      </div>
    </footer>
  );
}
