import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  color?: 'lime' | 'blue' | 'neutral'
}

const colors = {
  lime: {
    wrap: 'border-[rgba(217,249,157,0.25)] bg-[rgba(217,249,157,0.08)] text-[#d9f99d]',
    dot: 'bg-[#d9f99d]',
  },
  blue: {
    wrap: 'border-[rgba(147,197,253,0.25)] bg-[rgba(147,197,253,0.08)] text-[#93c5fd]',
    dot: 'bg-[#93c5fd]',
  },
  neutral: {
    wrap: 'border-[#2d3f5c] bg-[rgba(30,41,59,0.6)] text-[#94a3b8]',
    dot: 'bg-[#64748b]',
  },
}

export function Badge({ children, color = 'lime' }: BadgeProps) {
  const c = colors[color]
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${c.wrap}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full animate-glow ${c.dot}`} />
      {children}
    </span>
  )
}
