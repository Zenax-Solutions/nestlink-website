import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, Image, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from './AuthContext'

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Blogs', path: '/admin/blogs', icon: FileText },
  { label: 'Portfolio', path: '/admin/portfolio', icon: Image },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/admin')
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-black/5 bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between border-b border-black/5 px-6">
          <Link to="/admin/dashboard" className="font-sans text-lg font-bold text-[#070b0a]">NestLink</Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} className="text-black/60" />
          </button>
        </div>

        <nav className="mt-4 space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = location.pathname === item.path || location.pathname.startsWith(item.path + '/')
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 font-sans text-sm font-medium transition-colors ${
                  active ? 'bg-[#0000FF] text-white' : 'text-black/60 hover:bg-black/5 hover:text-black'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="absolute inset-x-0 bottom-0 border-t border-black/5 p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 font-sans text-sm font-medium text-black/60 transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="flex h-14 items-center justify-between border-b border-black/5 bg-white px-4 sm:h-16 sm:px-6">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} className="text-black/60" />
            </button>
            <span className="font-sans text-sm font-semibold text-black/40 lg:hidden">
              {navItems.find((n) => location.pathname === n.path || location.pathname.startsWith(n.path + '/'))?.label || 'Admin'}
            </span>
          </div>
          <Link to="/" className="ml-auto font-sans text-sm text-[#0000FF] hover:underline">
            View Site
          </Link>
        </header>

        <main className="min-w-0 flex-1 overflow-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
