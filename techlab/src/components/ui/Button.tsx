import { type ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  className?: string
  target?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer transition-all duration-200 select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-[#d9f99d] text-[#0f172a] hover:bg-[#bef264] active:scale-95 shadow-[0_0_24px_rgba(217,249,157,0.3)] hover:shadow-[0_0_36px_rgba(217,249,157,0.45)]',
  ghost:
    'text-[#f1f5f9] hover:text-[#d9f99d] hover:bg-[rgba(217,249,157,0.06)] active:scale-95',
  outline:
    'border border-[rgba(217,249,157,0.3)] text-[#d9f99d] hover:bg-[rgba(217,249,157,0.08)] hover:border-[rgba(217,249,157,0.6)] active:scale-95',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2 rounded-[0.75rem]',
  md: 'text-sm px-6 py-3 rounded-[0.875rem]',
  lg: 'text-base px-8 py-4 rounded-[1rem]',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
