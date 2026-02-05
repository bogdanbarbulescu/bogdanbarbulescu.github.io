import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { learningTopics } from '../data/learning-topics'
import { useLearningData } from '../hooks/useLearningData'
import Section from '../components/ui/Section'
import BackLink from '../components/ui/BackLink'
import { parseMarkdown } from '../lib/markdown'

export default function LearningResource() {
  const { topic, resourceId } = useParams<{ topic: string; resourceId: string }>()
  const { data: learningData, loading: dataLoading, error: dataError } = useLearningData()
  const topicMeta = topic ? learningTopics.find((t) => t.id === topic) : null
  const resources = topic ? learningData[topic] ?? [] : []
  const resourceMeta = resourceId ? resources.find((r) => r.id === resourceId) : null

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
    const base = (import.meta.env.BASE_URL ?? '/').replace(/\/?$/, '') || ''
    const path = `${base ? base + '/' : ''}learning/${topic}/${resourceId}.md`
    const url = new URL(path, window.location.origin).href
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => setMdContent(text))
      .catch(() => setLoadError('Failed to load resource.'))
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
        <p className="text-gray-500">Loading…</p>
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

  if (loadError) {
    return (
      <div className="learning-resource-layout">
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
        <header className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
            {resourceMeta.title}
          </h1>
          {resourceMeta.description && (
            <p className="text-slate-400">{resourceMeta.description}</p>
          )}
        </header>
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <p className="text-slate-400">Loading…</p>
        </div>
      </div>
    )
  }

  const html = parseMarkdown(mdContent)
  return (
    <div className="learning-resource-layout">
      <header className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
          {resourceMeta.title}
        </h1>
        {resourceMeta.description && (
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">{resourceMeta.description}</p>
        )}
      </header>
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="mb-6">
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
