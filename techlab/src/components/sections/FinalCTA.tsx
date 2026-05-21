import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '../ui/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ENROLL_URL = 'https://smore.im/form/5KNKdzbvFG'

export function FinalCTA() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#d9f99d 1px, transparent 1px),
            linear-gradient(90deg, #d9f99d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(217,249,157,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal mb-6" data-delay="0">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: 'rgba(217,249,157,0.08)',
              border: '1px solid rgba(217,249,157,0.25)',
              color: '#d9f99d',
            }}
          >
            <Zap size={14} fill="#d9f99d" />
            지금이 딱 좋은 타이밍이에요
          </div>
        </div>

        <h2
          className="reveal font-extrabold tracking-tight text-[#f1f5f9] mb-4"
          data-delay="100"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
        >
          AI 시대의 주인공이 될{' '}
          <span
            style={{
              color: '#d9f99d',
              textShadow: '0 0 30px rgba(217,249,157,0.35)',
            }}
          >
            준비가 됐나요?
          </span>
        </h2>

        <p
          className="reveal text-[#94a3b8] text-base leading-relaxed mb-10 max-w-xl mx-auto"
          data-delay="200"
        >
          K대 전전 출신 멘토가 트렌디하고 재밌게 알려드려요. 왕초보도 OK, 지금 내 클래스를 골라보세요.
        </p>

        <div
          className="reveal flex flex-col sm:flex-row items-center justify-center gap-3"
          data-delay="300"
        >
          <Button href={ENROLL_URL} target="_blank" size="lg">
            지금 수강 신청하기 <ArrowRight size={18} />
          </Button>
          <Button href="#courses" variant="ghost" size="lg">
            클래스 둘러보기
          </Button>
        </div>
      </div>
    </section>
  )
}
