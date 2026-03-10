import { useRef, useState, useEffect } from 'react'
import '../assets/css/four-square-info.css'

type SquareItem = {
  icon: React.ReactNode
  title: string
  text: string
}

type FourSquareInfoProps = {
  items: [SquareItem, SquareItem, SquareItem, SquareItem]
}

function FourSquareInfo({ items }: FourSquareInfoProps) {
  const gridRef = useRef<HTMLDivElement>(null)
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

  return (
    <div ref={gridRef} className={`four-square${visible ? ' four-square--visible' : ''}`}>
      {items.map((item, index) => (
        <div
          className="four-square__card"
          key={index}
          style={{ '--card-index': index } as React.CSSProperties}
        >
          <div className="four-square__icon">{item.icon}</div>
          <h3 className="four-square__title">{item.title}</h3>
          <p className="four-square__text">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default FourSquareInfo
