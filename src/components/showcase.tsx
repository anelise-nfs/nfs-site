import { useState, useRef, useEffect } from 'react'
import Button from './button'
import '../assets/css/showcase.css'

type ShowcaseCardLink = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

// Max 2 links per card
export type ShowcaseCardData = {
  image: string
  imageAlt: string
  title: string
  description: string
  section: string
  links?: ShowcaseCardLink[]
}

type ShowcaseProps = {
  sections?: string[]
  cards?: ShowcaseCardData[]
}

const defaultSections = ['Branding', 'Web Design', 'Strategy']

const defaultCards: ShowcaseCardData[] = [
  // Branding
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Brand Identity for Acme Co.',
    title: 'Brand Identity for Acme Co.',
    description: 'A complete brand refresh including logo, color palette, and typography guidelines for a growing tech startup.',
    section: 'Branding',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
      { label: 'Case Study', href: '#', variant: 'secondary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Logo Design for Solis',
    title: 'Logo Design for Solis',
    description: "Crafting a bold and memorable logo that reflects the company's commitment to sustainable energy solutions.",
    section: 'Branding',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Style Guide for Northfield',
    title: 'Style Guide for Northfield',
    description: 'Developing a comprehensive visual style guide to ensure brand consistency across all digital and print touchpoints.',
    section: 'Branding',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
      { label: 'Learn More', href: '#', variant: 'secondary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Rebranding Campaign',
    title: 'Rebranding Campaign',
    description: 'Strategic rebrand for a legacy financial services firm entering a new digital-first market segment.',
    section: 'Branding',
  },
  // Web Design
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'E-commerce Redesign',
    title: 'E-commerce Redesign',
    description: 'A complete UX overhaul for an online retailer, boosting conversions by 40% through improved navigation and checkout flow.',
    section: 'Web Design',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
      { label: 'Case Study', href: '#', variant: 'secondary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Portfolio Site for Ramos Studio',
    title: 'Portfolio Site for Ramos Studio',
    description: 'A minimalist, animation-rich portfolio website showcasing the photography and design work of an independent creative studio.',
    section: 'Web Design',
    links: [
      { label: 'Visit Site', href: '#', variant: 'primary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'SaaS Dashboard UI',
    title: 'SaaS Dashboard UI',
    description: 'Designing a clean, data-dense dashboard interface for a B2B analytics platform, focused on clarity and usability.',
    section: 'Web Design',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
      { label: 'Learn More', href: '#', variant: 'secondary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Restaurant Landing Page',
    title: 'Restaurant Landing Page',
    description: 'A visually compelling landing page designed to drive reservations and highlight seasonal menus for an upscale dining experience.',
    section: 'Web Design',
  },
  // Strategy
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Go-to-Market Plan',
    title: 'Go-to-Market Plan',
    description: 'Developing a full GTM strategy for a SaaS startup launching into a competitive enterprise market, including positioning and channel mix.',
    section: 'Strategy',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Content Strategy Audit',
    title: 'Content Strategy Audit',
    description: 'A comprehensive audit and rebuild of a content strategy to align with SEO goals and audience growth targets.',
    section: 'Strategy',
    links: [
      { label: 'View Project', href: '#', variant: 'primary' },
      { label: 'Case Study', href: '#', variant: 'secondary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Digital Transformation Roadmap',
    title: 'Digital Transformation Roadmap',
    description: 'Guiding a mid-sized retail brand through a structured digital transformation, from ecommerce migration to omnichannel activation.',
    section: 'Strategy',
    links: [
      { label: 'Learn More', href: '#', variant: 'primary' },
    ],
  },
  {
    image: 'https://placehold.co/350x200',
    imageAlt: 'Social Media Strategy',
    title: 'Social Media Strategy',
    description: 'Building a cohesive social media strategy for a consumer goods brand, resulting in a 3x increase in organic reach within six months.',
    section: 'Strategy',
  },
]

function Showcase({ sections = defaultSections, cards = defaultCards }: ShowcaseProps) {
  const [activeSection, setActiveSection] = useState('all')
  const gridRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const obsRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observe = () => {
      obsRef.current?.disconnect()
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            obsRef.current = null
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      obsRef.current = obs
    }

    observe()

    const handleReset = () => {
      setVisible(false)
      observe()
    }

    window.addEventListener('nfs:reset-animations', handleReset)

    return () => {
      obsRef.current?.disconnect()
      window.removeEventListener('nfs:reset-animations', handleReset)
    }
  }, [])

  useEffect(() => {
    const container = tabsRef.current
    if (!container) return
    const activeBtn = container.querySelector('.btn--active') as HTMLElement | null
    if (!activeBtn) return
    container.scrollTo({
      left: activeBtn.offsetLeft - (container.offsetWidth - activeBtn.offsetWidth) / 2,
      behavior: 'smooth',
    })
  }, [activeSection])

  const filteredCards =
    activeSection === 'all'
      ? cards
      : cards.filter(card => card.section.toLowerCase() === activeSection)

  const allTabs = ['All', ...sections]

  return (
    <div className="showcase">
      <div ref={tabsRef} className="showcase__tabs">
        {allTabs.map(tab => {
          const id = tab.toLowerCase()
          return (
            <Button
              key={id}
              variant="toggle"
              active={activeSection === id}
              onClick={() => setActiveSection(id)}
            >
              {tab}
            </Button>
          )
        })}
      </div>

      <div
        ref={gridRef}
        className={`showcase__grid${visible ? ' showcase__grid--visible' : ''}`}
      >
        {filteredCards.map((card, index) => (
          <div
            className="showcase__card"
            key={`${activeSection}-${index}`}
            style={{ '--card-index': index } as React.CSSProperties}
          >
            <div className="showcase__card-image">
              <img src={card.image} alt={card.imageAlt} />
            </div>
            <div className="showcase__card-body">
              <h3 className="showcase__card-title">{card.title}</h3>
              <p className="showcase__card-description">{card.description}</p>
            </div>
            {card.links && card.links.length > 0 && (
              <div className="showcase__card-links">
                {card.links.slice(0, 2).map((link, i) => (
                  <Button key={i} variant={link.variant ?? 'primary'} href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Showcase
