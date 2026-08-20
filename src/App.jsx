import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Industries from './components/Industries'
import Outcomes from './components/Outcomes'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

const THEME_KEY = 'et-cam-theme'

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Industries />
        <Outcomes />
        <WhyChooseUs />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
      <ScrollToTop />
    </>
  )
}

export default App
