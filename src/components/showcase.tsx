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
  section: string | string[]
  links?: ShowcaseCardLink[]
}

type ShowcaseProps = {
  sections?: string[]
  cards?: ShowcaseCardData[]
}

const defaultSections = ['Development', 'Design', 'Strategy']

const defaultCards: ShowcaseCardData[] = [
  // Dev
  {
    image: '../images/projects_dev_futuresunvalley.png',
    imageAlt: 'Sun Valley Microsite',
    title: 'Sun Valley Microsite',
    description: 'Custom website designed and developed for Sun Valley Resort to showcase capital projects. NSAA Awards Best Overall Marketing Campaign finalist for content showcased on the progress pages.',
    section: ['Development', 'Design'],
    links: [
      { label: 'View the Site', href: 'https://www.futureofsunvalley.com/', variant: 'primary' },
    ],
  },
  {
    image: '../images/projects_dev_everfree.png',
    imageAlt: 'EverFree Outdoors Mock Site',
    title: 'EverFree Outdoors Mock Site',
    description: "Full stack e-commerce outdoor gear website designed and developed with a team of 5 developers. Features full auth, advanced component structures, and multi-platform styling.",
    section: 'Development',
    links: [
      { label: 'Explore the Site', href: '#', variant: 'primary' },
      { label: 'GitHub Repo', href: 'https://github.com/anelisekathryn/EverFree-Outdoors', variant: 'secondary' },
    ],
  },
  {
    image: '../images/projects_dev_svtimeline.png',
    imageAlt: 'Sun Valley Timeline Component',
    title: 'Sun Valley Timeline Component',
    description: 'Historical timeline component designed and developed for Sun Valley Resort to showcase the rich history of the resort and any other timeline content.',
    section: 'Development',
    links: [
      { label: 'See it in Action', href: 'https://www.sunvalley.com/about/', variant: 'primary' },
    ],
  },
  {
    image: '../images/projects_dev_nfs.png',
    imageAlt: 'North Fork Solutions Site',
    title: 'North Fork Solutions Site',
    description: 'Like this site? I designed and built that too. Intentionally simple and clean, this is a React + TypeScript single-page site built with Vite and styled with custom vanilla CSS.',
    section: 'Development',
    links: [
      { label: 'See the Code', href: 'https://github.com/anelise-nfs/nfs-site', variant: 'primary' },
    ],
  },
  // Design
  {
    image: '../images/projects_design_btpc.png',
    imageAlt: 'Real Estate Brand + Website',
    title: 'Real Estate Brand + Website',
    description: 'A complete rebrand and website design for a top producing real estate agent in Park City, Utah. Brand guidelines and logo custom design and website built in partnership with Luxury Presence.',
    section: 'Design',
    links: [
      { label: 'See the Website', href: 'https://brendantrieb.com/', variant: 'primary' },
    ],
  },
  {
    image: '../images/projects_design_sbscott.png',
    imageAlt: 'Scott x Snowbasin',
    title: 'SCOTT Goggles x Snowbasin',
    description: 'Custom designed solution for a Snowbasin and SCOTT goggles partnership. Based on weather conditions, a designated goggle rec appears in the conditions report with a link to the product.',
    section: 'Design',
    links: [
      { label: 'Visit Site', href: '#', variant: 'primary' },
    ],
  },
  {
    image: '../images/projects_design_aquavie.png',
    imageAlt: 'Wordpress Site Rebuild',
    title: 'Wordpress Site Rebuild',
    description: 'A rush relaunch of a wellness club website using a Wordpress theme paired with custom plugins. Digital brand guide and site component guide created for content authors.',
    section: 'Design',
    links: [
      { label: 'View Project', href: 'https://www.aquaviewellness.com/', variant: 'primary' },
    ],
  },
  {
    image: '../images/projects_design_westgate.png',
    imageAlt: 'Hotel Homepage Redesign',
    title: 'Hotel Homepage Redesign',
    description: 'A complete redesign and development of all hotel home pages across a portfolio of properties with strategic placement of booking bar and invitation to explore additional properties.',
    section: 'Design',
  },
  // Strategy
  {
    image: '../images/projects_strategy_devsprints.png',
    imageAlt: 'Asana Development Planning',
    title: 'Asana Development Planning',
    description: 'Created and managed an asana board that tracked and delivered hundreds of dev projects across dozens of sprints and releases for 10 websites across a business portfolio.',
    section: 'Strategy',
  },
  {
    image: '../images/projects_strategy_events.png',
    imageAlt: 'Events Communication + Display',
    title: 'Events Communication + Display',
    description: 'Update the visual and technical display of events across several hotels in a business portfolio to align communication, streamline processes, and eliminate duplicate information and improve SEO.',
    section: 'Strategy',
  },
  {
    image: '../images/projects_strategy_svsb.png',
    imageAlt: 'Complete Site Redesign + Rebuild',
    title: 'Complete Site Redesign + Rebuild',
    description: 'Coordinated and advised in the complete redesign and rebuild of two ski resort websites, working with several designers, developers, content authors, and marketing teams.',
    section: 'Strategy',
    links: [
      { label: 'Sun Valley', href: 'https://www.sunvalley.com/', variant: 'primary' },
      { label: 'Snowbasin', href: 'https://saltlake.littleamerica.com/', variant: 'secondary' },
    ],
  },
  {
    image: '../images/projects_strategy_gala.png',
    imageAlt: 'Complete Site Redesign + Rebuild',
    title: 'Complete Site Redesign + Rebuild',
    description: 'Coordinated and advised in the complete redesign and rebuild of two hotel websites, working with several designers, developers, content authors, and marketing teams.',
    section: 'Strategy',
    links: [
      { label: 'Grand America', href: 'https://www.grandamerica.com/', variant: 'primary' },
      { label: 'Little America', href: 'https://saltlake.littleamerica.com/', variant: 'secondary' },
    ],
  },
  {
    image: '../images/projects_strategy_mtbfw.png',
    imageAlt: 'Mt. Bachelor Closing Weekend',
    title: 'Mt. Bachelor x 10 Barrel Activation',
    description: 'A closing weekend experience in partnership with 10 Barrel Brewing and Mt. Bachelor where both mountain biking and skiing were open for an entire 3-day weekend, featuring several events and brand activations.',
    section: 'Strategy',
  },
  {
    image: '../images/projects_strategy_wwpc.png',
    imageAlt: 'Trail Sign + Wayfinding',
    title: 'Trail Signs + Wayfinding',
    description: 'Update the mountain bike trail sign and wayfinding experience at Woodward Park City to promote a progression-based trail system and improve biking experience for both beginners and advanced riders.',
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
      : cards.filter(card =>
          (Array.isArray(card.section) ? card.section : [card.section]).some(
            s => s.toLowerCase() === activeSection
          )
        )

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
              <p className={`showcase__card-description${!card.links?.length ? ' showcase__card-description--no-links' : ''}`}>{card.description}</p>
            </div>
            {card.links && card.links.length > 0 && (
              <div className="showcase__card-links">
                {card.links.slice(0, 2).map((link, i) => (
                  <Button key={i} variant={link.variant ?? 'primary'} href={link.href} target="_blank" rel="noopener noreferrer">
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
