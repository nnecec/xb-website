import React from 'react'
import { TestimonialCard } from './TestimonialCard'

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Alex_Dev',
      role: '前端开发者',
      text: '终于可以安静地刷微博了，广告全没了，界面清爽得像另一个产品。'
    },
    {
      name: 'DesignMiko',
      role: 'UI 设计师',
      text: 'X 风格的布局太赞，信息密度刚好，视觉噪音下降。'
    },
    {
      name: 'Mia',
      role: '产品经理',
      text: '关键指标更易关注，用户留存显著提升。'
    }
  ]

  return (
    <section className="w-full bg-[#0a0a0f] py-16 text-[#e0e0e0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="font-mono text-xs uppercase tracking-[3px] text-[#00ff88]">USER FEEDBACK</span>
        <h3 className="mt-2 text-3xl font-extrabold uppercase">用户评价</h3>
      </div>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} name={t.name} role={t.role} text={t.text} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
