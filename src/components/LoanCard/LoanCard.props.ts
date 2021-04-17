import { LoanFragment } from '@api/hooks/generated'

export type LoanCardProps = {
  data: LoanFragment
  onPress?: (book: LoanFragment) => any
  variant: 'request' | 'loan'
}
