import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Shield, Wifi, Monitor, Lightbulb, Headphones } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Zap, title: 'Professional Installation', desc: 'Clean, safe and reliable work for villas, offices and commercial projects.' },
  { icon: Shield, title: 'Complete Solution Provider', desc: 'From smart home automation to CCTV, Wi-Fi, lighting, electrical and MEP services.' },
  { icon: Wifi, title: 'Affordable & Flexible Options', desc: 'We provide solutions based on your budget, requirements and site conditions.' },
  { icon: Monitor, title: 'Unified Control', desc: 'One app to control everything from anywhere.' },
  { icon: Lightbulb, title: 'Energy Efficiency', desc: 'Smart systems reduce energy consumption by up to 30%.' },
  { icon: Headphones, title: 'After-Sales Support', desc: 'We support our clients even after installation to make sure the system runs smoothly.' },
]

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const triggersRef = useRef<ScrollTrigger[]>([])

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const track = trackRef.current
    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      })

      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger)
      }
    }, sectionRef)

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)

    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      clearTimeout(refreshTimeout)
      window.removeEventListener('resize', handleResize)
      triggersRef.current = []
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#070b0a]"
    >
      {/* Header */}
      <div className="relative z-10 mx-auto flex h-[30%] max-w-7xl flex-col items-center justify-center px-6 text-center md:px-12">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
          Why Choose NestLink Technologies?
        </span>
        <h2 className="mt-5 max-w-3xl font-sans text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
          Why Dubai trusts NestLink
        </h2>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="relative z-10 flex h-[70%] items-center gap-5 px-6 md:gap-6 md:px-12"
        style={{ willChange: 'transform' }}
      >
        {features.map((feat) => {
          const Icon = feat.icon
          return (
            <div
              key={feat.title}
              className="flex h-[50vh] w-[78vw] flex-shrink-0 flex-col justify-center rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-md transition-colors hover:border-[#0000FF]/30 md:w-[38vw] md:p-10 lg:w-[26vw]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.12] text-white">
                <Icon size={28} />
              </div>
              <h3 className="font-sans text-xl font-bold text-white md:text-2xl">{feat.title}</h3>
              <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-white/60 md:text-base">{feat.desc}</p>
            </div>
          )
        })}

        {/* End spacer */}
        <div className="h-[50vh] w-6 flex-shrink-0 md:w-8 lg:w-6" />
      </div>
    </section>
  )
}
