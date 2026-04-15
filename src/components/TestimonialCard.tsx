import React from 'react'

export interface TestimonialCardProps {
  name: string
  role: string
  text: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text }) => {
  return (
    <div className="rounded-xl border border-[#2a2a3a] bg-[#12121a99] p-6 flex flex-col justify-between">
      <p className="text-sm text-[#e0e0e0]">{text}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#2a2a3a]" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#e0e0e0]">{name}</span>
          <span className="text-xs text-[#6b7280]">{role}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
