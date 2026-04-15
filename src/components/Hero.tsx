import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0f] text-[#e0e0e0] pt-8 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#e0e0e0] uppercase">Make Weibo</h1>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#00ff88] uppercase mt-2">X-liked & Simpler</h2>
        <p className="mt-4 text-sm md:text-base text-[#6b7280] max-w-2xl mx-auto">
          重新定义你的微博体验。去除噪音，回归内容本质。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="group rounded-full bg-[#00ff88] px-6 py-3 text-[#0a0a0f] font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            安装 Chrome 插件
          </button>
          <button className="group rounded-full border border-[#00ff88] px-6 py-3 text-[#00ff88] font-semibold hover:bg-[#00ff881a] hover:shadow hover:shadow-[#00ff8811] transition">
            查看源码
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
