export interface RecommendedInsurancesProps {
  title?: string
  recommendations: {
    href: string
    title: string
  }[]
}

export function RecommendedInsurances({
  title,
  recommendations,
}: RecommendedInsurancesProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-10 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            {title && (
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {recommendations.map((r) => (
            <a
              href={r.href}
              className="flex items-center lg:justify-center text-xl font-bold text-nowrap"
            >
              {r.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
