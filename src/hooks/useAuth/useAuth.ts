import { useContext } from 'react'
import { auth } from '@services'
import { UseAuth } from './useAuth.types'

export const useAuth: UseAuth = () => {
  //@ts-ignore
  const value = useContext(auth.getContext())
  return { isAuthenticated: !!value?.token, ...value }
}
