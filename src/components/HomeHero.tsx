import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hls from 'hls.js'
import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const streamUrl =
      'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false })
      hls.loadSource(streamUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {})
      })
    }
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-72px)] w-full overflow-hidden bg-[#070b0a]">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Overlays */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(90deg, #070b0a 0%, rgba(7, 11, 10, 0.85) 45%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(0deg, #070b0a 0%, rgba(7, 11, 10, 0.5) 50%, transparent 100%)',
        }}
      />

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="absolute left-[25%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-[75%] top-0 h-full w-px bg-white/10" />
      </div>

      {/* Central glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <svg
          width="1200"
          height="500"
          viewBox="0 0 1200 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[90vw] max-w-[1200px]"
        >
          <defs>
            <filter id="homeGlowBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            </filter>
          </defs>
          <ellipse
            cx="600"
            cy="120"
            rx="500"
            ry="120"
            fill="url(#homeGlowGradient)"
            filter="url(#homeGlowBlur)"
          />
          <defs>
            <linearGradient id="homeGlowGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#064e3b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-center px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]"
        >
          Smart Home • ELV • AV • Networking
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-4xl font-sans text-[40px] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-[58px] lg:text-[72px]"
        >
          Innovative Technology for Smarter Spaces
          <span className="text-[#0000FF]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-[540px] font-sans text-base leading-relaxed text-white/70"
        >
          NestLink Technologies designs and delivers intelligent systems for
          villas, homes, offices, and commercial spaces across Dubai — making
          every environment smarter, safer, and easier to manage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105"
          >
            Explore Services
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <a
            href="tel:+971504429734"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-colors duration-200 hover:border-[#0000FF]/50 hover:text-[#0000FF]"
          >
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4"
        >
          {[
            { value: '6+', label: 'Service Areas' },
            { value: '6', label: 'Tech Platforms' },
            { value: '6-Step', label: 'Delivery Process' },
            { value: 'UAE', label: 'Coverage' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-sans text-2xl font-bold text-[#0000FF]">
                {stat.value}
              </div>
              <div className="mt-1 font-sans text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
