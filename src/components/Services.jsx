import {
  HiShare,
  HiCodeBracket,
  HiMegaphone,
  HiMagnifyingGlass,
  HiCamera,
  HiVideoCamera,
  HiPaintBrush,
  HiCpuChip,
  HiCalendarDays,
  HiEnvelope,
  HiBuildingStorefront,
  HiChatBubbleLeftRight,
  HiUserGroup,
  HiDevicePhoneMobile,
  HiChartBarSquare,
  HiPencilSquare,
  HiShieldCheck,
  HiSpeakerWave,
  HiRectangleGroup,
  HiDocumentText,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Services.css'

const icons = [
  HiShare,
  HiCodeBracket,
  HiMegaphone,
  HiMagnifyingGlass,
  HiCamera,
  HiVideoCamera,
  HiPaintBrush,
  HiCpuChip,
  HiCalendarDays,
  HiEnvelope,
  HiBuildingStorefront,
  HiChatBubbleLeftRight,
  HiUserGroup,
  HiDevicePhoneMobile,
  HiChartBarSquare,
  HiPencilSquare,
  HiShieldCheck,
  HiSpeakerWave,
  HiRectangleGroup,
  HiDocumentText,
]

function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.services.tag}</p>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-sub">{t.services.sub}</p>
          </div>
        </Reveal>
        <div className="services__grid">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={service.title} delay={(index % 3) * 100}>
                <article className="service">
                  <span className="service__num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="service__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
