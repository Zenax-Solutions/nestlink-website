import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const projects = [
  {
    title: 'Villa Smart Home Automation',
    category: 'Smart Home',
    description: 'Full automation of lighting, climate, curtains, and security for a luxury villa in Dubai.',
    image: '/footer.jpg',
  },
  {
    title: 'Office Security & Networking',
    category: 'Security',
    description: 'Enterprise-grade CCTV, access control, and structured cabling for a corporate office.',
    image: '/smart-home.jpg',
  },
  {
    title: 'Home Cinema & Multi-Room Audio',
    category: 'Audio Visual',
    description: 'Immersive home theater and distributed audio system for a private residence.',
    image: '/hero/ezgif-frame-090.jpg',
  },
  {
    title: 'Commercial CCTV Installation',
    category: 'Security',
    description: 'Complete surveillance system with smart alerts and remote monitoring.',
    image: '/hero/ezgif-frame-030.jpg',
  },
  {
    title: 'Smart Lighting & ELV Infrastructure',
    category: 'Lighting',
    description: 'Indoor and outdoor lighting control with full ELV infrastructure design.',
    image: '/hero/ezgif-frame-110.jpg',
  },
  {
    title: 'Residential Networking & Wi-Fi',
    category: 'Networking',
    description: 'Whole-home mesh Wi-Fi, structured cabling, and network rack setup.',
    image: '/hero/ezgif-frame-070.jpg',
  },
  {
    title: 'Access Control for Commercial Building',
    category: 'Access Control',
    description: 'Smart locks, video intercom, and visitor management for a multi-tenancy building.',
    image: '/hero/ezgif-frame-050.jpg',
  },
  {
    title: 'Luxury Apartment Smart System',
    category: 'Smart Home',
    description: 'Integrated automation, security, and AV for a high-end apartment.',
    image: '/footer.jpg',
  },
]

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/smart-home.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Our Work
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Projects we've delivered<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              From luxury villas to commercial spaces, explore how we've transformed
              properties with smart technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative h-[320px] overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {project.category}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-sans text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-1 font-sans text-sm text-white/70">{project.description}</p>
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
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-white/60">
              Let's discuss how we can bring your vision to life with the right
              technology solutions.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105"
            >
              Start Your Project
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
