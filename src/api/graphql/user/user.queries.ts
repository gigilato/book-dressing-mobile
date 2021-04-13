import { gql } from '@apollo/client'
import { userFragment } from './user.fragments'

export const meQuery = gql`
  query me {
    me {
      ...UserFragment
    }
  }
  ${userFragment}
`

export const updateProfileMutation = gql`
  mutation updateProfile(
    $username: String
    $name: String
    $description: String
    $pictureUrl: String
  ) {
    updateProfile(
      username: $username
      name: $name
      description: $description
      pictureUrl: $pictureUrl
    ) {
      ...UserFragment
    }
  }
  ${userFragment}
`
