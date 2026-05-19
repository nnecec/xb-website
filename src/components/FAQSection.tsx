'use client'

import React from 'react'

import { faqItems } from '@/app/site'
import { SectionHeader } from './SectionHeader'
import { BlurFade } from '@/components/ui/blur-fade'

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// FAQ"
          title="常见问题"
          description="关于 XB，你可能想问的。"
        />

        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <BlurFade key={item.question} inView delay={index * 0.06} direction="up">
              <details className="rounded-xl border border-[#2a2a38] bg-[#12121a] p-6 transition-colors open:border-[#00ff8840]">
                <summary className="cursor-pointer list-none text-left text-lg font-semibold text-[#e8e8ec] marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#9898a4]">{item.answer}</p>
              </details>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
