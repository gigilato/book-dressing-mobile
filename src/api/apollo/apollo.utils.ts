import { ApolloCache, DocumentNode } from '@apollo/client'
import { OperationDefinitionNode, DefinitionNode, OperationTypeNode } from 'graphql'
import { Nullable } from '@utils/types'

export const readQueryFromCache = <Query, QueryVariables>(
  client: ApolloCache<any>,
  query: DocumentNode,
  variables?: QueryVariables
): Nullable<Query> => {
  try {
    const cachedQuery = client.readQuery<Query, QueryVariables>({
      query,
      variables,
    })
    return cachedQuery
  } catch (err) {
    return null
  }
}

export const getOperationType = (definitions: readonly DefinitionNode[]): OperationTypeNode => {
  const definition = definitions[0] as OperationDefinitionNode
  const { operation: operationType } = definition
  return operationType
}
