import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'
import SEO from '../components/SEO'

const seo = {
  en: {
    title: 'Pricing — SafeTone Studio',
    desc: 'Transparent FR↔EN localization pricing. Professional €210/min · Premium €275/min. Everything included: translation, dubbing, lip sync, voice cloning & audio.',
  },
  fr: {
    title: 'Tarifs — SafeTone Studio',
    desc: 'Tarifs clairs pour la localisation FR↔EN. Professionnel 210 €/min · Premium 275 €/min. Tout inclus : traduction, doublage, lip sync, clonage vocal et audio.',
  },
}

export default function Pricing() {
  const { lang } = useLang()
  const t = translations[lang]
  const p = t.pricing
  const g = t.global

  const pro     = p.tiers.pro
  const premium = p.tiers.premium

  return (
    <>
      <SEO title={seo[lang].title} description={seo[lang].desc} path="/pricing" />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{p.hero.eyebrow}</span>
          <h1 className="page-hero-title">{p.hero.title}</h1>
          <p className="page-hero-sub">{p.hero.subtitle}</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {/* Professional */}
            <div className="pricing-card">
              <div className="pricing-tier">{pro.tier}</div>
              <div className="pricing-amount">{pro.amount}</div>
              <div className="pricing-unit">{pro.unit}</div>
              {pro.us_note && <div className="pricing-us">{pro.us_note}</div>}
              <div className="pricing-delivery">{pro.delivery}</div>
              <div className="pricing-minimum">{pro.minimum}</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {pro.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                {g.cta_quote}
              </Link>
            </div>

            {/* Premium */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Premium</div>
              <div className="pricing-tier">{premium.tier}</div>
              <div className="pricing-amount">{premium.amount}</div>
              <div className="pricing-unit">{premium.unit}</div>
              {premium.us_note && <div className="pricing-us">{premium.us_note}</div>}
              <div className="pricing-delivery">{premium.delivery}</div>
              <div className="pricing-minimum">{premium.minimum}</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {premium.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {g.cta_quote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Examples table */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--text)', marginBottom: 24 }}>
            {p.examples.title}
          </h3>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  {p.examples.headers.map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {p.examples.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 12, fontSize: 12, color: 'var(--text-3)' }}>{p.examples.note}</p>
        </div>
      </section>

      {/* Surcharges / Volume / Payment */}
      <section className="section-sm" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div className="info-block" style={{ marginBottom: 0 }}>
              <div className="info-block-title">{p.surcharges.title}</div>
              <ul className="info-list">
                {p.surcharges.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="info-block" style={{ marginBottom: 0 }}>
              <div className="info-block-title">{p.volume.title}</div>
              <ul className="info-list">
                {p.volume.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="info-block" style={{ marginBottom: 0 }}>
              <div className="info-block-title">{p.payment.title}</div>
              <ul className="info-list">
                {p.payment.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="cta-block">
        <div className="cta-block-inner">
          <h2 className="cta-title">{p.bottom_cta.title}</h2>
          <p className="cta-sub">{p.bottom_cta.subtitle}</p>
          <Link to="/contact" className="btn btn-primary">{p.bottom_cta.cta}</Link>
        </div>
      </div>
    </>
  )
}
