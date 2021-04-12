import app from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import { config } from '@config'
import { Nullable } from '@utils/types'
import { generateUuid } from '@utils/uuid'

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

  uploadImageAsync = async (uri: string, type: 'book' | 'user') => {
    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', uri, true)
      xhr.send(null)
    })

    const ref = app.storage().ref().child(`${type}/${generateUuid()}`)
    const snapshot = await ref.put(blob)

    return snapshot.ref.getDownloadURL()
  }
}

export const firebase = new Firebase()
