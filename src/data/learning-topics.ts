export interface LearningTopicMeta {
  id: string
  title: string
  description: string
  image: string
}

export const learningTopics: LearningTopicMeta[] = [
  {
    id: 'red',
    title: 'Red Team',
    description: 'Comprehensive guides and tools for offensive security and ethical hacking.',
    image: '/images/red.jpg',
  },
  {
    id: 'blue',
    title: 'Blue Team',
    description: 'Defensive security strategies, monitoring, analysis, and incident response tools.',
    image: '/images/blue.jpg',
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Guides for mastering network infrastructure, protocols, and advanced networking concepts.',
    image: '/images/networking.png',
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Resources on CI/CD pipelines, containerization, and automation practices.',
    image: '/images/devops.jpg',
  },
  {
    id: 'web-app-sec',
    title: 'Web App & API Security',
    description: 'Learn to create modern and secure web applications and APIs.',
    image: '/images/api.png',
  },
  {
    id: 'osint',
    title: 'OSINT',
    description: 'Tools and techniques for open-source intelligence gathering and analysis.',
    image: '/images/osint.jpeg',
  },
  {
    id: 'cloud',
    title: 'Cloud Security',
    description: 'Guides on securing cloud platforms like AWS, Azure, and Google Cloud.',
    image: '/images/cloud.jpeg',
  },
  {
    id: 'iot',
    title: 'IoT & Hardware Hacking',
    description: 'Resources on analyzing and exploiting hardware and IoT devices.',
    image: '/images/iot.jpeg',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Exploring AI in threat detection, analysis, and security automation.',
    image: '/images/ai.jpeg',
  },
]
