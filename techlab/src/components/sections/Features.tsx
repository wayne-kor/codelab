import { SectionLabel } from '../ui/SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const features = [
  {
    icon: '🤖',
    title: 'AI-first 커리큘럼',
    desc: 'Gemini CLI로 바이브코딩 환경 세팅부터 시작합니다. 도구를 먼저 손에 익히고, 만들면서 배워요.',
  },
  {
    icon: '🏗️',
    title: '실제로 동작하는 결과물',
    desc: '포트폴리오에 올릴 수 있는 앱을 직접 만들어요. 이론이 아닌 실전.',
  },
  {
    icon: '🎓',
    title: '비전공자 맞춤 설계',
    desc: '수학도 CS도 필요 없어요. 순서대로 따라오면 됩니다.',
  },
  {
    icon: '⚡',
    title: '빠른 피드백 루프',
    desc: '만들고 → 보고 → 고치고. 짧은 사이클로 빠르게 성장합니다.',
  },
  {
    icon: '🌐',
    title: '커뮤니티 네트워크',
    desc: '같은 목표를 가진 동료들과 함께해요. 혼자가 아닌 우리로.',
  },
]

export function Features() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(217,249,157,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal" data-delay="0">
          <SectionLabel>왜 달라요?</SectionLabel>
          <h2
            className="font-extrabold tracking-tight text-[#f1f5f9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            일반 코딩 교육과{' '}
            <span className="text-[#d9f99d]">완전히 다릅니다</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal glass rounded-3xl p-7 group hover:-translate-y-1 hover:border-[rgba(217,249,157,0.2)] hover:shadow-[0_0_24px_rgba(217,249,157,0.08)] transition-all duration-300 cursor-default"
              data-delay={i * 80 + 100}
            >
              <span className="text-3xl block mb-4">{icon}</span>
              <h3 className="font-bold text-[#f1f5f9] mb-2">{title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
