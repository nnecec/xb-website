'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { siGooglechrome, siFirefoxbrowser, siGithub } from 'simple-icons'

import { siteConfig } from '@/app/site'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { HyperText } from '@/components/ui/hyper-text'

const Icon: React.FC<{ path: string; className?: string }> = ({ path, className = 'h-4 w-4' }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
)

const navItems = [
  { label: '功能特点', href: '#features' },
  { label: '更新记录', href: '#changelog' },
  { label: '用户评价', href: '#reviews' },
  { label: '常见问题', href: '#faq' },
]

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${
        scrolled
          ? 'border-b border-[#00ff88]/[0.06] bg-[#0a0a0f]/90 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <HyperText
            as="span"
            animateOnHover
            className="text-2xl font-black text-[#00ff88] transition-transform duration-300 select-none group-hover:scale-110"
          >
            xb
          </HyperText>
          <AnimatedShinyText
            shimmerWidth={100}
            className="hidden font-mono text-xs tracking-widest text-[#5a5a68] uppercase sm:block dark:via-[#9898a4]/60"
          >
            微博浏览器插件
          </AnimatedShinyText>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative px-4 py-3 text-sm text-[#9898a4] transition-colors duration-200 hover:text-[#e8e8ec]"
            >
              {item.label}
              <span className="absolute right-4 bottom-2 left-4 h-px origin-left scale-x-0 bg-[#00ff88] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.installUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chrome 商店"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-[#2a2a38] text-[#9898a4] transition-all duration-200 hover:border-[#3a3a4a] hover:text-[#e8e8ec] sm:inline-flex"
          >
            <Icon path={siGooglechrome.path} />
          </a>
          <a
            href={siteConfig.firefoxInstallUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Firefox 商店"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-[#2a2a38] text-[#9898a4] transition-all duration-200 hover:border-[#3a3a4a] hover:text-[#e8e8ec] sm:inline-flex"
          >
            <Icon path={siFirefoxbrowser.path} />
          </a>
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-[#2a2a38] text-[#9898a4] transition-all duration-200 hover:border-[#3a3a4a] hover:text-[#e8e8ec] sm:inline-flex"
          >
            <Icon path={siGithub.path} />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a38] text-[#e8e8ec] transition-all duration-200 hover:border-[#00ff88] hover:text-[#00ff88] md:hidden"
            type="button"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-[#00ff88]/10 bg-[#0a0a0f]/90 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-[#9898a4] transition-all duration-200 hover:bg-[#1a1a24] hover:text-[#e8e8ec]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
