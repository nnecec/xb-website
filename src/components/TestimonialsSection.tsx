import React from 'react'

import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    name: '魔术师',
    role: '国企员工',
    text: '装上这个微博去广告插件之后，终于可以安静地刷微博了，广告少了很多，界面也更清爽。',
  },
  {
    name: 'Molly',
    role: '私企人事',
    text: '我主要想找一个能精简微博页面的插件，XB 上手很快，界面明显更干净。',
  },
  {
    name: '一枪玫瑰',
    role: '私企程序员',
    text: '作为开源的微博 Chrome 插件，XB 兼顾了清爽布局和可审查性，用起来更放心。',
  },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="w-full bg-[#0a0a0f] py-24 text-[#e8e8ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="animate-fade-in-up font-mono text-xs tracking-[0.2em] text-[#00ff88] uppercase">
            User Feedback
          </span>
          <h2 className="animate-fade-in-up text-balance mt-4 text-4xl font-black tracking-tight uppercase delay-100 md:text-5xl">
            用户为什么会留下来
          </h2>
          <p className="animate-fade-in-up text-pretty mx-auto mt-4 max-w-2xl text-base text-[#9898a4] delay-200">
            对希望找到微博插件、微博去广告工具或更清爽微博体验的用户来说，稳定和可信同样重要。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              name={t.name}
              role={t.role}
              text={t.text}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
