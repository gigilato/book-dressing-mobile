import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import * as storage from '@utils/storage'
import {
  ASYNC_STORAGE_ACCESS_TOKEN,
  ASYNC_STORAGE_REFRESH_TOKEN,
  ASYNC_STORAGE_CURRENT_USER,
  ASYNC_STORAGE_CURRENT_USER_ID,
} from './auth.constants'
import { AuthValue } from './auth.types'
import { Navigation } from '../navigation'

export class Auth {
  private value: AuthValue | null = null
  private navigation: Navigation | null = null
  private client: ApolloClient<NormalizedCacheObject> | null = null

  setup = async (navigation: Navigation): Promise<AuthValue> => {
    this.navigation = navigation
    const accessToken: string = await storage.load(ASYNC_STORAGE_ACCESS_TOKEN)
    const refreshToken: string = await storage.load(ASYNC_STORAGE_REFRESH_TOKEN)
    const userId: string = await storage.load(ASYNC_STORAGE_CURRENT_USER_ID)
    const user: any = await storage.load(ASYNC_STORAGE_CURRENT_USER)

    this.value = {
      accessToken,
      refreshToken,
      user,
      userId,
    }
    return this.value
  }

  setApolloClient = (client: ApolloClient<NormalizedCacheObject>) => (this.client = client)
  isAuthenticated = () => !!this.value?.accessToken

  getValue = (): AuthValue | null => this.value
  setValue = async (value: Partial<AuthValue>): Promise<void> => {
    const { accessToken, refreshToken, user, userId } = value
    if (accessToken) await storage.save(ASYNC_STORAGE_ACCESS_TOKEN, accessToken)
    if (refreshToken) await storage.save(ASYNC_STORAGE_REFRESH_TOKEN, refreshToken)
    if (user) await storage.save(ASYNC_STORAGE_CURRENT_USER, user)
    if (userId) await storage.save(ASYNC_STORAGE_CURRENT_USER_ID, userId)
    const newValue: AuthValue = { ...this.value, ...value }
    this.value = newValue
  }

  clear = async (): Promise<void> => {
    this.value = {
      user: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      userId: undefined,
    }
    Promise.all([
      this.client?.cache.reset(),
      storage.remove(ASYNC_STORAGE_CURRENT_USER),
      storage.remove(ASYNC_STORAGE_ACCESS_TOKEN),
      storage.remove(ASYNC_STORAGE_REFRESH_TOKEN),
      storage.remove(ASYNC_STORAGE_CURRENT_USER_ID),
    ])
    this.navigation?.resetRoot()
  }
}

export const auth = new Auth()
