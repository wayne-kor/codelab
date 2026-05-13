interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d9f99d] mb-4">
      {children}
    </p>
  )
}
