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
    (isPill ? '' : ' border-b border-gray-200 dark:border-gray-700')

  const baseButton =
    'px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900'

  const activeButton = isPill
    ? 'bg-accent text-gray-900 rounded-full'
    : 'bg-accent text-gray-900 rounded-t'

  const inactiveButton =
    'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 ' +
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

