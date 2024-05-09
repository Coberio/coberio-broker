export interface CoveragesProps {
  title: string
  description?: string[]
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  coverages: { title: string; subtitle: string; imageUrl: string }[]
  others?: { title: string; subtitle: string; imageUrl: string }[]
}

export function Coverages({
  title,
  description,
  coverages,
  others,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: CoveragesProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8 self-start">
          <h2 className="mt-3 mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            {title}
          </h2>
          {description &&
            description.map((paragraph) => (
              <p
                className="font-light text-gray-500 sm:text-xl dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            ))}
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            {ctaText && (
              <div>
                <a
                  href={ctaLink}
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white bg-purple-600 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300  rounded-lg lg:px-5  lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  {ctaText}
                </a>
              </div>
            )}
            {secondaryCtaText && (
              <div>
                <a
                  href={secondaryCtaLink}
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  {secondaryCtaText}
                </a>
              </div>
            )}
          </div>
        </div>
        {coverages && (
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 self-start">
            {coverages.map((coverage) => (
              <div>
                {coverage.imageUrl && (
                  <img
                    className="max-w-[80px] mb-4 rounded-lg"
                    src={coverage.imageUrl}
                    alt={coverage.title}
                  />
                )}
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  {coverage.title}
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {coverage.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
