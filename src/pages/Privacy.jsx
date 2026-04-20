import { useLang } from '../context/LangContext'
import { translations } from '../translations'
import SEO from '../components/SEO'

const seo = {
  en: {
    title: 'Privacy Policy — SafeTone Studio',
    desc: 'How SafeTone Studio collects, processes, and protects your data in accordance with GDPR. No advertising cookies, no third-party tracking. Updated April 2026.',
  },
  fr: {
    title: 'Politique de Confidentialité — SafeTone Studio',
    desc: 'Comment SafeTone Studio collecte, traite et protège vos données conformément au RGPD. Aucun cookie publicitaire, aucun tracking tiers. Mise à jour avril 2026.',
  },
}

export default function Privacy() {
  const { lang } = useLang()
  const t = translations[lang]
  const p = t.privacy

  return (
    <>
      <SEO title={seo[lang].title} description={seo[lang].desc} path="/privacy" />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{p.hero.eyebrow}</span>
          <h1 className="page-hero-title">{p.hero.title}</h1>
          {p.hero.subtitle && <p className="page-hero-sub">{p.hero.subtitle}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-wrap">
            {p.sections.map((s, i) => (
              <div key={i} className="legal-section">
                <div className="legal-section-title">{s.title}</div>
                <p className="legal-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
