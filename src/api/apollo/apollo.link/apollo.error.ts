import { onError } from '@apollo/client/link/error'
import { auth } from '@services'
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
        if (__DEV__) console.log('GRAPHQL ERROR', message)
        if (logoutErrorOperations.includes(message) && !isSubscription) {
          // Do stuff on logout
          auth.clear()
        } else if (!selfHandlingErrorOperations.includes(operationName) && !isQuery) {
          // TODO: handle error
        }
      })
    }

    if (networkError && !isQuery) {
      // TODO: handle error
    }
  }
)
