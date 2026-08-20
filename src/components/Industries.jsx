import {
  HiBuildingStorefront,
  HiCake,
  HiShoppingBag,
  HiTruck,
  HiHomeModern,
  HiWrenchScrewdriver,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Industries.css'

const icons = [HiBuildingStorefront, HiCake, HiShoppingBag, HiTruck, HiHomeModern, HiWrenchScrewdriver]

function Industries() {
  const { t } = useLanguage()
  return (
    <section id="industries" className="industries">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.industries.tag}</p>
            <h2 className="section-title">{t.industries.title}</h2>
            <p className="section-sub">{t.industries.sub}</p>
          </div>
        </Reveal>
        <div className="industries__grid">
          {t.industries.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.title} delay={(index % 3) * 90}>
                <article className="industry">
                  <span className="industry__icon"><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="industry__services">{item.services}</span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries