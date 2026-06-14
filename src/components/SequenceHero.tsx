import { useEffect, useRef, useState, type ReactNode } from 'react'
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
            // deleting
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
const SECTION_VH = 500

function frameSrc(i: number) {
  return `/hero/ezgif-frame-${String(i + 10).padStart(3, '0')}.jpg`
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/[0.12] p-7 md:p-9 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.08)',
        backgroundBlendMode: 'luminosity',
        backdropFilter: 'blur(40px) saturate(150%)',
        WebkitBackdropFilter: 'blur(40px) saturate(150%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 16px 48px rgba(0,0,0,0.4)',
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
      ? 'mr-0 md:mr-16 lg:mr-24 ml-auto'
      : 'ml-6 md:ml-16 lg:ml-24 mr-auto'

  return (
    <GlassCard className={`w-full max-w-md md:max-w-lg ${positionClasses}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-sans text-3xl font-medium leading-[1.05] text-white md:text-4xl lg:text-[2.75rem]">
          {title}
        </h3>
        <ChevronUp size={28} className="shrink-0 text-white" />
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/20" />

      {/* Subtitle */}
      <p className="font-sans text-lg md:text-xl text-white">{subtitle}</p>

      {/* Divider */}
      <div className="my-6 h-px bg-white/20" />

      {/* Description */}
      <p className="font-sans text-base md:text-lg leading-relaxed text-white/95">
        {description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-white/20" />

      {/* Footer CTA */}
      <Link
        to={href}
        className="group inline-flex items-center gap-3 font-sans text-base md:text-lg font-semibold text-white transition-opacity hover:opacity-80"
      >
        {cta}
        <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white">
          <ArrowUpRight size={16} className="text-[#070b0a]" />
        </span>
      </Link>
    </GlassCard>
  )
}

const overlays = [
  {
    start: 0, end: 0.22, align: 'left',
    content: () => (
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#0000FF]" />
            Smart Home • ELV • AV • Networking
          </span>

          <h1 className="mt-6 font-sans text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
            Next—Gen<br />
            Smart Living<br />
            <Typewriter words={ROTATING_WORDS} />
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg">
            We engineer intelligent spaces where technology disappears into the background — so you can live, work, and relax with effortless control, security, and comfort.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Start your project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#070b0a]">
                <ArrowRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white underline-offset-4 transition-all hover:text-[#0000FF] hover:underline"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    start: 0.18, end: 0.43, align: 'right',
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
    start: 0.4, end: 0.66, align: 'right',
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
    start: 0.63, end: 1, align: 'right',
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
    if (p < 0.05) return 1 - p / 0.05
    if (p < end - 0.05) return 0
    if (p < end) return (end - p) / 0.05
    return 0
  }
  if (p < start - 0.02) return 0
  if (p < start + 0.05) return (p - (start - 0.02)) / 0.07
  if (p < end - 0.05) return 1
  return Math.max(0, 1 - (p - (end - 0.05)) / 0.07)
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

export default function SequenceHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const [videoOpacity, setVideoOpacity] = useState(1)
  const [canvasOpacity, setCanvasOpacity] = useState(0)

  // Preload frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = []
    let loaded = 0
    for (let i = 0; i < TOTAL; i++) {
      const img = new Image()
      img.onload = () => {
        loaded++
        if (loaded === 1) setReady(true)
      }
      img.onerror = () => { loaded++ }
      img.src = frameSrc(i)
      imgs.push(img)
    }
    imagesRef.current = imgs
  }, [])

  // Canvas setup
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
    const img = imagesRef.current[idx]
    if (img?.complete && img.naturalWidth > 0) {
      drawCover(ctx, img, canvas.width, canvas.height)
    }
  }

  // GSAP scroll animation
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
        scrub: 0.5,
        anticipatePin: 1,
      },
      onUpdate: () => {
        const p = proxy.p

        // Video fade out: 1 -> 0 over first 25% of scroll
        const vOpacity = Math.max(0, 1 - p / 0.25)
        setVideoOpacity(vOpacity)

        // Canvas fade in: 0 -> 1 between 15% and 40% of scroll
        let cOpacity = 0
        if (p > 0.15) {
          cOpacity = Math.min(1, (p - 0.15) / 0.25)
        }
        setCanvasOpacity(cOpacity)

        // Frames start advancing after 10% of scroll
        const frameProgress = Math.max(0, (p - 0.1) / 0.9)
        const idx = Math.min(Math.round(frameProgress * (TOTAL - 1)), TOTAL - 1)
        drawFrame(idx)

        setProgress(p)
      },
    })

    return () => { tl.kill() }
  }, [ready])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#070b0a]" style={{ height: `${SECTION_VH}vh` }}>
      <div ref={pinRef} className="h-screen w-full overflow-hidden bg-[#070b0a]">
        {/* Background video */}
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

        {/* Image sequence canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block"
          style={{ opacity: canvasOpacity }}
        />

        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(0deg, rgba(7,11,10,0.8) 0%, rgba(7,11,10,0.4) 25%, transparent 50%, transparent 80%, rgba(7,11,10,0.4) 100%)',
          }}
        />

        {/* Glass card overlays */}
        <div className="absolute inset-0 z-20">
          {overlays.map((o) => (
            <div
              key={o.start}
              className="absolute inset-0 flex items-center"
              style={{ opacity: overlayOpacity(progress, o.start, o.end) }}
            >
              {o.content()}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
