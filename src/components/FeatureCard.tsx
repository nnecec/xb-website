import React from 'react'

export interface FeatureCardProps {
  title: string
  description: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="rounded-xl border border-[#2a2a3a] bg-[#12121a99] p-6 flex-1 flex flex-col">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#00ff88] bg-opacity-20 border border-[#00ff88] text-center mx-auto" />
      <h4 className="text-lg font-semibold mb-1 text-[#e0e0e0]">{title}</h4>
      <p className="text-sm text-[#6b7280] flex-1">{description}</p>
    </div>
  )
}

export default FeatureCard
