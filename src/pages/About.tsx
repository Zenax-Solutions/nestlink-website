import { Link } from 'react-router-dom'
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Wifi,
  Monitor,
  Zap,
  HeadphonesIcon,
  ArrowRight,
} from 'lucide-react'
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../components/AnimatedSection'

const values = [
  { icon: Lightbulb, title: 'Innovation', text: 'We adopt modern, future-ready technology platforms.' },
  { icon: Heart, title: 'Quality', text: 'Clean engineering and careful workmanship in every project.' },
  { icon: Shield, title: 'Trust', text: 'Honest advice, transparent pricing, and dependable delivery.' },
  { icon: Users, title: 'Customer Focus', text: 'Solutions shaped around your lifestyle and operational needs.' },
]

const fieldObjectives = [
  {
    icon: Monitor,
    title: 'Comfort & Control',
    text: 'App-based control of lighting, curtains, climate, scenes, and daily routines.',
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    text: 'CCTV, access control, intercom, smart locks, and real-time alerts.',
  },
  {
    icon: Wifi,
    title: 'Connectivity First',
    text: 'Reliable Wi-Fi, structured cabling, and organized network racks.',
  },
  {
    icon: Monitor,
    title: 'Premium AV Experience',
    text: 'Home cinema, multi-room audio, video walls, and entertainment systems.',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    text: 'Sensors, smart lighting, and climate control that reduce waste.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Long-Term Support',
    text: 'Maintenance, upgrades, and troubleshooting whenever you need help.',
  },
]

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#070b0a] pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection>
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              About Us
            </span>
            <h1 className="mt-4 max-w-3xl font-inter text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
              Technology that fits your space
              <span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/60">
              NestLink Technologies is a Dubai-based technology solutions provider
              specializing in smart home automation, ELV systems, networking,
              security, lighting, and audio-visual integration for villas, homes,
              offices, retail spaces, and commercial projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <Target size={28} />
                </div>
                <h2 className="font-inter text-2xl font-bold text-white md:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 font-inter text-base leading-relaxed text-white/60">
                  To design, supply, install, and support intelligent technology
                  systems that make spaces smarter, safer, more connected, and
                  easier to manage.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Practical engineering',
                    'Clean installation',
                    'Trusted products',
                    'Responsive support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0000FF]" />
                      <span className="font-inter text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <Eye size={28} />
                </div>
                <h2 className="font-inter text-2xl font-bold text-white md:text-3xl">
                  Our Vision
                </h2>
                <p className="mt-4 font-inter text-base leading-relaxed text-white/60">
                  To become a trusted technology partner in the UAE for smart home
                  automation, ELV, security, networking, and AV integration —
                  recognized for professional design, quality workmanship,
                  dependable after-sales service, and modern solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              What Drives Us
            </span>
            <h2 className="mt-3 font-inter text-3xl font-bold text-white md:text-4xl">
              Core Values
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-center transition-colors duration-300 hover:border-[#0000FF]/30">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                    <value.icon size={26} />
                  </div>
                  <h3 className="font-inter text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-white/60">
                    {value.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Field Objectives */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              Field Objectives
            </span>
            <h2 className="mt-3 font-inter text-3xl font-bold text-white md:text-4xl">
              Built around what matters most
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fieldObjectives.map((obj) => (
              <StaggerItem key={obj.title}>
                <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#0000FF]/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                    <obj.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-inter text-base font-bold text-white">
                      {obj.title}
                    </h3>
                    <p className="mt-1 font-inter text-sm leading-relaxed text-white/60">
                      {obj.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection>
            <h2 className="font-inter text-3xl font-bold leading-tight text-white md:text-4xl">
              Let’s bring smart technology to your project
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter text-base text-white/60">
              From villas to commercial buildings, we design systems that match
              your needs and scale with your future.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-inter text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105"
            >
              Get in Touch
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
