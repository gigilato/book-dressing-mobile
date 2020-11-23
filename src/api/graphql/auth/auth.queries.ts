import { gql } from '@apollo/client'

export const logInMutation = gql`
  mutation logIn($username: String!, $password: String!) {
    logIn(input: { username: $username, password: $password }) {
      viewer {
        sessionToken
        user {
          id
          username
        }
      }
    }
  }
`
