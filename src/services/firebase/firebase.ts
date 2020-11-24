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
      console.log(user)
      return user
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      return null
    }
  }
}

export const firebase = new Firebase()
