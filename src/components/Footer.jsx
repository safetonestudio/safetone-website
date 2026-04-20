import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang]
  const f = t.footer
  const g = t.global

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Safe<span>Tone</span> Studio</div>
            <p className="footer-tagline">{f.tagline}</p>
            <a href={`mailto:${g.email}`} className="footer-email">{g.email}</a>
          </div>

          <div className="footer-col">
            <h4>{f.col_services}</h4>
            <ul>
              <li><Link to="/services">{f.link_translation}</Link></li>
              <li><Link to="/services">{f.link_dubbing}</Link></li>
              <li><Link to="/services">{f.link_voice}</Link></li>
              <li><Link to="/services">{f.link_audio}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{f.col_studio}</h4>
            <ul>
              <li><Link to="/how-it-works">{f.link_process}</Link></li>
              <li><Link to="/pricing">{f.link_pricing}</Link></li>
              <li><Link to="/contact">{f.link_contact}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{f.col_legal}</h4>
            <ul>
              <li><Link to="/gdpr">{f.link_gdpr}</Link></li>
              <li><Link to="/privacy">{f.link_privacy}</Link></li>
              <li><Link to="/legal">{f.link_legal}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">{g.copyright}</span>
          <span className="footer-vat">{g.vat}</span>
        </div>
      </div>
    </footer>
  )
}
