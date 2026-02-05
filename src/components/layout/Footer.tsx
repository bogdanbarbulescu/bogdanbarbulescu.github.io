import { Link } from 'react-router-dom'
import { useTheme } from '../theme/ThemeProvider'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
]

const linkClass =
  'text-sm hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded'

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <footer
      className={`border-t py-8 ${
        isDark
          ? 'border-white/10 bg-surface-dark text-gray-400'
          : 'border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-surface-dark dark:text-gray-400 text-gray-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {footerLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`${linkClass} focus-visible:ring-offset-surface-light dark:focus-visible:ring-offset-surface-dark`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/"
              state={{ scrollTo: 'contact' }}
              className={`${linkClass} focus-visible:ring-offset-surface-light dark:focus-visible:ring-offset-surface-dark`}
            >
              Contact
            </Link>
          </div>
          <p className="text-small text-gray-500 dark:text-gray-500">
            © 2025–2026 Bogdan Bărbulescu · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
