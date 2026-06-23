import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Lightbulb, Heart, Shield, Users, Home, Camera, Wifi, Phone, Sun, Monitor, Tv, Film, Music, Zap, Thermometer, Building, Cpu, Flame } from 'lucide-react'
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
  { value: '200+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video src="/footer-video.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Dubai's Trusted Smart Home<br />
              & ELV Technology Partner<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              NestLink Technologies is a Dubai-based technology and building solutions company, providing comprehensive Smart Home, ELV, CCTV, Wi-Fi, Lighting, Audio, Home Cinema, Electrical, and MEP services for villas, offices, retail spaces, and commercial projects across the UAE.
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
                Our Services in Dubai
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
                  Our mission is to provide reliable, affordable, and high-quality Smart Home, ELV, MEP, and technology solutions for residential and commercial clients across the UAE.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
                  We aim to make every project simple, secure, and future-ready by offering professional consultation, proper installation, trusted products, and dependable after-sales support.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
                  Our goal is to help customers enjoy better security, comfort, connectivity, and control through smart and practical technology solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <Eye size={28} />
                </div>
                <h2 className="font-sans text-2xl font-bold text-black md:text-3xl">Our Vision</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
                  Our vision is to become a trusted technology and MEP solutions provider in the UAE, recognized for quality work, honest service, and customer satisfaction.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
                  We aim to support the growing demand for smart villas, connected offices, secure buildings, and modern lifestyle solutions by delivering innovative, reliable, and cost-effective systems.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
                  NestLink Technologies is committed to building long-term relationships with clients by providing solutions that are not only modern but also easy to use, easy to maintain, and suitable for the UAE market.
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

      {/* Services */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
              What We Do in Dubai
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-black md:text-4xl">
              Our Services
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Home, title: 'Smart Home Automation', text: 'Smart lighting, curtain control, AC control, smart switches, mobile app control, voice control, and customized automation scenes for villas, apartments, and offices.' },
              { icon: Camera, title: 'CCTV Installation', text: 'Wired cameras, wireless cameras, solar-powered cameras, battery-operated cameras, NVR setup, mobile viewing, and complete surveillance solutions.' },
              { icon: Wifi, title: 'Wi-Fi & Networking Solutions', text: 'Access points, routers, structured cabling, data points, network cabinets, full villa Wi-Fi coverage, and office network setup.' },
              { icon: Phone, title: 'Intercom Systems', text: 'Video intercom, audio intercom, indoor monitor installation, outdoor station setup, mobile app integration, and door/gate release control.' },
              { icon: Shield, title: 'Access Control Systems', text: 'Fingerprint access, card access, keypad access, magnetic locks, door controllers, gym access systems, and office entry control.' },
              { icon: Lightbulb, title: 'Indoor Lighting Solutions', text: 'Professional indoor lighting for villas, apartments, offices, and commercial spaces — ceiling lights, spotlights, chandeliers, LED strip lights, cove lighting, decorative lighting, smart lighting control, and maintenance.' },
              { icon: Sun, title: 'Outdoor Lighting Solutions', text: 'Outdoor lighting for villas, gardens, landscapes, building façades, pathways, pool areas, and parking — garden lights, wall lights, façade lighting, landscape lighting, waterproof LED strips, and outdoor smart lighting control.' },
              { icon: Monitor, title: 'Indoor Screens & Video Walls', text: 'Indoor display solutions for offices, meeting rooms, control rooms, shops, showrooms, and entertainment — LED screens, LCD video walls, digital signage, meeting room displays, and control room solutions.' },
              { icon: Tv, title: 'Outdoor LED Screens', text: 'Outdoor LED screen solutions for villas, pool areas, gardens, restaurants, cafés, events, and commercial spaces — weather-resistant LED screens, outdoor display installation, structure support, controllers, cabling, and media input setup.' },
              { icon: Film, title: 'Home Cinema Solutions', text: 'Complete home cinema setup including projector installation, screen installation, AV receiver setup, surround sound speakers, acoustic planning, Apple TV/media setup, and smart remote control.' },
              { icon: Music, title: 'Indoor & Outdoor Audio', text: 'Audio solutions for living rooms, majlis areas, gardens, pool areas, restaurants, and commercial spaces — ceiling speakers, outdoor speakers, amplifiers, multi-room audio, and music control systems.' },
              { icon: Zap, title: 'Electrical Works', text: 'Electrical installation, maintenance, and repair services including lighting points, power sockets, DB panel works, wiring, load checking, fault finding, and general electrical maintenance.' },
              { icon: Thermometer, title: 'AC Installation & Maintenance', text: 'AC installation, servicing, repair and control solutions for residential and commercial spaces, including thermostat replacement and smart AC control integration.' },
              { icon: Building, title: 'MEP Solutions', text: 'Complete MEP support including electrical works, AC systems, pump room works, lighting, low-current systems, and building support services.' },
              { icon: Cpu, title: 'Building Automation & Control Systems', text: 'Automation solutions for villas, offices and commercial buildings — lighting control, AC control, sensor-based control, energy-saving automation, and centralized system management.' },
              { icon: Flame, title: 'Fire Alarm & Safety Systems', text: 'Fire alarm system installation and support — smoke detectors, heat detectors, manual call points, sounders, and basic system maintenance.' },
              { icon: Monitor, title: 'IT Support & AMC Services', text: 'IT support and annual maintenance services for offices and businesses — network support, Wi-Fi troubleshooting, CCTV support, system maintenance, and technical assistance.' },
            ].map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
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
