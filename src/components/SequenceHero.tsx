import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronUp } from 'lucide-react'

const ROTATING_WORDS = ['Innovation', 'Automation', 'Security', 'Comfort', 'Control']

function Typewriter({ words }: { words: string[] }) {
  const [displayText, setDisplayText] = useState('')
  const wordIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const phaseRef = useRef<'typing' | 'pausing' | 'deleting'>('typing')
  const lastTimeRef = useRef<number | null>(null)
  const accumulatorRef = useRef(0)

  useEffect(() => {
    let rafId: number

    const tick = (time: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time
      accumulatorRef.current += delta

      const currentWord = words[wordIndexRef.current]
      const typeSpeed = 95
      const deleteSpeed = 55
      const pauseDuration = 2000

      if (phaseRef.current === 'pausing') {
        if (accumulatorRef.current >= pauseDuration) {
          accumulatorRef.current = 0
          phaseRef.current = 'deleting'
        }
      } else {
        const threshold = phaseRef.current === 'typing' ? typeSpeed : deleteSpeed

        if (accumulatorRef.current >= threshold) {
          accumulatorRef.current = 0

          if (phaseRef.current === 'typing') {
            charIndexRef.current = Math.min(charIndexRef.current + 1, currentWord.length)
            setDisplayText(currentWord.slice(0, charIndexRef.current))

            if (charIndexRef.current === currentWord.length) {
              phaseRef.current = 'pausing'
            }
          } else {
            charIndexRef.current = Math.max(charIndexRef.current - 1, 0)
            setDisplayText(currentWord.slice(0, charIndexRef.current))

            if (charIndexRef.current === 0) {
              phaseRef.current = 'typing'
              wordIndexRef.current = (wordIndexRef.current + 1) % words.length
            }
          }
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [words])

  return (
    <span className="inline-block min-w-[260px] md:min-w-[340px]">
      {displayText}
      <span
        className="ml-1 inline-block h-[0.75em] w-[3px] bg-[#0000FF] align-middle"
        style={{ animation: 'blink 0.85s steps(1) infinite' }}
      />
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}

gsap.registerPlugin(ScrollTrigger)

const TOTAL = 291
const SECTION_VH = 200
const MAX_CACHED_FRAMES = 30

function frameSrc(i: number) {
  return `/hero/ezgif-frame-${String(i + 10).padStart(3, '0')}.jpg`
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl md:rounded-[1.75rem] border border-white/[0.12] p-6 md:p-7 lg:p-9 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)',
      }}
    >
      {children}
    </div>
  )
}

function DetailCard({
  title,
  subtitle,
  description,
  href = '/services',
  cta = 'Learn More',
  align = 'right',
}: {
  title: string
  subtitle: string
  description: string
  href?: string
  cta?: string
  align?: 'left' | 'right'
}) {
  const positionClasses =
    align === 'right'
      ? 'mx-4 md:mr-12 md:ml-auto lg:mr-16'
      : 'mx-4 md:ml-12 md:mr-auto lg:ml-16'

  return (
    <GlassCard className={`w-full max-w-sm md:max-w-md lg:max-w-lg ${positionClasses}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-sans text-[clamp(1.25rem,6vw,1.75rem)] font-medium leading-[1.05] text-white md:text-[clamp(1.5rem,min(3.5vw,5vh),2.5rem)]">
          {title}
        </h3>
        <ChevronUp size={24} className="shrink-0 text-white md:size-7" />
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-white/20 md:my-5 lg:my-6" />

      {/* Subtitle */}
      <p className="font-sans text-base text-white md:text-lg">{subtitle}</p>

      {/* Divider */}
      <div className="my-4 h-px bg-white/20 md:my-5 lg:my-6" />

      {/* Description */}
      <p className="font-sans text-sm md:text-base leading-relaxed text-white/95">
        {description}
      </p>

      {/* Divider */}
      <div className="my-4 h-px bg-white/20 md:my-5 lg:my-6" />

      {/* Footer CTA */}
      <Link
        to={href}
        className="group inline-flex items-center gap-2 md:gap-3 font-sans text-sm md:text-base font-semibold text-white transition-opacity hover:opacity-80"
      >
        {cta}
        <span className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-white">
          <ArrowUpRight size={14} className="text-[#070b0a] md:size-4" />
        </span>
      </Link>
    </GlassCard>
  )
}

const overlays = [
  {
    start: 0, end: 0.20,
    content: () => (
      <div className="mx-auto w-full max-w-7xl px-5 pt-20 md:px-6 md:pt-0">
        <div className="max-w-4xl">

          <h1 className="font-sans text-[clamp(3rem,12vw,5rem)] font-extrabold leading-[1.08] tracking-tight text-white md:text-[clamp(2.5rem,4.5vw,3.5rem)] lg:text-[clamp(2.75rem,5vw,4rem)]">
            Next Gen<br />
            Smart <Typewriter words={ROTATING_WORDS} />
          </h1>

          <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/80 md:text-base md:text-lg md:mt-5">
            NestLink Technologies provides smart home, ELV, CCTV, Wi-Fi, lighting, audio, home cinema, electrical and MEP solutions across Dubai, UAE. We deliver reliable installation, professional service and affordable technology solutions for villas, offices and commercial spaces.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:items-center md:gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Start your project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#070b0a]">
                <ArrowRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 py-3 font-sans text-sm font-semibold text-white underline-offset-4 transition-all hover:text-[#0000FF] hover:underline md:py-4"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    start: 0.18, end: 0.42,
    content: () => (
      <DetailCard
        title="Smart Home Automation"
        subtitle="Intelligence woven into every room."
        description="Seamless app-based and voice-controlled automation for lighting, climate, curtains, and daily routines. One-touch scenes adapt to your lifestyle from sunrise to sleep. Compatible with Alexa, Google Assistant, and Apple HomeKit."
        href="/services"
        align="left"
      />
    ),
  },
  {
    start: 0.40, end: 0.65,
    content: () => (
      <DetailCard
        title="Security & Infrastructure"
        subtitle="Fortified. Connected. Intelligent."
        description="Advanced CCTV, smart locks, video intercoms, and visitor management backed by enterprise-grade networking. From structured cabling to seamless Wi-Fi, we keep your property protected and connected 24/7."
        href="/services"
      />
    ),
  },
  {
    start: 0.63, end: 0.95,
    content: () => (
      <DetailCard
        title="End-to-End Service"
        subtitle="From vision to lifelong support."
        description="Consultation, design, installation, testing, handover, and ongoing support — all under one team. Built on Innovation, Quality, Trust, and Customer Focus, your project is delivered cleanly and supported for life."
        href="/contact"
        cta="Start Your Project"
        align="left"
      />
    ),
  },
]

function overlayOpacity(p: number, start: number, end: number): number {
  if (start === 0) {
    if (p <= 0) return 1
    if (p < 0.06) return 1 - p / 0.06
    if (p < end) return 0
    return 0
  }
  if (p < start - 0.02) return 0
  if (p < start + 0.06) return (p - (start - 0.02)) / 0.08
  if (p < end - 0.06) return 1
  return Math.max(0, 1 - (p - (end - 0.06)) / 0.08)
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const imgAspect = img.naturalWidth / img.naturalHeight
  const canvasAspect = w / h
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight

  if (imgAspect > canvasAspect) {
    sw = sh * canvasAspect
    sx = (img.naturalWidth - sw) / 2
  } else {
    sh = sw / canvasAspect
    sy = (img.naturalHeight - sh) / 2
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h)
}

function manageFrameCache(
  targetIdx: number,
  cache: Map<number, HTMLImageElement>,
  loadQueue: Set<number>,
  maxSize: number,
) {
  const keysToKeep = new Set<number>()
  const half = Math.floor(maxSize / 2)
  for (let i = Math.max(0, targetIdx - half); i <= Math.min(TOTAL - 1, targetIdx + half); i++) {
    keysToKeep.add(i)
  }
  cache.forEach((_, key) => {
    if (!keysToKeep.has(key)) {
      cache.delete(key)
    }
  })
  keysToKeep.forEach((key) => {
    if (!cache.has(key) && !loadQueue.has(key)) {
      loadQueue.add(key)
      const img = new Image()
      img.onload = () => {
        cache.set(key, img)
        loadQueue.delete(key)
      }
      img.onerror = () => { loadQueue.delete(key) }
      img.src = frameSrc(key)
    }
  })
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window),
  )
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function MobileHero() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeRef = useRef(0)
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([])
  const directionRef = useRef(1)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute('data-idx'))
            if (idx !== activeRef.current) {
              directionRef.current = idx > activeRef.current ? 1 : -1
              activeRef.current = idx
              setActiveIdx(idx)
            }
          }
        }
      },
      { threshold: 0.4 },
    )
    triggerRefs.current.forEach((el) => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const pages = [
    {
      content: () => (
        <div className="text-center">
          <h1 className="font-sans text-[clamp(2.5rem,10vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            Next Gen<br />Smart <Typewriter words={ROTATING_WORDS} />
          </h1>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-white/80">
            NestLink Technologies provides smart home, ELV, CCTV, Wi-Fi, lighting, audio, home cinema, electrical and MEP solutions across Dubai, UAE.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105"
            >
              Start your project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#070b0a]">
                <ArrowRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              to="/services"
              className="font-sans text-sm font-semibold text-white underline-offset-4 transition-all hover:text-[#0000FF] hover:underline"
            >
              Explore services
            </Link>
          </div>
        </div>
      ),
    },
    {
      content: () => (
        <GlassCard className="w-full">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-xl font-medium leading-[1.05] text-white">
              Smart Home Automation
            </h3>
            <ChevronUp size={20} className="shrink-0 text-white" />
          </div>
          <div className="my-4 h-px bg-white/20" />
          <p className="font-sans text-base text-white">Intelligence woven into every room.</p>
          <div className="my-4 h-px bg-white/20" />
          <p className="font-sans text-sm leading-relaxed text-white/95">
            Seamless app-based and voice-controlled automation for lighting, climate, curtains, and daily routines. Compatible with Alexa, Google Assistant, and Apple HomeKit.
          </p>
          <div className="my-4 h-px bg-white/20" />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Learn More
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size="14" className="text-[#070b0a]" />
            </span>
          </Link>
        </GlassCard>
      ),
    },
    {
      content: () => (
        <GlassCard className="w-full">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-xl font-medium leading-[1.05] text-white">
              Security & Infrastructure
            </h3>
            <ChevronUp size={20} className="shrink-0 text-white" />
          </div>
          <div className="my-4 h-px bg-white/20" />
          <p className="font-sans text-base text-white">Fortified. Connected. Intelligent.</p>
          <div className="my-4 h-px bg-white/20" />
          <p className="font-sans text-sm leading-relaxed text-white/95">
            Advanced CCTV, smart locks, video intercoms, and visitor management backed by enterprise-grade networking.
          </p>
          <div className="my-4 h-px bg-white/20" />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Learn More
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size="14" className="text-[#070b0a]" />
            </span>
          </Link>
        </GlassCard>
      ),
    },
    {
      content: () => (
        <GlassCard className="w-full">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-xl font-medium leading-[1.05] text-white">
              End-to-End Service
            </h3>
            <ChevronUp size={20} className="shrink-0 text-white" />
          </div>
          <div className="my-4 h-px bg-white/20" />
          <p className="font-sans text-base text-white">From vision to lifelong support.</p>
          <div className="my-4 h-px bg-white/20" />
          <p className="font-sans text-sm leading-relaxed text-white/95">
            Consultation, design, installation, testing, handover, and ongoing support — all under one team.
          </p>
          <div className="my-4 h-px bg-white/20" />
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Start Your Project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size="14" className="text-[#070b0a]" />
            </span>
          </Link>
        </GlassCard>
      ),
    },
  ]

  const variants = {
    enter: (dir: number) => ({ x: dir * 280, rotate: dir * 20, opacity: 0 }),
    center: { x: 0, rotate: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -280, rotate: dir * -20, opacity: 0 }),
  }

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-video.mp4"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(0,0,60,0.85) 0%, rgba(0,0,80,0.5) 25%, rgba(0,0,100,0.15) 50%, rgba(0,0,80,0.2) 80%, rgba(0,0,60,0.6) 100%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <AnimatePresence mode="wait" custom={directionRef.current}>
            <motion.div
              key={activeIdx}
              custom={directionRef.current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full items-center justify-center"
            >
              <div className="w-full max-w-sm">
                {pages[activeIdx]?.content()}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="relative">
        {pages.map((_, i) => (
          <div
            key={i}
            ref={(el) => { triggerRefs.current[i] = el }}
            data-idx={i}
            className="h-screen"
          />
        ))}
      </div>
    </div>
  )
}

function DesktopHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameCacheRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const loadQueueRef = useRef<Set<number>>(new Set())
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const [videoOpacity, setVideoOpacity] = useState(1)
  const [canvasOpacity, setCanvasOpacity] = useState(0)
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    manageFrameCache(0, frameCacheRef.current, loadQueueRef.current, MAX_CACHED_FRAMES)
    const checkReady = () => {
      if (frameCacheRef.current.has(0)) {
        setReady(true)
      } else {
        setTimeout(checkReady, 50)
      }
    }
    checkReady()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctxRef.current = ctx

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w
      canvas.height = h
      drawFrame(0)
    }
    resize()

    let timer: number
    const onResize = () => {
      clearTimeout(timer)
      timer = window.setTimeout(resize, 100)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timer)
    }
  }, [])

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    const ctx = ctxRef.current
    if (!canvas || !ctx) return
    const idx = Math.min(Math.max(0, Math.round(index)), TOTAL - 1)
    const img = frameCacheRef.current.get(idx)
    if (img?.complete && img.naturalWidth > 0) {
      drawCover(ctx, img, canvas.width, canvas.height)
    }
  }

  useEffect(() => {
    if (!ready || !pinRef.current || !sectionRef.current) return

    const proxy = { frame: 0, p: 0 }

    const tl = gsap.to(proxy, {
      frame: TOTAL - 1,
      p: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinRef.current,
        scrub: 1,
        anticipatePin: 1,
      },
      onUpdate: () => {
        const p = proxy.p

        const vOpacity = Math.max(0, 1 - p / 0.25)
        setVideoOpacity(vOpacity)

        let cOpacity = 0
        if (p > 0.15) {
          cOpacity = Math.min(1, (p - 0.15) / 0.25)
        }
        setCanvasOpacity(cOpacity)

        const frameProgress = Math.max(0, (p - 0.1) / 0.9)
        const idx = Math.min(Math.round(frameProgress * (TOTAL - 1)), TOTAL - 1)
        drawFrame(idx)

        manageFrameCache(idx, frameCacheRef.current, loadQueueRef.current, MAX_CACHED_FRAMES)

        setScrollOpacity(Math.max(0, 1 - p / 0.2))

        setProgress(p)
      },
    })

    return () => { tl.kill() }
  }, [ready])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#070b0a]" style={{ height: `${SECTION_VH}vh` }}>
      <div ref={pinRef} className="h-dvh w-full overflow-hidden bg-[#070b0a]" style={{ height: '100dvh' }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: videoOpacity }}
          src="/hero-video.mp4"
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 block"
          style={{ opacity: canvasOpacity }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(0deg, rgba(0,0,60,0.85) 0%, rgba(0,0,80,0.5) 25%, rgba(0,0,100,0.15) 50%, rgba(0,0,80,0.2) 80%, rgba(0,0,60,0.6) 100%)',
          }}
        />

        <div className="absolute inset-0 z-20">
          {overlays.map((o) => {
            const op = overlayOpacity(progress, o.start, o.end)
            return (
              <div
                key={o.start}
                className="absolute inset-0 flex items-center"
                style={{
                  opacity: op,
                  transform: `translateY(${(1 - op) * 40}px)`,
                }}
              >
                {o.content()}
              </div>
            )
          })}
        </div>

        <div
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-100"
          style={{ opacity: scrollOpacity }}
        >
          <span className="animate-bounce text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </span>
          <span className="font-sans text-xs tracking-widest text-white/60 uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}

export default function SequenceHero() {
  const isMobile = useIsMobile()
  if (isMobile) return <MobileHero />
  return <DesktopHero />
}
