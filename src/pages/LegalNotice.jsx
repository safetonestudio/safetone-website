import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function LegalNotice() {
  const { lang } = useLang()
  const t = translations[lang]
  const l = t.legal

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{l.hero.eyebrow}</span>
          <h1 className="page-hero-title">{l.hero.title}</h1>
          {l.hero.subtitle && <p className="page-hero-sub">{l.hero.subtitle}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-wrap">
            {l.sections.map((s, i) => (
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
