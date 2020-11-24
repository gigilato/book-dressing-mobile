import app from 'firebase'
import 'firebase/auth'
import { config } from '@config'

export class Firebase {
  setup = () => {
    app.initializeApp(config.firebase)
  }

  signIn = async (email: string, password: string) => {
    try {
      const user = await app.auth().signInWithEmailAndPassword(email, password)
      return user
    } catch (error) {
      // TODO: handle dropdown
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      return null
    }
  }

  signOut = async () => {
    try {
      await app.auth().signOut()
    } catch (error) {
      // TODO: handle dropdown
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
  }
}

export const firebase = new Firebase()
