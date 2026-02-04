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

export function useProjects(): { data: ProjectEntry[]; loading: boolean; error: Error | null } {
  const [data, setData] = useState<ProjectEntry[]>(cached ?? [])
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (cached) {
      setData(cached)
      return
    }
    const base = import.meta.env.BASE_URL ?? '/'
    fetch(`${base}data/projects.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((json: ProjectEntry[]) => {
        cached = json
        setData(json)
      })
      .catch((e) => setError(e instanceof Error ? e : new Error(String(e))))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
