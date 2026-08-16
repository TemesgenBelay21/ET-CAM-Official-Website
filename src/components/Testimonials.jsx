import { FaStar } from 'react-icons/fa6'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Testimonials.css'

const testimonialMeta = [
  { name: 'Mesti', image: '/testimonial-images/mesti.jpg' },
  { name: 'Dj Nani', image: '/testimonial-images/dj-nani.jpg' },
  { name: 'Eliyas', image: '/testimonial-images/eliyas.jpg' },
  { name: 'Habtamu', image: '/testimonial-images/habtamu.jpg' },
]

function Testimonials() {
  const { t } = useLanguage()
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.testimonials.tag}</p>
            <h2 className="section-title">{t.testimonials.title}</h2>
          </div>
        </Reveal>
        <div className="testimonials__grid">
          {testimonialMeta.map((item, index) => (
            <Reveal key={item.name} delay={(index % 4) * 100}>
              <blockquote className="testimonial">
                <p className="testimonial__stars" aria-label="Rated 5 out of 5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </p>
                <p className="testimonial__quote">“{t.testimonials.quotes[index]}”</p>
                <footer className="testimonial__author">
                  <img
                    className="testimonial__avatar"
                    src={item.image}
                    alt={`Portrait of ${item.name}`}
                    loading="lazy"
                  />
                  <div>
                    <p className="testimonial__name">{item.name}</p>
                    <p className="testimonial__role">{t.testimonials.roles[index]}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
