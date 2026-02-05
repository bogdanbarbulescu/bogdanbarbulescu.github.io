import { useState, useMemo } from 'react'
import { useBlogData } from '../hooks/useBlogData'
import Card from '../components/ui/Card'
import Section from '../components/ui/Section'
import ToggleGroup from '../components/ui/ToggleGroup'
import Pagination from '../components/ui/Pagination'
import BackLink from '../components/ui/BackLink'
import { LoadingSection, ErrorSection } from '../components/ui/QueryState'

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

  const filterOptions = [
    { value: 'all', label: 'All' },
    ...allTags.map((tag) => ({ value: tag, label: tag })),
  ]

  if (loading) {
    return <LoadingSection title="Blog" />
  }
  if (error) {
    return <ErrorSection title="Blog" message="Failed to load blog data." />
  }

  return (
    <Section eyebrow="Writing" title="Blog">
      <ToggleGroup
        options={filterOptions}
        value={filter}
        onChange={setFilterAndResetPage}
        variant="pill"
        ariaLabel="Filter articles"
      />

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
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
      )}

      <div className="text-center mt-8">
        <BackLink to="/">Back to Home</BackLink>
      </div>
    </Section>
  )
}
