import { useEffect, useRef } from 'react'
import './App.css'
import Button from './components/button'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './screens/about'
import Services from './screens/services'
import Work from './screens/work'
import Contact from './screens/contact'
import Footer from './components/footer'

function App() {
  const progressRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let prevAtTop = true
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (progressRef.current) {
        progressRef.current.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`
      }
      const atTop = scrollTop < 50
      if (atTop && !prevAtTop) {
        window.dispatchEvent(new Event('nfs:reset-animations'))
      }
      prevAtTop = atTop
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      cursorRef.current?.classList.toggle('custom-cursor--hover', !!(target.closest('a, button, [role="button"]')))
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [])

  return (
    <>
      <div className="ants-screen">
        <h2>What is this, a website for ants?!</h2>
        <iframe
          src="https://giphy.com/embed/vPGq9nqmLzMty"
          width="480"
          height="269"
          style={{ border: 0 }}
          className="giphy-embed"
          allowFullScreen
        />
        <Button variant="primary" href="mailto:hello@northforksolutions.com?subject=this site is for ants">file a complaint</Button>
      </div>

      <div className="site-wrapper">
        <div ref={cursorRef} className="custom-cursor" style={{ left: -100, top: -100 }} />
        <div ref={progressRef} className="scroll-progress" />
        <Nav />
        <Hero />
        <main className="site-content">
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="work">
            <Work />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
