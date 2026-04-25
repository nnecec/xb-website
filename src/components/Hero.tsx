import React from 'react'

import { siteConfig } from '@/app/site'

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] pt-12 pb-24 text-[#e0e0e0]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#00ff8810] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="animate-fade-in-up mb-6 inline-block font-mono text-xs tracking-[0.2em] text-[#00ff88] uppercase">
          // Weibo Chrome Extension
        </p>
        <h1 className="animate-fade-in-up text-4xl leading-tight font-black tracking-tight text-balance text-[#e8e8ec] delay-100 md:text-6xl">
          XB：极简微博，极致体验
        </h1>
        <p className="animate-fade-in-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-[#9898a4] delay-300 md:text-lg">
          一键实现微博去广告、精简侧栏与推荐内容，减少噪音干扰，让你更专注地浏览真正想看的微博内容。
        </p>
        <p className="animate-fade-in-up mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#b2b2bc] delay-400 md:text-base">
          面向中文用户打造，适合想找微博插件、微博去广告工具、精简微博体验的 Chrome 用户。
        </p>
        <div className="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-3 text-xs tracking-[0.16em] text-[#6f6f7b] uppercase delay-500">
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">零广告</span>
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">深度定制</span>
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">个性化设置</span>
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">一键导出图片</span>
          <span className="rounded-full border border-[#2a2a38] px-4 py-2">开源免费</span>
        </div>
        <div className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-4 delay-600">
          <a
            href={siteConfig.installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-[#00ff88] px-8 py-3.5 font-semibold text-[#09090c] transition-all transition-transform duration-150 duration-300 ease-out hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] active:scale-[0.96]"
          >
            <span className="relative z-10">安装微博 Chrome 插件</span>
            <div className="absolute inset-0 translate-y-full bg-[#00ddaa] transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-[#2a2a38] px-8 py-3.5 font-semibold text-[#e8e8ec] transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]"
          >
            <span className="relative z-10">查看开源仓库</span>
            <div className="absolute inset-0 translate-y-full bg-[#00ff8808] transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
