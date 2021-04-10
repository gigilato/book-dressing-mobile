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

export const loanConnectionFragment = gql`
  fragment LoanConnectionFragment on LoanConnection {
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
  ${loanFragment}
`
