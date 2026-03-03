import { useRef, useEffect, useState } from 'react'

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const obsRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const el = ref.current
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
        { threshold }
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
  }, [threshold])

  return { ref, visible }
}
