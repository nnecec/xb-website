import React from 'react'

export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0f] text-[#e0e0e0] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-extrabold uppercase mb-4"> 告别臃肿微博</h3>
        <p className="text-sm text-[#6b7280] mb-6">体验更清晰、无干扰的内容聚合。现在就开始。</p>
        <div className="flex justify-center gap-4">
          <button className="rounded-full bg-[#00ff88] px-6 py-3 text-[#0a0a0f] font-semibold hover:scale-105 transition">
            立即体验
          </button>
          <button className="rounded-full border border-[#2a2a3a] px-6 py-3 text-[#e0e0e0] hover:bg-[#1f1f2a] transition">了解更多</button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
