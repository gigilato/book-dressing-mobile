import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import { GraphQLClient, gql } from 'graphql-request'
import { Data, Variables } from './processSignUp.types'

admin.initializeApp(functions.config().firebase)

const endpoint = 'https://book-dressing.hasura.app/v1/graphql'
const mutation = gql`
  mutation insertUser($id: String, $email: String, $username: String) {
    insert_user(objects: { id: $id, email: $email, username: $username }) {
      returning {
        description
        email
        id
        pictureUrl
        username
      }
    }
  }
`

const client = new GraphQLClient(endpoint)
client.setHeader("x-hasura-admin-secret", "b4D(%HJ)cjx@s5/5")

export const processSignUp = functions.auth.user().onCreate(async user => {
  const data = await client.request<Data, Variables>(mutation, {
    email: user.email as string,
    username: `user${user.uid}`,
    id: user.uid,
  })

  const [hasuraUser] = data.insert_user.returning

  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": user.uid,
    },
    hasuraUser,
  }

  try {
    await admin
      .auth()
      .setCustomUserClaims(user.uid, customClaims)
    const metadataRef = admin.database().ref("metadata/" + user.uid)
    return metadataRef.set({ refreshTime: new Date().getTime() })
  } catch (error) {
    console.log(error)
  }
})
