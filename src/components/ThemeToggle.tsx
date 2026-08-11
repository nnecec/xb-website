'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'

    root.classList.toggle('dark', nextTheme === 'dark')
    root.style.colorScheme = nextTheme
    localStorage.setItem('xb-theme', nextTheme)
    setIsDark(nextTheme === 'dark')
  }

  const actionLabel = isDark ? '切换到浅色主题' : '切换到深色主题'
  const accessibleName = '深色主题'

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative size-10 rounded-lg"
      aria-label={accessibleName}
      aria-pressed={isDark}
      title={actionLabel}
    >
      <Sun
        className="size-[18px] scale-100 opacity-100 blur-none motion-safe:transition-[opacity,filter,scale] motion-safe:duration-200 motion-safe:ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none dark:scale-[0.25] dark:opacity-0 dark:blur-[4px]"
        aria-hidden="true"
      />
      <Moon
        className="absolute size-[18px] scale-[0.25] opacity-0 blur-[4px] motion-safe:transition-[opacity,filter,scale] motion-safe:duration-200 motion-safe:ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none dark:scale-100 dark:opacity-100 dark:blur-none"
        aria-hidden="true"
      />
      <span className="sr-only">{accessibleName}</span>
    </Button>
  )
}
