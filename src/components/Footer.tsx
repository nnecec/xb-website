import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0f] text-[#6b7280] border-t border-[#2a2a3a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span>Made with Next.js • MIT License</span>
        <a href="#" className="hover:text-[#e0e0e0]">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
