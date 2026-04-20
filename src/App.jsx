import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLang } from './context/LangContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import HowWeWork from './pages/HowWeWork'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import GDPR from './pages/GDPR'
import Privacy from './pages/Privacy'
import LegalNotice from './pages/LegalNotice'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function LangSync() {
  const { lang } = useLang()
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return null
}

export default function App() {
  return (
    <>
      <LangSync />
      <ScrollToTop />
      <Header />
      <main className="page">
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/services"    element={<Services />} />
          <Route path="/how-it-works" element={<HowWeWork />} />
          <Route path="/pricing"     element={<Pricing />} />
          <Route path="/contact"     element={<Contact />} />
          <Route path="/gdpr"        element={<GDPR />} />
          <Route path="/privacy"     element={<Privacy />} />
          <Route path="/legal"       element={<LegalNotice />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
