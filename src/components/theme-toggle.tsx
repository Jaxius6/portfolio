"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Preload the opposite theme
    const oppositeTheme = theme === 'dark' ? 'light' : 'dark'
    const preloadTheme = () => {
      document.documentElement.classList.add(oppositeTheme)
      requestAnimationFrame(() => {
        document.documentElement.classList.remove(oppositeTheme)
      })
    }
    preloadTheme()
  }, [theme])

  const toggle = React.useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    // Apply the theme change in the next frame
    requestAnimationFrame(() => {
      setTheme(newTheme)
    })
  }, [theme, setTheme])

  return { mounted, theme, toggle }
}

export function ThemeToggle() {
  const { mounted, theme, toggle } = useThemeToggle()

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="w-9 h-9" /> // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:ring-2 ring-zinc-300 dark:ring-zinc-600 transition-shadow"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}
