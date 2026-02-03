import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import { learningTopics } from '../data/learning-topics'
import Card from '../components/ui/Card'
import Section from '../components/ui/Section'

const ITEMS_PER_PAGE_OPTIONS = [3, 6, 9]
const DEFAULT_PER_PAGE = 6

export default function Projects() {
  const { data: projects, loading, error } = useProjects()
  const [activeTab, setActiveTab] = useState<'web' | 'learning'>('web')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState<number | 'all'>(DEFAULT_PER_PAGE)

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return Array.from(set).sort()
  }, [projects])

  const filtered = useMemo(() => {
    let list = projects
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.toLowerCase().includes(q)
      )
    }
    return list
  }, [projects, category, search])

  const effectivePerPage = perPage === 'all' ? filtered.length : perPage
  const totalPages = Math.max(1, Math.ceil(filtered.length / (effectivePerPage || 1)))
  const currentPage = Math.min(page, totalPages)
  const paginated = useMemo(
    () =>
      perPage === 'all' ? filtered : filtered.slice((currentPage - 1) * perPage, currentPage * perPage),
    [filtered, currentPage, perPage]
  )

  if (loading) {
    return (
      <Section title="Projects">
        <p className="text-center text-gray-500">Loading…</p>
      </Section>
    )
  }
  if (error) {
    return (
      <Section title="Projects">
        <p className="text-center text-red-600 dark:text-red-400">Failed to load projects.</p>
      </Section>
    )
  }

  return (
    <Section title="Projects">
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
        <button
          type="button"
          onClick={() => setActiveTab('web')}
          className={`px-4 py-2 rounded-t font-medium transition ${
            activeTab === 'web'
              ? 'bg-accent text-gray-900'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Web
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('learning')}
          className={`px-4 py-2 rounded-t font-medium transition ${
            activeTab === 'learning'
              ? 'bg-accent text-gray-900'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Learning
        </button>
      </div>

      {activeTab === 'web' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white"
            />
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setPage(1)
              }}
              className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              value={perPage === 'all' ? 'all' : perPage}
              onChange={(e) => {
                const v = e.target.value
                setPerPage(v === 'all' ? 'all' : Number(v))
                setPage(1)
              }}
              className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white"
            >
              {ITEMS_PER_PAGE_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n} per page
                </option>
              ))}
              <option value="all">Show all</option>
            </select>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''} found.
          </p>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No projects match your criteria.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((project) => (
                  <Card
                    key={project.id}
                    variant="project"
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    href={project.link}
                    technologies={project.technologies}
                    category={project.category}
                    external
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPage(p)}
                      className={`px-3 py-1.5 rounded border ${
                        p === currentPage ? 'bg-accent border-accent' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}

      {activeTab === 'learning' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTopics.map((topic) => (
            <Card
              key={topic.id}
              variant="learning"
              title={topic.title}
              description={topic.description}
              image={topic.image}
              href={`/learning/${topic.id}`}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-12">
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
