import { gql } from '@apollo/client'
import { userFragment } from '@api/graphql/user'

export const bookFragment = gql`
  fragment BookFragment on Book {
    uuid
    title
    author
    description
    pictureUrl
    status
    owner {
      ...UserFragment
    }
    createdAt
    updatedAt
  }
  ${userFragment}
`
