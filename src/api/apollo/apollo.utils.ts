import { OperationDefinitionNode, DefinitionNode, OperationTypeNode } from 'graphql'

export const getOperationType = (definitions: readonly DefinitionNode[]): OperationTypeNode => {
  const definition = definitions[0] as OperationDefinitionNode
  const { operation: operationType } = definition
  return operationType
}
