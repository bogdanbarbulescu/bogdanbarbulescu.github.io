import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PAGE_META } from '../data/page-meta'

const DEFAULT_DESCRIPTION = PAGE_META.home.description

function getMetaKey(pathname: string): keyof typeof PAGE_META | null {
  if (pathname === '/') return 'home'
  if (pathname === '/about') return 'about'
  if (pathname === '/projects') return 'projects'
  if (pathname.startsWith('/blog')) return 'blog'
  return null
}

export default function PageMeta() {
  const { pathname } = useLocation()
  const key = getMetaKey(pathname)
  const meta = key ? PAGE_META[key] : null
  const description = meta?.description ?? DEFAULT_DESCRIPTION

  useEffect(() => {
    const el = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (el) el.setAttribute('content', description)
    return () => {
      if (el) el.setAttribute('content', DEFAULT_DESCRIPTION)
    }
  }, [description])

  return null
}
