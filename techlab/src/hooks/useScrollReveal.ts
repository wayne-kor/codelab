import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const delay = target.dataset.delay ?? '0'
            target.style.transitionDelay = `${delay}ms`
            target.classList.add('revealed')
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
