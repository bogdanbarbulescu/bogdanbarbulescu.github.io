import { Component, type ErrorInfo, type ReactNode } from 'react'
import { accentButtonClass } from './ui/tokens'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  retry = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 bg-surface-light dark:bg-surface-dark">
          <h1 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-body text-center max-w-md mb-6">
            An unexpected error occurred. You can try again or return to the home page.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button type="button" onClick={this.retry} className={accentButtonClass}>
              Try again
            </button>
            <a href="#/" className={accentButtonClass}>
              Back to Home
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
