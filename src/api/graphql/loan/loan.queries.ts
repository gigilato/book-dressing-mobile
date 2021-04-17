import { gql } from '@apollo/client'
import { loanFragment, loanConnectionFragment } from './loan.fragments'

export const loansQuery = gql`
  query loans($where: LoansWhereInput!, $limit: Int, $offset: Int) {
    loans(where: $where, limit: $limit, offset: $offset) {
      ...LoanConnectionFragment
    }
  }
  ${loanConnectionFragment}
`

export const requestLoanMutation = gql`
  mutation requestLoan($bookUuid: ID!) {
    requestLoan(bookUuid: $bookUuid) {
      ...LoanFragment
    }
  }
  ${loanFragment}
`

export const acceptLoanMutation = gql`
  mutation acceptLoan($loanUuid: ID!) {
    acceptLoan(loanUuid: $loanUuid) {
      ...LoanFragment
    }
  }
  ${loanFragment}
`

export const rejectLoanMutation = gql`
  mutation rejectLoan($loanUuid: ID!) {
    rejectLoan(loanUuid: $loanUuid) {
      ...LoanFragment
    }
  }
  ${loanFragment}
`

export const cancelLoanMutation = gql`
  mutation cancelLoan($loanUuid: ID!) {
    cancelLoan(loanUuid: $loanUuid) {
      ...LoanFragment
    }
  }
`

export const finishLoanMutation = gql`
  mutation finishLoan($loanUuid: ID!) {
    rejectLoan(loanUuid: $loanUuid) {
      ...LoanFragment
    }
  }
  ${loanFragment}
`
