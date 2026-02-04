import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { learningTopics } from '../data/learning-topics'
import Section from '../components/ui/Section'
import BackLink from '../components/ui/BackLink'
import { parseMarkdown } from '../lib/markdown'

const RED_TEAM_ROADMAP_PATH = 'learning/red/beginner-red-team-roadmap.md'

export default function LearningTopic() {
  const { topic } = useParams<{ topic: string }>()
  const meta = topic ? learningTopics.find((t) => t.id === topic) : null
  const [roadmapMd, setRoadmapMd] = useState<string | null>(null)
  const [roadmapError, setRoadmapError] = useState<string | null>(null)

  useEffect(() => {
    if (topic !== 'red') {
      setRoadmapMd(null)
      setRoadmapError(null)
      return
    }
    setRoadmapError(null)
    const base = import.meta.env.BASE_URL ?? '/'
    fetch(`${base}${RED_TEAM_ROADMAP_PATH}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => setRoadmapMd(text))
      .catch(() => setRoadmapError('Failed to load roadmap.'))
  }, [topic])

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

  if (!meta) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">Topic not found.</p>
        <div className="mt-4">
          <BackLink to="/projects">Back to Projects</BackLink>
        </div>
      </Section>
    )
  }

  if (topic === 'red' && roadmapError) {
    return (
      <>
        <header className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
            <p className="text-gray-300">{meta.description}</p>
          </div>
        </header>
        <Section>
          <div className="max-w-3xl mx-auto">
            <p className="text-red-600 dark:text-red-400">{roadmapError}</p>
            <div className="mt-4">
              <BackLink to="/projects">Back to Projects</BackLink>
            </div>
          </div>
        </Section>
      </>
    )
  }

  if (topic === 'red' && roadmapMd) {
    const html = parseMarkdown(roadmapMd)
    return (
      <>
        <header className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
            <p className="text-gray-300">{meta.description}</p>
          </div>
        </header>
        <article className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="mb-6">
            <BackLink to="/projects">Back to Projects</BackLink>
          </div>
          <div
            className="article-body prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </>
    )
  }

  if (topic === 'red') {
    return (
      <>
        <header className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
            <p className="text-gray-300">{meta.description}</p>
          </div>
        </header>
        <Section>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500">Loading roadmap…</p>
          </div>
        </Section>
      </>
    )
  }

  return (
    <>
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
          <p className="text-gray-300">{meta.description}</p>
        </div>
      </header>
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This section contains curated resources for <strong>{meta.title}</strong>. Content is
            organized by category below. More detailed guides and links will be added here.
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full accordion and resource list for this topic can be migrated from the legacy pages
              (e.g. red.html, blue.html) into structured data or markdown and rendered here.
            </p>
          </div>
          <div className="mt-8">
            <BackLink to="/projects">Back to Projects</BackLink>
          </div>
        </div>
      </Section>
    </>
  )
}
