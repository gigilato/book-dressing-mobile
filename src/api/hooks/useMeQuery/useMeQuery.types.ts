import { QueryHookOptions } from '@apollo/client'
import { Exact, MeQuery, MeQueryHookResult } from '@api/hooks/generated'

export type UseMeQuery = (
  baseOptions?: QueryHookOptions<MeQuery, Exact<{ [key: string]: never }>>
) => MeQueryHookResult
