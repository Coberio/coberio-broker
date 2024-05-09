export interface WhyUsProps {
  title?: string
  subtitle?: string[]
  list?: string[]
}

export function WhyUs({ title, subtitle, list }: WhyUsProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto">
          <div className="text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
            {subtitle &&
              subtitle.map((paragraph) => (
                <p
                  className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
          </div>
          {list && (
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {list.map((reason) => (
                <li className="flex space-x-3 items-start justify-start">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium leading-tight text-gray-900 dark:text-white">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
