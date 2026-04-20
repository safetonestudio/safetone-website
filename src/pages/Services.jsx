import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function Services() {
  const { lang } = useLang()
  const t = translations[lang]
  const s = t.services
  const g = t.global

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{s.hero.eyebrow}</span>
          <h1 className="page-hero-title">{s.hero.title}</h1>
          <p className="page-hero-sub">{s.hero.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {s.list.map((svc, i) => (
            <div key={i} className="service-block">
              <div className="service-block-grid">
                <div>
                  <div className="service-eyebrow">{svc.eyebrow}</div>
                  <h2 className="service-title">{svc.title}</h2>
                  <div className="sub-label">{lang === 'fr' ? 'Ce que c\'est' : 'What it is'}</div>
                  <p className="sub-text">{svc.what}</p>
                  <div className="sub-label" style={{ marginTop: 24 }}>{lang === 'fr' ? 'Pour qui' : 'Who it\'s for'}</div>
                  <p className="sub-text">{svc.who}</p>
                </div>
                <div>
                  <div className="sub-label">{lang === 'fr' ? 'Ce qui est inclus' : 'What\'s included'}</div>
                  <ul className="included-list" style={{ marginTop: 12 }}>
                    {svc.included.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="cta-block" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="cta-block-inner">
          <h2 className="cta-title">{s.bottom_cta.title}</h2>
          <p className="cta-sub">{s.bottom_cta.subtitle}</p>
          <Link to="/contact" className="btn btn-primary">{s.bottom_cta.cta}</Link>
        </div>
      </div>
    </>
  )
}
