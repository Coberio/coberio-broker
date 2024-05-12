import { useState } from "react";

export interface FaqProps {
  title?: string
  questions?: {
    title: string
    description: string[]
  }[]
}

export function Faq({ title, questions }: FaqProps) {
  const [isSelected, setIsSelected] = useState('')

  const handleOnClick =  (id:string) => () => {
    if(id === isSelected){
      setIsSelected('')
      return;
    }

    setIsSelected(id)
  }
    
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-12 mx-auto lg:pb-24 lg:px-6 ">
        {title && (
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            {title}
          </h2>
        )}

        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
          >
            {questions &&
              questions.map((q) => (
                <div key={q.title}>
                  <h3 id={q.title}>
                    <button
                      onClick={handleOnClick(q.title)}
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                      aria-expanded="true"
                      aria-controls={q.title}
                    >
                      <span>{q.title}</span>
                      {isSelected !== q.title && <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                      {isSelected === q.title && <svg
                        className="w-6 h-6 rotate-180 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>}
                    </button>
                  </h3>
                  <div className={isSelected === q.title ? 'block' : 'hidden'} id={q.title} aria-labelledby={q.title}>
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      {q.description.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mb-2 text-gray-500 dark:text-gray-400"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        ></p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>  
    </section>
  )
}
