import { AlertCircle, ArrowDown } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const pains = [
  {
    icon: '💬',
    title: '"ChatGPT 쓸 줄 알지만\n앱은 못 만들겠어요"',
    desc: '사용할 줄 아는 것과 만들 줄 아는 것은 달라요. 그 간격을 메우는 게 Vibe Coding입니다.',
  },
  {
    icon: '🤝',
    title: '"개발자랑 대화가\n잘 안 돼요"',
    desc: '같은 방에 있어도 다른 언어를 쓰는 것 같은 느낌. 이제 그 언어를 배울 시간이에요.',
  },
  {
    icon: '😓',
    title: '"AI 트렌드에\n뒤처지는 것 같아요"',
    desc: '매일 쏟아지는 AI 뉴스. 보기만 하다가 결국 아무것도 못 한다면, 지금이 바꿀 때입니다.',
  },
]

export function ProblemStatement() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* dim glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(217,249,157,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 reveal" data-delay="0">
          <div className="inline-flex items-center gap-2 text-[#ef4444] text-sm font-medium mb-6">
            <AlertCircle size={16} />
            혹시 이런 생각 해보셨나요?
          </div>
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f1f5f9' }}
          >
            AI는 빠르게 달린다.{' '}
            <span className="text-[#64748b]">당신은?</span>
          </h2>
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {pains.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal glass rounded-3xl p-7 text-left hover:border-[rgba(239,68,68,0.3)] hover:-translate-y-1 transition-all duration-300"
              data-delay={i * 100 + 100}
            >
              <span className="text-3xl block mb-4">{icon}</span>
              <h3
                className="font-bold text-[#f1f5f9] mb-3 whitespace-pre-line leading-snug"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Pivot */}
        <div className="reveal flex flex-col items-center gap-4" data-delay="400">
          <div className="w-px h-12 bg-gradient-to-b from-[#2d3f5c] to-[#d9f99d]" />
          <div
            className="text-center px-8 py-5 rounded-3xl border border-[rgba(217,249,157,0.2)] bg-[rgba(217,249,157,0.05)]"
          >
            <p className="text-[#d9f99d] font-bold text-lg tracking-tight">
              그래서 만들었어요 ✦
            </p>
            <p className="text-[#94a3b8] text-sm mt-1">
              두려움을 흥미로 바꾸는 커리큘럼
            </p>
          </div>
          <ArrowDown size={20} className="text-[#d9f99d] animate-float" />
        </div>
      </div>
    </section>
  )
}
