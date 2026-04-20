import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function Home() {
  const { lang } = useLang()
  const t = translations[lang]
  const h = t.home
  const g = t.global

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow">{h.hero.eyebrow}</span>
            <h1 className="hero-title">
              {h.hero.headline_1}<br />
              <em>{h.hero.headline_2}</em>
            </h1>
            <div className="hero-rule" />
            <p className="hero-sub">{h.hero.subline}</p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">{h.hero.cta_primary}</Link>
              <Link to="/how-it-works" className="btn btn-secondary">{h.hero.cta_secondary}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-inner">
            <span className="trust-label">{h.trust.label}</span>
            <div className="trust-tags">
              {h.trust.items.map(item => (
                <span key={item} className="trust-tag">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{h.services.eyebrow}</span>
            <h2 className="section-title">{h.services.title}</h2>
          </div>
          <div className="pillar-grid">
            {h.services.pillars.map(p => (
              <div key={p.num} className="pillar">
                <div className="pillar-num">{p.num}</div>
                <div className="pillar-title">{p.title}</div>
                <p className="pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SafeTone */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{h.why.eyebrow}</span>
            <h2 className="section-title">{h.why.title}</h2>
            <p className="section-sub">{h.why.subtitle}</p>
          </div>
          <div className="card-grid-3">
            {h.why.cards.map(c => (
              <div key={c.num} className="why-card">
                <div className="why-num">{c.num}</div>
                <div className="why-title">{c.title}</div>
                <p className="why-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{h.process.eyebrow}</span>
            <h2 className="section-title">{h.process.title}</h2>
          </div>
          <div className="steps-list">
            {h.process.steps.map(s => (
              <div key={s.num} className="step-item">
                <div className="step-left">
                  <div className="step-num">{s.num}</div>
                  <div className="step-line" />
                </div>
                <div className="step-content">
                  <div className="step-title">{s.title}</div>
                  <p className="step-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link to="/how-it-works" className="btn btn-secondary">{h.process.cta}</Link>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">{h.pricing_teaser.eyebrow}</span>
            <h2 className="section-title">{h.pricing_teaser.title}</h2>
            <p className="section-sub">{h.pricing_teaser.subtitle}</p>
          </div>
          <div className="pricing-grid">
            {/* Pro */}
            <div className="pricing-card">
              <div className="pricing-tier">{h.pricing_teaser.pro.tier}</div>
              <div className="pricing-amount">{h.pricing_teaser.pro.amount}</div>
              <div className="pricing-unit">{h.pricing_teaser.pro.unit}</div>
              <div className="pricing-delivery">{h.pricing_teaser.pro.delivery}</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {h.pricing_teaser.pro.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                {g.cta_quote}
              </Link>
            </div>
            {/* Premium */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Premium</div>
              <div className="pricing-tier">{h.pricing_teaser.premium.tier}</div>
              <div className="pricing-amount">{h.pricing_teaser.premium.amount}</div>
              <div className="pricing-unit">{h.pricing_teaser.premium.unit}</div>
              <div className="pricing-delivery">{h.pricing_teaser.premium.delivery}</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {h.pricing_teaser.premium.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {g.cta_quote}
              </Link>
            </div>
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/pricing" className="btn btn-ghost">{h.pricing_teaser.cta}</Link>
          </div>
        </div>
      </section>

      {/* GDPR strip */}
      <div className="gdpr-strip">
        <div className="container">
          <span className="eyebrow">{h.gdpr_block.eyebrow}</span>
          <h2 className="section-title" style={{ maxWidth: 560 }}>{h.gdpr_block.title}</h2>
          <div className="gdpr-items">
            {h.gdpr_block.items.map(item => (
              <span key={item} className="gdpr-item">{item}</span>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/gdpr" className="btn btn-secondary">{g.cta_dpa}</Link>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="cta-block">
        <div className="cta-block-inner">
          <h2 className="cta-title">{h.final_cta.title}</h2>
          <p className="cta-sub">{h.final_cta.subtitle}</p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">{h.final_cta.cta_primary}</Link>
            <a
              href={`mailto:${g.email}?subject=Project Brief`}
              className="btn btn-secondary"
            >
              {h.final_cta.cta_secondary}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
