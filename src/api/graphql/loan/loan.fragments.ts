import { gql } from '@apollo/client'
import { bookFragment } from '@api/graphql/book'

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
      pictureUrl
    }
    book {
      ...BookFragment
    }
  }
  ${bookFragment}
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
