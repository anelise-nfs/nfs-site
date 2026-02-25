import '../assets/css/hero.css'
import Button from './button'

function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>north fork solutions</h1>
        <h2>design. develop. deliver.</h2>
        <div className="hero__buttons">
          <Button variant="primary" href="#services">find solutions</Button>
          <Button variant="secondary" href="#contact">get in touch</Button>
        </div>
      </div>
      <button className="hero__scroll-arrow" onClick={scrollToAbout} aria-label="Scroll to next section">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="3" x2="12" y2="17" />
          <polyline points="6 11 12 17 18 11" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
