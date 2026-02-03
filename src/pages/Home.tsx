import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Contact from '../components/Contact'
import { outlineAccentButtonClass, accentButtonClass } from '../components/ui/tokens'

const hubCards = [
  {
    variant: 'learning' as const,
    title: 'Web Development',
    description: 'Modern and responsive web interfaces using HTML, CSS and JS.',
    image: '/images/web.png',
    href: '/projects',
  },
  {
    variant: 'learning' as const,
    title: 'Learning Resources',
    description:
      'Collection of essential resources for mastering Networking, Security Certifications and more.',
    image: '/images/learning.png',
    href: '/projects',
  },
  {
    variant: 'learning' as const,
    title: 'Blog',
    description: 'Explore in-depth articles, detailed tutorials, and lab walkthroughs.',
    image: '/images/blog.png',
    href: '/blog',
  },
]

export default function Home() {
  const location = useLocation()
  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollTo])

  return (
    <>
      <header className="relative bg-cover bg-center text-white min-h-[50vh] flex items-center justify-center py-16 px-4" style={{ backgroundImage: "url('/images/photo.webp')" }}>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Securing the Digital Landscape
          </h1>
          <button
            type="button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={outlineAccentButtonClass}
          >
            View My Work
          </button>
        </div>
      </header>

      <Section id="about" title="Who Am I?">
        <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Hello, I'm Bogdan, a network engineer from Romania with 8 years of academic industry
            experience. I'm passionate about <strong>network security</strong>,{' '}
            <strong>ethical hacking</strong>, and <strong>front-end development</strong>.
          </p>
          <p>
            This portfolio reflects my journey, showcasing diverse projects, challenges overcome,
            and lessons learned.
          </p>
          <p>
            Outside work, I enjoy hiking and capturing nature's beauty through photography. By the
            way, check out{' '}
            <a
              href="https://instagram.com/bogdanbarbulescu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              my work
            </a>
            .
          </p>
          <Link to="/about" className={accentButtonClass}>
            Read my story
          </Link>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubCards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Contact />
    </>
  )
}
