"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Memoize the toggle function
  const toggleTheme = React.useCallback(() => {
    requestAnimationFrame(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    })
  }, [setTheme, theme])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition-transform hover:scale-110 dark:hover:bg-zinc-700 transform-gpu"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 transform-gpu" />
      ) : (
        <Moon className="h-5 w-5 transform-gpu" />
      )}
    </button>
  )
}
