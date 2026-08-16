import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-image/logo.png" alt="ET-CAM logo" className="footer__logo" />
          <span>ET-CAM</span>
        </div>
        <p>{t.footer.tagline}</p>
        <p>© {new Date().getFullYear()} ET-CAM. {t.footer.rights}</p>
      </div>
    </footer>
  )
}

export default Footer
