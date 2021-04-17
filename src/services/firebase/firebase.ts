import app from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import { config } from '@config'
import { Nullable } from '@utils/types'
import differenceInMinutes from 'date-fns/differenceInMinutes'

app.initializeApp(config.firebase)

export class Firebase {
  private currentIdToken: Nullable<string> = null
  private lastFetchDate: Nullable<Date> = null

  setCurrentIdToken = (currentIdToken: Nullable<string>) => (this.currentIdToken = currentIdToken)
  getCurrentIdToken = () => this.currentIdToken

  setLastFetchDate = (date: Nullable<Date>) => (this.lastFetchDate = date)
  getLastFetchDate = () => this.lastFetchDate
  isTokenValid = () =>
    this.lastFetchDate !== null && differenceInMinutes(new Date(), this.lastFetchDate) < 50

  uploadImageAsync = async (uri: string, type: 'book' | 'user', fileName: string) => {
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

    const ref = app.storage().ref().child(`${type}/${fileName}`)
    const snapshot = await ref.put(blob)

    return snapshot.ref.getDownloadURL()
  }
}

export const firebase = new Firebase()
