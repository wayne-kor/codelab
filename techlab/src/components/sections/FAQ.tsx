import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const faqs = [
  {
    q: '코딩 경험이 전혀 없어도 들을 수 있나요?',
    a: '네, 완전 처음 시작하는 분들을 위해 설계된 커리큘럼이에요. 컴퓨터를 켜고 구글에 검색할 수 있다면 충분합니다. 코딩 지식 0에서 시작해도 4주 안에 동작하는 앱을 만들 수 있어요.',
  },
  {
    q: '수업은 어떤 방식으로 진행되나요?',
    a: '주 1회 고정 수업을 기본으로 진행합니다. 수업 외에도 온라인으로 실시간 피드백을 제공하며, 시간과 장소는 수강생과 별도로 조율해요. 실습 중심으로 진행되니 직접 만들면서 배울 수 있습니다.',
  },
  {
    q: 'Python 강의와 AI 코딩 강의, 뭐가 먼저인가요?',
    a: '두 과정은 독립적으로 수강할 수 있어요. 다만, 개발자와 협업이 주 목적이라면 Python 기초를, 직접 앱을 만들고 싶다면 AI Vibe Coding을 먼저 추천드려요. 둘 다 들으신다면 AI Vibe Coding → Python 순서를 권장합니다.',
  },
  {
    q: '비용이 어떻게 되나요?',
    a: '어떤 클래스를 어떤 목적으로 수강하느냐에 따라 달라집니다. 개인마다 커리큘럼이 다르게 구성되기 때문에 문의를 통해 함께 조율해요. 다만 첫 1~3회는 무료로 진행되니, 부담 없이 시작해 보세요.',
  },
  {
    q: '수료 후 취업 연계가 되나요?',
    a: '공식적인 취업 보장 프로그램은 운영하지 않아요. 다만, 수료 후 포트폴리오 완성 지원과 함께 인턴십 정보를 커뮤니티를 통해 공유하고 있습니다. 실제 작동하는 프로젝트를 포트폴리오로 제출할 수 있어요.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="faq" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 reveal" data-delay="0">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            className="font-extrabold tracking-tight text-[#f1f5f9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className="reveal glass rounded-2xl overflow-hidden transition-all duration-300"
                data-delay={i * 60 + 100}
                style={isOpen ? { borderColor: 'rgba(217,249,157,0.2)' } : {}}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-[#f1f5f9] text-sm leading-snug">{q}</span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isOpen ? 'rgba(217,249,157,0.15)' : 'rgba(255,255,255,0.04)',
                      color: isOpen ? '#d9f99d' : '#64748b',
                    }}
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                {/* Smooth expand via grid rows trick */}
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-[#64748b] leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
