import type { ReactNode } from 'react'

export interface ToggleOption {
  value: string
  label: ReactNode
}

interface ToggleGroupProps {
  options: ToggleOption[]
  value: string
  onChange: (value: string) => void
  variant?: 'pill' | 'tab'
  ariaLabel?: string
  className?: string
}

export default function ToggleGroup({
  options,
  value,
  onChange,
  variant = 'pill',
  ariaLabel,
  className = '',
}: ToggleGroupProps) {
  const isPill = variant === 'pill'

  const containerBase =
    'flex flex-wrap justify-center gap-2 mb-8' +
    (isPill ? '' : ' border-b border-gray-200 dark:border-white/10')

  const baseButton =
    'px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light dark:focus-visible:ring-offset-surface-dark'

  const activeButton = isPill
    ? 'bg-accent text-gray-900 rounded-full shadow-sm'
    : 'bg-accent text-gray-900 rounded-t'

  const inactiveButton =
    'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 ' +
    (isPill ? 'rounded-full' : 'rounded-t')

  return (
    <div
      className={`${containerBase} ${className}`.trim()}
      role="group"
      aria-label={ariaLabel}
    >
      {options.map((option) => {
        const isActive = option.value === value
        return (
          <button
            key={String(option.value)}
            type="button"
            onClick={() => {
              if (!isActive) onChange(option.value)
            }}
            className={`${baseButton} ${isActive ? activeButton : inactiveButton}`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

