import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { learningTopics } from '../data/learning-topics'
import { useLearningData, type LearningResourceMeta } from '../hooks/useLearningData'
import Section from '../components/ui/Section'
import BackLink from '../components/ui/BackLink'
import { accentButtonClass } from '../components/ui/tokens'

const SECTION_ORDER = ['Getting started', 'Roadmaps', 'Reference', 'Career']

function groupBySection(resources: LearningResourceMeta[]): Map<string, LearningResourceMeta[]> {
  const map = new Map<string, LearningResourceMeta[]>()
  const hasSection = resources.some((r) => r.section)
  if (!hasSection) {
    return map
  }
  for (const section of SECTION_ORDER) {
    const items = resources.filter((r) => r.section === section)
    if (items.length > 0) map.set(section, items)
  }
  const other = resources.filter((r) => r.section && !SECTION_ORDER.includes(r.section))
  if (other.length > 0) map.set('Other', other)
  return map
}

export default function LearningTopic() {
  const { topic } = useParams<{ topic: string }>()
  const { data: learningData, loading: dataLoading, error: dataError } = useLearningData()
  const topicMeta = topic ? learningTopics.find((t) => t.id === topic) : null
  const resources = topic ? learningData[topic] ?? [] : []
  const bySection = useMemo(() => groupBySection(resources), [resources])
  const hasSections = bySection.size > 0

  if (!topic) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">No topic specified.</p>
        <div className="mt-4">
          <BackLink to="/projects">Back to Projects</BackLink>
        </div>
      </Section>
    )
  }

  if (!topicMeta) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">Topic not found.</p>
        <div className="mt-4">
          <BackLink to="/projects">Back to Projects</BackLink>
        </div>
      </Section>
    )
  }

  if (dataLoading) {
    return (
      <>
        <header className="bg-surface-dark text-white py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{topicMeta.title}</h1>
            <p className="text-gray-300">{topicMeta.description}</p>
          </div>
        </header>
        <Section>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500">Loading…</p>
          </div>
        </Section>
      </>
    )
  }

  if (dataError) {
    return (
      <>
        <header className="bg-surface-dark text-white py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{topicMeta.title}</h1>
            <p className="text-gray-300">{topicMeta.description}</p>
          </div>
        </header>
        <Section>
          <div className="max-w-3xl mx-auto">
            <p className="text-red-600 dark:text-red-400">Failed to load learning resources.</p>
            <div className="mt-4">
              <BackLink to="/projects">Back to Projects</BackLink>
            </div>
          </div>
        </Section>
      </>
    )
  }

  const hasResources = resources.length > 0

  return (
    <>
      <header className="bg-surface-dark text-white py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{topicMeta.title}</h1>
          <p className="text-gray-300">{topicMeta.description}</p>
        </div>
      </header>
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <BackLink to="/projects">Back to Projects</BackLink>
          </div>

          {hasResources ? (
            <div className="space-y-8">
              {hasSections ? (
                Array.from(bySection.entries()).map(([sectionName, sectionResources]) => (
                  <div key={sectionName} className="space-y-3">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {sectionName}
                    </h2>
                    <ul className="space-y-3">
                      {sectionResources.map((resource) => (
                        <li key={resource.id}>
                          <Link
                            to={`/learning/${topic}/${resource.id}`}
                            className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                              {resource.title}
                            </h3>
                            {resource.description && (
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {resource.description}
                              </p>
                            )}
                            <span className={`mt-2 inline-block ${accentButtonClass}`}>
                              Read
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Guides &amp; resources
                  </h2>
                  <ul className="space-y-3">
                    {resources.map((resource) => (
                      <li key={resource.id}>
                        <Link
                          to={`/learning/${topic}/${resource.id}`}
                          className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {resource.title}
                          </h3>
                          {resource.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {resource.description}
                            </p>
                          )}
                          <span className={`mt-2 inline-block ${accentButtonClass}`}>
                            Read
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              More guides and resources will be added here.
            </p>
          )}
        </div>
      </Section>
    </>
  )
}
