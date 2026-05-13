import { SectionLabel } from '../ui/SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const personas = [
  {
    emoji: '👩‍🎓',
    title: '비전공 대학생',
    desc: '취업 스펙에 AI 개발 경험을 추가하고 싶은 분',
    tags: ['취업 준비', 'AI 역량', '포트폴리오'],
  },
  {
    emoji: '💼',
    title: '기획자 / 마케터',
    desc: '개발팀과 더 자연스럽게 협업하고 싶은 분',
    tags: ['협업력 향상', '개발 이해', '소통'],
  },
  {
    emoji: '🚀',
    title: '예비 창업자',
    desc: '아이디어를 MVP로 직접 만들어보고 싶은 분',
    tags: ['MVP 개발', '프로토타입', '비용 절감'],
  },
  {
    emoji: '😰',
    title: 'AI 트렌드가 불안한 분',
    desc: '뒤처지고 싶지 않은 모든 분께 열려 있어요',
    tags: ['첫 코딩', 'AI 시작', '자신감'],
  },
]

export function ForWho() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="for-who" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(147,197,253,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal" data-delay="0">
          <SectionLabel>이런 분들을 위해</SectionLabel>
          <h2
            className="font-extrabold tracking-tight text-[#f1f5f9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            당신을 위해{' '}
            <span className="text-[#d9f99d]">만들었어요</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map(({ emoji, title, desc, tags }, i) => (
            <div
              key={title}
              className="reveal glass rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:border-[rgba(217,249,157,0.2)] transition-all duration-300"
              data-delay={i * 80 + 100}
            >
              <span className="text-4xl">{emoji}</span>
              <div>
                <h3 className="font-bold text-[#f1f5f9] mb-1.5">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg"
                    style={{
                      background: 'rgba(217,249,157,0.06)',
                      border: '1px solid rgba(217,249,157,0.15)',
                      color: '#a3e635',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
