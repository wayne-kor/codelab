import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'

const BRAND = 'CODE|LAB+'
const ENROLL_URL = '#courses'

const navLinks = [
  { label: '과정 소개', href: '#courses' },
  { label: '커리큘럼', href: '#curriculum' },
  { label: '수강생 후기', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(15,23,42,0.85)] backdrop-blur-xl border-b border-[#2d3f5c]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[#d9f99d] font-bold text-lg tracking-tight">
          {BRAND}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href={ENROLL_URL} size="sm">
            클래스 선택하기 →
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(15,23,42,0.97)] backdrop-blur-xl border-b border-[#2d3f5c] px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[#94a3b8] hover:text-[#d9f99d] transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button href={ENROLL_URL} size="sm" className="mt-2 w-full">
              클래스 선택하기 →
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
