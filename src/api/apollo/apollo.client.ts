import { ApolloClient } from '@apollo/client'
import { cache as cacheService } from '@services'
import { link } from './apollo.link'
import { cache } from './apollo.cache'

export const client = new ApolloClient({
  link,
  cache,
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-first' },
  },
})

cacheService.setApolloClient(client)
