import { gql } from '@apollo/client'

export const loanFragment = gql`
  fragment LoanFragment on Loan {
    uuid
    status
    createdAt
    updatedAt
    finishedAt
    user {
      uuid
      username
    }
    book {
      uuid
      title
    }
  }
`
