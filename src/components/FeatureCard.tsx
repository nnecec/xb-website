import React from 'react'

export interface FeatureCardProps {
  title: string
  description: string
  delay?: number
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <div 
      className="animate-fade-in-up group relative rounded-xl border border-[#2a2a38] bg-[#12121a] p-6 flex flex-col overflow-hidden transition-all duration-300 hover:border-[#3a3a4a] hover:bg-[#1a1a24]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff8808] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00ff8815] border border-[#00ff8830]">
          <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#e8e8ec] group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#9898a4] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
