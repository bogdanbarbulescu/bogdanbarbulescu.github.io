import { useState, useEffect } from 'react'

export interface LearningResourceMeta {
  id: string
  title: string
  description?: string
}

export type LearningData = Record<string, LearningResourceMeta[]>

let cached: LearningData | null = null

export function useLearningData(): {
  data: LearningData
  loading: boolean
  error: Error | null
} {
  const [data, setData] = useState<LearningData>(cached ?? {})
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (cached) {
      setData(cached)
      return
    }
    const base = import.meta.env.BASE_URL ?? '/'
    fetch(`${base}data/learning-data.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((json: LearningData) => {
        cached = json
        setData(json)
      })
      .catch((e) => setError(e instanceof Error ? e : new Error(String(e))))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
