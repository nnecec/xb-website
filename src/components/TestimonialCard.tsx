import React from 'react'

export interface TestimonialCardProps {
  name: string
  role: string
  text: string
  delay?: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  text,
  delay = 0,
}) => {
  return (
    <div
      className="animate-fade-in-up group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#2a2a38] bg-[#12121a] p-6 transition-all duration-300 hover:border-[#3a3a4a] hover:bg-[#1a1a24] hover:shadow-lg hover:shadow-[#00ff8805] hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#00ff8805] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <svg className="mb-4 h-6 w-6 text-[#00ff8840]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-sm leading-relaxed text-[#e8e8ec]">{text}</p>
      </div>
      <div className="relative z-10 mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#00ff88] to-[#00d4ff] text-sm font-semibold text-[#09090c] transition-transform duration-300 group-hover:scale-110">
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#e8e8ec]">{name}</span>
          <span className="text-xs text-[#5a5a68]">{role}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
