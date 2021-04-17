import app from 'firebase'
import { onError } from '@apollo/client/link/error'
import { Logger, notifier } from '@services'
import { getOperationType } from '@api/apollo/apollo.utils'

const logoutErrorOperations = ['Unauthorized', 'Expired']
const selfHandlingErrorOperations = ['updateProfile']

export const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  const {
    query: { definitions },
    operationName,
  } = operation
  const operationType = getOperationType(definitions)
  const isQuery = operationType === 'query'

  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      Logger.log(message, 'error')
      if (logoutErrorOperations.includes(message)) app.auth().signOut()
      else if (!selfHandlingErrorOperations.includes(operationName) && !isQuery)
        notifier.showNotification({ txTitle: 'errors:errorTitle', type: 'error' })
    })
  }

  if (networkError && !isQuery) {
    Logger.log('network', 'error')
    notifier.showNotification({
      txTitle: 'errors:serverErrorTitle',
      txDescription: 'errors:serverErrorContent',
      type: 'error',
    })
  }
})
