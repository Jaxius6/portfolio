"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  
  // Use a ref to track if we're currently switching themes
  const isSwitching = React.useRef(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    
    // Prevent multiple rapid clicks
    if (isSwitching.current) return
    isSwitching.current = true
    
    // Use RAF to batch the updates
    requestAnimationFrame(() => {
      const newTheme = theme === "dark" ? "light" : "dark"
      setTheme(newTheme)
      
      // Reset the switching flag after a short delay
      setTimeout(() => {
        isSwitching.current = false
      }, 100)
    })
  }, [theme, setTheme])

  // Early return with same-sized placeholder
  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle theme"
    >
      {mounted && (
        theme === "dark" ? (
          <Sun className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4" aria-hidden="true" />
        )
      )}
    </button>
  )
}
