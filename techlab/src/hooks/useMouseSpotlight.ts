import { useEffect, useRef } from 'react'

export function useMouseSpotlight() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isDesktop = window.matchMedia('(pointer: fine)').matches
    if (!isDesktop) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--spotlight-x', `${x}%`)
      el.style.setProperty('--spotlight-y', `${y}%`)
    }

    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  return ref
}
