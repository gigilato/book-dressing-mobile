import { gql } from '@apollo/client'

export const bookFragment = gql`
  fragment BookFragment on Book {
    uuid
    title
    author
    description
    pictureUrl
    status
    owner {
      uuid
      username
    }
    createdAt
    updatedAt
  }
`
