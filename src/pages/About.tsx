import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Lightbulb, Heart, Shield, Users, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  { icon: Lightbulb, title: 'Innovation', text: 'We adopt modern, future-ready technology platforms.' },
  { icon: Heart, title: 'Quality', text: 'Clean engineering and careful workmanship in every project.' },
  { icon: Shield, title: 'Trust', text: 'Honest advice, transparent pricing, and dependable delivery.' },
  { icon: Users, title: 'Customer Focus', text: 'Solutions shaped around your lifestyle and operational needs.' },
]

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/smart-home.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Technology that fits<br />
              your space<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              NestLink Technologies is a Dubai-based technology solutions provider
              specializing in smart home automation, ELV systems, networking,
              security, lighting, and audio-visual integration for villas, homes,
              offices, retail spaces, and commercial projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#070b0a]">
                  <ArrowRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-sans text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/40"
              >
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f2f2f2] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="font-sans text-3xl font-bold text-[#0000FF] md:text-4xl">{stat.value}</div>
                <div className="mt-1 font-sans text-xs uppercase tracking-wider text-black/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f2f2f2] pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <Target size={28} />
                </div>
                <h2 className="font-sans text-2xl font-bold text-black md:text-3xl">Our Mission</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
                  To design, supply, install, and support intelligent technology
                  systems that make spaces smarter, safer, more connected, and
                  easier to manage.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Practical engineering', 'Clean installation', 'Trusted products', 'Responsive support'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0000FF]" />
                      <span className="font-sans text-sm text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <Eye size={28} />
                </div>
                <h2 className="font-sans text-2xl font-bold text-black md:text-3xl">Our Vision</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
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
      <section className="relative overflow-hidden bg-[#070b0a] py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
              What Drives Us
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-white md:text-4xl">
              Core Values
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-sm transition-colors hover:border-[#0000FF]/30"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <value.icon size={26} />
                </div>
                <h3 className="font-sans text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Objectives */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
              Field Objectives
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-black md:text-4xl">
              Built around what matters most
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Lightbulb, title: 'Comfort & Control', text: 'App-based control of lighting, curtains, climate, scenes, and daily routines.' },
              { icon: Shield, title: 'Security & Safety', text: 'CCTV, access control, intercom, smart locks, and real-time alerts.' },
              { icon: Users, title: 'Connectivity First', text: 'Reliable Wi-Fi, structured cabling, and organized network racks.' },
              { icon: Target, title: 'Premium AV Experience', text: 'Home cinema, multi-room audio, video walls, and entertainment systems.' },
              { icon: Heart, title: 'Energy Efficiency', text: 'Sensors, smart lighting, and climate control that reduce waste.' },
              { icon: CheckCircle, title: 'Long-Term Support', text: 'Maintenance, upgrades, and troubleshooting whenever you need help.' },
            ].map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex h-full gap-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                  <obj.icon size={22} />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-black">{obj.title}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-black/60">{obj.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#070b0a] py-24">
        <div className="absolute inset-0">
          <img src="/footer.jpg" alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b0a]/95 to-[#070b0a]/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection>
            <h2 className="font-sans text-3xl font-bold leading-tight text-white md:text-4xl">
              Let's bring smart technology to your project
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-white/60">
              From villas to commercial buildings, we design systems that match
              your needs and scale with your future.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105"
            >
              Get in Touch
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
