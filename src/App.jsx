import { useEffect, useRef, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Industries from './components/Industries'
import Workspace from './components/Workspace'
import Outcomes from './components/Outcomes'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Success from './components/Success'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

const THEME_KEY = 'et-cam-theme'

function App() {
  const [theme, setTheme] = useState('light')
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY)
    const preferred =
      stored === 'dark' || stored === 'light'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    document.documentElement.setAttribute('data-theme', preferred)
    localStorage.setItem(THEME_KEY, preferred)
    mounted.current = true
    setTheme(preferred)
  }, [])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Industries />
        <Workspace />
        <Outcomes />
        <WhyChooseUs />
        <Services />
        <Process />
        <Projects />
        <Success />
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
