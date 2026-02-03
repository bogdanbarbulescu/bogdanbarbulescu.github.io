import type { ReactNode } from 'react'
import { Link, type To } from 'react-router-dom'
import { outlineAccentButtonClass } from './tokens'

interface BackLinkProps {
  to: To
  children: ReactNode
  className?: string
}

export default function BackLink({ to, children, className = '' }: BackLinkProps) {
  return (
    <Link to={to} className={`${outlineAccentButtonClass} ${className}`.trim()}>
      <span aria-hidden="true" className="mr-1.5">
        ←
      </span>
      <span>{children}</span>
    </Link>
  )
}

