import app from 'firebase'
import 'firebase/auth'
import { config } from '@config'
import { Nullable } from '@utils/types'

app.initializeApp(config.firebase)

export class Firebase {
  private currentIdToken: Nullable<string> = null

  setCurrentIdToken = (currentIdToken: Nullable<string>) => (this.currentIdToken = currentIdToken)
  getCurrentIdToken = () => this.currentIdToken
  isAuthenticated = () => !!this.currentIdToken
  refreshToken = async () => {
    const { currentUser } = app.auth()
    if (currentUser) this.currentIdToken = await currentUser.getIdToken()
    return this.currentIdToken
  }
}

export const firebase = new Firebase()
