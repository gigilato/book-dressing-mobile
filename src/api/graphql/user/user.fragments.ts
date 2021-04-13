import { gql } from '@apollo/client'

export const userFragment = gql`
  fragment UserFragment on User {
    uuid
    email
    username
    name
    description
    pictureUrl
    bookCount
    createdAt
    updatedAt
  }
`
