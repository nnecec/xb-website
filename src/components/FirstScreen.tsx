'use client'

import { LightRays } from '@/components/ui/light-rays'

export function FirstScreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -top-16 bg-[#0a0a0f] pt-16">
      {/* overflow 只加在背景层：祖先上的 overflow:hidden 会让子元素 position:sticky 失效 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <LightRays count={9} color="#00ff88" blur={28} speed={14} className="opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black_20%,transparent_75%)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-1/4 size-[700px] bg-[radial-gradient(circle,rgba(0,255,136,0.12)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute top-1/3 right-0 size-[500px] bg-[radial-gradient(circle,rgba(0,212,255,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 size-[600px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,0,255,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#00ff8808] to-transparent" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
