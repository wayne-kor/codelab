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
    q: '강의는 어떤 방식으로 진행되나요?',
    a: 'AI Vibe Coding은 매주 라이브 세션 + 녹화본 제공 방식이에요. Python 기초는 자율 진행 방식으로, 원하는 시간에 학습하고 Slack 커뮤니티에서 질문할 수 있습니다. 두 과정 모두 실습 중심이에요.',
  },
  {
    q: '수강 기간이 지나면 자료를 볼 수 없나요?',
    a: '수강 기간 종료 후에도 강의 자료와 녹화본은 영구적으로 접근 가능합니다. 커뮤니티 참여는 기간 내 활성화되지만, 자료 접근에는 제한이 없어요.',
  },
  {
    q: 'Python 강의와 AI 코딩 강의, 뭐가 먼저인가요?',
    a: '두 과정은 독립적으로 수강할 수 있어요. 다만, 개발자와 협업이 주 목적이라면 Python 기초를, 직접 앱을 만들고 싶다면 AI Vibe Coding을 먼저 추천드려요. 둘 다 들으신다면 AI Vibe Coding → Python 순서를 권장합니다.',
  },
  {
    q: '환불 정책은 어떻게 되나요?',
    a: '수강 시작 후 7일 이내, 그리고 전체 강의의 20% 미만 수강 시 전액 환불 가능합니다. 자세한 환불 정책은 수강 신청 페이지에서 확인해 주세요.',
  },
  {
    q: '수료 후 취업 연계가 되나요?',
    a: '공식적인 취업 보장 프로그램은 운영하지 않아요. 다만, 수료 후 포트폴리오 완성 지원과 함께 파트너사 인턴십 정보를 커뮤니티를 통해 공유하고 있습니다. 실제 작동하는 프로젝트를 포트폴리오로 제출할 수 있어요.',
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
