import { BookFragment, LoanFragment } from '@api/hooks/generated'

export type LoanCardProps = {
  data: LoanFragment
  onPressBook?: (book: BookFragment) => any
  variant: 'request' | 'loan'
}
