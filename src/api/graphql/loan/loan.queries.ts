import { gql } from '@apollo/client'
import { loanFragment } from './loan.fragments'

export const loansQuery = gql`
  query loans($limit: Int, $offset: Int) {
    loans(limit: $limit, offset: $offset) {
      pageInfos {
        hasNextPage
      }
      aggregate {
        count
      }
      edges {
        node {
          ...LoanFragment
        }
      }
    }
  }
  ${loanFragment}
`

export const requestsQuery = gql`
  query requests($limit: Int, $offset: Int) {
    requests(limit: $limit, offset: $offset) {
      pageInfos {
        hasNextPage
      }
      aggregate {
        count
      }
      edges {
        node {
          ...LoanFragment
        }
      }
    }
  }
  ${loanFragment}
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

export const finishLoanMutation = gql`
  mutation finishLoan($loanUuid: ID!) {
    rejectLoan(loanUuid: $loanUuid) {
      ...LoanFragment
    }
  }
  ${loanFragment}
`