import { Link } from 'react-router-dom'

export interface CardProjectProps {
  variant: 'project'
  title: string
  description: string
  image: string
  href: string
  technologies?: string
  category?: string
  external?: boolean
}

export interface CardBlogProps {
  variant: 'blog'
  title: string
  description: string
  tags: string[]
  href: string
}

export interface CardLearningProps {
  variant: 'learning'
  title: string
  description: string
  image: string
  href: string
}

export type CardProps = CardProjectProps | CardBlogProps | CardLearningProps

const accentButtonClass =
  'inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-400 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-gray-900'

export default function Card(props: CardProps) {
  if (props.variant === 'project') {
    const { title, description, image, href, technologies, category, external } = props
    const content = (
      <>
        <img
          src={image}
          alt=""
          className="w-full h-40 object-cover rounded-t-lg bg-gray-200 dark:bg-gray-700"
          loading="lazy"
        />
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-3">{description}</p>
          {technologies && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <strong>Technologies:</strong> {technologies}
            </p>
          )}
          {category && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              <strong>Category:</strong> {category}
            </p>
          )}
          <span className={accentButtonClass}>
            {external ? 'View Project' : 'Read more'}
          </span>
        </div>
      </>
    )
    const wrapperClass =
      'block h-full rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700'
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
        {content}
      </a>
    ) : (
      <Link to={href} className={wrapperClass}>
        {content}
      </Link>
    )
  }

  if (props.variant === 'blog') {
    const { title, description, tags, href } = props
    return (
      <Link
        to={href}
        className="block h-full rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 p-4 flex flex-col"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-3">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <span className={accentButtonClass}>Read</span>
      </Link>
    )
  }

  // learning
  const { title, description, image, href } = props
  return (
    <Link
      to={href}
      className="block h-full rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
    >
      <img
        src={image}
        alt=""
        className="w-full h-40 object-cover bg-gray-200 dark:bg-gray-700"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-3">{description}</p>
        <span className={accentButtonClass}>Explore</span>
      </div>
    </Link>
  )
}
