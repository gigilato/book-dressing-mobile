import { config } from '@config'

const {
  googleBooks: { uri, endpoint, params },
} = config

export type GoogleBooksItem = {
  id: string
  volumeInfo: {
    title?: string
    authors?: string[]
    publisher?: string
    description?: string
    pageCount?: number
    imageLinks?: {
      smallThumbnail?: string
      thumbnail?: string
      small?: string
      medium?: string
    }
    categories?: string[]
  }
}
export type GoogleBooksData = {
  kind: string
  totalItems: number
  items: GoogleBooksItem[]
}

export const getQueryUrl = (
  search: string,
  limit = params.limit.default,
  offset = params.offset.default
) => {
  return `${uri}${endpoint}?${params.query.key}=${encodeURIComponent(search)}&${
    params.limit.key
  }=${limit}&${params.offset.key}=${offset}`
}

export const parseGoogleBooksItems: (items: GoogleBooksItem[]) => any[] = (items) =>
  items.map(
    ({
      id,
      volumeInfo: { title, authors, publisher, description, pageCount, imageLinks, categories },
    }) => ({
      __typename: 'book',
      id,
      title: title ?? '',
      description: description ?? '',
      pageCount: pageCount ?? 0,
      publisher: publisher ?? '',
      authors: authors ?? [],
      categories: categories ?? [],
      createdAt: new Date(),
      thumbnailUrl:
        imageLinks?.medium ??
        imageLinks?.small ??
        imageLinks?.thumbnail ??
        imageLinks?.smallThumbnail ??
        '',
    })
  )
