import { useState, useEffect } from 'react'

export interface BlogEntry {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
}

let cached: BlogEntry[] | null = null

function fetchBlogData(): Promise<BlogEntry[]> {
  const base = import.meta.env.BASE_URL ?? '/'
  return fetch(`${base}data/blog-data.json`).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    return r.json()
  })
}

export function useBlogData(): {
  data: BlogEntry[]
  loading: boolean
  error: Error | null
  refetch: () => void
} {
  const [data, setData] = useState<BlogEntry[]>(cached ?? [])
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState<Error | null>(null)

  const refetch = () => {
    setLoading(true)
    setError(null)
    fetchBlogData()
      .then((json: BlogEntry[]) => {
        cached = json
        setData(json)
      })
      .catch((e) => setError(e instanceof Error ? e : new Error(String(e))))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (cached) {
      setData(cached)
      return
    }
    refetch()
  }, [])

  return { data, loading, error, refetch }
}
