import { useParams, Link } from 'react-router-dom'
import { learningTopics } from '../data/learning-topics'
import Section from '../components/ui/Section'

export default function LearningTopic() {
  const { topic } = useParams<{ topic: string }>()
  const meta = topic ? learningTopics.find((t) => t.id === topic) : null

  if (!topic) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">No topic specified.</p>
        <Link to="/projects" className="text-accent hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </Section>
    )
  }

  if (!meta) {
    return (
      <Section title="Learning">
        <p className="text-gray-500">Topic not found.</p>
        <Link to="/projects" className="text-accent hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </Section>
    )
  }

  return (
    <>
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{meta.title}</h1>
          <p className="text-gray-300">{meta.description}</p>
        </div>
      </header>
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This section contains curated resources for <strong>{meta.title}</strong>. Content is
            organized by category below. More detailed guides and links will be added here.
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full accordion and resource list for this topic can be migrated from the legacy pages
              (e.g. red.html, blue.html) into structured data or markdown and rendered here.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-lg border-2 border-accent px-4 py-2 text-accent font-medium hover:bg-accent hover:text-gray-900 transition"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
