import '../assets/css/hero.css'
import Button from './button'

function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>North Fork Solutions</h1>
        <h2>design. develop. deliver.</h2>
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
