// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const baseUrl = import.meta.env.BASE_URL

export const getResource = (path:string) => {
    return `${baseUrl}/${path}`
}

export const getImageResource = (path:string) => {
    return `${baseUrl}/images/${path}`
}

export const getImageSetResource = (imagesSet: [string, number][]) => {
    const srcset = imagesSet.map(([path, size]) => `${getImageResource(path)} ${size}w`)
    return srcset.join(', ')
}