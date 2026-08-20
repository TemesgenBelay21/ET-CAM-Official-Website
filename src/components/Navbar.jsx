import { useEffect, useState } from 'react'
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

function Navbar({ theme, onToggleTheme }) {
  const { lang, toggleLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src="/logo-image/logo.png" alt="ET-CAM logo" className="navbar__logo" />
          <span>ET-CAM</span>
        </a>
        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === 'en' ? t.lang.toggleAm : t.lang.toggleEn}
          >
            {lang === 'en' ? 'አማ' : 'EN'}
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>
          <button
            type="button"
            className="navbar__burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
