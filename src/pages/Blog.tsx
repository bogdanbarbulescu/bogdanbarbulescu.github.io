import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useBlogData } from '../hooks/useBlogData'
import Card from '../components/ui/Card'
import Section from '../components/ui/Section'

const ROWS_PER_PAGE = 6

export default function Blog() {
  const { data: entries, loading, error } = useBlogData()
  const [filter, setFilter] = useState<string>('all')
  const [page, setPage] = useState(1)

  const allTags = useMemo(() => {
    const set = new Set<string>()
    entries.forEach((e) => e.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [entries])

  const filtered = useMemo(() => {
    if (filter === 'all') return entries
    return entries.filter((e) => e.tags.includes(filter))
  }, [entries, filter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * ROWS_PER_PAGE
  const paginated = useMemo(
    () => filtered.slice(start, start + ROWS_PER_PAGE),
    [filtered, start]
  )

  const setFilterAndResetPage = (f: string) => {
    setFilter(f)
    setPage(1)
  }

  if (loading) {
    return (
      <Section title="Blog">
        <p className="text-center text-gray-500">Loading…</p>
      </Section>
    )
  }
  if (error) {
    return (
      <Section title="Blog">
        <p className="text-center text-red-600 dark:text-red-400">Failed to load blog data.</p>
      </Section>
    )
  }

  return (
    <Section title="Blog">
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter articles">
        <button
          type="button"
          onClick={() => setFilterAndResetPage('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            filter === 'all'
              ? 'bg-accent text-gray-900'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setFilterAndResetPage(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === tag
                ? 'bg-accent text-gray-900'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((entry) => (
          <Card
            key={entry.id}
            variant="blog"
            title={entry.title}
            description={entry.description}
            tags={entry.tags}
            href={`/blog/${entry.id}`}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-8">No articles found for this filter.</p>
      )}

      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`px-3 py-1.5 rounded border ${
                p === currentPage
                  ? 'bg-accent border-accent text-gray-900'
                  : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      )}

      <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-flex items-center rounded-lg border-2 border-accent px-4 py-2 text-accent font-medium hover:bg-accent hover:text-gray-900 transition"
        >
          Back to Home
        </Link>
      </div>
    </Section>
  )
}
