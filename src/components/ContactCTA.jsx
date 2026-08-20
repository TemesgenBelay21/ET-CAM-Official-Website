import { HiArrowRight, HiPhone } from 'react-icons/hi2'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './ContactCTA.css'

function ContactCTA() {
  const { t } = useLanguage()
  return <section className="contact-cta"><div className="container"><Reveal><div className="contact-cta__inner"><div><p className="section-tag">{t.cta.tag}</p><h2>{t.cta.title}</h2><p>{t.cta.text}</p></div><div className="contact-cta__actions"><a className="btn btn--primary" href="#contact">{t.cta.button}<HiArrowRight aria-hidden="true" /></a><a className="contact-cta__phone" href="tel:+251936113051"><HiPhone aria-hidden="true" /> +251-936113051</a></div></div></Reveal></div></section>
}

export default ContactCTA