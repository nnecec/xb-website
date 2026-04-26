import React from 'react'

import { siteConfig } from '@/app/site'

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] pt-20 pb-32 text-[#e0e0e0]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 size-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-[500px] bg-[radial-gradient(circle,rgba(255,0,255,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-[#2a2a38] bg-[#12121a]/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#00ff88]" />
          <span className="font-mono text-xs tracking-[0.2em] text-[#00ff88] uppercase">
            Weibo Chrome Extension
          </span>
        </div>
        
        <h1 className="animate-fade-in-up text-5xl leading-[1.1] font-black tracking-tight text-balance text-[#e8e8ec] md:text-7xl lg:text-8xl">
          <span className="inline bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff] bg-clip-text text-transparent">
            XB
          </span>
          <span className="ml-3 text-[#e8e8ec]">极简微博</span>
        </h1>
        <h1 className="animate-fade-in-up text-3xl font-black tracking-tight text-balance text-[#9898a4] md:text-5xl lg:text-6xl delay-100">
          极致体验
        </h1>
        
<p className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-[#9898a4] delay-200 md:text-xl">
          一键实现微博去广告、精简侧栏与推荐内容，减少噪音干扰，让你更专注地浏览真正想看的微博内容。
        </p>
        
        <div className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-2.5 text-xs tracking-[0.16em] text-[#6f6f7b] uppercase delay-300">
          {['零广告', '深度定制', '个性化设置', '一键导出图片', '开源免费'].map((tag, i) => (
            <span key={tag} className="rounded-full border border-[#2a2a38] bg-[#12121a]/50 px-4 py-2 transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="animate-fade-in-up mt-12 flex flex-wrap justify-center gap-4 delay-400">
          <a
            href={siteConfig.installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#00ff88] px-8 py-4 font-semibold text-[#09090c] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] active:scale-[0.96]"
          >
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="relative z-10">安装微博 Chrome 插件</span>
            <div className="absolute inset-0 bg-[#00ddaa] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#2a2a38] px-8 py-4 font-semibold text-[#e8e8ec] transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 2.505c1.02.005 2.047.136 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.628-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.794.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="relative z-10">查看开源仓库</span>
            <div className="absolute inset-0 bg-[#00ff8808] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </div>
        
        <div className="animate-fade-in-up mt-16 delay-500 hidden md:flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[#5a5a68]">
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="h-8 w-px overflow-hidden rounded-full bg-gradient-to-b from-[#2a2a38] to-transparent">
              <div className="animate-scroll-down h-full w-full bg-gradient-to-b from-[#00ff88] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
