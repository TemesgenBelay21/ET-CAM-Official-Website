import { HiMapPin, HiPhone, HiEnvelope } from 'react-icons/hi2'
import {
  FaTelegram,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

const socials = [
  { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/' },
  { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/' },
]

function Contact() {
  const { t } = useLanguage()
  const details = [
    { icon: HiMapPin, label: t.contact.location, value: t.contact.locationValue, href: null },
    {
      icon: HiPhone,
      label: t.contact.phone,
      value: '+251-936113051, +251-969153870',
      href: null,
    },
    {
      icon: HiEnvelope,
      label: t.contact.email,
      value: 'etcamagency@gmail.com',
      href: 'mailto:etcamagency@gmail.com',
    },
  ]
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.contact.tag}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-sub">{t.contact.sub}</p>
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
                    data-name={social.name}
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
