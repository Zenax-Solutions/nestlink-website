import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import { AuthProvider, useAuth } from './components/AuthContext'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import PortfolioPage from './pages/Portfolio'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import AdminLayout from './components/AdminLayout'
import AdminLogin from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import BlogList from './pages/admin/BlogList'
import BlogForm from './pages/admin/BlogForm'
import PortfolioList from './pages/admin/PortfolioList'
import PortfolioForm from './pages/admin/PortfolioForm'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/admin" replace />
  return <>{children}</>
}

function AdminPage({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute><AdminLayout>{children}</AdminLayout></ProtectedRoute>
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Layout>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <AuthProvider>
      <BrowserRouter>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
          <Route path="/process" element={<PublicLayout><Process /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/portfolio" element={<PublicLayout><PortfolioPage /></PublicLayout>} />
          <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
          <Route path="/blog/:slug" element={<PublicLayout><BlogDetail /></PublicLayout>} />
          <Route path="/privacy" element={<PublicLayout><Privacy /></PublicLayout>} />
          <Route path="/terms" element={<PublicLayout><Terms /></PublicLayout>} />
          <Route path="/faq" element={<PublicLayout><FAQ /></PublicLayout>} />
          <Route path="/404" element={<PublicLayout><NotFound /></PublicLayout>} />
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPage><Dashboard /></AdminPage>} />
          <Route path="/admin/blogs" element={<AdminPage><BlogList /></AdminPage>} />
          <Route path="/admin/blogs/new" element={<AdminPage><BlogForm /></AdminPage>} />
          <Route path="/admin/blogs/edit/:id" element={<AdminPage><BlogForm /></AdminPage>} />
          <Route path="/admin/portfolio" element={<AdminPage><PortfolioList /></AdminPage>} />
          <Route path="/admin/portfolio/new" element={<AdminPage><PortfolioForm /></AdminPage>} />
          <Route path="/admin/portfolio/edit/:id" element={<AdminPage><PortfolioForm /></AdminPage>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
