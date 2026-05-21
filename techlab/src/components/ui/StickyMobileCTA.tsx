import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const ENROLL_URL = 'https://smore.im/form/5KNKdzbvFG'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="px-4 py-3 border-t border-[#2d3f5c]"
        style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <a
          href={ENROLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[#0f172a] text-base"
          style={{ background: '#d9f99d', boxShadow: '0 0 20px rgba(217,249,157,0.35)' }}
        >
          수강 신청하기 <ArrowRight size={18} />
        </a>
      </div>
    </div>
  )
}
