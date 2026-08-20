import { useEffect, useState } from 'react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = null
    const updateProgress = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
        frame = null
      })
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
}

export default ScrollProgress