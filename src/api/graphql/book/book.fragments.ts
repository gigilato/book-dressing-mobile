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
    available
    hasLiked
    likeCount
    currentRequest {
      uuid
      status
    }
    createdAt
    updatedAt
  }
  ${userFragment}
`

export const bookConnectionFragment = gql`
  fragment BookConnectionFragment on BookConnection {
    pageInfos {
      hasNextPage
    }
    aggregate {
      count
    }
    edges {
      node {
        ...BookFragment
      }
    }
  }
  ${bookFragment}
`
