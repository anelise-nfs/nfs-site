import { useState, useEffect } from 'react'
import '../assets/css/hero.css'
import Button from './button'

const TAGLINE = 'design. develop. deliver.'

function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (displayed.length < TAGLINE.length) {
      const lastChar = displayed[displayed.length - 1]
      const delay = lastChar === '.' ? 380 : 65
      const timeout = setTimeout(() => setDisplayed(TAGLINE.slice(0, displayed.length + 1)), delay)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setDone(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [displayed])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>North Fork Solutions</h1>
        <h2 className="hero__tagline">
          <span className="hero__tagline-word">{displayed}</span>
          {!done && <span className="hero__tagline-cursor" aria-hidden="true" />}
        </h2>
        <div className="hero__buttons">
          <Button variant="primary" href="#services">find solutions</Button>
          <Button variant="secondary" href="#contact">get in touch</Button>
        </div>
      </div>
      <button className="hero__scroll-dot" onClick={scrollToAbout} aria-label="Scroll to next section" />
    </section>
  )
}

export default Hero
