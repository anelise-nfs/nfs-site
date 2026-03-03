import { useEffect, useRef } from 'react'
import '../assets/css/image-text.css'
import Button from './button'

type ImageTextProps = {
  variant: 'image-left' | 'image-right'
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
  buttonLabel?: string
  buttonHref?: string
  buttonAlign?: 'left' | 'right'
}

function ImageText({ variant, imageSrc, imageAlt, children, buttonLabel, buttonHref, buttonAlign = 'left' }: ImageTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  const obsRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observe = () => {
      obsRef.current?.disconnect()
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
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
      el.classList.remove('is-visible')
      observe()
    }

    window.addEventListener('nfs:reset-animations', handleReset)
    return () => {
      obsRef.current?.disconnect()
      window.removeEventListener('nfs:reset-animations', handleReset)
    }
  }, [])

  return (
    <div ref={ref} className={`image-text image-text--${variant}`}>
      <div className="image-text__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="image-text__content">
        {children}
        {buttonLabel && (
          <div className={`image-text__button image-text__button--${buttonAlign}`}>
            <Button variant="secondary" href={buttonHref}>{buttonLabel}</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageText
