import { ApolloLink } from '@apollo/client'
import { getOperationType } from '@api/apollo/apollo.utils'

export const loggerLink = new ApolloLink((operation, forward) => {
  const operationType = getOperationType(operation.query.definitions)
  const value = {
    type: operationType,
    variables: operation.variables,
    context: operation.getContext(),
  }
  if (__DEV__) console.log(`Sending ${operationType}: ${operation.operationName}`, value)
  return forward(operation).map((result) => {
    if (__DEV__)
      console.log(`Receiving ${operationType}: ${operation.operationName}`, {
        data: result.data,
        ...value,
      })
    return result
  })
})
