import { gql } from '@apollo/client'

export const userFragment = gql`
  fragment user on user {
    id
    email
    username
    description
    pictureUrl
    createdAt
  }
`
