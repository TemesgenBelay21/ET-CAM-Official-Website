import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './FAQ.css'

function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq__layout">
          <Reveal className="faq__visual-wrap">
            <div className="faq__visual">
              <img src="/hero image/FAQ.jpg" alt="ET-CAM brand information" loading="lazy" />
            </div>
          </Reveal>
          <div className="faq__content">
            <Reveal>
              <div className="section-head">
                <p className="section-tag">{t.faq.tag}</p>
                <h2 className="section-title">{t.faq.title}</h2>
                <p className="section-sub">{t.faq.sub}</p>
              </div>
            </Reveal>
            <div className="faq__list">
              {t.faq.items.map((item, index) => {
                const isOpen = openIndex === index
                const answerId = `faq-answer-${index}`
                return (
                  <Reveal key={item.question} delay={(index % 3) * 80}>
                    <article className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                      <h3>
                        <button
                          type="button"
                          className="faq__question"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          <span>{item.question}</span>
                          <HiChevronDown aria-hidden="true" />
                        </button>
                      </h3>
                      <div id={answerId} className="faq__answer" hidden={!isOpen}>
                        <p>{item.answer}</p>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ