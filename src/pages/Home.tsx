import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Contact from '../components/Contact'
import { accentButtonClass } from '../components/ui/tokens'

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
    state: { tab: 'learning' as const },
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
  useDocumentTitle(null)
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
      <header
        className="relative bg-cover bg-center text-white min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-20 px-4"
        style={{ backgroundImage: "url('/images/photo.webp')" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/85"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="font-display font-bold text-display-md md:text-display-lg lg:text-5xl tracking-tight mb-4">
            Securing the Digital Landscape
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-normal mb-8 max-w-xl mx-auto">
            Network engineer & security enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${accentButtonClass} px-6 py-3 text-base`}
            >
              View My Work
            </button>
            <Link
              to="/"
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>

      <Section id="about" eyebrow="About" title="Who Am I?">
        <div className="max-w-prose mx-auto text-center space-y-4 text-gray-600 dark:text-gray-300 text-body">
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

      <Section id="projects" eyebrow="Selected work" title="Projects">
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
