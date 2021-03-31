import { setContext } from '@apollo/client/link/context'
import { firebase } from '@services'
import { config } from '@config'

export const contextLink = setContext(() => {
  const token = firebase.getCurrentIdToken()
  if (!token) return null
  const { authorizationScheme } = config.api
  const context = { headers: { authorization: `${authorizationScheme} ${token}` } }
  return context
})
