import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function NotFound() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070b0a]">
        <div className="absolute inset-0">
          <img src="/page-header.jpg" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b0a]/60 via-[#070b0a]/80 to-[#070b0a]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Error 404
            </span>
            <h1 className="mt-6 font-sans text-8xl font-bold leading-none tracking-tight text-white md:text-9xl">
              4<span className="text-[#0000FF]">0</span>4
            </h1>
            <p className="mt-4 font-sans text-xl text-white/60 md:text-2xl">
              Page not found
            </p>
            <p className="mx-auto mt-4 max-w-md font-sans text-base text-white/40">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Home size={16} />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-sans text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/40"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
