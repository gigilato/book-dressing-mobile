import { gql } from '@apollo/client'

export const bookFragment = gql`
  fragment BookFragment on Book {
    uuid
    title
    author
    description
    pictureUrl
    status
    createdAt
    updatedAt
  }
`
