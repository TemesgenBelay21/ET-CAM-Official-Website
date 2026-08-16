import { HiMapPin, HiPhone, HiEnvelope } from 'react-icons/hi2'
import {
  FaTelegram,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6'
import Reveal from './Reveal'
import './Contact.css'

const details = [
  {
    icon: HiMapPin,
    label: 'Our Location',
    value: 'Addis Ababa, Nifas Silk-Lafto',
    href: null,
  },
  {
    icon: HiPhone,
    label: 'Phone Numbers',
    value: '+251-936113051, +251-969153870',
    href: null,
  },
  {
    icon: HiEnvelope,
    label: 'Email Address',
    value: 'etcamagency@gmail.com',
    href: 'mailto:etcamagency@gmail.com',
  },
]

const socials = [
  { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/' },
  { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">Contact</p>
            <h2 className="section-title">Let’s build something together.</h2>
            <p className="section-sub">
              Reach out to us through the details below. We’re available for inquiries,
              collaborations, and consultations.
            </p>
          </div>
        </Reveal>
        <div className="contact__grid">
          <div className="contact__items">
            {details.map((detail, index) => {
              const Icon = detail.icon
              return (
                <Reveal key={detail.label} delay={index * 100}>
                  <div className="contact__item">
                    <span className="contact__item-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{detail.label}</h3>
                      {detail.href ? (
                        <a href={detail.href}>{detail.value}</a>
                      ) : (
                        <p>{detail.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={150}>
            <div className="contact__socials">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social"
                    aria-label={social.name}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
