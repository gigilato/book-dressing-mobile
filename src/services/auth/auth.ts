import { createContext, Context } from 'react'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { Subject, Subscription } from 'rxjs'
import * as storage from '@utils/storage'
import { ASYNC_STORAGE_TOKEN_KEY, ASYNC_STORAGE_CURRENT_USER } from './auth.constants'
import { AuthValue } from './auth.types'
import { Navigation } from '../navigation'

export class Auth {
  private value: AuthValue | null = null
  private subject = new Subject<AuthValue>()
  private context: Context<AuthValue> | null = null
  private navigation: Navigation | null = null
  private client: ApolloClient<NormalizedCacheObject> | null = null

  setup = async (navigation: Navigation): Promise<AuthValue> => {
    this.navigation = navigation
    const token: string = await storage.load(ASYNC_STORAGE_TOKEN_KEY)
    const user: any = await storage.load(ASYNC_STORAGE_CURRENT_USER)

    this.value = {
      token,
      user,
    }
    this.context = createContext<AuthValue>(this.value)
    this.subject.next(this.value)
    return this.value
  }

  setApolloClient = (client: ApolloClient<NormalizedCacheObject>) => (this.client = client)
  isAuthenticated = () => !!this.value?.token

  getValue = (): AuthValue | null => this.value
  setValue = async (value: Partial<AuthValue>): Promise<void> => {
    const { token, user } = value
    if (token) await storage.save(ASYNC_STORAGE_TOKEN_KEY, token)
    if (user) await storage.save(ASYNC_STORAGE_CURRENT_USER, user)
    const newValue: AuthValue = { ...this.value, ...value }
    this.subject.next(newValue)
    this.value = newValue
  }

  clear = async (): Promise<void> => {
    const value: AuthValue = {
      user: undefined,
      token: undefined,
    }
    this.subject.next(value)
    this.value = value
    Promise.all([
      this.client?.cache.reset(),
      storage.remove(ASYNC_STORAGE_CURRENT_USER),
      storage.remove(ASYNC_STORAGE_TOKEN_KEY),
    ])
    this.navigation?.resetRoot()
  }

  subscribe = (callback: (data: any) => any): Subscription => this.subject.subscribe(callback)
  getContext = (): Context<AuthValue> | null => this.context
}

export const auth = new Auth()
