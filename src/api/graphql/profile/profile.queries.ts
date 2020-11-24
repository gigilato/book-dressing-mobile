import { gql } from '@apollo/client'
import { userFragment } from '../user'

export const meQuery = gql`
  query me($id: String!) {
    user_by_pk(id: $id) {
      ...user
    }
  }
  ${userFragment}
`
