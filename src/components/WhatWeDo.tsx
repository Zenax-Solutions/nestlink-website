import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    num: '01',
    title: 'Smart Home Automation',
    description:
      'Smart lighting, curtain control, AC control, smart switches, mobile app control, voice control, and customized automation scenes for villas, apartments, and offices.',
    media: { type: 'video' as const, src: '/videos/smart-home.mp4' },
  },
  {
    num: '02',
    title: 'CCTV Installation',
    description:
      'Wired cameras, wireless cameras, solar-powered cameras, battery-operated cameras, NVR setup, mobile viewing, and complete surveillance solutions.',
    media: { type: 'video' as const, src: '/videos/cctv.mp4' },
  },
  {
    num: '03',
    title: 'Wi-Fi & Networking Solutions',
    description:
      'Access points, routers, structured cabling, data points, network cabinets, full villa Wi-Fi coverage, and office network setup.',
    media: { type: 'video' as const, src: '/videos/wifi.mp4' },
  },
  {
    num: '04',
    title: 'Intercom Systems',
    description:
      'Video intercom, audio intercom, indoor monitor installation, outdoor station setup, mobile app integration, and door/gate release control.',
    media: { type: 'video' as const, src: '/videos/intercom.mp4' },
  },
  {
    num: '05',
    title: 'Access Control Systems',
    description:
      'Fingerprint access, card access, keypad access, magnetic locks, door controllers, gym access systems, and office entry control.',
    media: { type: 'video' as const, src: '/videos/Access-Control-Systems.mp4' },
  },
  {
    num: '06',
    title: 'Indoor Lighting Solutions',
    description:
      'Professional indoor lighting solutions for villas, apartments, offices, and commercial spaces. We provide ceiling lights, spotlights, chandeliers, LED strip lights, cove lighting, decorative lighting, smart lighting control, and lighting maintenance.',
    media: { type: 'video' as const, src: '/videos/lighting.mp4' },
  },
  {
    num: '07',
    title: 'Outdoor Lighting Solutions',
    description:
      'Outdoor lighting solutions for villas, gardens, landscapes, building façades, pathways, pool areas, and parking areas. We provide garden lights, wall lights, façade lighting, landscape lighting, waterproof LED strips, and outdoor smart lighting control.',
    media: { type: 'video' as const, src: '/videos/outdoor-lighting.mp4' },
  },
  {
    num: '08',
    title: 'Indoor Screens & Video Walls',
    description:
      'Indoor display solutions for offices, meeting rooms, control rooms, shops, showrooms, and entertainment areas. We provide LED screens, LCD video walls, digital signage, meeting room displays, and control room screen solutions.',
    media: { type: 'video' as const, src: '/videos/Indoor-Screens-Video-Walls.mp4' },
  },
  {
    num: '09',
    title: 'Outdoor LED Screens',
    description:
      'Outdoor LED screen solutions for villas, pool areas, gardens, restaurants, cafés, events, and commercial spaces. We provide weather-resistant LED screens, outdoor display installation, structure support, controllers, cabling, and media input setup.',
    media: { type: 'video' as const, src: '/videos/Outdoor-LED-Screens.mp4' },
  },
  {
    num: '10',
    title: 'Home Cinema Solutions',
    description:
      'Complete home cinema setup including projector installation, screen installation, AV receiver setup, surround sound speakers, acoustic planning, Apple TV/media setup and smart remote control.',
    media: { type: 'video' as const, src: '/videos/cinema.mp4' },
  },
  {
    num: '11',
    title: 'Indoor & Outdoor Audio',
    description:
      'Audio solutions for living rooms, majlis areas, gardens, pool areas, restaurants, and commercial spaces. We provide ceiling speakers, outdoor speakers, amplifiers, multi-room audio, and music control systems.',
    media: { type: 'video' as const, src: '/videos/Indoor-&-Outdoor-Audio.mp4' },
  },
  {
    num: '12',
    title: 'Electrical Works',
    description:
      'Electrical installation, maintenance, and repair services including lighting points, power sockets, DB panel works, wiring, load checking, fault finding, and general electrical maintenance.',
    media: { type: 'video' as const, src: '/videos/Electrical-Works.mp4' },
  },
  {
    num: '13',
    title: 'AC Installation & Maintenance',
    description:
      'AC installation, servicing, repair and control solutions for residential and commercial spaces, including thermostat replacement and smart AC control integration.',
    media: { type: 'video' as const, src: '/videos/AC-Installation-Maintenance.mp4' },
  },
  {
    num: '14',
    title: 'MEP Solutions',
    description:
      'Complete MEP support including electrical works, AC systems, pump room works, lighting, low-current systems and building support services.',
    media: { type: 'video' as const, src: '/videos/MEP-Solutions.mp4' },
  },
  {
    num: '15',
    title: 'Building Automation & Control Systems',
    description:
      'Automation solutions for villas, offices and commercial buildings, including lighting control, AC control, sensor-based control, energy-saving automation and centralized system management.',
    media: { type: 'video' as const, src: '/videos/Building-Automation-Control-Systems.mp4' },
  },
  {
    num: '16',
    title: 'Fire Alarm & Safety Systems',
    description:
      'Fire alarm system installation and support, including smoke detectors, heat detectors, manual call points, sounders and basic system maintenance.',
    media: { type: 'video' as const, src: '/videos/fire-alams-system.mp4' },
  },
  {
    num: '17',
    title: 'IT Support & AMC Services',
    description:
      'IT support and annual maintenance services for offices and businesses, including network support, Wi-Fi troubleshooting, CCTV support, system maintenance and technical assistance.',
    media: { type: 'video' as const, src: '/videos/IT-Support-AMC-Services.mp4' },
  },
]

export default function WhatWeDo() {
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
          scrub: 2.5,
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
      className="relative h-screen w-full overflow-hidden bg-[#f2f2f2]"
    >
      {/* Header */}
      <div className="relative z-10 mx-auto flex h-[30%] max-w-7xl flex-col items-center justify-center px-6 text-center md:px-12">
        <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
          Our Value
        </span>
        <h2 className="mt-5 max-w-3xl font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-5xl">
          Dubai's Smart Home & ELV Services All Under One Roof
        </h2>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="relative z-10 flex h-[70%] items-center gap-5 px-6 md:gap-6 md:px-12"
        style={{ willChange: 'transform' }}
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
                <div className="flex items-start font-sans text-3xl font-bold leading-none text-white md:text-4xl">
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
