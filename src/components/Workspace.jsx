import { HiLightBulb, HiSparkles, HiArrowTrendingUp } from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Workspace.css'

const pillIcons = [HiLightBulb, HiSparkles, HiArrowTrendingUp]

function Workspace() {
  const { t } = useLanguage()
  return (
    <section className="workspace">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.workspace.tag}</p>
            <h2 className="section-title">
              {t.workspace.titlePre}
              <span className="workspace__title-accent">{t.workspace.titleAccent}</span>
            </h2>
            <p className="section-sub">{t.workspace.sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <figure className="workspace__media">
            <img
              src="/hero image/et-cam clean office.jpg"
              alt="The ET-CAM studio workspace"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <p className="workspace__caption">{t.workspace.caption}</p>
        </Reveal>

        <div className="workspace__pills">
          {t.workspace.pills.map((pill, index) => {
            const Icon = pillIcons[index]
            return (
              <Reveal key={pill} delay={index * 100}>
                <span className="workspace__pill">
                  <Icon aria-hidden="true" />
                  {pill}
                </span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Workspace
