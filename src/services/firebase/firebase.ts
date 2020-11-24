import app from 'firebase'
import 'firebase/auth'
import { config } from '@config'

export class Firebase {
  setup = () => {
    app.initializeApp(config.firebase)
  }
}

export const firebase = new Firebase()
