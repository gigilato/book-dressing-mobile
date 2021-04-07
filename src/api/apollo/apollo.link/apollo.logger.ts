import { ApolloLink } from '@apollo/client'
import { getOperationType } from '@api/apollo/apollo.utils'
import { Logger } from '@services'

export const loggerLink = new ApolloLink((operation, forward) => {
  const operationType = getOperationType(operation.query.definitions)
  Logger.log(
    {
      name: `sending ${operationType}`,
      preview: operation.operationName,
      value: {
        variables: operation.variables,
      },
    },
    'api'
  )
  return forward(operation).map((result) => {
    if (result.errors) {
      Logger.log(
        {
          name: `${operationType} error`.toUpperCase(),
          preview: operation.operationName,
          value: {
            errors: result.errors,
            variables: operation.variables,
          },
          important: true,
        },
        'error'
      )
    } else {
      Logger.log(
        {
          name: `${operationType}`.toUpperCase(),
          preview: operation.operationName,
          value: {
            data: result.data,
            variables: operation.variables,
          },
          important: true,
        },
        'api'
      )
    }
    return result
  })
})
