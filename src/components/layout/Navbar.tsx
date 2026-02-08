import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from '../theme/ThemeToggle'
import { useTheme } from '../theme/ThemeProvider'

const navLinks: { label: string; path: string; scrollTo?: string; state?: { tab: string } }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Learning', path: '/projects', state: { tab: 'learning' } },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/', scrollTo: 'contact' },
]

const SCROLL_THRESHOLD = 48

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  const { theme } = useTheme()
  const isHome = location.pathname === '/'
  const useTransparent = isHome && !scrolled
  const isDarkNav = useTransparent || theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const panel = menuPanelRef.current
    if (!panel) return
    const focusable = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    const first = focusable[0]
    if (first) first.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !menuPanelRef.current?.contains(document.activeElement)) return
      const focusable = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const target = e.target as HTMLElement
      if (e.shiftKey) {
        if (target === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (target === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const isActive = (path: string, state?: { tab?: string }, scrollTo?: string) => {
    if (path === '/') {
      const locState = location.state as { tab?: string; scrollTo?: string } | null
      if (scrollTo) return location.pathname === '/' && locState?.scrollTo === scrollTo
      return location.pathname === '/' && !locState?.scrollTo
    }
    if (state?.tab) return location.pathname === path && (location.state as { tab?: string } | null)?.tab === state.tab
    return location.pathname.startsWith(path)
  }

  const handleNavClick = (path: string, scrollTo?: string) => {
    setOpen(false)
    if (scrollTo && path === '/') {
      if (location.pathname === '/') {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo } })
      }
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        useTransparent
          ? 'bg-transparent shadow-none text-white'
          : isDarkNav
            ? 'bg-surface-dark/95 backdrop-blur-md shadow-md text-white'
            : 'bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-md text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className={`flex items-center gap-2 font-semibold hover:opacity-90 ${!useTransparent && theme === 'light' ? 'text-gray-900' : ''}`}>
            <img src="/images/logo.png" alt="BVB Logo" className="h-8 w-auto" />
            <span>BVB</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, path, scrollTo, state }) => (
              <Link
                key={path + (scrollTo ?? '') + (state?.tab ?? '')}
                to={path}
                state={state ?? (scrollTo ? { scrollTo } : undefined)}
                onClick={(e) => { if (scrollTo) { e.preventDefault(); handleNavClick(path, scrollTo); } }}
                className={`text-sm font-medium transition hover:text-accent ${
                  isActive(path, state, scrollTo) ? 'text-accent' : isDarkNav ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
                }`}
                aria-current={isActive(path, state, scrollTo) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(!open)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light dark:focus-visible:ring-offset-surface-dark ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-gray-200 dark:hover:bg-white/10'}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-haspopup="true"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className={`md:hidden py-3 border-t ${isDarkNav ? 'border-white/10' : 'border-gray-200 dark:border-white/10'}`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(({ label, path, scrollTo, state }) => (
                <Link
                  key={path + (scrollTo ?? '') + (state?.tab ?? '')}
                  to={path}
                  state={state ?? (scrollTo ? { scrollTo } : undefined)}
                  onClick={() => (scrollTo ? handleNavClick(path, scrollTo) : setOpen(false))}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive(path, state, scrollTo)
                      ? 'bg-white/10 text-accent dark:bg-white/10'
                      : isDarkNav
                        ? 'text-gray-300 hover:bg-white/10'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10'
                  }`}
                  aria-current={isActive(path, state, scrollTo) ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
