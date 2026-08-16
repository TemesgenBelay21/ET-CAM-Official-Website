import {
  HiShare,
  HiCodeBracket,
  HiMegaphone,
  HiMagnifyingGlass,
  HiCamera,
  HiVideoCamera,
  HiPaintBrush,
  HiCpuChip,
  HiCalendarDays,
  HiEnvelope,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import './Services.css'

const services = [
  {
    icon: HiShare,
    title: 'Social Media Marketing',
    text: 'Platform strategy, content calendar, community management, and analytics across Facebook, Instagram, TikTok, and LinkedIn.',
  },
  {
    icon: HiCodeBracket,
    title: 'Website Design & Development',
    text: 'Responsive, SEO-ready websites with integrated booking/payment functionality, built for conversion and speed.',
  },
  {
    icon: HiMegaphone,
    title: 'Paid Advertising',
    text: 'Targeted campaigns across Meta, TikTok, and Google Ads, with A/B testing and ROI reporting.',
  },
  {
    icon: HiMagnifyingGlass,
    title: 'Search Engine Optimization (SEO)',
    text: 'Google Business Profile optimization, keyword research, technical SEO audits, and ranking reports.',
  },
  {
    icon: HiCamera,
    title: 'Content Production',
    text: 'Professional photography, short-form video/reels, graphic design, and editing/post-production.',
  },
  {
    icon: HiVideoCamera,
    title: 'TV Commercial Production',
    text: 'Concept, scriptwriting, filming, sound design, and broadcast-ready delivery.',
  },
  {
    icon: HiPaintBrush,
    title: 'Branding & Visual Identity',
    text: 'Logo design, brand style guides, and consistent visual/voice application across channels.',
  },
  {
    icon: HiCpuChip,
    title: 'AI Automation & Marketing Systems',
    text: 'Chatbots, automated lead capture and follow-up, and CRM integration.',
  },
  {
    icon: HiCalendarDays,
    title: 'Event Promotion & Influencer Marketing',
    text: 'Campaign planning for hosted events, influencer outreach, and co-branded content.',
  },
  {
    icon: HiEnvelope,
    title: 'Direct Outreach',
    text: 'Lead-nurturing email sequences, SMS campaigns, structured cold-call outreach and tracking.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">Services</p>
            <h2 className="section-title">Everything your brand needs to grow.</h2>
            <p className="section-sub">
              Ten in-house services, delivered end-to-end without external vendors.
            </p>
          </div>
        </Reveal>
        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(index % 3) * 100}>
                <article className="service">
                  <span className="service__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
