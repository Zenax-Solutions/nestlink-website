import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Shield, Lightbulb, Headphones, ArrowRight, Wifi, Monitor } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '500', suffix: '+', label: 'Projects Completed' },
  { value: '10', suffix: '+', label: 'Years Experience' },
  { value: '50', suffix: '+', label: 'Team Members' },
  { value: '98', suffix: '%', label: 'Client Satisfaction' },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'We listen to your needs, assess your space, and understand your lifestyle before proposing any solution.' },
  { step: '02', title: 'Design', desc: 'Our engineers create detailed plans, wiring diagrams, and system architectures tailored to your project.' },
  { step: '03', title: 'Installation', desc: 'Certified technicians install and configure every component with precision, following international standards.' },
  { step: '04', title: 'Handover', desc: 'We walk you through your new system, ensure everything works perfectly, and hand over complete documentation.' },
  { step: '05', title: 'Support', desc: 'Our relationship doesn\'t end at installation. We provide ongoing maintenance, upgrades, and 24/7 technical support.' },
]

const features = [
  { icon: Zap, title: 'Professional Installation', desc: 'Clean, safe and reliable work for villas, offices and commercial projects.' },
  { icon: Shield, title: 'Complete Solution Provider', desc: 'From smart home automation to CCTV, Wi-Fi, lighting, electrical and MEP services.' },
  { icon: Wifi, title: 'Affordable & Flexible Options', desc: 'We provide solutions based on your budget, requirements and site conditions.' },
  { icon: Monitor, title: 'Unified Control', desc: 'One app to control everything from anywhere.' },
  { icon: Lightbulb, title: 'Energy Efficiency', desc: 'Smart systems reduce energy consumption by up to 30%.' },
  { icon: Headphones, title: 'After-Sales Support', desc: 'We support our clients even after installation to make sure the system runs smoothly.' },
]

export default function ScrollContent() {
  const statsRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stats counter animation
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll('[data-target]')
      counters.forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.target || '0')
        const suffix = (el as HTMLElement).dataset.suffix || ''
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          },
        })
      })
    }

    // Process steps stagger
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('[data-step]')
      gsap.fromTo(
        steps,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 75%',
            once: true,
          },
        },
      )
    }

    // Features cards stagger
    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll('[data-card]')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%',
            once: true,
          },
        },
      )
    }
  }, [])

  return (
    <div className="bg-[#f2f2f2]">
      {/* Stats */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
              Our Impact
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-4xl">
              Numbers that speak for themselves
            </h2>
          </AnimatedSection>

          <div ref={statsRef} className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-sans text-4xl font-bold text-[#0000FF] md:text-5xl"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </div>
                <p className="mt-2 font-sans text-sm text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="h-px bg-black/10" />
      </div>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <AnimatedSection>
              <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
                How We Work
              </span>
              <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-4xl">
                A proven process from concept to completion
              </h2>
              <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-black/60">
                Every project follows our structured methodology — ensuring
                quality, transparency, and on-time delivery at every stage.
              </p>
              <a
                href="/process"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-7 py-3.5 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02]"
              >
                Learn More
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedSection>

            <div ref={processRef} className="space-y-6">
              {process.map((step) => (
                <div
                  key={step.step}
                  data-step
                  className="flex gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <span className="shrink-0 font-sans text-xs font-bold text-[#0000FF]/40">{step.step}</span>
                  <div>
                    <h4 className="font-sans text-base font-bold text-black">{step.title}</h4>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-black/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="h-px bg-black/10" />
      </div>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black">
              Why Choose NestLink Technologies?
            </span>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-4xl">
              Built for the way you live
            </h2>
          </AnimatedSection>

          <div ref={featuresRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => {
              const Icon = feat.icon
              return (
                <div
                  key={feat.title}
                  data-card
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-sans text-base font-bold text-black">{feat.title}</h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-black/60">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
