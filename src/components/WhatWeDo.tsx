import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, CheckCircle2, MapPin, Headphones } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    num: '01',
    title: 'Smart Home Automation',
    description:
      'Lighting, climate, curtains, and scene control through intuitive apps and voice assistants.',
    image: '/footer.jpg',
  },
  {
    num: '02',
    title: 'Security & CCTV Systems',
    description:
      'Advanced surveillance, smart alerts, and 24/7 remote monitoring for complete peace of mind.',
    image: '/hero/ezgif-frame-030.jpg',
  },
  {
    num: '03',
    title: 'Access Control & Intercom',
    description:
      'Smart locks, video intercoms, and secure visitor management for homes and offices.',
    image: '/hero/ezgif-frame-050.jpg',
  },
  {
    num: '04',
    title: 'Networking Solutions',
    description:
      'Structured cabling, enterprise Wi-Fi, access points, and network racks built for reliability.',
    image: '/hero/ezgif-frame-070.jpg',
  },
  {
    num: '05',
    title: 'Audio, Video & Home Cinema',
    description:
      'Immersive home cinemas, multi-room audio, and conference room AV systems.',
    image: '/hero/ezgif-frame-090.jpg',
  },
  {
    num: '06',
    title: 'Lighting & ELV Solutions',
    description:
      'Indoor, outdoor, and garden lighting with complete ELV infrastructure design.',
    image: '/hero/ezgif-frame-110.jpg',
  },
]

const summaryTiles = [
  { label: 'Years Experience', value: '10+', icon: Clock },
  { label: 'Projects Delivered', value: '500+', icon: CheckCircle2 },
  { label: 'UAE Coverage', value: 'Dubai', icon: MapPin },
  { label: 'Support', value: '24/7', icon: Headphones },
]

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const triggersRef = useRef<ScrollTrigger[]>([])

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const track = trackRef.current
    const totalScroll = track.scrollWidth - window.innerWidth

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    if (tween.scrollTrigger) {
      triggersRef.current.push(tween.scrollTrigger)
    }

    return () => {
      triggersRef.current.forEach((st) => st.kill())
      triggersRef.current = []
    }
  }, [])

  // Fade in summary panel when it scrolls into view
  useEffect(() => {
    const summary = summaryRef.current
    if (!summary) return

    const content = summary.querySelectorAll('.summary-fade')
    gsap.set(content, { opacity: 0, y: 30 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(content, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(summary)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#f2f2f2]"
    >
      {/* Header */}
      <div className="relative z-10 mx-auto flex h-[30%] max-w-7xl flex-col items-center justify-center px-6 text-center md:px-12">
        <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
          Our Value
        </span>
        <h2 className="mt-5 max-w-3xl font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-5xl">
          Modern Solutions & Lasting Benefits For Your Space
        </h2>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="relative z-10 flex h-[70%] items-center gap-5 px-6 md:gap-6 md:px-12"
      >
        {cards.map((card) => (
          <div
            key={card.num}
            className="relative h-[62vh] w-[78vw] flex-shrink-0 overflow-hidden rounded-3xl md:w-[38vw] lg:w-[26vw]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex items-start font-sans text-4xl font-bold leading-none text-white md:text-5xl">
                  {card.num}
                  <sup className="ml-1 text-[10px] font-medium text-white/70 md:text-xs">
                    No
                  </sup>
                </div>
                <h3 className="flex-1 pt-1 font-sans text-lg font-semibold leading-tight text-white md:text-xl">
                  {card.title}
                </h3>
              </div>

              <p className="max-w-sm font-sans text-sm leading-relaxed text-white/80 md:text-base">
                {card.description}
              </p>
            </div>
          </div>
        ))}

        {/* Summary panel */}
        <div
          ref={summaryRef}
          className="relative h-[62vh] w-[90vw] flex-shrink-0 overflow-hidden rounded-3xl bg-[#0a0a0a] md:w-[60vw] lg:w-[40vw]"
        >
          <img
            src="/smart-home.jpg"
            alt="Smart home interior"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />

          <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
            <div className="summary-fade">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
                Why NestLink
              </span>
              <h3 className="mt-5 max-w-md font-sans text-2xl font-bold leading-tight text-white md:text-3xl">
                Your Trusted Technology Partner
              </h3>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/70 md:text-base">
                From concept to completion, we deliver smart solutions that
                elevate comfort, security, and efficiency for every space.
              </p>
            </div>

            <div className="summary-fade grid grid-cols-2 gap-3 md:gap-4">
              {summaryTiles.map((tile) => (
                <div
                  key={tile.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm md:p-5"
                >
                  <tile.icon size={22} className="text-[#0000FF]" />
                  <div className="mt-3 font-sans text-2xl font-bold text-white md:text-3xl">
                    {tile.value}
                  </div>
                  <div className="mt-1 font-sans text-xs uppercase tracking-wider text-white/50 md:text-sm">
                    {tile.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
