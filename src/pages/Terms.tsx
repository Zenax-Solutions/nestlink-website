import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Terms() {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video src="/footer-video.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Legal
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              Last updated: January 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#f2f2f2] py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <AnimatedSection>
            <h2 className="font-sans text-2xl font-bold text-black md:text-3xl">Acceptance of Terms</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              By accessing or using the NestLink Technologies website, you agree to be bound by these
              Terms & Conditions. If you do not agree, please do not use our website or services.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Services</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              NestLink Technologies provides smart home automation, ELV, security, networking,
              lighting, and audio-visual solutions. All services are delivered subject to a separate
              agreement or quotation provided to the client.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Intellectual Property</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              All content on this website — including text, images, logos, and designs — is the
              property of NestLink Technologies unless otherwise stated. You may not reproduce,
              distribute, or modify any content without prior written consent.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Limitation of Liability</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              NestLink Technologies shall not be held liable for any indirect, incidental, or
              consequential damages arising from the use of our website or services, to the fullest
              extent permitted by applicable law.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Changes to Terms</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              We reserve the right to update these terms at any time. Continued use of the website
              after changes constitutes acceptance of the new terms.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Contact</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              For questions about these terms, please{' '}
              <Link to="/contact" className="text-[#0000FF] underline hover:no-underline">contact us</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

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
