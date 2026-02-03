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

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 mt-8 ${className}`.trim()}
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent"
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
            className={`px-3 py-1.5 rounded border ${
              isActive
                ? 'bg-accent border-accent text-gray-900'
                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
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
        className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent"
      >
        Next
      </button>
    </div>
  )
}

