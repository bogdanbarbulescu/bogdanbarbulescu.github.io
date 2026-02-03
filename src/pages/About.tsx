import { useState, useEffect } from 'react'
import Section from '../components/ui/Section'
import Contact from '../components/Contact'

const natureImages = [
  '/images/nature1.webp',
  '/images/nature2.webp',
  '/images/nature3.webp',
  '/images/nature4.jpg',
  '/images/nature5.jpg',
  '/images/nature6.webp',
  '/images/nature7.webp',
  '/images/nature8.webp',
  '/images/nature9.webp',
  '/images/nature10.webp',
]

const skills = [
  {
    title: 'Networking',
    items: [
      'Network Configuration (Routers/Switches)',
      'TCP/IP, DNS, DHCP, VPNs',
      'Network Monitoring & Troubleshooting',
      'Firewall Management',
    ],
  },
  {
    title: 'Cybersecurity',
    items: [
      'Penetration Testing (Web/Network)',
      'Vulnerability Assessment',
      'Security Tools (Nmap, Wireshark, Metasploit)',
      'Security Information and Event Management (SIEM)',
    ],
  },
  {
    title: 'Web Development',
    items: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'Bootstrap 5',
      'Frontend Framework Basics',
      'API Integration (REST)',
    ],
  },
]

const certifications = [
  {
    image: '/images/badge2.png',
    alt: 'CompTIA Security+ Certificate',
    title: 'CompTIA Security+',
    description: 'Validates baseline skills necessary to perform core security functions.',
  },
  {
    image: '/images/badge1.png',
    alt: 'Microsoft Azure Fundamentals Certificate',
    title: 'Azure Fundamentals (AZ-900)',
    description: 'Foundational knowledge of cloud concepts and core Azure services.',
  },
  {
    image: '/images/badge3.png',
    alt: 'INE Certified Cloud Associate',
    title: 'INE Certified Cloud Associate',
    description: 'Understanding of core concepts across AWS, Azure, and GCP.',
  },
]

function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % natureImages.length), 4000)
    return () => clearInterval(t)
  }, [])

  const goPrev = () => setIndex((i) => (i - 1 + natureImages.length) % natureImages.length)
  const goNext = () => setIndex((i) => (i + 1) % natureImages.length)

  return (
    <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-lg">
      <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-600">
        {natureImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Nature ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              i === index ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {natureImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? 'bg-accent' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <header
        className="relative bg-cover bg-center text-white min-h-[40vh] flex items-center justify-center py-12 px-4"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
          <p className="text-lg text-gray-200">A glimpse into my skills, experiences, and passions.</p>
        </div>
      </header>

      <Section id="about" title="Introduction">
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Hi, I'm Bogdan, a network engineer from Romania. With over 8 years of experience in both
          academia and the industry, I've honed a strong understanding of network security, ethical
          hacking, and front-end development. My portfolio reflects my technical expertise, the
          challenges I've overcome, and my passion for creating secure and scalable systems.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {skills.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
              <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="hobbies" title="Hobbies & Photography">
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
          When I'm not immersed in technology, I enjoy hiking, practicing photography, and
          exploring the beauty of nature. Capturing landscapes and natural scenes through my lens
          is a passion. Check out{' '}
          <a
            href="https://instagram.com/bogdanbarbulescu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline"
          >
            my photography work
          </a>
          .
        </p>
        <Carousel />
      </Section>

      <Section id="certifications" title="Certifications & Credentials">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {certifications.map(({ image, alt, title, description }) => (
            <div key={title} className="text-center max-w-[200px]">
              <img src={image} alt={alt} className="w-full max-w-[120px] h-auto mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Contact />
    </>
  )
}
