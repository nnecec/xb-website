'use client'

import { TextReveal } from '@/components/ui/text-reveal'

const manifesto =
  '微博本该干净。没有广告打扰，没有杂乱布局，只有你想看的内容。XB 在浏览器里悄悄运行，把选择权还给你。'

export function ManifestoSection() {
  return (
    <section id="manifesto" className="dark bg-[#0a0a0f]">
      <TextReveal>{manifesto}</TextReveal>
    </section>
  )
}
