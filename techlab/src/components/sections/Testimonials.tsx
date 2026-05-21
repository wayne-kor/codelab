import { Star } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const reviews = [
  {
    initial: '박',
    name: '박O린',
    role: '심리학과 2학년',
    quote:
      '코딩은 진짜 개발자들만 하는 건 줄 알았어요. 근데 AI한테 질문하면서 하나씩 만들다 보니까, 어느 순간 제가 직접 웹사이트를 수정하고 있더라고요. 친구들한테 링크 보여줬을 때 진짜 뿌듯했습니다.',
    stars: 5,
    course: 'AI Vibe Coding',
  },
  {
    initial: '정',
    name: '정O우',
    role: '행정학과 4학년',
    quote:
      '전공이 문과라 개발자랑 회의할 때마다 용어부터 막혔는데, 이제는 어떤 기능이 왜 필요한지 이해가 되기 시작했어요. 단순히 문법만 배우는 느낌이 아니라 \'개발자처럼 생각하는 법\'을 처음 배운 느낌이었습니다.',
    stars: 5,
    course: 'Python 기초',
  },
  {
    initial: '최',
    name: '최O혁',
    role: '디자인학과 3학년',
    quote:
      '원래 코딩 강의 보면 3일 안에 포기했는데 여기서는 일단 직접 만들게 하니까 계속 손이 가더라고요. 6주차쯤엔 AI랑 같이 일정관리 웹앱 만들고 있었어요. 진짜 요즘 개발 방식이 이런 거구나 싶었습니다.',
    stars: 5,
    course: 'AI Vibe Coding',
  },
  {
    initial: '한',
    name: '한O민',
    role: '경제학과 2학년',
    quote:
      'GitHub가 뭔지도 몰랐는데 마지막 주에 제 프로젝트를 실제 링크로 배포했습니다. 그냥 강의 듣고 끝나는 게 아니라 결과물이 남는다는 게 가장 좋았어요.',
    stars: 5,
    course: 'AI Vibe Coding',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={14} fill="#d9f99d" color="#d9f99d" />
      ))}
    </div>
  )
}

function ReviewCard({
  initial,
  name,
  role,
  quote,
  stars,
  course,
  className = '',
  delay = 0,
}: (typeof reviews)[number] & { className?: string; delay?: number }) {
  return (
    <div
      className={`reveal glass rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 ${className}`}
      data-delay={delay}
    >
      <Stars count={stars} />
      <blockquote className="text-sm text-[#94a3b8] leading-relaxed flex-1 break-words whitespace-normal">
        <span className="text-3xl text-[#d9f99d] font-serif leading-none">"</span>
        <span className="relative -top-1">{quote.replace(/"/g, '').trim()}</span>
      </blockquote>
      <span
        className="text-xs px-2.5 py-1 rounded-lg w-fit"
        style={{
          background: 'rgba(217,249,157,0.06)',
          border: '1px solid rgba(217,249,157,0.15)',
          color: '#a3e635',
        }}
      >
        {course}
      </span>
      <div className="flex items-center gap-3 border-t border-[#1e2d45] pt-4">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ background: 'rgba(217,249,157,0.15)', color: '#d9f99d' }}
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#f1f5f9]">{name}</p>
          <p className="text-xs text-[#64748b]">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 px-6 reveal" data-delay="0">
          <SectionLabel>수강생 후기</SectionLabel>
          <h2
            className="font-extrabold tracking-tight text-[#f1f5f9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            직접 경험한 분들의{' '}
            <span className="text-[#d9f99d]">이야기</span>
          </h2>
        </div>

        {/* Mobile: swipe carousel */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-6 pb-2"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          >
            {reviews.map(({ initial, name, role, quote, stars, course }, i) => (
              <ReviewCard
                key={name}
                initial={initial}
                name={name}
                role={role}
                quote={quote}
                stars={stars}
                course={course}
                className="flex-shrink-0 snap-center w-[82vw]"
                delay={i * 120 + 100}
              />
            ))}
            <div className="flex-shrink-0 w-2" aria-hidden />
          </div>
          {/* Swipe hint dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {reviews.map((r) => (
              <span
                key={r.name}
                className="w-1.5 h-1.5 rounded-full bg-[#1e2d45]"
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-6">
          {reviews.map(({ initial, name, role, quote, stars, course }, i) => (
            <ReviewCard
              key={name}
              initial={initial}
              name={name}
              role={role}
              quote={quote}
              stars={stars}
              course={course}
              delay={i * 120 + 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
