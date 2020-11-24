import { setContext } from '@apollo/client/link/context'
import { auth } from '@services'
import { config } from '@config'

export const contextLink = setContext(() => {
  const value = auth.getValue()
  if (!value?.accessToken) return null
  const { authorizationScheme } = config.api
  const context = { headers: { authorization: `${authorizationScheme} ${value.accessToken}` } }
  return context
})
