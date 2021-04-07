import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import * as storage from '@utils/storage'
import { ASYNC_STORAGE_CURRENT_USER } from './cache.constants'
import { UserFragment, MeQuery } from '@api/hooks/generated'
import { meQuery } from '@api/graphql'
import { Nullable } from '@utils/types'
import { Logger } from '@services/logger'
import { CacheValue } from './cache.types'

export class Cache {
  private client: Nullable<ApolloClient<NormalizedCacheObject>> = null
  private value: CacheValue = { user: null }

  setup = async () => {
    const user: UserFragment = await storage.load(ASYNC_STORAGE_CURRENT_USER)
    if (user && this.client) {
      this.client.cache.writeQuery<MeQuery>({
        query: meQuery,
        data: {
          __typename: 'Query',
          me: user,
        },
      })
    }

    this.value = { user: user ?? null }
    Logger.log(this.value, 'debug')
    return this.value
  }

  setApolloClient = (client: ApolloClient<NormalizedCacheObject>) => (this.client = client)
  getValue = () => this.value

  setValue = async (newValue: Partial<CacheValue>) => {
    const { user } = newValue
    if (user) {
      const updatedUser = { ...this.value.user, ...user }
      await storage.save(ASYNC_STORAGE_CURRENT_USER, updatedUser)
      this.value.user = updatedUser
    }
  }
  reset = () =>
    Promise.all([this.client?.cache.reset(), storage.remove(ASYNC_STORAGE_CURRENT_USER)]).then(() =>
      this.setValue({ user: null })
    )
}

export const cache = new Cache()
