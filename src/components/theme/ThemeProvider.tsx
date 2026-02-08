import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void } | null>(null)

/* eslint-disable react-refresh/only-export-components -- useTheme is the context consumer, kept with provider */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

const STORAGE_KEY = 'theme'

function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function getStoredTheme(): Theme | null {
  if (!isBrowser()) return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Storage might be unavailable (e.g. privacy mode); fall back to system/default theme
  }
  return null
}

function getPreferredTheme(): Theme {
  const stored = getStoredTheme()
  if (stored) return stored

  if (isBrowser()) {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
      // matchMedia may throw in very old / unusual environments; ignore and use default below
    }
  }

  return 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    if (!isBrowser()) return
    try {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Ignore storage/write errors; theme will still apply for this session
    }
  }, [theme])

  useEffect(() => {
    if (!isBrowser()) return

    let mq: MediaQueryList
    const handler = () => {
      const stored = getStoredTheme()
      if (!stored) {
        try {
          setThemeState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        } catch {
          // Ignore; keep current theme
        }
      }
    }

    try {
      mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', handler)
    } catch {
      // matchMedia may not be supported; ignore dynamic system theme changes
      return
    }

    return () => {
      try {
        mq.removeEventListener('change', handler)
      } catch {
        // Ignore cleanup errors
      }
    }
  }, [])

  const setTheme = (t: Theme) => setThemeState(t)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
