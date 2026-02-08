import { useEffect } from 'react'

export type ToastVariant = 'success' | 'error' | 'info'

export interface ToastItem {
  id: string
  message: string
  variant: ToastVariant
  duration?: number
}

interface ToastProps {
  item: ToastItem
  onDismiss: (id: string) => void
}

const variantStyles: Record<ToastVariant, string> = {
  success:
    'bg-emerald-900/90 dark:bg-emerald-800/90 text-white border-emerald-600 dark:border-emerald-500',
  error:
    'bg-red-900/90 dark:bg-red-800/90 text-white border-red-600 dark:border-red-500',
  info:
    'bg-gray-800/90 dark:bg-gray-700/90 text-gray-100 border-gray-600 dark:border-gray-500',
}

export default function Toast({ item, onDismiss }: ToastProps) {
  const duration = item.duration ?? 5000

  useEffect(() => {
    if (duration <= 0) return
    const t = setTimeout(() => onDismiss(item.id), duration)
    return () => clearTimeout(t)
  }, [item.id, duration, onDismiss])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`rounded-lg border px-4 py-3 shadow-lg ${variantStyles[item.variant]} animate-fade-in`}
    >
      <p className="text-sm font-medium">{item.message}</p>
    </div>
  )
}
