import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Privacy() {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/page-header.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Legal
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Privacy Policy
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
            <h2 className="font-sans text-2xl font-bold text-black md:text-3xl">Information We Collect</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              We collect information you voluntarily provide when you fill out forms on our website,
              including your name, email address, phone number, and project details. We also collect
              anonymous usage data through cookies and analytics tools to improve our website experience.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">How We Use Your Information</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              Your information is used to respond to your inquiries, provide quotes, deliver services,
              send relevant updates (with your consent), and improve our offerings. We do not sell,
              rent, or share your personal data with third parties for their marketing purposes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Data Security</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              We implement industry-standard security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Cookies</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              Our website uses cookies to enhance your browsing experience, analyze site traffic,
              and understand where our visitors come from. You can control cookie preferences through
              your browser settings.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Your Rights</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              You have the right to access, correct, or delete your personal data held by us.
              You may also withdraw consent for marketing communications at any time by contacting us.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="mt-12 font-sans text-2xl font-bold text-black md:text-3xl">Contact Us</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
              If you have questions about this Privacy Policy, please{' '}
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
