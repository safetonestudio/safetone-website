import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function GDPR() {
  const { lang } = useLang()
  const t = translations[lang]
  const d = t.gdpr
  const g = t.global

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{d.hero.eyebrow}</span>
          <h1 className="page-hero-title">{d.hero.title}</h1>
          <p className="page-hero-sub">{d.hero.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Badges */}
          <div className="badge-row">
            {d.badges.map(b => (
              <div key={b.label} className="badge">
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>

          {/* Blocks */}
          <div className="gdpr-blocks">
            {d.blocks.map((block, i) => (
              <div key={i} className="info-block">
                <div className="info-block-title">{block.title}</div>
                {block.items ? (
                  <ul className="info-list">
                    {block.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                ) : (
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{block.text}</p>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--text)', marginBottom: 20 }}>
              {d.summary.title}
            </h3>
            <div className="summary-grid">
              {d.summary.items.map((item, i) => (
                <div key={i} className="summary-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-block" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="cta-block-inner">
          <h2 className="cta-title">{d.cta.title}</h2>
          <p className="cta-sub">{d.cta.subtitle}</p>
          <Link to="/contact" className="btn btn-primary">{d.cta.btn}</Link>
        </div>
      </div>
    </>
  )
}
