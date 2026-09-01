import {
  HiFaceSmile,
  HiArrowTrendingUp,
  HiPlayCircle,
  HiHandThumbUp,
  HiVideoCamera,
  HiBriefcase,
  HiArrowUpRight,
  HiArrowRight,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Success.css'

const statIcons = [
  HiFaceSmile,
  HiArrowTrendingUp,
  HiPlayCircle,
  HiHandThumbUp,
  HiVideoCamera,
  HiBriefcase,
]

function Success() {
  const { t } = useLanguage()
  return (
    <section className="success">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.success.tag}</p>
            <h2 className="section-title">
              {t.success.titlePre}
              <span className="success__title-accent">{t.success.titleAccent}</span>
            </h2>
            <p className="section-sub">{t.success.sub}</p>
          </div>
        </Reveal>

        <div className="success__stats">
          {t.success.stats.map((stat, index) => {
            const Icon = statIcons[index]
            return (
              <Reveal key={stat.label} delay={(index % 3) * 90}>
                <div className="stat-card">
                  <Icon className="stat-card__icon" aria-hidden="true" />
                  <strong className="stat-card__value">
                    {stat.value}
                    {stat.suffix}
                  </strong>
                  <span className="stat-card__label">{stat.label}</span>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="success__cases">
          {t.success.cases.map((client, index) => (
            <Reveal key={client.name} delay={(index % 2) * 120}>
              <article className="case-card">
                <span className="case-card__badge">
                  {client.badge}
                  <HiArrowUpRight aria-hidden="true" />
                </span>
                <h3 className="case-card__title">{client.name}</h3>
                <p className="case-card__label">{t.success.challengeLabel}</p>
                <p className="case-card__text">{client.challenge}</p>
                <p className="case-card__label case-card__label--accent">
                  {t.success.resultLabel}
                </p>
                <p className="case-card__text">{client.result}</p>
                <span className="case-card__industry">{client.industry}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="success__cta">
            <h3>{t.success.ctaLine}</h3>
            <a href="#contact" className="btn btn--primary">
              {t.success.ctaButton}
              <HiArrowRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Success