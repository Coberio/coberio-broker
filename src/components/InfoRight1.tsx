export interface InfoRightProps {
  title: string
  description?: string[]
  listItems?: string[]
  ctaText?: string
  ctaLink?: string
  ctaLinkText?: string
  ctaImageLink?: string
  ctaImageAlt?: string

  secondaryCtaText?: string
  secondaryCtaLink?: string
  secondaryCtaLinkText?: string
  secondaryCtaImageLink?: string
  secondaryCtaImageAlt?: string
}

export function InfoRight({
  title,
  description,
  listItems,

  ctaText,
  ctaLink,
  ctaLinkText,
  ctaImageLink,
  ctaImageAlt,

  secondaryCtaText,
  secondaryCtaLink,
  secondaryCtaLinkText,
  secondaryCtaImageLink,
  secondaryCtaImageAlt,
}: InfoRightProps) {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div className="hidden w-full mb-0 lg:flex flex-col self-start">
        {ctaImageLink && (
          <img
            className="w-full mb-4 rounded-lg"
            src={ctaImageLink}
            alt={ctaImageAlt}
          />
        )}
      </div>
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        {title && (
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {description &&
          description.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-8 font-light lg:text-lg"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></p>
          ))}
        {listItems && (
          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {listItems.map((audience) => (
              <li key={audience} className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {audience}
                </span>
              </li>
            ))}
          </ul>
        )}
        {ctaText && (
          <a
            href={encodeURI(`${ctaLink}${ctaLinkText}`)}
            className="mb-4 inline-block mr-2 text-white text-center bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            {ctaText}
          </a>
        )}
        {secondaryCtaText && (
          <a
            href={encodeURI(`${secondaryCtaLink}${secondaryCtaLinkText}`)}
            className="flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700 hover:underline"
          >
            {secondaryCtaText}
          </a>
        )}
      </div>
    </div>
  )
}
