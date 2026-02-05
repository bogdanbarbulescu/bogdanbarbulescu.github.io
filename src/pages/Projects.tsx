import { useState, useMemo } from 'react'
import { useProjects } from '../hooks/useProjects'
import { learningTopics } from '../data/learning-topics'
import Card from '../components/ui/Card'
import Section from '../components/ui/Section'
import ToggleGroup from '../components/ui/ToggleGroup'
import Pagination from '../components/ui/Pagination'
import BackLink from '../components/ui/BackLink'
import { LoadingSection, ErrorSection } from '../components/ui/QueryState'

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
    return <LoadingSection title="Projects" />
  }
  if (error) {
    return <ErrorSection title="Projects" message="Failed to load projects." />
  }

  return (
    <Section eyebrow="Work" title="Projects">
      <ToggleGroup
        options={[
          { value: 'web', label: 'Web' },
          { value: 'learning', label: 'Learning' },
        ]}
        value={activeTab}
        onChange={(value) => setActiveTab(value as 'web' | 'learning')}
        variant="tab"
        ariaLabel="Projects sections"
        className="justify-start"
      />

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
              className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-card-dark px-4 py-2.5 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-shadow"
            />
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setPage(1)
              }}
              className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-card-dark px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-shadow"
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
              className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-card-dark px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-shadow"
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
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
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
        <BackLink to="/">Back to Home</BackLink>
      </div>
    </Section>
  )
}
