import { useEffect, useRef, useState } from 'react'
import {
  HiBriefcase,
  HiCalendarDays,
  HiHandThumbUp,
  HiUsers,
  HiChartBar,
  HiAdjustmentsHorizontal,
  HiMapPin,
} from 'react-icons/hi2'
import Reveal from './Reveal'
import './WhyChooseUs.css'

const stats = [
  { icon: HiBriefcase, value: 70, suffix: '+', label: 'Projects Delivered' },
  { icon: HiCalendarDays, value: 2, suffix: '+', label: 'Years of Experience' },
  { icon: HiHandThumbUp, value: 97, suffix: '%', label: 'Client Satisfaction' },
]

const reasons = [
  {
    icon: HiUsers,
    title: 'In-House Full-Service Team',
    text: 'Strategy, content, tech, and ads — one team, not fragmented vendors.',
  },
  {
    icon: HiChartBar,
    title: 'Measurable, Results-Driven',
    text: 'Every campaign is tied to metrics you can see and track.',
  },
  {
    icon: HiAdjustmentsHorizontal,
    title: 'Tailored Per Client',
    text: 'No templates — each strategy is built around your brand and audience.',
  },
  {
    icon: HiMapPin,
    title: 'Local Market Expertise',
    text: 'Rooted in Addis Ababa, fluent with local and international audiences.',
  },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="stat__value">
      {display}
      {suffix}
    </span>
  )
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="why">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">Why Choose Us</p>
            <h2 className="section-title">Built for results, measured in impact.</h2>
            <p className="section-sub">
              Proven numbers, and the approach behind them.
            </p>
          </div>
        </Reveal>

        <div className="why__stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.label} delay={index * 120}>
                <div className="stat">
                  <Icon className="stat__icon" aria-hidden="true" />
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="stat__label">{stat.label}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="why__reasons">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} delay={(index % 2) * 120}>
                <div className="reason">
                  <span className="reason__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
