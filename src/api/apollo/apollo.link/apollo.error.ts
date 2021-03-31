import { onError } from '@apollo/client/link/error'
import { showMessage } from 'react-native-flash-message'
import { Logger, firebase } from '@services'
import { getOperationType } from '@api/apollo/apollo.utils'

const logoutErrorOperations = ['Unauthorized']
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
    const isSubscription = operationType === 'subscription'

    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        Logger.log(message, 'error')
        if (logoutErrorOperations.includes(message) && !isSubscription) {
          firebase.signOut()
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
