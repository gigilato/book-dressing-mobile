import { QueryHookOptions } from '@apollo/client'
import { MeQuery, MeQueryVariables, useMeQuery as useDefaultMeQuery } from '@api/hooks/generated'
import { auth } from '@services'

export const useMeQuery = (
  baseOptions?: Omit<QueryHookOptions<MeQuery, MeQueryVariables>, 'variables' | 'onCompleted'>
) => {
  const query = useDefaultMeQuery({
    ...baseOptions,
    variables: { id: auth.getValue()?.userId ?? '' },
    onCompleted: (data) => auth.setValue({ user: data.user_by_pk }),
  })
  return query
}
