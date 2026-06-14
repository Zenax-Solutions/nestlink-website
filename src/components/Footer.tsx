import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  'Smart Home Automation',
  'Security & CCTV',
  'Access Control',
  'Networking',
  'Home Cinema & AV',
  'Lighting & ELV',
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050807] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
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
              <span className="font-inter text-lg font-bold">NestLink</span>
            </Link>
            <p className="mt-4 font-inter text-sm leading-relaxed text-white/50">
              Innovative technology solutions for villas, homes, offices &
              commercial spaces across Dubai and the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-white/60 transition-colors duration-200 hover:text-[#0000FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-inter text-sm text-white/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#0000FF]" />
                <span className="font-inter text-sm text-white/60">
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#0000FF]" />
                <a
                  href="tel:+971504429734"
                  className="font-inter text-sm text-white/60 transition-colors duration-200 hover:text-[#0000FF]"
                >
                  +971 50 442 9734
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#0000FF]" />
                <a
                  href="mailto:info@nestlink.ae"
                  className="font-inter text-sm text-white/60 transition-colors duration-200 hover:text-[#0000FF]"
                >
                  info@nestlink.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} NestLink Technologies. All rights
            reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            Smart Home • ELV • AV • Networking Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
