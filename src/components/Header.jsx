import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../translations'

export default function Header() {
  const { lang, toggle } = useLang()
  const t = translations[lang]
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/',            label: t.nav.home },
    { to: '/services',    label: t.nav.services },
    { to: '/how-it-works', label: t.nav.process },
    { to: '/pricing',     label: t.nav.pricing },
    { to: '/contact',     label: t.nav.contact },
  ]

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            Safe<span>Tone</span> Studio
          </Link>

          <nav>
            <ul className="nav-links">
              {links.map(l => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    end={l.to === '/'}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => { if (lang !== 'fr') toggle() }}
                aria-label="Français"
              >
                FR
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => { if (lang !== 'en') toggle() }}
                aria-label="English"
              >
                EN
              </button>
            </div>
            <Link to="/contact" className="btn btn-primary nav-cta">
              {t.global.cta_quote}
            </Link>
            <button
              className="hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={open ? { opacity: 0 } : {}} />
              <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav className="mobile-menu">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mobile-menu-bottom">
            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => { if (lang !== 'fr') toggle(); setOpen(false) }}
              >
                FR
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => { if (lang !== 'en') toggle(); setOpen(false) }}
              >
                EN
              </button>
            </div>
            <Link
              to="/contact"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              {t.global.cta_quote}
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
