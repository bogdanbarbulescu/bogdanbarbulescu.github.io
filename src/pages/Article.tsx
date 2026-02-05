import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBlogData } from '../hooks/useBlogData'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { parseMarkdown } from '../lib/markdown'
import BackLink from '../components/ui/BackLink'
import Spinner from '../components/ui/Spinner'

export default function Article() {
  const { id } = useParams<{ id: string }>()
  const { data: blogData, loading: blogLoading } = useBlogData()
  const [mdContent, setMdContent] = useState<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  const meta = id ? blogData.find((e) => e.id === id) : null
  useDocumentTitle(meta ? `${meta.title} · Blog` : 'Article')

  useEffect(() => {
    if (!id) {
      setLoadError('No article specified.')
      return
    }
    setLoadError(null)
    setMdContent(null)
    const base = import.meta.env.BASE_URL ?? '/'
    fetch(`${base}articles/${id}.md`)
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
        <div className="mt-4">
          <BackLink to="/blog">Back to Blog</BackLink>
        </div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600 dark:text-red-400">{loadError}</p>
        <div className="mt-4">
          <BackLink to="/blog">Back to Blog</BackLink>
        </div>
      </div>
    )
  }

  if (blogLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <Spinner ariaLabel="Loading" />
        <p className="text-gray-500">Loading…</p>
      </div>
    )
  }

  if (id && !meta) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600 dark:text-red-400">Article not found.</p>
        <div className="mt-4">
          <BackLink to="/blog">Back to Blog</BackLink>
        </div>
      </div>
    )
  }

  if (!mdContent) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <Spinner ariaLabel="Loading article" />
        <p className="text-gray-500">Loading…</p>
      </div>
    )
  }

  const html = parseMarkdown(mdContent)
  // At this point we have id, meta, and mdContent (all early returns above)
  const articleMeta = meta!

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <BackLink to="/blog">Back to Blog</BackLink>
      </div>
      <div className="border-l-4 border-accent pl-4 mb-4">
        <h1 className="font-display font-bold text-display-sm md:text-display-md text-gray-900 dark:text-white mb-2">
          {articleMeta.title}
        </h1>
        <p className="text-small text-gray-500 dark:text-gray-400">
          {articleMeta.category ?? 'Article'}
        </p>
      </div>
      <div
        className="article-body prose dark:prose-invert max-w-none text-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p className="mt-8 text-gray-600 dark:text-gray-400">
        <strong>Tags:</strong>{' '}
        {articleMeta.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block mr-2 px-2.5 py-1 rounded-full bg-accent/15 dark:bg-accent/20 text-gray-700 dark:text-gray-300 border border-accent/20 dark:border-accent/30 text-small"
          >
            {tag}
          </span>
        ))}
      </p>
    </article>
  )
}
