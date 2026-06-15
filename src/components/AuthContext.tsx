import { useState, useEffect, createContext, useContext, type ReactNode } from 'react'
import { getToken, setToken as storeToken } from '../api'

interface AuthContextType {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(getToken())
  }, [])

  const login = (t: string) => {
    storeToken(t)
    setToken(t)
  }

  const logout = () => {
    localStorage.removeItem('nl_token')
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
