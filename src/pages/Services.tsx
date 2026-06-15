import { Link } from 'react-router-dom'
import { ArrowRight, Home, Shield, Lock, Wifi, Monitor, Lightbulb, CheckCircle, Sun, Smartphone, Video, Speaker } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    icon: Home, title: 'Smart Home Automation', image: '/smart-home.jpg',
    description: 'Transform how you interact with your space. We integrate lighting, climate, curtains, and daily routines into one intelligent system.',
    features: ['Lighting control', 'Climate control', 'Curtain control', 'Scheduling', 'Voice control', 'App-based automation'],
  },
  {
    icon: Shield, title: 'Security & CCTV Systems', video: '/videos/cctv.mp4',
    description: 'Protect your property with advanced surveillance, smart alerts, and remote monitoring accessible from anywhere.',
    features: ['Advanced surveillance', 'Smart alerts', 'Remote monitoring', '24/7 recording', 'Motion detection', 'Mobile notifications'],
  },
  {
    icon: Lock, title: 'Access Control & Intercom', video: '/videos/access-intercom.mp4',
    description: 'Manage entry with secure smart locks, video intercoms, and visitor management systems for homes and offices.',
    features: ['Smart locks', 'Video intercoms', 'Visitor management', 'Secure entry', 'Remote unlock', 'Access logs'],
  },
  {
    icon: Wifi, title: 'Networking Solutions', video: '/videos/networking.mp4',
    description: 'Build a reliable digital backbone with structured cabling, enterprise Wi-Fi, access points, and organized network racks.',
    features: ['Structured cabling', 'Wi-Fi systems', 'Access points', 'Network racks', 'Routers & switches', 'Coverage planning'],
  },
  {
    icon: Monitor, title: 'Audio, Video & Home Cinema', video: '/videos/cinema.mp4',
    description: 'Create immersive entertainment experiences with home cinemas, multi-room audio, conference room AV, and LED video walls.',
    features: ['Home cinema', 'Multi-room audio', 'Conference room AV', 'Entertainment systems', 'LED screens & video walls', 'Game room integration'],
  },
  {
    icon: Lightbulb, title: 'Lighting & ELV Solutions', video: '/videos/lighting.mp4',
    description: 'Enhance ambience and safety with indoor, outdoor, and garden lighting, plus complete ELV infrastructure support.',
    features: ['Indoor lighting', 'Outdoor lighting', 'Garden lighting', 'ELV infrastructure', 'Scene lighting', 'MEP support'],
  },
]

const specialtySolutions = [
  { icon: Sun, title: 'Smart Lighting Control', text: 'Dimming, scene control, and scheduling for every mood and moment.' },
  { icon: Home, title: 'Motorized Curtains & Blinds', text: 'Privacy automation, daylight control, and energy efficiency.' },
  { icon: Sun, title: 'Climate & AC Control', text: 'Smart thermostats, mobile access, and scheduling.' },
  { icon: Lock, title: 'Smart Door Locks & Access', text: 'Secure entry, video intercoms, and visitor management.' },
  { icon: Video, title: 'CCTV & Smart Surveillance', text: '24/7 monitoring, remote viewing, and instant notifications.' },
  { icon: Smartphone, title: 'Voice, App & Scene Control', text: 'One-touch control through mobile apps and voice assistants.' },
  { icon: Speaker, title: 'Indoor & Outdoor Audio', text: 'Multi-room speaker systems for seamless entertainment.' },
  { icon: Monitor, title: 'LED Screens & Video Walls', text: 'High-impact displays for villas, offices, showrooms, and meeting rooms.' },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/page-header.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Complete smart technology solutions<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              From smart homes to commercial buildings, NestLink Technologies
              delivers integrated automation, security, networking, and AV
              systems tailored to your space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-full overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  {service.video ? (
                    <video
                      src={service.video}
                      autoPlay muted loop playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-6 inline-flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                      <service.icon size={20} />
                    </div>
                    <h3 className="font-sans text-lg font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-sans text-sm leading-relaxed text-black/60">{service.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 font-sans text-sm text-black/70">
                        <CheckCircle size={14} className="text-[#0000FF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Solutions */}
      <section className="relative overflow-hidden bg-[#070b0a] py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
              Specialty Solutions
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-white md:text-4xl">
              Smart automation, security & AV
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {specialtySolutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-[#0000FF]/30"
              >
                <item.icon size={24} className="mb-4 text-[#0000FF]" />
                <h4 className="font-sans text-base font-bold text-white">{item.title}</h4>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-12 text-center">
            <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
              Technology Platforms
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-black md:text-4xl">
              Trusted brands we work with
            </h2>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { name: 'Aqara', logo: '/brand-logos/Aqara.png' },
              { name: 'KNX', logo: '/brand-logos/KNX_logo.svg.png' },
              { name: 'Ubiquiti', logo: '/brand-logos/Ubiquiti_Logo_Horizontal.png' },
              { name: 'Home Assistant', logo: '/brand-logos/home-assistant-logo-new.png' },
              { name: 'Apple HomeKit', logo: '/brand-logos/ios-badge-works-with-apple-homekit-e1433344613575.png' },
              { name: 'Tuya', logo: '/brand-logos/TUYA_BIG-c185e3f1.png' },
            ].map((platform) => (
              <div
                key={platform.name}
                className="flex h-20 w-40 items-center justify-center rounded-2xl border border-black/5 bg-white px-6 py-4 shadow-sm transition-colors hover:border-black/10"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#070b0a] py-24">
        <div className="absolute inset-0">
          <img src="/smart-home.jpg" alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b0a]/95 to-[#070b0a]/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection>
            <h2 className="font-sans text-3xl font-bold leading-tight text-white md:text-4xl">
              Not sure which solution fits your project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-white/60">
              Our team will assess your space and recommend the right mix of
              technology, products, and budget.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105"
            >
              Request a Free Consultation
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#070b0a]">
                <ArrowRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
