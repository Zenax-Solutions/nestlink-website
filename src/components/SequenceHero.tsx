import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TOTAL = 291
const SECTION_VH = 450

function frameSrc(i: number) {
  return `/hero/ezgif-frame-${String(i + 10).padStart(3, '0')}.jpg`
}

const overlays = [
  {
    start: 0, end: 0.22,
    content: (o: number) => (
      <div className="max-w-2xl px-6 md:px-16 lg:px-24" style={{ opacity: o, transform: `translateY(${(1 - o) * 30}px)` }}>
        <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">Smart Home &bull; ELV &bull; AV &bull; Networking</span>
        <h2 className="mt-4 font-inter text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-7xl">
          NestLink<br />Technologies<span className="text-[#0000FF]">.</span>
        </h2>
        <p className="mt-5 max-w-xl font-inter text-base leading-relaxed text-white/70">Innovative technology solutions for villas, homes, offices &amp; commercial spaces across Dubai.</p>
      </div>
    ),
  },
  {
    start: 0.2, end: 0.45,
    content: (o: number) => (
      <div className="max-w-xl px-6 md:px-16 lg:px-24" style={{ opacity: o, transform: `translateY(${(1 - o) * 30}px)` }}>
        <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">Smart Home Automation</span>
        <h3 className="mt-3 font-inter text-3xl font-bold leading-tight text-white md:text-4xl">Control every corner of your space.</h3>
        <p className="mt-4 font-inter text-sm leading-relaxed text-white/60">Lighting, climate, curtains, music, and security — all managed from one app or your voice.</p>
      </div>
    ),
  },
  {
    start: 0.42, end: 0.68,
    content: (o: number) => (
      <div className="max-w-xl px-6 md:px-16 lg:px-24 ml-auto text-right" style={{ opacity: o, transform: `translateY(${(1 - o) * 30}px)` }}>
        <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">Security &amp; Systems</span>
        <h3 className="mt-3 font-inter text-3xl font-bold leading-tight text-white md:text-4xl">Peace of mind, always on.</h3>
        <p className="mt-4 font-inter text-sm leading-relaxed text-white/60">Advanced CCTV, smart locks, video intercoms, and real-time alerts that keep you connected wherever you are.</p>
      </div>
    ),
  },
  {
    start: 0.65, end: 1,
    content: (o: number) => (
      <div className="flex flex-col items-center text-center px-6" style={{ opacity: o, transform: `translateY(${(1 - o) * 30}px)` }}>
        <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">End-to-end service</span>
        <h3 className="mt-3 max-w-2xl font-inter text-3xl font-bold leading-tight text-white md:text-4xl">From consultation to lifelong support.</h3>
        <p className="mt-4 max-w-lg font-inter text-sm leading-relaxed text-white/60">We design, install, and maintain intelligent systems tailored to your space.</p>
        <Link to="/services" className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-inter text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105">
          Explore Services
          <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
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
  const imagesRef = useRef<HTMLImageElement[]>([])
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

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
      img.onerror = () => {
        loaded++
        if (loaded === TOTAL) setReady(true)
      }
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
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      drawFrame(0)
    }
    resize()

    let resizeTimer: number
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(resize, 100)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
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
        drawFrame(proxy.frame)
        setProgress(proxy.p)
      },
    })

    return () => { tl.kill() }
  }, [ready])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#070b0a]" style={{ height: `${SECTION_VH}vh` }}>
      {/* Locked viewport-height container pinned by GSAP */}
      <div ref={pinRef} className="h-screen w-full overflow-hidden bg-[#070b0a]">
        <canvas ref={canvasRef} className="absolute inset-0 block" />

        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(0deg, rgba(7,11,10,0.7) 0%, rgba(7,11,10,0.3) 25%, transparent 50%, transparent 80%, rgba(7,11,10,0.4) 100%)',
          }}
        />

        {/* Content overlays */}
        <div className="absolute inset-0 z-20">
          {overlays.map((o) => (
            <div
              key={o.start}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: overlayOpacity(progress, o.start, o.end) }}
            >
              {o.content(1)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
