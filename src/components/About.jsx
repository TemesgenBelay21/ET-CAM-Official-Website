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
            <div className="about__copy">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? 'about__intro' : 'about__text'}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
