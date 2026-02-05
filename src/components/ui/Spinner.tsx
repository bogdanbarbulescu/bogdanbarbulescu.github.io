interface SpinnerProps {
  className?: string
  ariaLabel?: string
}

export default function Spinner({ className = '', ariaLabel = 'Loading' }: SpinnerProps) {
  return (
    <div
      className={`inline-block w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin ${className}`.trim()}
      role="status"
      aria-label={ariaLabel}
    />
  )
}
