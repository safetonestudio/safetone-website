import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang]
  const c = t.contact
  const g = t.global
  const info = c.info

  const briefPdf = lang === 'en' ? '/project-brief-en.pdf' : '/project-brief-fr.pdf'

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{c.hero.eyebrow}</span>
          <h1 className="page-hero-title">{c.hero.title}</h1>
          <p className="page-hero-sub">{c.hero.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Left — email + brief */}
            <div className="contact-main">
              <div className="contact-email-block">
                <div className="contact-email-label">
                  {lang === 'en' ? 'Send your brief directly to' : 'Envoyez votre brief directement à'}
                </div>
                <a
                  href={`mailto:${g.email}`}
                  className="contact-email-address"
                >
                  {g.email}
                </a>
                <p className="contact-email-hint">
                  {lang === 'en'
                    ? 'Attach your completed Project Brief and we\'ll come back to you with a quote within 24 hours. No commitment required.'
                    : 'Joignez votre Brief Projet complété et nous vous répondrons avec un devis sous 24 heures. Sans engagement.'}
                </p>
              </div>

              <div className="contact-brief-block">
                <div className="contact-brief-title">
                  {info.brief_label}
                </div>
                <p className="contact-brief-text">{info.brief_text}</p>
                <div style={{ marginTop: 20 }}>
                  <a
                    href={briefPdf}
                    download
                    className="btn btn-primary"
                  >
                    {g.cta_brief}
                  </a>
                </div>
              </div>

              <div className="contact-closing">
                <div className="contact-info-closing">{info.closing}</div>
              </div>
            </div>

            {/* Right — info card */}
            <div className="contact-info-card">
              <div className="contact-info-title">{info.title}</div>

              <div className="contact-info-item">
                <div className="contact-info-label">{info.response_label}</div>
                <div className="contact-info-value">{info.response_text}</div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-label">{info.contact_label}</div>
                <a href={`mailto:${g.email}`} className="contact-info-link">{g.email}</a>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-label">{info.confidentiality_label}</div>
                <div className="contact-info-value">{info.confidentiality_text}</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
