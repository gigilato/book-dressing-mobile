import { QueryFunctionOptions } from '@apollo/client'
import { LoanFragment, LoansQuery, LoansQueryVariables } from '@api/hooks/generated'
import { AsyncFlatListProps } from '@components/ui'
import { LoanCardProps } from '@components/LoanCard'

export interface LoanListProps
  extends Omit<AsyncFlatListProps<any, any>, 'renderItem' | 'query' | 'data' | 'pageSize'>,
    Pick<LoanCardProps, 'variant'> {
  queryOptions?: QueryFunctionOptions<LoansQuery, LoansQueryVariables>
  onPressLoan: (loan: LoanFragment) => any
}
