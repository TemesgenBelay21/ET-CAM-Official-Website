import { HiCheckCircle } from 'react-icons/hi2'
import Reveal from './Reveal'
import './About.css'

const highlights = [
  'One in-house team — from strategy to delivery',
  'Every engagement customized to the client’s identity and goals',
  'Creativity, technology, and market insight combined',
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <Reveal>
            <div className="section-head about__head">
              <p className="section-tag">About Us</p>
              <h2 className="section-title">
                One team. Every channel. Measurable results.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="about__intro">
              ET-CAM is a results-driven digital marketing agency based in Addis Ababa, Ethiopia,
              specializing in hospitality, lifestyle, and service-oriented brands.
            </p>
            <p className="about__text">
              Content production, social media management, website development, branding, and SEO
              are delivered under one in-house team — not fragmented across vendors — ensuring
              consistent execution from strategy through delivery. Every engagement is customized
              to the client’s identity, audience, and goals, combining creativity, technology, and
              market insight to produce measurable results.
            </p>
            <ul className="about__highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <HiCheckCircle aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
