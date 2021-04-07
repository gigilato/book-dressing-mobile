import { BookFragment } from '@api/hooks/generated'

export type BookCardProps = {
  data: BookFragment
  onPress: (book: BookFragment) => any
  ratioWidth?: number
}
