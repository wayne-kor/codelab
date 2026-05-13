import { useState } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type CourseKey = 'vibe' | 'python'

const curriculums: Record<CourseKey, { week: string; title: string; items: string[] }[]> = {
  vibe: [
    {
      week: 'WEEK 1',
      title: 'AI랑 같이 코딩 시작하기',
      items: [
        '바이브코딩이 뭔지 이해하기',
        'VS Code & AI 개발 환경 세팅',
        'AI에게 똑똑하게 질문하는 방법',
        '개발자들이 AI로 작업하는 방식 체험하기',
      ],
    },
    {
      week: 'WEEK 2',
      title: '나만의 웹사이트 만들기 시작',
      items: [
        '웹사이트 기본 구조 이해하기',
        '첫 메인 화면(Hero Section) 만들기',
        '버튼, 카드, 소개 영역 꾸미기',
        '트렌디한 느낌의 UI 만들어보기',
      ],
    },
    {
      week: 'WEEK 3',
      title: '움직이는 futuristic 웹사이트 만들기',
      items: [
        '다크모드 스타일 적용하기',
        'hover / 스크롤 효과 넣기',
        '자연스러운 애니메이션 추가하기',
        '스타트업 느낌으로 디자인 업그레이드하기',
      ],
    },
    {
      week: 'WEEK 4',
      title: '포트폴리오 사이트 완성 & 배포',
      items: [
        '모바일에서도 예쁘게 보이게 수정하기',
        '프로젝트 소개 섹션 만들기',
        'GitHub 업로드하기',
        '실제 링크(URL)로 사이트 공개하기',
      ],
    },
    {
      week: 'WEEK 5',
      title: '만들고 싶은 서비스 기획하기',
      items: [
        '나만의 아이디어 정하기',
        '어떤 기능이 필요한지 정리하기',
        'AI와 함께 화면 구성하기',
        '프로젝트 방향 잡기',
      ],
    },
    {
      week: 'WEEK 6',
      title: '개인 프로젝트 만들기 1',
      items: [
        '핵심 기능 직접 만들어보기',
        'AI와 함께 코드 수정하기',
        '오류 해결하는 방법 배우기',
        '실제 개발 흐름 경험하기',
      ],
    },
    {
      week: 'WEEK 7',
      title: '개인 프로젝트 만들기 2',
      items: [
        '디자인 더 예쁘게 다듬기',
        '애니메이션 추가하기',
        '모바일 최적화하기',
        '실제 서비스 느낌으로 완성도 높이기',
      ],
    },
    {
      week: 'WEEK 8',
      title: '프로젝트 완성 & 발표',
      items: [
        '프로젝트 최종 완성하기',
        '포트폴리오 정리하기',
        'GitHub & 결과물 업로드하기',
        '완성한 서비스 발표하고 피드백 받기',
      ],
    },
  ],
  python: [
    {
      week: 'WEEK 1',
      title: '파이썬 처음 시작하기',
      items: [
        '파이썬 & VS Code 설치하기',
        '변수와 자료형 이해하기',
        '입력 / 출력 해보기',
        '조건문으로 간단한 프로그램 만들기',
      ],
    },
    {
      week: 'WEEK 2',
      title: '반복문 & 함수 익히기',
      items: [
        '반복문 쉽게 이해하기',
        '리스트 사용해보기',
        '함수로 코드 정리하기',
        '간단한 미니 게임 만들어보기',
      ],
    },
    {
      week: 'WEEK 3',
      title: '문제 해결 & 미니 프로젝트',
      items: [
        '백준 / 프로그래머스 입문 문제 풀어보기',
        '개발자처럼 문제를 나누어 생각하기',
        '외부 데이터 가져와보기',
        '미니 프로젝트 제작하기 (예: 날씨 정보 가져오기)',
      ],
    },
    {
      week: 'WEEK 4',
      title: 'AI와 함께 코딩하기',
      items: [
        'GitHub Copilot 사용해보기',
        'AI에게 코드 질문하는 방법 배우기',
        '개발자들이 AI로 작업하는 방식 체험하기',
        'GitHub 업로드 & 결과물 정리하기',
      ],
    },
  ],
}

export function Curriculum() {
  const [active, setActive] = useState<CourseKey>('vibe')
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="curriculum" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal" data-delay="0">
          <SectionLabel>커리큘럼</SectionLabel>
          <h2
            className="font-extrabold tracking-tight text-[#f1f5f9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            어떻게 배우나요?
          </h2>
          <p className="text-[#64748b] mt-3 text-sm">
            매주 하나씩, 실제로 동작하는 것을 만들어가면서 배웁니다.
          </p>
        </div>

        {/* Tab toggle */}
        <div
          className="reveal inline-flex mx-auto rounded-2xl p-1 mb-10 flex w-full max-w-xs"
          data-delay="100"
          style={{ background: '#1e293b', border: '1px solid #2d3f5c' }}
        >
          {(['vibe', 'python'] as CourseKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className="flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
              style={
                active === key
                  ? {
                      background: key === 'vibe' ? '#d9f99d' : '#93c5fd',
                      color: '#0f172a',
                    }
                  : { color: '#64748b' }
              }
              onClick={() => setActive(key)}
            >
              {key === 'vibe' ? 'AI Vibe Coding' : 'Python 기초'}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[19px] top-4 bottom-4 w-px"
            style={{
              background:
                active === 'vibe'
                  ? 'linear-gradient(to bottom, #d9f99d, rgba(217,249,157,0.1))'
                  : 'linear-gradient(to bottom, #93c5fd, rgba(147,197,253,0.1))',
            }}
          />

          <div className="space-y-6">
            {curriculums[active].map(({ week, title, items }, i) => {
              const accent = active === 'vibe' ? '#d9f99d' : '#93c5fd'
              return (
                <div
                  key={week}
                  className="reveal flex gap-6"
                  data-delay={i * 100 + 200}
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: `rgba(${active === 'vibe' ? '217,249,157' : '147,197,253'},0.12)`,
                        border: `1px solid ${accent}`,
                        color: accent,
                        fontSize: '10px',
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="glass rounded-2xl p-6 flex-1 hover:-translate-y-0.5 transition-all duration-300"
                    style={{
                      borderColor: `rgba(${active === 'vibe' ? '217,249,157' : '147,197,253'},0.12)`,
                    }}
                  >
                    <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: accent }}>
                      {week}
                    </p>
                    <h3 className="font-bold text-[#f1f5f9] mb-3">{title}</h3>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-[#64748b]">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
