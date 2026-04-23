import React from 'react'

import { siteConfig } from '@/app/site'

export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0f] text-[#e8e8ec] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00ff8808] via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="animate-fade-in-up text-balance text-4xl md:text-5xl font-black uppercase tracking-tight">
          现在就把微博变清爽
        </h2>
        <p className="animate-fade-in-up text-pretty delay-100 text-base text-[#9898a4] mt-4 max-w-lg mx-auto">
          如果你正在找一款好用的微博插件，想要微博去广告、精简微博界面，XB 可以直接开始解决这些问题。
        </p>
        <div className="animate-fade-in-up delay-200 mt-10 flex flex-wrap justify-center gap-4">
          <a 
            href={siteConfig.installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full bg-[#00ff88] text-[#09090c] font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] active:scale-[0.96] transition-transform duration-150 ease-out"
          >
            <span className="relative z-10">去 Chrome 商店安装</span>
            <div className="absolute inset-0 bg-[#00ddaa] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full border border-[#2a2a38] text-[#e8e8ec] font-semibold text-base overflow-hidden transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]"
          >
            <span className="relative z-10">查看 GitHub 仓库</span>
            <div className="absolute inset-0 bg-[#00ff8808] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
