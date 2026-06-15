import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
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
          <Link to="/" className="flex items-center gap-2.5 text-[#070b0a] pl-1">
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
              <span className="font-sans text-lg font-bold leading-none tracking-tight">
                NestLink
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#070b0a]/60">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop menu with dot separators */}
          <nav className="hidden items-center lg:flex">
            {navLinks.map((link, index) => (
              <div key={link.path} className="flex items-center">
                {index > 0 && (
                  <span className="mx-3.5 h-1.5 w-1.5 rounded-full bg-[#070b0a]/40" />
                )}
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
          <MessageCircle size={26} />
        </a>
      </div>
    </div>
  )
}
