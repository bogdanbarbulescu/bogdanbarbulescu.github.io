/**
 * Page-level meta descriptions for SEO. Used by document title and meta tags.
 */
export const PAGE_META: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Portfolio | Bogdan Barbulescu',
    description:
      'Bogdan Bărbulescu — Network engineer and security enthusiast. Portfolio showcasing projects, learning resources, and blog on networking, cybersecurity, and web development.',
  },
  about: {
    title: 'About | Portfolio | Bogdan Barbulescu',
    description:
      'About Bogdan Bărbulescu: skills in networking, cybersecurity, and web development; certifications; and interests beyond tech.',
  },
  projects: {
    title: 'Projects | Portfolio | Bogdan Barbulescu',
    description:
      'Web projects and learning resources: web apps, tools, and guides on red team, blue team, networking, DevOps, and more.',
  },
  blog: {
    title: 'Blog | Portfolio | Bogdan Barbulescu',
    description:
      'Articles on security certifications, CTF writeups, threat intelligence, purple teaming, and defensive security.',
  },
}
