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

const serviceGroups = [
  [0],
  [1],
  [2],
  [3, 16],
  [4],
  [5, 7],
  [6],
  [8],
  [9, 10],
  [11, 12],
  [13, 14],
  [15],
  [17],
  [18],
  [19],
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
          {serviceGroups.map((group, index) => {
            const services = group.map((serviceIndex) => t.services.items[serviceIndex])
            const service = {
              title: services.map((item) => item.title.replace(/\s+and\s+/g, ' / ')).join(' / '),
              text: t.services.summaries[index],
            }
            const Icon = icons[group[0]]
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
