export interface HeroProps {
  title: string
  description: string[]
  ctaText: string
  ctaLink: string
  ctaLinkText?: string
  ctaImageLink: string
  ctaVideoLink?: string
  ctaImageStyle?: {}
  ctaImageAlt: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  secondaryCtaLinkText?: string
}

export function Hero({
  title,
  description,
  ctaText,
  ctaLink,
  ctaLinkText,
  ctaImageLink,
  ctaImageAlt,
  ctaVideoLink,
  ctaImageStyle,
  secondaryCtaText,
  secondaryCtaLink,
  secondaryCtaLinkText,
}: HeroProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          {description.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></p>
          ))}
          {ctaText && <div className="mt-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href={encodeURI(`${ctaLink}${ctaLinkText}`)}
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white bg-purple-600 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300  rounded-lg lg:px-5  lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
              {ctaText}
            </a>
            {secondaryCtaText && (
              <a
                href={encodeURI(`${secondaryCtaLink}${secondaryCtaLinkText}`)}
                className="flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700 hover:underline"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>}
        </div>
        {ctaImageLink && (
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {ctaVideoLink && <video loop={true} muted={true} autoPlay className="object-cover w-full h-full max-w-full" src={ctaVideoLink}></video>}
            {ctaImageLink && <img style={ctaImageStyle} src={ctaImageLink} alt={ctaImageAlt} title={title} />}
          </div>
        )}
      </div>
    </section>
  )
}
