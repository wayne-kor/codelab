const BRAND = 'CODE|LAB+'

export function Footer() {
  return (
    <footer className="border-t border-[#2d3f5c] bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="md:col-span-2">
            <span className="text-[#d9f99d] font-bold text-lg">{BRAND}</span>
            <p className="text-sm text-[#64748b] mt-3 leading-relaxed max-w-xs">
              AI 시대, 누구나 만드는 사람이 될 수 있어요. 코딩 경험 없이도 시작할 수 있는 커리큘럼을 제공합니다.
            </p>
          </div>

          {/* Links — 과정 */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#475569] mb-4">과정</p>
            <ul className="space-y-2.5">
              {['AI Vibe Coding', 'Python 기초', '커리큘럼', '수강생 후기'].map((t) => (
                <li key={t}>
                  <a href="#" className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links — 정보 */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#475569] mb-4">정보</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#faq" className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors">
                  자주 묻는 질문
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2d45] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#475569]">© 2025 {BRAND}. All rights reserved.</p>
          <p className="text-xs text-[#475569]">AI 시대의 주인공이 되세요 🚀</p>
        </div>
      </div>
    </footer>
  )
}
