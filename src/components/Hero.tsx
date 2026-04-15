import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0f] text-[#e0e0e0] pt-12 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00ff8810] via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="animate-fade-in-up inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#00ff88] mb-6">
          Chrome Extension
        </span>
        <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-black tracking-tight text-[#e8e8ec] uppercase">
          Make Weibo
        </h1>
        <h2 className="animate-fade-in-up delay-200 text-5xl md:text-7xl font-black tracking-tight text-[#00ff88] uppercase mt-2">
          X-liked
        </h2>
        <p className="animate-fade-in-up delay-300 mt-6 text-base md:text-lg text-[#9898a4] max-w-xl mx-auto leading-relaxed">
          重新定义你的微博体验。去除噪音，回归内容本质。
        </p>
        <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap justify-center gap-4">
          <a 
            href="https://chromewebstore.google.com/detail/xb/ffhppkcianllofhhjohbfbobjfppbeao"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-[#00ff88] text-[#09090c] font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
          >
            <span className="relative z-10">安装 Chrome 插件</span>
            <div className="absolute inset-0 bg-[#00ddaa] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a 
            href="https://github.com/nnecec/xb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full border border-[#2a2a38] text-[#e8e8ec] font-semibold overflow-hidden transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]"
          >
            <span className="relative z-10">查看源码</span>
            <div className="absolute inset-0 bg-[#00ff8808] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
