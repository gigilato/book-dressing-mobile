import { Book } from '@api/hooks/generated'

export type BookCardProps = {
  data: Book
  onPress: (book: Book) => any
}
