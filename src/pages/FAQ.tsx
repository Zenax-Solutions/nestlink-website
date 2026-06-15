import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const faqs = [
  {
    q: 'What services does NestLink Technologies offer?',
    a: 'We specialize in smart home automation, security & CCTV systems, access control & intercom, networking & structured cabling, home cinema & audio-visual solutions, and smart lighting systems for residential and commercial spaces.',
  },
  {
    q: 'Do you work on existing properties or only new builds?',
    a: 'Both. We design solutions for new constructions and retrofit existing properties. Our team works with minimal disruption to your daily life during installations.',
  },
  {
    q: 'Can I control everything from one app?',
    a: 'Yes. We integrate multiple systems into a single unified platform so you can control lighting, climate, security, and entertainment from one app on your phone or tablet.',
  },
  {
    q: 'How long does a typical installation take?',
    a: 'Timelines vary depending on the scope. A single-room smart setup may take 1–2 days, while a full villa automation project can take 2–6 weeks. We provide a detailed timeline with every proposal.',
  },
  {
    q: 'Do you offer after-sales support and maintenance?',
    a: 'Absolutely. We provide ongoing technical support, system maintenance, and warranty services. Our team is available 24/7 for urgent issues.',
  },
  {
    q: 'What brands and products do you work with?',
    a: 'We partner with leading global brands including Control4, Lutron, Aqara, Ubiquiti, KNX, and Home Assistant, among others. We recommend the best products based on your needs and budget.',
  },
  {
    q: 'Is smart home technology secure?',
    a: 'Security is a top priority. We implement bank-grade encryption, secure network segmentation, regular firmware updates, and multi-factor authentication to protect your systems.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes, we offer a complimentary initial consultation to understand your requirements, assess the space, and provide a preliminary recommendation and quote.',
  },
  {
    q: 'Can I upgrade or expand my system later?',
    a: 'Yes. All our systems are designed to be scalable and future-proof. You can start with core features and add more components as your needs grow.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

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
              Support
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              Everything you need to know about our smart home solutions and services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#f2f2f2] py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.03}>
              <div className={`border-b border-black/10 ${i === 0 ? 'border-t' : ''}`}>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-sans text-base font-bold text-black md:text-lg">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-black/40 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 font-sans text-base leading-relaxed text-black/60">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
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
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-white/60">
              We're here to help. Get in touch with our team.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-sm font-bold text-[#070b0a] transition-all duration-200 hover:scale-105"
            >
              Contact Us
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
