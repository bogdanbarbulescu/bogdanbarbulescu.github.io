import { useEffect } from 'react'

const BASE_TITLE = 'Portfolio | Bogdan Barbulescu'

export function useDocumentTitle(title: string | null) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    const previous = document.title
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE
    return () => {
      document.title = previous
    }
  }, [title])
}
