import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function Privacy() {
  const { lang } = useLang()
  const t = translations[lang]
  const p = t.privacy

  return (
    <>
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
