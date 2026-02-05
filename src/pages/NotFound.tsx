import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { accentButtonClass } from '../components/ui/tokens'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found')
  return (
    <Section title="Page not found">
      <div className="text-center max-w-prose mx-auto">
        <p className="text-gray-600 dark:text-gray-300 text-body mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={accentButtonClass}>
          Back to Home
        </Link>
      </div>
    </Section>
  )
}
