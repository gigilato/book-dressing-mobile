import { BookFragment } from '@api/hooks/generated'

export type BookCoverProps = {
  data: BookFragment
  onPress?: (book: BookFragment) => any
  ratioWidth?: number
}

export type BookCoverSkeletonProps = Pick<BookCoverProps, 'ratioWidth'>
