import { Sparkles, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { SectionLabel } from '../ui/SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ENROLL_URL = 'https://smore.im/form/5KNKdzbvFG'

const courses = [
  {
    badge: { label: '가장 인기', color: 'lime' as const },
    Icon: Sparkles,
    title: 'AI Vibe Coding',
    subtitle: 'VS Code + Gemini CLI — 돈 안 드는 AI Agent 환경',
    desc: '"코딩 잘 몰라도, AI랑 같이 만들면 된다"를 직접 경험하는 클래스. 실제 개발자처럼 만들고, 고치고, 배포 직전 감성까지 가져갑니다.',
    duration: '8주 · 온/오프라인',
    outcomes: [
      'AI에게 효율적으로 질문하는 법',
      '바이브코딩 감각 익히기',
      '실제로 돌아가는 가벼운 웹/앱 프로젝트 만들기',
      '나만의 포트폴리오 제작',
    ],
    accent: {
      border: 'rgba(217,249,157,0.25)',
      bg: 'rgba(217,249,157,0.04)',
      glow: 'rgba(217,249,157,0.12)',
      text: '#d9f99d',
      icon: 'rgba(217,249,157,0.12)',
      iconText: '#d9f99d',
    },
    featured: true,
  },
  {
    badge: { label: '개발자와 소통하기', color: 'blue' as const },
    Icon: Terminal,
    title: 'Python 기초',
    subtitle: '파이썬 기초 문법부터 AI Agent 코딩까지',
    desc: '"개발자들이 무슨 말 하는지 모르겠다…" 이제는 대화할 수 있게 됩니다. 파이썬 기초 문법부터 AI Agent와 함께 코딩하는 경험까지.',
    duration: '4주 · 온/오프라인',
    outcomes: [
      '변수, 조건문, 반복문, 함수 등 파이썬 기초',
      '백준 / 프로그래머스 문제로 논리력 익히기',
      '미니 프로젝트 제작 (예: 날씨 미니 기상캐스터)',
      'GitHub Copilot으로 AI와 함께 코딩 (학생 혜택 안내 포함)',
    ],
    accent: {
      border: 'rgba(147,197,253,0.25)',
      bg: 'rgba(147,197,253,0.04)',
      glow: 'rgba(147,197,253,0.12)',
      text: '#93c5fd',
      icon: 'rgba(147,197,253,0.12)',
      iconText: '#93c5fd',
    },
    featured: false,
  },
]

export function Courses() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="courses" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal" data-delay="0">
          <SectionLabel>과정 소개</SectionLabel>
          <h2
            className="font-extrabold tracking-tight text-[#f1f5f9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            두 가지 과정으로{' '}
            <span className="text-[#d9f99d]">AI 시대를 준비하세요</span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            K대 전전 출신 멘토와 함께, 왕초보도 OK. 기초부터 실전 프로젝트까지 개인별 특화 클래스.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map(({ badge, Icon, title, subtitle, desc, duration, outcomes, accent, featured }, i) => (
            <div
              key={title}
              className="reveal group relative rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1"
              data-delay={i * 150 + 100}
              style={{
                border: `1px solid ${accent.border}`,
                background: `${accent.bg}`,
                boxShadow: featured
                  ? `0 0 40px ${accent.glow}, 0 4px 24px rgba(0,0,0,0.4)`
                  : '0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              {featured && (
                <div
                  className="absolute -top-px left-8 right-8 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accent.text}, transparent)`,
                  }}
                />
              )}

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: accent.icon }}
                >
                  <Icon size={22} style={{ color: accent.iconText }} />
                </div>
                <Badge color={badge.color}>{badge.label}</Badge>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-1">{title}</h3>
                <p className="text-sm font-medium" style={{ color: accent.text }}>
                  {subtitle}
                </p>
              </div>

              {/* Desc */}
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-xs text-[#475569] font-medium">
                <span
                  className="px-2.5 py-1 rounded-lg border"
                  style={{ borderColor: accent.border, color: accent.text }}
                >
                  {duration}
                </span>
              </div>

              {/* Outcomes */}
              <ul className="space-y-2.5">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: accent.text }} />
                    {o}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={ENROLL_URL}
                target="_blank"
                variant={featured ? 'primary' : 'outline'}
                size="md"
                className="mt-auto w-full"
              >
                수강 신청하기 <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
