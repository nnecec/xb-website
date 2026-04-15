"use client";
import React, { useState } from 'react'

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#0a0a0f] bg-opacity-90 backdrop-blur-md border-b border-[#2a2a3a]"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-[#00ff88] select-none">xb</span>
  <div className="hidden md:flex items-center gap-6 text-sm uppercase text-[#6b7280]">
  <span className="text-[#6b7280] hover:text-[#e0e0e0] cursor-pointer">Features</span>
            <span className="text-[#6b7280] hover:text-[#e0e0e0] cursor-pointer">Compare</span>
            <span className="text-[#6b7280] hover:text-[#e0e0e0] cursor-pointer">Reviews</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#2a2a3a] px-4 py-2 text-xs text-[#e0e0e0] hover:bg-[#3a3a4a]">
            Install
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-[#2a2a3a] px-3 py-2 text-xs text-[#e0e0e0] hover:bg-[#1f1f2a]">
            Source
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-[#2a2a3a] text-[#e0e0e0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00ff88]"
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span>≡</span>
          </button>
        </div>
      </nav>
        {open && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-[#2a2a3a]">
          <div className="px-4 py-2 space-y-2 text-sm text-[#e0e0e0]">
            <button type="button" className="text-left w-full text-[#6b7280] hover:text-[#e0e0e0] py-2">Features</button>
            <button type="button" className="text-left w-full text-[#6b7280] hover:text-[#e0e0e0] py-2">Compare</button>
            <button type="button" className="text-left w-full text-[#6b7280] hover:text-[#e0e0e0] py-2">Reviews</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
