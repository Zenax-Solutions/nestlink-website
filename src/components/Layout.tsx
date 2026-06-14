import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'PROCESS', path: '/process' },
  { label: 'CONTACT', path: '/contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-[#070b0a] text-white">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#070b0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 text-white">
            <svg
              width="34"
              height="34"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M16 10L10 14V22L16 26L22 22V14L16 10Z"
                fill="#0000FF"
              />
            </svg>
            <div className="flex flex-col">
              <span className="font-inter text-lg font-bold leading-none tracking-tight">
                NestLink
              </span>
              <span className="font-inter text-[10px] uppercase tracking-widest text-white/50">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#0000FF]'
                    : 'text-white/80 hover:text-[#0000FF]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+971504429734"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-inter text-sm font-medium text-white transition-colors duration-200 hover:border-[#0000FF]/50 hover:text-[#0000FF] md:flex"
            >
              <Phone size={14} />
              +971 50 442 9734
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="text-white lg:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
                    className={`font-inter text-2xl font-semibold tracking-wide transition-colors duration-200 ${
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
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0000FF] px-6 py-3 font-inter text-sm font-bold uppercase text-white"
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
    </div>
  )
}
