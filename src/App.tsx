import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './screens/about'
import Services from './screens/services'
import Work from './screens/work'
import Contact from './screens/contact'
import Footer from './components/footer'

function App() {
  const [progress, setProgress] = useState(0)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let prevAtTop = true
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100)
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
    const handleMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY })
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(!!(target.closest('a, button, [role="button"]')))
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
      <div
        className={`custom-cursor${isHovering ? ' custom-cursor--hover' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
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
    </>
  )
}

export default App
