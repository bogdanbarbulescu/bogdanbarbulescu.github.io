import { Link } from 'react-router-dom'
import { accentButtonClass } from './tokens'

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
  state?: { tab?: string }
}

export type CardProps = CardProjectProps | CardBlogProps | CardLearningProps

const cardWrapperClass =
  'block h-full rounded-lg overflow-hidden bg-white dark:bg-surface-card-dark shadow-md hover:shadow-xl border border-gray-200 dark:border-white/10 transition-all duration-300 ease-out hover:-translate-y-2'

const cardImageWrapper = 'relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700'

export default function Card(props: CardProps) {
  if (props.variant === 'project') {
    const { title, description, image, href, technologies, category, external } = props
    const content = (
      <>
        <div className={cardImageWrapper}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-card-title text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-small flex-1 mb-3">{description}</p>
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
          <span className={`${accentButtonClass} w-fit`}>
            {external ? 'View Project' : 'Read more'}
          </span>
        </div>
      </>
    )
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardWrapperClass} group`}
      >
        {content}
      </a>
    ) : (
      <Link to={href} className={`${cardWrapperClass} group`}>
        {content}
      </Link>
    )
  }

  if (props.variant === 'blog') {
    const { title, description, tags, href } = props
    return (
      <Link
        to={href}
        className={`${cardWrapperClass} p-5 flex flex-col group`}
      >
        <h3 className="font-display font-semibold text-card-title text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-small flex-1 mb-3">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-accent/15 dark:bg-accent/20 text-gray-700 dark:text-gray-300 border border-accent/20 dark:border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <span className={`${accentButtonClass} w-fit`}>Read</span>
      </Link>
    )
  }

  // learning
  const { title, description, image, href, state } = props
  return (
    <Link to={href} state={state} className={`${cardWrapperClass} group`}>
      <div className={cardImageWrapper}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-card-title text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-small flex-1 mb-3">{description}</p>
        <span className={`${accentButtonClass} w-fit`}>Explore</span>
      </div>
    </Link>
  )
}
