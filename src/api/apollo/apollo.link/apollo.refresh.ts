import { ApolloLink, Operation, FetchResult, NextLink } from '@apollo/client/link/core'
import { Observable, Observer } from '@apollo/client/utilities'
import app from 'firebase'
import { firebase } from '@services'

interface OperationQueueEntry {
  operation: Operation
  forward: NextLink
  observer: Observer<FetchResult>
  subscription?: { unsubscribe: () => void }
}

class ApolloCancelError extends Error {
  constructor() {
    super('Operation Cancelled')
  }
}

class RefreshLink extends ApolloLink {
  private queue: OperationQueueEntry[] = []
  private isFetching = false

  private cancelRequests = () => {
    this.queue.forEach(({ observer }) => {
      observer.error && observer.error(new ApolloCancelError())
      observer.complete && observer.complete()
    })
  }

  private sendRequests = () => {
    console.log('send')
    this.queue.forEach(({ forward, operation, observer }) => forward(operation).subscribe(observer))
    this.queue.splice(0, this.queue.length)
  }

  private handleError = () => {
    this.cancelRequests()
    app.auth().signOut()
    this.isFetching = false
  }

  public request(operation: Operation, forward: NextLink) {
    if (firebase.isTokenValid()) return forward(operation)

    return new Observable<FetchResult>((observer: Observer<FetchResult>) => {
      const operationEntry = { operation, forward, observer }
      this.queue.push(operationEntry)

      if (!this.isFetching) {
        this.isFetching = true
        const { currentUser } = app.auth()
        if (!currentUser) this.handleError()
        else
          currentUser
            .getIdToken()
            .then((idToken) => {
              firebase.setCurrentIdToken(idToken)
              firebase.setLastFetchDate(new Date())
              this.sendRequests()
              this.isFetching = false
            })
            .catch(this.handleError)
      }
    })
  }
}

export const refreshLink = new RefreshLink()
