"use client";
import React, { useState } from 'react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Compare', href: '#compare' },
  { label: 'Reviews', href: '#reviews' },
]

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-[#2a2a38]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-black text-[#00ff88] select-none transition-all duration-300 group-hover:scale-110">
            xb
          </span>
          <span className="hidden sm:block text-xs font-mono text-[#5a5a68] uppercase tracking-widest">
            Make Weibo
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm text-[#9898a4] hover:text-[#e8e8ec] transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a 
            href="https://chromewebstore.google.com/detail/xb/ffhppkcianllofhhjohbfbobjfppbeao"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#2a2a38] px-4 py-2 text-sm text-[#e8e8ec] hover:bg-[#3a3a4a] hover:text-[#00ff88] transition-all duration-200"
          >
            Install
          </a>
          <a 
            href="https://github.com/nnecec/xb"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-[#2a2a38] px-4 py-2 text-sm text-[#9898a4] hover:text-[#e8e8ec] hover:border-[#3a3a4a] transition-all duration-200"
          >
            Source
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[#2a2a38] text-[#e8e8ec] hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-200"
            type="button"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-[#2a2a38] animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-[#9898a4] hover:text-[#e8e8ec] hover:bg-[#1a1a24] rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
