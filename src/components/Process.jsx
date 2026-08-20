import { HiMagnifyingGlass, HiMapPin, HiRocketLaunch, HiWrenchScrewdriver } from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Process.css'

const icons = [HiMagnifyingGlass, HiMapPin, HiWrenchScrewdriver, HiRocketLaunch]

function Process() {
  const { t } = useLanguage()
  return (
    <section id="process" className="process">
      <div className="container">
        <Reveal>
          <div className="section-head"><p className="section-tag">{t.process.tag}</p><h2 className="section-title">{t.process.title}</h2><p className="section-sub">{t.process.sub}</p></div>
        </Reveal>
        <div className="process__grid">
          {t.process.items.map((item, index) => { const Icon = icons[index]; return <Reveal key={item.title} delay={index * 100}><article className="process__item"><span className="process__number">0{index + 1}</span><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article></Reveal> })}
        </div>
      </div>
    </section>
  )
}

export default Process