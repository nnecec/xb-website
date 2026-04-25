import React from 'react'

import { faqItems } from '@/app/site'

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#00d4ff] uppercase">
            // FAQ
          </span>
          <h2 className="animate-fade-in-up mt-4 text-4xl font-black tracking-tight text-balance uppercase delay-100 md:text-5xl">
            常见问题
          </h2>
          <p className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-base text-pretty text-[#9898a4] delay-200">
            这里集中回答中文用户在寻找微博 Chrome 插件、微博去广告工具时最常问的几个问题。
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="animate-fade-in-up rounded-xl border border-[#2a2a38] bg-[#12121a] p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-[#e8e8ec] marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[#9898a4]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
