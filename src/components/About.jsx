import { HiCheck } from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <Reveal>
            <div className="section-head about__head">
              <p className="section-tag">{t.about.tag}</p>
              <h2 className="section-title">{t.about.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="about__intro">{t.about.intro}</p>
            <p className="about__text">{t.about.text}</p>
            <ul className="about__highlights">
              {t.about.highlights.map((item) => (
                <li key={item}>
                  <span className="about__check">
                    <HiCheck aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
