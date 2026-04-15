import React from 'react'

export const ComparisonSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0f] text-[#e0e0e0] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-[#ff00ff] uppercase tracking-widest">VISUAL COMPARISON</span>
          <h3 className="mt-2 text-3xl font-extrabold uppercase">Before & After</h3>
          <p className="text-sm text-[#6b7280] mt-2">同一个微博，两种完全不同的体验</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="flex-1 rounded-xl border border-[#2a2a3a] bg-[#12121a99] p-6">
            <div className="h-40 bg-black/20 rounded mb-4" aria-label="Before mock image" />
            <div className="text-sm text-[#6b7280]">Before</div>
          </div>
          <div className="flex-1 rounded-xl border border-[#2a2a3a] bg-[#12121a99] p-6">
            <div className="h-40 bg-black/20 rounded mb-4" aria-label="After mock image" />
            <div className="text-sm text-[#6b7280]">After</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
