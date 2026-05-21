import { useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { useMouseSpotlight } from '../../hooks/useMouseSpotlight'

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  top: Math.random() * 85 + 5,
  left: Math.random() * 90 + 5,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 4,
}))

export function Hero() {
  const spotlightRef = useMouseSpotlight()
  const sectionRef = useRef<HTMLElement>(null)

  const combinedRef = (el: HTMLElement | null) => {
    ;(sectionRef as React.MutableRefObject<HTMLElement | null>).current = el
    ;(spotlightRef as React.MutableRefObject<HTMLElement | null>).current = el
  }

  return (
    <section
      ref={combinedRef}
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at var(--spotlight-x, 50%) var(--spotlight-y, 40%),
            rgba(217,249,157,0.07) 0%,
            transparent 65%
          ),
          #0f172a
        `,
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#d9f99d 1px, transparent 1px),
            linear-gradient(90deg, #d9f99d 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#d9f99d] pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: 0.25,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Top glow orb */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(217,249,157,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
          <Badge color="lime">K대 전전 출신 멘토 · 트렌디하고 재밌게</Badge>
        </div>

        <h1
          className="animate-fade-up font-extrabold leading-[1.05] tracking-tight"
          style={{
            animationDelay: '100ms',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#f1f5f9',
          }}
        >
          기획자의 로망:
          <br />
          개발자랑 싸우지 않고{' '}
          <span
            style={{
              color: '#d9f99d',
              textShadow: '0 0 30px rgba(217,249,157,0.4), 0 0 60px rgba(217,249,157,0.15)',
              whiteSpace: 'nowrap',
            }}
          >
            '말'로 코딩하기
          </span>
        </h1>

        <p
          className="animate-fade-up text-[#94a3b8] leading-relaxed max-w-xl"
          style={{ animationDelay: '200ms', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}
        >
          왕초보도 OK!{' '}
          <span className="text-[#cbd5e1]">기초부터 실전 프로젝트까지, 개인별 특화 클래스.</span>
          <br className="hidden sm:block" />
          AI를 내 손발처럼 — 지금 바로 시작하세요.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto"
          style={{ animationDelay: '300ms' }}
        >
          <Button href="#courses" size="lg" className="w-full sm:w-auto">
            클래스 선택하기 <ArrowRight size={18} />
          </Button>
          <Button href="#curriculum" variant="ghost" size="md" className="opacity-60 sm:opacity-100">
            커리큘럼 보기
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#475569] hover:text-[#d9f99d] transition-colors animate-float"
        aria-label="아래로 스크롤"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
