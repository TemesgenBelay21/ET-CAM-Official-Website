import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  return (
    <section id="home" className="hero">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero__title">
          {t.hero.titleStart} <em className="hero__accent">{t.hero.titleAccent}</em>
        </h1>
        <p className="hero__lead">{t.hero.lead}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            {t.hero.ctaPrimary}
          </a>
          <a href="#services" className="btn btn--ghost">
            {t.hero.ctaSecondary}
          </a>
        </div>
        <div className="hero__meta">
          <span>{t.hero.metaLocation}</span>
          <span className="hero__dot" aria-hidden="true">
            •
          </span>
          <span>{t.hero.metaNiches}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
