import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from '../theme/ThemeToggle'

const navLinks: { label: string; path: string; scrollTo?: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/', scrollTo: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
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
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 font-semibold hover:opacity-90">
            <img src="/images/logo.png" alt="BVB Logo" className="h-8 w-auto" />
            <span>BVB</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, path, scrollTo }) => (
              <Link
                key={path + (scrollTo ?? '')}
                to={path}
                onClick={(e) => { if (scrollTo) { e.preventDefault(); handleNavClick(path, scrollTo); } }}
                className={`text-sm font-medium transition hover:text-accent ${
                  isActive(path) ? 'text-accent' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg hover:bg-gray-800"
              aria-label="Toggle menu"
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
          <div className="md:hidden py-3 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ label, path, scrollTo }) => (
                <Link
                  key={path + (scrollTo ?? '')}
                  to={path}
                  onClick={() => (scrollTo ? handleNavClick(path, scrollTo) : setOpen(false))}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive(path) ? 'bg-gray-800 text-accent' : 'text-gray-300 hover:bg-gray-800'
                  }`}
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
