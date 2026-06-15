import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, PenTool, FileText, Wrench, CheckCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const steps = [
  { number: '01', icon: MessageSquare, title: 'Consultation', description: 'We begin by understanding your requirements, lifestyle, and budget to define the right scope for your project.' },
  { number: '02', icon: Search, title: 'Site Survey', description: 'Our team visits the site to check space, power points, network points, and optimal device locations.' },
  { number: '03', icon: PenTool, title: 'Solution Design', description: 'We prepare layout plans, select devices, and provide detailed project recommendations.' },
  { number: '04', icon: FileText, title: 'Quotation', description: 'You receive itemized pricing, installation scope, and testing and handover details.' },
  { number: '05', icon: Wrench, title: 'Installation', description: 'We carry out cabling, mounting, configuration, and full system integration.' },
  { number: '06', icon: CheckCircle, title: 'Testing & Handover', description: 'We perform function testing, client training, and provide support after handover.' },
]

export default function Process() {
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
              How We Work
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              From concept to completion<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              Our proven project delivery process ensures every system is
              designed, installed, tested, and supported with precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:p-10"
              >
                <span className="absolute right-6 top-6 font-sans text-5xl font-extrabold text-black/5">{step.number}</span>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                  <step.icon size={28} />
                </div>
                <h3 className="font-sans text-xl font-bold text-black">{step.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
              Simple Workflow
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-white md:text-4xl">
              Five stages. One seamless experience.
            </h2>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {['Consultation', 'Design', 'Installation', 'Testing & Handover', 'Support'].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0000FF]/10 text-xs font-bold text-[#0000FF]">{index + 1}</span>
                  <span className="font-sans text-sm font-semibold text-white/90">{item}</span>
                </div>
                {index < 4 && <ArrowRight size={18} className="hidden text-white/20 md:block" />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
                After-Sales Support
              </span>
              <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] text-black md:text-4xl">
                We stay with you after handover
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-black/60">
                Technology should keep working. Our team provides dependable
                after-sales service including maintenance, system upgrades,
                troubleshooting, and remote assistance whenever you need it.
              </p>
              <ul className="mt-8 space-y-4">
                {['Scheduled maintenance visits', 'System upgrades and expansions', 'Remote troubleshooting', 'Responsive technical assistance'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-[#0000FF]" />
                    <span className="font-sans text-sm text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="rounded-3xl border border-[#0000FF]/20 bg-white p-8 shadow-sm md:p-10">
                <h3 className="font-sans text-2xl font-bold text-black">Start your project today</h3>
                <p className="mt-3 font-sans text-base text-black/60">
                  Book a free consultation and site survey. We'll recommend the
                  right technology plan for your space.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold text-white transition-all hover:scale-105"
                  >
                    Book Consultation
                    <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="tel:+971504429734"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-8 py-4 font-sans text-sm font-bold text-black shadow-sm transition-all hover:border-[#0000FF]/50 hover:text-[#0000FF]"
                  >
                    <Phone size={18} />
                    Call Us
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
