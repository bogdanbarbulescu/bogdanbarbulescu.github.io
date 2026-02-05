import { type ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 animate-fade-in-up ${className}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || title) && (
          <div className="text-center mb-10">
            {eyebrow && (
              <p className="text-eyebrow font-medium uppercase tracking-widest text-accent mb-2 font-sans">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display font-bold text-section md:text-3xl tracking-tight text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
