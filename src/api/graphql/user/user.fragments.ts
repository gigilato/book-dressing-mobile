import { gql } from '@apollo/client'

export const userFragment = gql`
  fragment UserFragment on User {
    uuid
    email
    username
    firstname
    lastname
    pictureUrl
    bookCount
    createdAt
    updatedAt
  }
`
