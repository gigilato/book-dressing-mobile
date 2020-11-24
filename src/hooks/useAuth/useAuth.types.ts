import { AuthValue } from '@services'

interface Auth extends AuthValue {
  isAuthenticated: boolean
}

export type UseAuth = () => Auth
