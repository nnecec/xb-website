import React from 'react'

import { siteConfig } from '@/app/site'

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0f] text-[#e0e0e0] pt-12 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00ff8810] via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
        <p className="animate-fade-in-up inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#00ff88] mb-6">
          Weibo Chrome Extension
        </p>
        <h1 className="animate-fade-in-up text-balance delay-100 text-4xl md:text-6xl font-black tracking-tight text-[#e8e8ec] leading-tight">
          XB：更清爽的微博 Chrome 插件
        </h1>
        <p className="animate-fade-in-up text-pretty delay-300 mt-6 text-base md:text-lg text-[#9898a4] max-w-xl mx-auto leading-relaxed">
          一键实现微博去广告、精简侧栏与推荐内容，减少噪音干扰，让你更专注地浏览真正想看的微博内容。
        </p>
        <p className="animate-fade-in-up delay-400 mt-4 text-sm md:text-base text-[#b2b2bc] max-w-3xl mx-auto leading-relaxed">
          面向中文用户打造，适合想找微博插件、微博去广告工具、精简微博体验的 Chrome 用户。
        </p>
        <div className="animate-fade-in-up delay-500 mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.16em] text-[#6f6f7b]">
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">微博去广告</span>
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">精简微博布局</span>
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">开源免费</span>
        </div>
        <div className="animate-fade-in-up delay-600 mt-10 flex flex-wrap justify-center gap-4">
          <a 
            href={siteConfig.installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-[#00ff88] text-[#09090c] font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] active:scale-[0.96] transition-transform duration-150 ease-out"
          >
            <span className="relative z-10">安装微博 Chrome 插件</span>
            <div className="absolute inset-0 bg-[#00ddaa] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full border border-[#2a2a38] text-[#e8e8ec] font-semibold overflow-hidden transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]"
          >
            <span className="relative z-10">查看开源仓库</span>
            <div className="absolute inset-0 bg-[#00ff8808] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
