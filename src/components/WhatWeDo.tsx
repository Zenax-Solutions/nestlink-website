import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    num: '01',
    title: 'Smart Home Automation',
    description:
      'Lighting, climate, curtains, and scene control through intuitive apps and voice assistants.',
    media: { type: 'image' as const, src: '/footer.jpg' },
  },
  {
    num: '02',
    title: 'Security & CCTV Systems',
    description:
      'Advanced surveillance, smart alerts, and 24/7 remote monitoring for complete peace of mind.',
    media: { type: 'video' as const, src: '/videos/cctv.mp4' },
  },
  {
    num: '03',
    title: 'Access Control & Intercom',
    description:
      'Smart locks, video intercoms, and secure visitor management for homes and offices.',
    media: { type: 'video' as const, src: '/videos/access-intercom.mp4' },
  },
  {
    num: '04',
    title: 'Networking Solutions',
    description:
      'Structured cabling, enterprise Wi-Fi, access points, and network racks built for reliability.',
    media: { type: 'video' as const, src: '/videos/networking.mp4' },
  },
  {
    num: '05',
    title: 'Audio, Video & Home Cinema',
    description:
      'Immersive home cinemas, multi-room audio, and conference room AV systems.',
    media: { type: 'video' as const, src: '/videos/cinema.mp4' },
  },
  {
    num: '06',
    title: 'Lighting & ELV Solutions',
    description:
      'Indoor, outdoor, and garden lighting with complete ELV infrastructure design.',
    media: { type: 'video' as const, src: '/videos/lighting.mp4' },
  },
]

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
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
            {card.media.type === 'video' ? (
              <video
                src={card.media.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <img
                src={card.media.src}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            )}
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

        {/* End spacer so the last card scrolls fully into view */}
        <div className="h-[62vh] w-6 flex-shrink-0 md:w-8 lg:w-6" />
      </div>
    </section>
  )
}
