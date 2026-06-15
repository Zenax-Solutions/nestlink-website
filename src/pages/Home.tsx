import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Headphones, ArrowUpRight } from 'lucide-react'
import SequenceHero from '../components/SequenceHero'
import WhatWeDo from '../components/WhatWeDo'
import SecondSequence from '../components/SecondSequence'
import AnimatedSection from '../components/AnimatedSection'
import { blogPosts } from '../data/blogs'

export default function Home() {
  return (
    <div>
      <SequenceHero />

      {/* What We Do */}
      <WhatWeDo />

      {/* Partners */}
      <section className="bg-[#f2f2f2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="text-center">
            <p className="font-sans text-sm font-medium text-black/50 md:text-base">
              Partners in our ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {[
                { name: 'Aqara', logo: '/brand-logos/Aqara.png' },
                { name: 'KNX', logo: '/brand-logos/KNX_logo.svg.png' },
                { name: 'Ubiquiti', logo: '/brand-logos/Ubiquiti_Logo_Horizontal.png' },
                { name: 'Home Assistant', logo: '/brand-logos/home-assistant-logo-new.png' },
                { name: 'Apple HomeKit', logo: '/brand-logos/ios-badge-works-with-apple-homekit-e1433344613575.png' },
                { name: 'Tuya', logo: '/brand-logos/TUYA_BIG-c185e3f1.png' },
              ].map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto object-contain transition-all duration-300 hover:scale-105 md:h-10"
                  loading="lazy"
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why NestLink */}
      <section className="bg-[#f2f2f2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/space-by-space.png"
                  alt="Smart home interior"
                  className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
                Space by space
              </span>
              <h2 className="mt-5 font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-4xl lg:text-5xl">
                Smart Technology Built Around Your Lifestyle
              </h2>
              <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-black/70 md:text-lg">
                We don't just install devices — we create connected environments
                where comfort, security, and control work together seamlessly.
                From villas to offices, every solution is tailored to how you live
                and work.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <Settings size={28} className="text-[#0000FF]" />
                  <h4 className="mt-4 font-sans text-lg font-semibold text-black">
                    Customized Design
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-black/60">
                    Solutions tailored to your space, preferences, and daily routines.
                  </p>
                </div>
                <div>
                  <Headphones size={28} className="text-[#0000FF]" />
                  <h4 className="mt-4 font-sans text-lg font-semibold text-black">
                    End-to-End Support
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-black/60">
                    From consultation and installation to maintenance and upgrades.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#070b0a] px-8 py-4 font-sans text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
              >
                Start Your Project
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <ArrowRight size={15} className="text-[#070b0a] transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Space by Space Sequence */}
      <SecondSequence />

      {/* Blog Preview */}
      <section className="bg-[#f2f2f2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
              Our Blog
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-4xl lg:text-5xl">
              Latest Insights And Tips From Our Experts
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.15}>
                <Link
                  to={`/blog/${post.slug}`}
                  className={`group relative flex h-[420px] flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-10 ${
                    index === 0
                      ? 'bg-[#f3e5ab]'
                      : ''
                  }`}
                >
                  {index !== 0 && (
                    <>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    </>
                  )}

                  <span
                    className={`relative z-10 w-fit rounded-full border px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] ${
                      index === 0
                        ? 'border-black/10 bg-white/80 text-black/70'
                        : 'border-white/20 bg-white/10 text-white/80'
                    }`}
                  >
                    {post.category}
                  </span>

                  <div className="relative z-10">
                    <h3
                      className={`font-sans text-2xl font-bold leading-tight md:text-3xl ${
                        index === 0 ? 'text-black' : 'text-white'
                      }`}
                    >
                      {post.title}
                    </h3>
                    <div className="mt-6 flex items-center gap-3">
                      <div
                        className={`h-px w-10 ${
                          index === 0 ? 'bg-black/30' : 'bg-white/40'
                        }`}
                      />
                      <span
                        className={`font-sans text-sm font-medium ${
                          index === 0 ? 'text-black/70' : 'text-white/80'
                        }`}
                      >
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-3 rounded-full bg-[#070b0a] px-8 py-4 font-sans text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
            >
              View all blogs
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <ArrowUpRight size={15} className="text-[#070b0a] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection>
            <h2 className="font-sans text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
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
