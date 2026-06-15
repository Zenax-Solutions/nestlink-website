import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../api'
import { useAuth } from '../../components/AuthContext'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await auth.login(username, password)
      login(res.token)
      navigate('/admin/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0000FF] p-6">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0000FF]">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L4 9V23L16 30L28 23V9L16 2Z" stroke="white" strokeWidth="2" fill="none" />
              <path d="M16 10L10 14V22L16 26L22 22V14L16 10Z" fill="white" />
            </svg>
          </div>
          <h1 className="font-sans text-2xl font-bold text-black">Admin Login</h1>
          <p className="mt-1 font-sans text-sm text-black/50">NestLink Technologies</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black placeholder-black/30 outline-none focus:border-[#0000FF]/50"
              placeholder="admin"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black placeholder-black/30 outline-none focus:border-[#0000FF]/50"
              placeholder="••••••"
              required
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 font-sans text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#0000FF] py-3 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
