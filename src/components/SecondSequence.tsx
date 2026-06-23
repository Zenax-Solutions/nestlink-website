import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Shield, Wifi, Monitor, Lightbulb, Headphones } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TOTAL = 134
const SECTION_VH = 700

function frameSrc(i: number) {
  const n = String(i + 1).padStart(3, '0')
  return `/second-sequence-images/ezgif-frame-${n}.jpg`
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, cw: number, ch: number) {
  const iw = img.naturalWidth
  const ih = img.naturalHeight
  const imgAspect = iw / ih
  const canvasAspect = cw / ch
  let sw: number, sh: number, sx: number, sy: number
  if (imgAspect > canvasAspect) {
    sh = ch
    sw = sh * imgAspect
    sx = -(sw - cw) / 2
    sy = 0
  } else {
    sw = cw
    sh = sw / imgAspect
    sx = 0
    sy = -(sh - ch) / 2
  }
  ctx.drawImage(img, sx, sy, sw, sh)
}

const stats = [
  { value: '500', suffix: '+', label: 'Projects Completed' },
  { value: '10', suffix: '+', label: 'Years Experience' },
  { value: '50', suffix: '+', label: 'Team Members' },
  { value: '98', suffix: '%', label: 'Client Satisfaction' },
]

const features = [
  { icon: Zap, title: 'AI-Powered Automation', desc: 'Systems that learn your habits and adapt automatically.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and 24/7 monitoring keep you safe.' },
  { icon: Wifi, title: 'Seamless Connectivity', desc: 'Mesh Wi-Fi and structured cabling everywhere.' },
  { icon: Monitor, title: 'Unified Control', desc: 'One app to control everything from anywhere.' },
  { icon: Lightbulb, title: 'Energy Efficiency', desc: 'Smart systems reduce energy consumption by up to 30%.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical support and monitoring.' },
]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export default function SecondSequence() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [ready, setReady] = useState(false)
  const isMobile = useIsMobile()

  // Content overlay refs
  const impactRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const featureCardsRef = useRef<HTMLDivElement[]>([])

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

  // GSAP scroll + content overlay animations
  useEffect(() => {
    if (!ready || !pinRef.current || !sectionRef.current) return

    const proxy = { frame: 0 }

    const tl = gsap.to(proxy, {
      frame: TOTAL - 1,
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

        const p = proxy.frame / (TOTAL - 1)

        // Impact header + cards combined: show 8%–48%
        if (impactRef.current) {
          let op = 0
          if (p > 0.06 && p < 0.50) {
            op = p < 0.14 ? (p - 0.06) / 0.08 : p > 0.42 ? 1 - (p - 0.42) / 0.08 : 1
          }
          impactRef.current.style.opacity = String(op)
          impactRef.current.style.transform = `translateY(${(1 - op) * 30}px)`
        }

        // Features: show 52%–92%
        if (featuresRef.current) {
          let op = 0
          if (p > 0.50 && p < 0.94) {
            op = p < 0.60 ? (p - 0.50) / 0.10 : p > 0.86 ? 1 - (p - 0.86) / 0.08 : 1
          }
          featuresRef.current.style.opacity = String(op)

          // Mobile: stagger cards vertically
          if (isMobile) {
            featuresRef.current.style.transform = `translateY(${(1 - op) * 40}px)`
            featureCardsRef.current.forEach((card, i) => {
              if (!card) return
              const cardStart = 0.54 + i * 0.055
              const cardEnd = cardStart + 0.14
              let cardOp = 0
              if (p > cardStart && p < cardEnd + 0.1) {
                cardOp = p < cardStart + 0.07 ? (p - cardStart) / 0.07 : p > cardEnd ? 1 - (p - cardEnd) / 0.1 : 1
              }
              card.style.opacity = String(cardOp)
              card.style.transform = `translateY(${(1 - cardOp) * 50}px)`
            })
          } else {
            featuresRef.current.style.transform = `translateY(${(1 - op) * 40}px)`
          }
        }
      },
    })

    return () => { tl.kill() }
  }, [ready, isMobile])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#070b0a]" style={{ height: `${SECTION_VH}vh` }}>
      <div ref={pinRef} className="h-screen w-full overflow-hidden bg-[#070b0a]">
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 block" />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Impact Header + Cards combined */}
        <div
          ref={impactRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center opacity-0 md:gap-10 md:px-12"
          style={{ willChange: 'transform, opacity' }}
        >
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Our Impact
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-sans text-3xl font-bold leading-[1.08] tracking-tight text-white md:mt-6 md:text-4xl lg:text-6xl">
              Numbers that speak<br />for themselves
            </h2>
          </div>
          <div className="grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/15 bg-white/[0.12] px-4 py-6 text-center backdrop-blur-xl md:px-5 md:py-8"
              >
                <div className="font-sans text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  {stat.value}{stat.suffix}
                </div>
                <p className="mt-1 font-sans text-xs font-medium text-white/70 md:mt-2 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div
          ref={featuresRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 opacity-0 md:px-12"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="w-full max-w-5xl">
            <div className="mb-6 text-center md:mb-10">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md md:px-5 md:py-2 md:text-xs">
                Why Choose NestLink Technologies?
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-sans text-2xl font-bold leading-[1.08] tracking-tight text-white md:mt-5 md:text-3xl lg:text-4xl">
                Built for the way<br />you live
              </h2>
            </div>

            {isMobile ? (
              <div className="flex flex-col gap-3">
                {features.map((feat, i) => {
                  const Icon = feat.icon
                  return (
                    <div
                      key={feat.title}
                      ref={(el) => { featureCardsRef.current[i] = el! }}
                      className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.12] p-4 backdrop-blur-xl"
                      style={{ opacity: 0 }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.12] text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-bold text-white">{feat.title}</h4>
                        <p className="mt-1 font-sans text-xs leading-relaxed text-white/70">{feat.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feat) => {
                  const Icon = feat.icon
                  return (
                    <div
                      key={feat.title}
                      className="rounded-3xl border border-white/15 bg-white/[0.12] p-7 backdrop-blur-xl transition-all hover:bg-white/[0.18]"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.12] text-white">
                        <Icon size={24} />
                      </div>
                      <h4 className="font-sans text-lg font-bold text-white">{feat.title}</h4>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">{feat.desc}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
