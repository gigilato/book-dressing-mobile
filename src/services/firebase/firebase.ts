import app from 'firebase'
import 'firebase/auth'
import { config } from '@config'

export class Firebase {
  setup = () => {
    app.initializeApp(config.firebase)
  }

  signIn = (email: string, password: string) =>
    app.auth().signInWithEmailAndPassword(email, password)

  signOut = () => app.auth().signOut()
}

export const firebase = new Firebase()
