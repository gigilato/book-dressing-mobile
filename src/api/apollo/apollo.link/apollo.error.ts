import { showMessage } from 'react-native-flash-message'
import app from 'firebase'
import { onError } from '@apollo/client/link/error'
import { Logger } from '@services'
import { getOperationType } from '@api/apollo/apollo.utils'
import { fromPromise } from '@apollo/client'
import { firebase } from '@services'

const logoutErrorOperations = ['Unauthorized']
const expiredErrorOperations = ['Expired']
const selfHandlingErrorOperations = ['']

export const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  const {
    query: { definitions },
    operationName,
  } = operation
  const operationType = getOperationType(definitions)
  const isQuery = operationType === 'query'

  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      Logger.log(message, 'error')
      if (logoutErrorOperations.includes(message)) {
        app.auth().signOut()
      } else if (expiredErrorOperations.includes(message)) {
        const { currentUser } = app.auth()
        if (currentUser === null) return app.auth().signOut()
        return fromPromise(
          currentUser
            .getIdToken()
            .then((idToken) => {
              firebase.setCurrentIdToken(idToken)
              return idToken
            })
            .catch(() => app.auth().signOut())
        )
          .filter((value) => Boolean(value))
          .flatMap(() => forward(operation))
      } else if (!selfHandlingErrorOperations.includes(operationName) && !isQuery) {
        showMessage({ message: 'error', type: 'danger' })
      }
      return
    })
  }

  if (networkError && !isQuery) {
    Logger.log('network', 'error')
    showMessage({ message: 'network', type: 'danger' })
  }
})
