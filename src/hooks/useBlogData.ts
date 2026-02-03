import { useState, useEffect } from 'react'

export interface BlogEntry {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
}

let cached: BlogEntry[] | null = null

export function useBlogData(): { data: BlogEntry[]; loading: boolean; error: Error | null } {
  const [data, setData] = useState<BlogEntry[]>(cached ?? [])
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (cached) {
      setData(cached)
      return
    }
    fetch('/data/blog-data.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((json: BlogEntry[]) => {
        cached = json
        setData(json)
      })
      .catch((e) => setError(e instanceof Error ? e : new Error(String(e))))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
