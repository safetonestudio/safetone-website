import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'
import SEO from '../components/SEO'

const seo = {
  en: {
    title: 'Services — SafeTone Studio',
    desc: 'Translation, dubbing, lip sync, voice cloning, professional audio & secure delivery. Every service your video needs to cross the FR↔EN language barrier.',
  },
  fr: {
    title: 'Services — SafeTone Studio',
    desc: 'Traduction, doublage, lip sync, clonage vocal, audio professionnel et livraison sécurisée. Tout ce dont votre vidéo a besoin pour franchir la barrière de la langue.',
  },
}

export default function Services() {
  const { lang } = useLang()
  const t = translations[lang]
  const s = t.services
  const g = t.global

  return (
    <>
      <SEO title={seo[lang].title} description={seo[lang].desc} path="/services" />
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
