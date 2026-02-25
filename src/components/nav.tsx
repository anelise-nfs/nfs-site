import { useState, useEffect } from 'react'
import '../assets/css/nav.css'
import nfsLogo from '../assets/graphics/NFS-logo-1.svg'

const NAV_LINKS = [
  { href: '#',        label: 'Home' },
  { href: '#about',   label: 'About' },
  { href: '#services',label: 'Services' },
  { href: '#work',    label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['about', 'services', 'work', 'contact']

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#')

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const intersecting = new Set<string>()

    const updateActive = () => {
      if (window.scrollY < 50) {
        setActiveSection('#')
        return
      }
      for (const id of SECTION_IDS) {
        if (intersecting.has(id)) {
          setActiveSection(`#${id}`)
          return
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id)
          } else {
            intersecting.delete(entry.target.id)
          }
        })
        updateActive()
      },
      { rootMargin: '-64px 0px -50% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => {
      if (window.scrollY < 50) setActiveSection('#')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={nfsLogo} alt="NFS" />
      </div>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={activeSection === href ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Nav
