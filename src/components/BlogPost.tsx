export interface BuyProductsProps {
  title?: string
  subtitle?: string
  posts: {
    title: string
    description?: string
    pubDate?: Date,
    picture?: string,
    slug: string
  }[]
}

export function BlogPost({
  title, 
  subtitle,
  posts
}: BuyProductsProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:pb-24 lg:py-24">
      <div className="mx-auto mb-8 text-center lg:mb-12 flex flex-col gap-4 items-center">
          {title && (
            <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle &&
            <p
                  
                className="mb-5 w-full max-w-[600px] text-center font-light text-gray-500 sm:text-xl dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              ></p>
            }
        </div>
        <div className="space-y-8 grid grid-cols-2 gap-8 lg:grid-cols-4 justify-items-center sm:gap-6 xl:gap-10 lg:space-y-0">
          {posts &&
            posts.map((p) => (
             

              <div key={p.title} className="flex flex-col max-w-lg mx-auto text-gray-900  rounded-lg  dark:border-gray-600 dark:bg-gray-800 dark:text-white bg-white shadow-md border border-gray-200">

                {p.picture && <a href={p.slug}>
                            <img className="masked-image rounded-t-lg min-w-[275px] max-w-[275px] min-h-[180px] max-h-[180px]" src={p.picture} alt="" />
                        </a>}

                <div className="p-5 grow flex flex-col">

                    <a href={p.slug}>
                        <h3 className="mb-4 text-gray-900 font-bold text-2xl tracking-tight">{p.title}</h3>
                    </a>
                    
                    {p.pubDate && <time className="mb-2 text-gray-500 text-sm" dateTime={p.pubDate.toISOString()}>
                      {
                        p.pubDate.toLocaleDateString('es', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      }
                    </time>}

                    {p.description && (
                      <p
                        className="mb-8 font-light text-gray-500 sm:text-lg dark:text-gray-400 grow"
                        dangerouslySetInnerHTML={{ __html: p.description }}
                      ></p>
                    )}
                    <a
                      href={p.slug}
                      className="mb-4 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                    >
                      Leer más
                    </a>
                
              </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
