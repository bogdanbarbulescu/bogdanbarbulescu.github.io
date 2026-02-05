import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-dark text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {footerLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-sm hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark rounded"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/"
              state={{ scrollTo: 'contact' }}
              className="text-sm hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark rounded"
            >
              Contact
            </Link>
          </div>
          <p className="text-small text-gray-500">
            © 2025–2026 Bogdan Bărbulescu · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
