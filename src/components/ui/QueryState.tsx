import Section from './Section'

interface QueryStateProps {
  title: string
  message?: string
}

export function LoadingSection({ title, message = 'Loading…' }: QueryStateProps) {
  return (
    <Section title={title}>
      <p className="text-center text-gray-500">{message}</p>
    </Section>
  )
}

export function ErrorSection({ title, message }: QueryStateProps) {
  return (
    <Section title={title}>
      <p className="text-center text-red-600 dark:text-red-400">{message}</p>
    </Section>
  )
}

