import { Link } from 'react-router-dom'
import {
  Home,
  Shield,
  Lock,
  Wifi,
  Monitor,
  Lightbulb,
  Smartphone,
  Video,
  Speaker,
  Sun,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../components/AnimatedSection'

const services = [
  {
    icon: Home,
    title: 'Smart Home Automation',
    description:
      'Transform how you interact with your space. We integrate lighting, climate, curtains, and daily routines into one intelligent system.',
    features: [
      'Lighting control',
      'Climate control',
      'Curtain control',
      'Scheduling',
      'Voice control',
      'App-based automation',
    ],
  },
  {
    icon: Shield,
    title: 'Security & CCTV Systems',
    description:
      'Protect your property with advanced surveillance, smart alerts, and remote monitoring accessible from anywhere.',
    features: [
      'Advanced surveillance',
      'Smart alerts',
      'Remote monitoring',
      '24/7 recording',
      'Motion detection',
      'Mobile notifications',
    ],
  },
  {
    icon: Lock,
    title: 'Access Control & Intercom',
    description:
      'Manage entry with secure smart locks, video intercoms, and visitor management systems for homes and offices.',
    features: [
      'Smart locks',
      'Video intercoms',
      'Visitor management',
      'Secure entry',
      'Remote unlock',
      'Access logs',
    ],
  },
  {
    icon: Wifi,
    title: 'Networking Solutions',
    description:
      'Build a reliable digital backbone with structured cabling, enterprise Wi-Fi, access points, and organized network racks.',
    features: [
      'Structured cabling',
      'Wi-Fi systems',
      'Access points',
      'Network racks',
      'Routers & switches',
      'Coverage planning',
    ],
  },
  {
    icon: Monitor,
    title: 'Audio, Video & Home Cinema',
    description:
      'Create immersive entertainment experiences with home cinemas, multi-room audio, conference room AV, and LED video walls.',
    features: [
      'Home cinema',
      'Multi-room audio',
      'Conference room AV',
      'Entertainment systems',
      'LED screens & video walls',
      'Game room integration',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Lighting, Outdoor & ELV Solutions',
    description:
      'Enhance ambience and safety with indoor, outdoor, and garden lighting, plus complete ELV infrastructure support.',
    features: [
      'Indoor lighting',
      'Outdoor lighting',
      'Garden lighting',
      'ELV infrastructure',
      'Scene lighting',
      'MEP support',
    ],
  },
]

const specialtySolutions = [
  {
    icon: Sun,
    title: 'Smart Lighting Control',
    text: 'Dimming, scene control, and scheduling for every mood and moment.',
  },
  {
    icon: Home,
    title: 'Motorized Curtains & Blinds',
    text: 'Privacy automation, daylight control, and energy efficiency.',
  },
  {
    icon: Sun,
    title: 'Climate & AC Control',
    text: 'Smart thermostats, mobile access, and scheduling.',
  },
  {
    icon: Lock,
    title: 'Smart Door Locks & Access Control',
    text: 'Secure entry, video intercoms, and visitor management.',
  },
  {
    icon: Video,
    title: 'CCTV & Smart Surveillance',
    text: '24/7 monitoring, remote viewing, and instant notifications.',
  },
  {
    icon: Smartphone,
    title: 'Voice, App & Scene Control',
    text: 'One-touch control through mobile apps and voice assistants.',
  },
  {
    icon: Speaker,
    title: 'Indoor & Outdoor Audio',
    text: 'Multi-room speaker systems for seamless entertainment.',
  },
  {
    icon: Monitor,
    title: 'LED Screens & Video Walls',
    text: 'High-impact displays for villas, offices, showrooms, and meeting rooms.',
  },
]

export default function Services() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#070b0a] pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              Our Services
            </span>
            <h1 className="mt-4 max-w-3xl font-sans text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
              Complete smart technology solutions
              <span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/60">
              From smart homes to commercial buildings, NestLink Technologies
              delivers integrated automation, security, networking, and AV
              systems tailored to your space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-[#0000FF]/30 md:p-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-sans text-sm text-white/70"
                      >
                        <CheckCircle size={14} className="text-[#0000FF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Specialty Solutions */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              Specialty Solutions
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-white md:text-4xl">
              Smart automation, security & AV
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-white/60">
              Best suited for villas, apartments, offices, and retail spaces.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {specialtySolutions.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#0000FF]/30">
                  <item.icon
                    size={24}
                    className="mb-4 text-[#0000FF]"
                  />
                  <h4 className="font-sans text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-12 text-center">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              Technology Platforms
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-white md:text-4xl">
              Trusted brands we work with
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Aqara', 'KNX', 'Ubiquiti', 'Home Assistant', 'Apple HomeKit', 'Tuya'].map(
                (platform) => (
                  <div
                    key={platform}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4"
                  >
                    <span className="font-sans text-sm font-semibold text-white/90">
                      {platform}
                    </span>
                  </div>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
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
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105"
            >
              Request a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
