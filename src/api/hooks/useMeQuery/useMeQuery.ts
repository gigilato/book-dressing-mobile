import { useMeQuery as useMeQueryDefault } from '@api/hooks/generated'
import { cache } from '@services'
import { UseMeQuery } from './useMeQuery.types'

export const useMeQuery: UseMeQuery = (baseOptions?) => {
  const query = useMeQueryDefault({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    onCompleted: ({ me }) => cache.setValue({ user: me }),
    ...baseOptions,
  })

  return query
}
