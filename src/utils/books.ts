import { theme } from '@theme'

const {
  sizes: { BookCoverHeight, BookCoverWidth },
} = theme

export const getBookCoverHeight = (ratioWidth: number) =>
  (ratioWidth * BookCoverHeight) / BookCoverWidth
