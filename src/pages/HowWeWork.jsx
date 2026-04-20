import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'
import SEO from '../components/SEO'

const seo = {
  en: {
    title: 'How It Works — SafeTone Studio',
    desc: 'Five steps: brief & deposit, translation, your approval, dubbing & production, secure delivery. One studio, no handoffs, no surprises. See the full pipeline.',
  },
  fr: {
    title: 'Notre Process — SafeTone Studio',
    desc: 'Cinq étapes : brief & acompte, traduction, votre validation, doublage & production, livraison sécurisée. Un studio, aucun transfert, aucune surprise.',
  },
}

export default function HowWeWork() {
  const { lang } = useLang()
  const t = translations[lang]
  const p = t.process
  const g = t.global

  return (
    <>
      <SEO title={seo[lang].title} description={seo[lang].desc} path="/how-it-works" />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{p.hero.eyebrow}</span>
          <h1 className="page-hero-title">{p.hero.title}</h1>
          <p className="page-hero-sub">{p.hero.subtitle}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="steps-list">
            {p.steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-left">
                  <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-line" />
                </div>
                <div className="step-content">
                  <div className="step-label">{s.num}</div>
                  <div className="step-title">{s.title}</div>
                  <p className="step-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines */}
      <section className="section-sm" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="info-block">
            <div className="info-block-title">{p.timelines.title}</div>
            <ul className="info-list">
              {p.timelines.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Revisions */}
      <section className="section-sm">
        <div className="container">
          <div className="info-block">
            <div className="info-block-title">{p.revisions.title}</div>
            <ul className="info-list">
              {p.revisions.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-block">
        <div className="cta-block-inner">
          <h2 className="cta-title">{lang === 'fr' ? 'Prêt à démarrer ?' : 'Ready to get started?'}</h2>
          <p className="cta-sub">
            {lang === 'fr'
              ? 'Téléchargez le Brief Projet, complétez-le et envoyez-le à contact@safetonestudio.com.'
              : 'Download the Project Brief, fill it in, and send it to contact@safetonestudio.com.'}
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">{g.cta_quote}</Link>
            <a
              href={`mailto:${g.email}?subject=Project Brief`}
              className="btn btn-secondary"
            >
              {p.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
