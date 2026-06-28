import { Link } from 'react-router-dom'
import { ArrowRight, Home, Shield, Lock, Wifi, Monitor, Lightbulb, CheckCircle, Sun, Smartphone, Video, Speaker, Phone, Tv, Film, Zap, Thermometer, Building, Cpu, Flame, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    icon: Home, title: 'Smart Home Automation', video: '/videos/smart-home.mp4',
    description: 'Smart lighting, curtain control, AC control, smart switches, mobile app control, voice control, and customized automation scenes for villas, apartments, and offices.',
    features: ['Smart lighting', 'Curtain control', 'AC control', 'Smart switches', 'Mobile app control', 'Voice control'],
  },
  {
    icon: Shield, title: 'CCTV Installation', video: '/videos/cctv.mp4',
    description: 'Wired cameras, wireless cameras, solar-powered cameras, battery-operated cameras, NVR setup, mobile viewing, and complete surveillance solutions.',
    features: ['Wired cameras', 'Wireless cameras', 'Solar-powered cameras', 'NVR setup', 'Mobile viewing', 'Complete surveillance'],
  },
  {
    icon: Wifi, title: 'Wi-Fi & Networking Solutions', video: '/videos/wifi.mp4',
    description: 'Access points, routers, structured cabling, data points, network cabinets, full villa Wi-Fi coverage, and office network setup.',
    features: ['Access points', 'Routers', 'Structured cabling', 'Network cabinets', 'Full villa Wi-Fi', 'Office network setup'],
  },
  {
    icon: Phone, title: 'Intercom Systems', video: '/videos/intercom.mp4',
    description: 'Video intercom, audio intercom, indoor monitor installation, outdoor station setup, mobile app integration, and door/gate release control.',
    features: ['Video intercom', 'Audio intercom', 'Indoor monitor', 'Outdoor station', 'Mobile app integration', 'Door/gate release'],
  },
  {
    icon: Lock, title: 'Access Control Systems', video: '/videos/Access-Control-Systems.mp4',
    description: 'Fingerprint access, card access, keypad access, magnetic locks, door controllers, gym access systems, and office entry control.',
    features: ['Fingerprint access', 'Card access', 'Keypad access', 'Magnetic locks', 'Door controllers', 'Office entry control'],
  },
  {
    icon: Lightbulb, title: 'Indoor Lighting Solutions', video: '/videos/lighting.mp4',
    description: 'Professional indoor lighting solutions for villas, apartments, offices, and commercial spaces. Ceiling lights, spotlights, chandeliers, LED strip lights, cove lighting, decorative lighting, smart lighting control, and maintenance.',
    features: ['Ceiling lights', 'Spotlights & chandeliers', 'LED strip lights', 'Cove lighting', 'Smart lighting control', 'Lighting maintenance'],
  },
  {
    icon: Sun, title: 'Outdoor Lighting Solutions', video: '/videos/outdoor-lighting.mp4',
    description: 'Outdoor lighting solutions for villas, gardens, landscapes, building façades, pathways, pool areas, and parking areas. Garden lights, wall lights, façade lighting, landscape lighting, waterproof LED strips, and outdoor smart lighting control.',
    features: ['Garden lights', 'Wall lights', 'Façade lighting', 'Landscape lighting', 'Waterproof LED strips', 'Outdoor smart control'],
  },
  {
    icon: Monitor, title: 'Indoor Screens & Video Walls', video: '/videos/Indoor-Screens-Video-Walls.mp4',
    description: 'Indoor display solutions for offices, meeting rooms, control rooms, shops, showrooms, and entertainment areas. LED screens, LCD video walls, digital signage, meeting room displays, and control room screen solutions.',
    features: ['LED screens', 'LCD video walls', 'Digital signage', 'Meeting room displays', 'Control room solutions', 'Showroom displays'],
  },
  {
    icon: Tv, title: 'Outdoor LED Screens', video: '/videos/Outdoor-LED-Screens.mp4',
    description: 'Outdoor LED screen solutions for villas, pool areas, gardens, restaurants, cafés, events, and commercial spaces. Weather-resistant LED screens, outdoor display installation, structure support, controllers, cabling, and media input setup.',
    features: ['Weather-resistant screens', 'Outdoor installation', 'Structure support', 'Controllers & cabling', 'Media input setup', 'Event displays'],
  },
  {
    icon: Film, title: 'Home Cinema Solutions', video: '/videos/cinema.mp4',
    description: 'Complete home cinema setup including projector installation, screen installation, AV receiver setup, surround sound speakers, acoustic planning, Apple TV/media setup and smart remote control.',
    features: ['Projector installation', 'Screen installation', 'AV receiver setup', 'Surround sound', 'Acoustic planning', 'Smart remote control'],
  },
  {
    icon: Speaker, title: 'Indoor & Outdoor Audio', video: '/videos/Indoor-&-Outdoor-Audio.mp4',
    description: 'Audio solutions for living rooms, majlis areas, gardens, pool areas, restaurants, and commercial spaces. Ceiling speakers, outdoor speakers, amplifiers, multi-room audio, and music control systems.',
    features: ['Ceiling speakers', 'Outdoor speakers', 'Amplifiers', 'Multi-room audio', 'Music control', 'Commercial audio'],
  },
  {
    icon: Zap, title: 'Electrical Works', video: '/videos/Electrical-Works.mp4',
    description: 'Electrical installation, maintenance, and repair services including lighting points, power sockets, DB panel works, wiring, load checking, fault finding, and general electrical maintenance.',
    features: ['Lighting points', 'Power sockets', 'DB panel works', 'Wiring & load checking', 'Fault finding', 'Electrical maintenance'],
  },
  {
    icon: Thermometer, title: 'AC Installation & Maintenance', video: '/videos/AC-Installation-Maintenance.mp4',
    description: 'AC installation, servicing, repair and control solutions for residential and commercial spaces, including thermostat replacement and smart AC control integration.',
    features: ['AC installation', 'AC servicing & repair', 'Thermostat replacement', 'Smart AC control', 'Commercial AC', 'Preventive maintenance'],
  },
  {
    icon: Building, title: 'MEP Solutions', video: '/videos/MEP-Solutions.mp4',
    description: 'Complete MEP support including electrical works, AC systems, pump room works, lighting, low-current systems and building support services.',
    features: ['Electrical works', 'AC systems', 'Pump room works', 'Lighting systems', 'Low-current systems', 'Building support'],
  },
  {
    icon: Cpu, title: 'Building Automation & Control Systems', video: '/videos/Building-Automation-Control-Systems.mp4',
    description: 'Automation solutions for villas, offices and commercial buildings, including lighting control, AC control, sensor-based control, energy-saving automation and centralized system management.',
    features: ['Lighting control', 'AC control', 'Sensor-based control', 'Energy-saving automation', 'Centralized management', 'Building automation'],
  },
  {
    icon: Flame, title: 'Fire Alarm & Safety Systems', video: '/videos/fire-alams-system.mp4',
    description: 'Fire alarm system installation and support, including smoke detectors, heat detectors, manual call points, sounders and basic system maintenance.',
    features: ['Smoke detectors', 'Heat detectors', 'Manual call points', 'Sounders', 'System installation', 'System maintenance'],
  },
  {
    icon: Headphones, title: 'IT Support & AMC Services', video: '/videos/IT-Support-AMC-Services.mp4',
    description: 'IT support and annual maintenance services for offices and businesses, including network support, Wi-Fi troubleshooting, CCTV support, system maintenance and technical assistance.',
    features: ['Network support', 'Wi-Fi troubleshooting', 'CCTV support', 'System maintenance', 'Technical assistance', 'AMC services'],
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
          <video src="/footer-video.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Smart Home & Technology Solutions<br />
              Across Dubai<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              From smart villas in Emirates Hills to offices in Dubai Marina, NestLink Technologies
              delivers integrated automation, security, networking, and AV
              systems tailored to your space across the UAE.
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
                  <video
                    src={service.video}
                    autoPlay muted loop playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
              Smart home automation, security & AV solutions in Dubai
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
              Trusted brands we work with across Dubai
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
              { name: 'Amazon Alexa', logo: '/brand-logos/Amazon_Alexa_Logo_2024.svg.png' },
              { name: 'Ring', logo: '/brand-logos/Ring-Emblem.png' },
              { name: 'Hikvision', logo: '/brand-logos/Hikvision_logo.svg.png' },
              { name: 'D-Link', logo: '/brand-logos/D-Link-Logo.png' },
              { name: 'EZVIZ', logo: '/brand-logos/ezviz-logo_brandlogos.net_z9wlt.png' },
              { name: 'Denon', logo: '/brand-logos/Denon_(logo).svg.png' },
              { name: 'KEF', logo: '/brand-logos/KEF_(logo).svg.png' },
              { name: 'GVS', logo: '/brand-logos/gvs.png' },
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
