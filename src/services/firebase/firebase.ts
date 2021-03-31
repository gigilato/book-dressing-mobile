import app from 'firebase'
import 'firebase/auth'
import { config } from '@config'

export class Firebase {
  private currentIdToken = ''

  setup = async () => {
    app.initializeApp(config.firebase)
    app.auth().useEmulator('http://localhost:9099')
    this.refreshToken()
  }

  getCurrentIdToken = () => this.currentIdToken
  refreshToken = async () => {
    const { currentUser } = app.auth()
    if (currentUser) this.currentIdToken = await currentUser.getIdToken()
    return this.currentIdToken
  }

  signIn = async (email: string, password: string) => {
    const credentials = await app.auth().signInWithEmailAndPassword(email, password)
    this.currentIdToken = (await credentials.user?.getIdToken()) as string
  }

  signOut = () => app.auth().signOut()
}

export const firebase = new Firebase()
