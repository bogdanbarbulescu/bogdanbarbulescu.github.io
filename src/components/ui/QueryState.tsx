import Section from './Section'
import Spinner from './Spinner'
import { accentButtonClass } from './tokens'

interface QueryStateProps {
  title: string
  message?: string
}

export function LoadingSection({ title, message = 'Loading…' }: QueryStateProps) {
  return (
    <Section title={title}>
      <div className="flex flex-col items-center gap-4">
        <Spinner ariaLabel={message} />
        <p className="text-center text-gray-500">{message}</p>
      </div>
    </Section>
  )
}

interface ErrorSectionProps extends QueryStateProps {
  onRetry?: () => void
}

export function ErrorSection({ title, message, onRetry }: ErrorSectionProps) {
  return (
    <Section title={title}>
      <p className="text-center text-red-600 dark:text-red-400 mb-4">{message}</p>
      {onRetry && (
        <div className="text-center">
          <button type="button" onClick={onRetry} className={accentButtonClass}>
            Try again
          </button>
        </div>
      )}
    </Section>
  )
}

