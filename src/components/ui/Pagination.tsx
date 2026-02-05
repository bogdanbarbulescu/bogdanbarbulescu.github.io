interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) return null

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages)
    if (clamped !== currentPage) {
      onPageChange(clamped)
    }
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const baseButton =
    'px-3 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light dark:focus-visible:ring-offset-surface-dark'
  const inactiveButton =
    'border-gray-300 dark:border-white/10 bg-white dark:bg-surface-card-dark text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
  const disabledButton = 'disabled:opacity-50 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent'

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 mt-8 ${className}`.trim()}
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseButton} ${inactiveButton} ${disabledButton}`}
      >
        Previous
      </button>
      {pages.map((page) => {
        const isActive = page === currentPage
        return (
          <button
            key={page}
            type="button"
            onClick={() => goToPage(page)}
            className={`${baseButton} ${
              isActive
                ? 'bg-accent border-accent text-gray-900'
                : inactiveButton
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </button>
        )
      })}
      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${baseButton} ${inactiveButton} ${disabledButton}`}
      >
        Next
      </button>
    </div>
  )
}

