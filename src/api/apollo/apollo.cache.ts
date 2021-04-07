import { InMemoryCache, Reference } from '@apollo/client/cache'
import _ from 'lodash'
import { BookConnection } from '../hooks/generated'

const defaultTypePolicy = { keyFields: ['uuid'] }
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        books: {
          keyArgs: ['where'],
          merge(
            existing: BookConnection,
            incoming: BookConnection,
            { args, readField }
          ): BookConnection {
            if (!existing || !args?.offset) return incoming
            const edges = _.uniqBy([...existing.edges, ...incoming.edges], (item) =>
              readField('uuid', (item.node as unknown) as Reference)
            )
            return { ...incoming, edges }
          },
        },
      },
    },
    User: defaultTypePolicy,
    Book: defaultTypePolicy,
    Loan: defaultTypePolicy,
  },
})
