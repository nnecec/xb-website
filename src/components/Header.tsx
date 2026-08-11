'use client'

import { Download, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { siGithub } from 'simple-icons'

import { siteConfig } from '@/app/site'
import { BrandIcon } from '@/components/BrandIcon'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: '产品能力', href: '/#features' },
  { label: '开源与隐私', href: '/#opensource' },
  { label: '更新记录', href: '/#changelog' },
  { label: '常见问题', href: '/#faq' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [installOpen, setInstallOpen] = useState(false)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null)
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const installTriggerRef = useRef<HTMLButtonElement>(null)
  const firstInstallLinkRef = useRef<HTMLAnchorElement>(null)
  const installContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open && !installOpen) return

    const focusTarget = window.requestAnimationFrame(() => {
      if (open) firstNavLinkRef.current?.focus()
      if (installOpen) firstInstallLinkRef.current?.focus()
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      if (installOpen) {
        setInstallOpen(false)
        installTriggerRef.current?.focus()
      } else if (open) {
        setOpen(false)
        menuTriggerRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusTarget)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, installOpen])

  useEffect(() => {
    if (!installOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!installContainerRef.current?.contains(event.target as Node)) {
        setInstallOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [installOpen])

  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group focus-visible:ring-ring/40 flex min-h-10 items-center gap-3 rounded-md focus-visible:ring-2"
          aria-label="XB 首页"
        >
          <span
            lang="en"
            className="text-edge text-2xl leading-none font-bold lowercase transition-transform duration-200 group-hover:-translate-y-px"
          >
            xb
          </span>
          <span className="bg-border hidden h-4 w-px sm:block" aria-hidden="true" />
          <span className="text-muted-foreground hidden text-xs sm:block">
            为微博重新设计阅读界面
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex min-h-10 items-center rounded-lg px-3 text-sm transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="在 GitHub 查看 XB 源码"
            >
              <svg
                className="size-[18px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siGithub.path} />
              </svg>
            </a>
          </Button>
          <ThemeToggle />
          <div
            ref={installContainerRef}
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setInstallOpen(false)
              }
            }}
          >
            <Button
              ref={installTriggerRef}
              type="button"
              size="icon"
              variant="outline"
              aria-label="选择浏览器安装 XB"
              title="选择浏览器安装 XB"
              aria-expanded={installOpen}
              aria-controls="install-picker"
              onClick={() => {
                setInstallOpen((value) => !value)
                setOpen(false)
              }}
            >
              <Download className="size-4" aria-hidden="true" />
            </Button>
            {installOpen ? (
              <div
                id="install-picker"
                role="group"
                aria-label="选择浏览器安装 XB"
                className="bg-popover text-popover-foreground absolute top-[calc(100%+0.5rem)] right-0 z-50 w-56 rounded-xl border p-2 shadow-lg sm:w-64"
              >
                <a
                  ref={firstInstallLinkRef}
                  href={siteConfig.installUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setInstallOpen(false)}
                  className="hover:bg-muted focus-visible:bg-muted flex min-h-11 items-center rounded-lg px-3 text-sm transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <BrandIcon name="chrome" className="size-5" />
                    <span>
                      <span className="block font-medium">Chrome</span>
                      <span className="text-muted-foreground mt-0.5 block text-xs">
                        Chrome 网上应用店
                      </span>
                    </span>
                  </span>
                </a>
                <a
                  href={siteConfig.edgeInstallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setInstallOpen(false)}
                  className="hover:bg-muted focus-visible:bg-muted flex min-h-11 items-center rounded-lg px-3 text-sm transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <BrandIcon name="edge" className="size-5" />
                    <span>
                      <span className="block font-medium">Edge</span>
                      <span className="text-muted-foreground mt-0.5 block text-xs">
                        Microsoft Edge 加载项
                      </span>
                    </span>
                  </span>
                </a>
                <a
                  href={siteConfig.firefoxInstallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setInstallOpen(false)}
                  className="hover:bg-muted focus-visible:bg-muted flex min-h-11 items-center rounded-lg px-3 text-sm transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <BrandIcon name="firefox" className="size-5" />
                    <span>
                      <span className="block font-medium">Firefox</span>
                      <span className="text-muted-foreground mt-0.5 block text-xs">
                        Firefox 附加组件
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            ) : null}
          </div>
          <Button
            ref={menuTriggerRef}
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => {
              setOpen((value) => !value)
              setInstallOpen(false)
            }}
            className="md:hidden"
            aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div
          ref={mobileNavRef}
          id="mobile-navigation"
          className="bg-background absolute inset-x-0 top-full border-b px-5 py-4 md:hidden"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setOpen(false)
            }
          }}
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                ref={item === navItems[0] ? firstNavLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-3 py-3 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
