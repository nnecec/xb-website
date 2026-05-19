'use client'

import { Marquee } from '@/components/ui/marquee'

const highlights = [
  '微博去广告',
  'X 风格布局',
  '高清长图导出',
  '应用内发微博',
  '关注分组',
  '浏览历史',
  '视频下载',
  '开源免费',
  'Chrome & Firefox',
  '隐私优先',
]

export function TagMarquee() {
  return (
    <div className="relative w-full border-y border-[#2a2a38] bg-[#0a0a0f] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
      <Marquee pauseOnHover className="[--duration:35s] [--gap:2rem]" repeat={2}>
        {highlights.map((item) => (
          <span
            key={item}
            className="mx-4 font-mono text-xs tracking-[0.25em] text-[#5a5a68] uppercase"
          >
            <span className="mr-4 text-[#00ff88]">◆</span>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  )
}
