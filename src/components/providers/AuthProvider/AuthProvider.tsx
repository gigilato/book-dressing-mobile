import React, { useEffect, memo, useState, useMemo } from 'react'
import { auth } from '@services'

export const AuthProvider = memo(({ children }) => {
  const [authState, setAuthState] = useState(auth.getValue())
  const AuthContext = useMemo(() => auth.getContext(), [])
  useEffect(() => {
    const subscription = auth.subscribe((data) => setAuthState(data))
    return () => subscription.unsubscribe()
  }, [])
  if (!AuthContext || !authState) return <>{children}</>
  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
})
