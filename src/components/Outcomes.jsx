import { HiArrowTrendingUp, HiCalendarDays, HiShoppingCart, HiSparkles, HiUserGroup } from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Outcomes.css'

const icons = [HiCalendarDays, HiArrowTrendingUp, HiShoppingCart, HiSparkles, HiUserGroup]

function Outcomes() {
  const { t } = useLanguage()
  return (
    <section className="outcomes">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.outcomes.tag}</p>
            <h2 className="section-title">{t.outcomes.title}</h2>
            <p className="section-sub">{t.outcomes.sub}</p>
          </div>
        </Reveal>
        <div className="outcomes__grid">
          {t.outcomes.items.map((item, index) => {
            const Icon = icons[index]
            return <Reveal key={item.title} delay={index * 80}><article className="outcome"><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>
          })}
        </div>
      </div>
    </section>
  )
}

export default Outcomes