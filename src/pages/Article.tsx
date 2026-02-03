import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useBlogData } from '../hooks/useBlogData'
import { parseMarkdown } from '../lib/markdown'

export default function Article() {
  const { id } = useParams<{ id: string }>()
  const { data: blogData } = useBlogData()
  const [mdContent, setMdContent] = useState<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  const meta = id ? blogData.find((e) => e.id === id) : null

  useEffect(() => {
    if (!id) {
      setLoadError('No article specified.')
      return
    }
    setLoadError(null)
    setMdContent(null)
    fetch(`/articles/${id}.md`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => setMdContent(text))
      .catch(() => setLoadError('Failed to load article.'))
  }, [id])

  if (!id) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600 dark:text-red-400">No article selected.</p>
        <Link to="/blog" className="text-accent hover:underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600 dark:text-red-400">{loadError}</p>
        <Link to="/blog" className="text-accent hover:underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  if (!meta) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-500">Loading…</p>
      </div>
    )
  }

  const html = mdContent ? parseMarkdown(mdContent) : ''

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        to="/blog"
        className="inline-flex items-center text-accent hover:underline mb-6 font-medium"
      >
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{meta.title}</h1>
      <div
        className="article-body prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p className="mt-8 text-gray-600 dark:text-gray-400">
        <strong>Tags:</strong>{' '}
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block mr-2 px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-sm"
          >
            {tag}
          </span>
        ))}
      </p>
    </article>
  )
}
