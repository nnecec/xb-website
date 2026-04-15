import React from 'react'

import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    name: '魔术师',
    role: '国企员工',
    text: '终于可以安静地刷微博了，广告全没了，界面清爽得像另一个产品。',
  },
  {
    name: 'Molly',
    role: '私企人事',
    text: '界面清爽，深色模式也很棒，用起来眼睛不累。',
  },
  {
    name: '一枪玫瑰',
    role: '私企程序员',
    text: '虽然高仿X风格，但刷起来更舒服啊。',
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
          <h2 className="animate-fade-in-up mt-4 text-4xl font-black tracking-tight uppercase delay-100 md:text-5xl">
            用户评价
          </h2>
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
