export interface BuyProductsProps {
  title?: string
  description?: string[]
  products?: {
    title: string
    subtitle?: string
    price?: string
    pricePrefix?: string
    priceInterval?: string
    coverages: string[]
    ctaText: string
    ctaLink: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
  }[]
}

export function BuyProducts({
  title,
  description,
  products,
}: BuyProductsProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="mx-auto mb-8 text-center lg:mb-12">
          {title && (
            <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {description &&
            description.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 w-full text-center font-light text-gray-500 sm:text-xl dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            ))}
        </div>
        <div className="space-y-8 lg:flex sm:gap-6 xl:gap-10 lg:space-y-0">
          {products &&
            products.map((p) => (
              <div key={p.title} className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">{p.title}</h3>

                {p.subtitle && (
                  <p
                    className="mb-8 font-light text-gray-500 sm:text-lg dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: p.subtitle }}
                  ></p>
                )}

                {p.coverages && (
                  <ul role="list" className="space-y-4 text-left flex-grow">
                    {p.coverages.map((coverage) => (
                      <li key={coverage} className="flex items-center space-x-3">
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
                        <span>{coverage}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {p.price && (
                  <div className="flex items-baseline justify-center my-8">
                    {p.pricePrefix && (
                      <span className="mr-2 text-gray-500 dark:text-gray-400">
                        {p.pricePrefix}
                      </span>
                    )}{' '}
                    <span className="mr-2 text-5xl font-extrabold">
                      {p.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{p.priceInterval}
                    </span>
                  </div>
                )}

                {p.ctaText && (
                  <a
                    href={p.ctaLink}
                    className="mb-4 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                  >
                    {p.ctaText}
                  </a>
                )}
                {p.secondaryCtaText && (
                  <a
                    href={p.secondaryCtaLink}
                    className="text-center flex items-center justify-center font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700 hover:underline"
                  >
                    {p.secondaryCtaText}
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
