import './Hero.css'

const keywords = [
  'Social Media',
  'Web Design',
  'Branding',
  'SEO',
  'Paid Ads',
  'Content',
  'AI Automation',
  'Outreach',
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">Ethiopian Creative Advertisement Media</p>
        <h1 className="hero__title">
          We turn attention into <span className="hero__accent">revenue</span>.
        </h1>
        <p className="hero__lead">
          ET-CAM is a full-service digital marketing agency in Addis Ababa. Strategy, content,
          websites, and advertising — one in-house team built to grow your brand and deliver
          measurable results.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Get in Touch
          </a>
          <a href="#services" className="btn btn--ghost">
            Explore Services
          </a>
        </div>
        <div className="hero__meta">
          <span>Addis Ababa, Ethiopia</span>
          <span className="hero__dot" aria-hidden="true">
            •
          </span>
          <span>Hospitality · Lifestyle · Service Brands</span>
        </div>
      </div>
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[0, 1].map((group) => (
            <div className="hero__marquee-group" key={group}>
              {keywords.map((keyword) => (
                <span className="hero__marquee-item" key={keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
