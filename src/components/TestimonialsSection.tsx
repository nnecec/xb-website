'use client'

import React from 'react'

import { SectionHeader } from './SectionHeader'
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
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// User Feedback"
          title="用户评价"
          description="选择微博扩展的用户，通常同样在意稳定性与可信度。"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.name} name={t.name} role={t.role} text={t.text} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
