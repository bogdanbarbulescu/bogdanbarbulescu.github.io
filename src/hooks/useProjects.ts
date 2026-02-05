import { useState, useEffect } from 'react'

export interface ProjectEntry {
  id: number
  title: string
  description: string
  image: string
  technologies: string
  link: string
  category: string
}

let cached: ProjectEntry[] | null = null

function fetchProjects(): Promise<ProjectEntry[]> {
  const base = import.meta.env.BASE_URL ?? '/'
  return fetch(`${base}data/projects.json`).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    return r.json()
  })
}

export function useProjects(): {
  data: ProjectEntry[]
  loading: boolean
  error: Error | null
  refetch: () => void
} {
  const [data, setData] = useState<ProjectEntry[]>(cached ?? [])
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState<Error | null>(null)

  const refetch = () => {
    setLoading(true)
    setError(null)
    fetchProjects()
      .then((json: ProjectEntry[]) => {
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
