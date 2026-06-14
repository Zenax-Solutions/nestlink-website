import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Settings } from 'lucide-react'
import SequenceHero from '../components/SequenceHero'
import WhatWeDo from '../components/WhatWeDo'
import AnimatedSection from '../components/AnimatedSection'

const whyUs = [
  'Customized solutions for every space',
  'Professional, clean installation',
  'Premium, future-ready technology',
  'Complete end-to-end project support',
  'Dependable after-sales service',
  'Trusted brands: Aqara, KNX, Ubiquiti & more',
]

export default function Home() {
  return (
    <div>
      <SequenceHero />

      {/* What We Do */}
      <WhatWeDo />

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-[#0a100e] py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
                Why NestLink
              </span>
              <h2 className="mt-3 font-sans text-3xl font-bold leading-tight text-white md:text-4xl">
                Trusted by property owners across Dubai
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-white/60">
                From initial consultation to long-term support, we deliver
                technology that fits your lifestyle, space, and operational
                needs — without compromise.
              </p>

              <ul className="mt-8 space-y-4">
                {whyUs.map((item) => (
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

              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: Settings,
                    title: 'Design',
                    text: 'Integrated smart home, security and AV systems.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Customize',
                    text: 'Solutions tailored to residential and commercial spaces.',
                  },
                  {
                    icon: Settings,
                    title: 'Install',
                    text: 'Install, configure, test and hand over systems.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Support',
                    text: 'Maintenance, upgrades and ongoing technical support.',
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <card.icon
                      size={24}
                      className="mb-4 text-[#0000FF]"
                    />
                    <h4 className="font-sans text-base font-bold text-white">
                      {card.title}
                    </h4>
                    <p className="mt-2 font-sans text-sm text-white/50">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection>
            <h2 className="font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
              Ready to make your space smarter?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base text-white/60">
              Get a free consultation and discover how NestLink Technologies can
              transform your villa, home, office, or commercial property.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-105"
              >
                Book Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-sans text-sm font-bold uppercase text-white transition-colors duration-200 hover:border-[#0000FF]/50 hover:text-[#0000FF]"
              >
                Our Process
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
