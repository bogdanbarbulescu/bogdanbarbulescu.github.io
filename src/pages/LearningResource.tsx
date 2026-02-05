import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { learningTopics } from '../data/learning-topics'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLearningData } from '../hooks/useLearningData'
import Section from '../components/ui/Section'
import BackLink from '../components/ui/BackLink'
import Spinner from '../components/ui/Spinner'
import { parseMarkdown } from '../lib/markdown'

export default function LearningResource() {
  const { topic, resourceId } = useParams<{ topic: string; resourceId: string }>()
  const { data: learningData, loading: dataLoading, error: dataError } = useLearningData()
  const topicMeta = topic ? learningTopics.find((t) => t.id === topic) : null
  const resources = topic ? learningData[topic] ?? [] : []
  const resourceMeta = resourceId ? resources.find((r) => r.id === resourceId) : null
  useDocumentTitle(resourceMeta ? `${resourceMeta.title} · Learning` : 'Learning')

  const [mdContent, setMdContent] = useState<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    if (!topic || !resourceId) {
      setMdContent(null)
      setLoadError(null)
      return
    }
    setLoadError(null)
    setMdContent(null)
    const base = import.meta.env.BASE_URL ?? '/'
    const url = `${base}learning/${topic}/${resourceId}.md`
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => setMdContent(text))
      .catch(() => setLoadError(`Failed to load resource: ${url}`))
  }, [topic, resourceId])

  if (!topic || !resourceId) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">No topic or resource specified.</p>
        <div className="mt-4">
          <BackLink to="/projects">Back to Projects</BackLink>
        </div>
      </Section>
    )
  }

  if (dataLoading) {
    return (
      <Section title="Learning">
        <div className="flex flex-col items-center gap-4">
          <Spinner ariaLabel="Loading" />
          <p className="text-gray-500">Loading…</p>
        </div>
      </Section>
    )
  }

  if (dataError || !topicMeta) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">Topic not found.</p>
        <div className="mt-4">
          <BackLink to="/projects">Back to Projects</BackLink>
        </div>
      </Section>
    )
  }

  if (!resourceMeta) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">Resource not found.</p>
        <div className="mt-4">
          <BackLink to={`/learning/${topic}`}>Back to {topicMeta.title}</BackLink>
        </div>
      </Section>
    )
  }

  const learningNavBar = (
    <header
      className="sticky top-0 z-40 flex items-center justify-between gap-4 px-4 py-3 bg-slate-900/95 border-b border-slate-700 backdrop-blur-sm"
      aria-label="Learning navigation"
    >
      <BackLink to={`/learning/${topic}`}>Back to {topicMeta.title}</BackLink>
      <Link
        to="/"
        className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
      >
        Portfolio
      </Link>
    </header>
  )

  if (loadError) {
    return (
      <div className="learning-resource-layout">
        {learningNavBar}
        <header className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
            {resourceMeta.title}
          </h1>
          {resourceMeta.description && (
            <p className="text-slate-400">{resourceMeta.description}</p>
          )}
        </header>
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <p className="text-red-400">{loadError}</p>
          <div className="mt-4">
            <BackLink to={`/learning/${topic}`}>Back to {topicMeta.title}</BackLink>
          </div>
        </div>
      </div>
    )
  }

  if (!mdContent) {
    return (
      <div className="learning-resource-layout">
        {learningNavBar}
        <header className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
            {resourceMeta.title}
          </h1>
          {resourceMeta.description && (
            <p className="text-slate-400">{resourceMeta.description}</p>
          )}
        </header>
        <div className="max-w-4xl mx-auto px-4 pb-20 flex flex-col items-center gap-4">
          <Spinner className="border-slate-500 border-t-emerald-500" ariaLabel="Loading resource" />
          <p className="text-slate-400">Loading…</p>
        </div>
      </div>
    )
  }

  const html = parseMarkdown(mdContent)
  return (
    <div className="learning-resource-layout">
      {learningNavBar}
      <header className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
          {resourceMeta.title}
        </h1>
        {resourceMeta.description && (
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">{resourceMeta.description}</p>
        )}
      </header>
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="mb-6 mt-4">
          <BackLink to={`/learning/${topic}`}>Back to {topicMeta.title}</BackLink>
        </div>
        <div
          className="learning-article article-body max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </div>
  )
}
