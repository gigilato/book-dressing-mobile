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
  mutation updateProfile($username: String, $firstname: String, $lastname: String) {
    updateProfile(username: $username, firstname: $firstname, lastname: $lastname) {
      ...UserFragment
    }
  }
  ${userFragment}
`
