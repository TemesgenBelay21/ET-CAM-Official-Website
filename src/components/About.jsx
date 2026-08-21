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
          <div className="about__columns">
            <Reveal delay={120}>
              <p className="about__intro">{t.about.paragraphs[0]}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="about__copy">
                {t.about.paragraphs.slice(1, -1).map((paragraph) => (
                  <p key={paragraph} className="about__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
