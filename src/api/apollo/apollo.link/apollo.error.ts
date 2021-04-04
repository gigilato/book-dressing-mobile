import { showMessage } from 'react-native-flash-message'
import app from 'firebase'
import { onError } from '@apollo/client/link/error'
import { Logger } from '@services'
import { getOperationType } from '@api/apollo/apollo.utils'

const logoutErrorOperations = ['Unauthorized']
const expiredErrorOperations = ['Expired']
const selfHandlingErrorOperations = ['']

export const errorLink = onError(
  ({
    graphQLErrors,
    networkError,
    operation: {
      query: { definitions },
      operationName,
    },
  }) => {
    const operationType = getOperationType(definitions)
    const isQuery = operationType === 'query'

    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        Logger.log(message, 'error')
        if (logoutErrorOperations.includes(message)) {
          app.auth().signOut()
        } else if (expiredErrorOperations.includes(message)) {
          // refresh token
        } else if (!selfHandlingErrorOperations.includes(operationName) && !isQuery) {
          showMessage({ message: 'error', type: 'danger' })
        }
      })
    }

    if (networkError && !isQuery) {
      Logger.log('network', 'error')
      showMessage({ message: 'network', type: 'danger' })
    }
  }
)
