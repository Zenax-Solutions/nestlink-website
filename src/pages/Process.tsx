import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Search,
  PenTool,
  FileText,
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react'
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from '../components/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We begin by understanding your requirements, lifestyle, and budget to define the right scope for your project.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Site Survey',
    description:
      'Our team visits the site to check space, power points, network points, and optimal device locations.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Solution Design',
    description:
      'We prepare layout plans, select devices, and provide detailed project recommendations.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Quotation',
    description:
      'You receive itemized pricing, installation scope, and testing and handover details.',
  },
  {
    number: '05',
    icon: Wrench,
    title: 'Installation',
    description:
      'We carry out cabling, mounting, configuration, and full system integration.',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Testing & Handover',
    description:
      'We perform function testing, client training, and provide support after handover.',
  },
]

const workflow = [
  'Consultation',
  'Design',
  'Installation',
  'Testing & Handover',
  'Support',
]

export default function Process() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#070b0a] pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              How We Work
            </span>
            <h1 className="mt-4 max-w-3xl font-sans text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
              From concept to completion
              <span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/60">
              Our proven project delivery process ensures every system is
              designed, installed, tested, and supported with precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <StaggerContainer className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-[#0000FF]/30 md:p-10">
                  <span className="absolute right-6 top-6 font-sans text-5xl font-extrabold text-white/5">
                    {step.number}
                  </span>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0000FF]/10 text-[#0000FF]">
                    <step.icon size={28} />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-white/10 lg:block">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="mb-14 text-center">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              Simple Workflow
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-white md:text-4xl">
              Five stages. One seamless experience.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {workflow.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0000FF]/10 text-xs font-bold text-[#0000FF]">
                      {index + 1}
                    </span>
                    <span className="font-sans text-sm font-semibold text-white/90">
                      {item}
                    </span>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight size={18} className="hidden text-white/20 md:block" />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
                After-Sales Support
              </span>
              <h2 className="mt-3 font-sans text-3xl font-bold leading-tight text-white md:text-4xl">
                We stay with you after handover
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-white/60">
                Technology should keep working. Our team provides dependable
                after-sales service including maintenance, system upgrades,
                troubleshooting, and remote assistance whenever you need it.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Scheduled maintenance visits',
                  'System upgrades and expansions',
                  'Remote troubleshooting',
                  'Responsive technical assistance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-[#0000FF]"
                    />
                    <span className="font-sans text-sm text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="rounded-3xl border border-[#0000FF]/20 bg-[#0000FF]/5 p-8 md:p-10">
                <h3 className="font-sans text-2xl font-bold text-white">
                  Start your project today
                </h3>
                <p className="mt-3 font-sans text-base text-white/60">
                  Book a free consultation and site survey. We’ll recommend the
                  right technology plan for your space.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105"
                  >
                    Book Consultation
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                  <a
                    href="tel:+971504429734"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-colors duration-200 hover:border-[#0000FF]/50 hover:text-[#0000FF]"
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
