import { FaStar } from 'react-icons/fa6'
import Reveal from './Reveal'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Mesti',
    role: 'Owner and General Manager',
    image: '/testimonial-images/mesti.jpg',
    quote:
      'ET-CAM doubled our engagement and brought us direct bookings within two months. They didn’t just grow our followers—they grew our revenue.',
  },
  {
    name: 'Dj Nani',
    role: 'Owner',
    image: '/testimonial-images/dj-nani.jpg',
    quote:
      'ET-CAM captured our brand’s aesthetic perfectly. The website looks premium, feels modern, and gives our customers a seamless shopping experience.',
  },
  {
    name: 'Eliyas',
    role: 'Client',
    image: '/testimonial-images/eliyas.jpg',
    quote:
      'Our customers love how easy it is to browse and shop on our new site—especially on mobile. ET-CAM delivered beyond our expectations.',
  },
  {
    name: 'Habtamu',
    role: 'Client',
    image: '/testimonial-images/habtamu.jpg',
    quote:
      'ET-CAM’s email marketing helped us connect with the right customers and increase repeat orders. Their creative approach built stronger customer loyalty.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">Testimonials</p>
            <h2 className="section-title">What our clients say.</h2>
          </div>
        </Reveal>
        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={(index % 4) * 100}>
              <blockquote className="testimonial">
                <p className="testimonial__stars" aria-label="Rated 5 out of 5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </p>
                <p className="testimonial__quote">“{item.quote}”</p>
                <footer className="testimonial__author">
                  <img
                    className="testimonial__avatar"
                    src={item.image}
                    alt={`Portrait of ${item.name}`}
                    loading="lazy"
                  />
                  <div>
                    <p className="testimonial__name">{item.name}</p>
                    <p className="testimonial__role">{item.role}</p>
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
