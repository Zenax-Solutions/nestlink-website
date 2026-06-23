import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const mainLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'Contact Us', path: '/contact' },
]

const serviceLinks = [
  { label: 'Smart Home Automation', path: '/services' },
  { label: 'Security & CCTV', path: '/services' },
  { label: 'Access Control', path: '/services' },
  { label: 'Networking', path: '/services' },
  { label: 'Home Cinema & AV', path: '/services' },
]

const otherLinks = [
  { label: 'FAQ', path: '/faq' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },

]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nestlink_technologies?igsh=Z3g0dXdlcG1xemxu&utm_source=qr',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1BvPwZxDJC/?mibextid=wwXIfr',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#050807]">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/footer-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050807]/95 via-[#050807]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <div className="max-w-2xl">
            <h2 className="font-sans text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
              Building Smarter Spaces,<br />
              One Home At A Time
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-white md:text-lg">
              We don't just install technology — we engineer intelligent environments
              where comfort, security, and control work together effortlessly.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-bold text-[#050807] transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Start your project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050807]">
                <ArrowUpRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 text-white">
              <svg
                width="32"
                height="32"
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
              <span className="font-sans text-xl font-bold">NestLink</span>
              <sup className="ml-0.5 font-sans text-[10px] text-white">®</sup>
            </Link>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-200 hover:border-[#0000FF] hover:bg-[#0000FF] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-sans text-sm font-semibold text-white">
                Subscribe To The Newsletter
              </h3>
              <form
                className="mt-4 flex items-center gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter e-mail address"
                  className="flex-1 rounded-full border border-white/10 bg-transparent px-5 py-3 font-sans text-sm text-white placeholder-white outline-none transition-colors focus:border-[#0000FF]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#050807] transition-transform duration-200 hover:scale-105"
                >
                  <ArrowUpRight size={18} />
                </button>
              </form>
              <p className="mt-3 font-sans text-xs text-white">
                Your information is never disclosed to third parties.
              </p>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            <div>
              <h4 className="font-sans text-sm font-semibold text-white">Main Page</h4>
              <ul className="mt-5 space-y-3">
                {mainLinks.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      to={link.path}
                      className="font-sans text-sm text-white transition-colors duration-200 hover:text-[#0000FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-semibold text-white">Services</h4>
              <ul className="mt-5 space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-sans text-sm text-white transition-colors duration-200 hover:text-[#0000FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-semibold text-white">Other</h4>
              <ul className="mt-5 space-y-3">
                {otherLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-sans text-sm text-white transition-colors duration-200 hover:text-[#0000FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Brand */}
      <div className="overflow-hidden border-y border-white/10 bg-[#050807] py-6">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="mx-8 flex items-center gap-4 font-sans text-5xl font-bold text-white/30 md:text-7xl lg:text-8xl"
            >
              NestLink
              <sup className="text-2xl md:text-3xl">®</sup>
              <span className="mx-8 text-white/30">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-sans text-xs text-white">
            © {new Date().getFullYear()} NestLink Technologies. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white">
            Smart Home • ELV • AV • Networking Solutions
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center">
        <a
          href="https://zenax.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-white/50 transition-colors hover:text-white"
        >
          Designed & Developed by <span className="font-semibold text-white">Zenax Web Solutions</span>™
        </a>
      </div>
    </footer>
  )
}
