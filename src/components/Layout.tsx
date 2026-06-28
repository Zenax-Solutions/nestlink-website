import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Process', path: '/process' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#070b0a] text-white">
      {/* Floating Navigation */}
      <header className="fixed left-4 right-4 top-4 z-50 lg:left-10 lg:right-10 lg:top-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#e8e8e8] px-4 py-2.5 shadow-2xl shadow-black/20 md:px-6 md:py-3.5">
          {/* Logo */}
          <Link to="/" className="flex items-center pl-1">
            <img src="/logo/NestLink-logo-transparent-white.png" alt="NestLink" className="h-10 w-auto" />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <div key={link.path} className="flex items-center">
                <Link
                  to={link.path}
                  className={`font-sans text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-[#0000FF]'
                      : 'text-[#070b0a]/80 hover:text-[#0000FF]'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-[#070b0a] pl-6 pr-1.5 py-1.5 font-sans text-base font-semibold text-white transition-transform duration-200 hover:scale-105 md:flex"
            >
              Contact Us
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <ArrowUpRight size={18} className="text-[#070b0a]" />
              </span>
            </Link>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#070b0a]/10 text-[#070b0a] lg:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#070b0a]/98 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`font-sans text-2xl font-semibold tracking-wide transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-[#0000FF]'
                        : 'text-white hover:text-[#0000FF]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                href="tel:+971504429734"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0000FF] px-6 py-3 font-sans text-sm font-bold uppercase text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={16} />
                Call Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main>{children}</main>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-40 flex items-end gap-3">
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl bg-white px-5 py-3 font-sans text-sm font-semibold text-[#0000FF] shadow-lg"
            >
              Chat with us
              <div className="absolute right-[-5px] bottom-5 h-2.5 w-2.5 rotate-45 bg-white" />
            </motion.div>
          )}
        </AnimatePresence>
        <a
          href="https://wa.me/971504429734"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0000FF] text-white shadow-lg shadow-[#0000FF]/25 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
