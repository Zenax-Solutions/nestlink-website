import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TOTAL = 134
const SECTION_VH = 300

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

export default function SecondSequence() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [ready, setReady] = useState(false)

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
      },
    })

    return () => { tl.kill() }
  }, [ready])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#070b0a]" style={{ height: `${SECTION_VH}vh` }}>
      <div ref={pinRef} className="h-screen w-full overflow-hidden bg-[#070b0a]">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
      </div>
    </section>
  )
}
