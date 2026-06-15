import { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/page-header.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
          <AnimatedSection>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
              Contact Us
            </span>
            <h1 className="mt-6 max-w-3xl font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Let's build something smart<span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
              Ready to upgrade your space? Get in touch for a free consultation
              and discover how NestLink Technologies can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
                <h2 className="font-sans text-2xl font-bold text-black">Get in touch</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black/60">
                  Our team is available to discuss your project, answer
                  questions, and schedule a site survey.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider text-black/50">Phone / WhatsApp</span>
                      <a href="tel:+971504429734" className="mt-1 block font-sans text-base font-semibold text-black transition-colors hover:text-[#0000FF]">+971 50 442 9734</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider text-black/50">Email</span>
                      <a href="mailto:info@nestlink.ae" className="mt-1 block font-sans text-base font-semibold text-black transition-colors hover:text-[#0000FF]">info@nestlink.ae</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider text-black/50">Location</span>
                      <span className="mt-1 block font-sans text-base font-semibold text-black">Dubai, UAE</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider text-black/50">Working Hours</span>
                      <span className="mt-1 block font-sans text-base font-semibold text-black">Sun - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
                <h2 className="font-sans text-2xl font-bold text-black">Request a free consultation</h2>
                <p className="mt-2 font-sans text-sm text-black/60">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 flex items-center gap-3 rounded-2xl border border-[#0000FF]/20 bg-[#0000FF]/10 p-6"
                  >
                    <CheckCircle className="text-[#0000FF]" size={24} />
                    <div>
                      <h3 className="font-sans text-base font-bold text-black">Message sent successfully</h3>
                      <p className="font-sans text-sm text-black/60">Our team will contact you shortly.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Full Name</label>
                        <input id="name" type="text" required value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-[#0000FF]/50"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Phone Number</label>
                        <input id="phone" type="tel" required value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-[#0000FF]/50"
                          placeholder="+971 XX XXX XXXX" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Email Address</label>
                      <input id="email" type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-[#0000FF]/50"
                        placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Service Interested In</label>
                      <select id="service" required value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50">
                        <option value="" className="bg-white">Select a service</option>
                        <option value="smart-home" className="bg-white">Smart Home Automation</option>
                        <option value="security" className="bg-white">Security & CCTV</option>
                        <option value="access-control" className="bg-white">Access Control & Intercom</option>
                        <option value="networking" className="bg-white">Networking Solutions</option>
                        <option value="av" className="bg-white">Audio, Video & Home Cinema</option>
                        <option value="lighting" className="bg-white">Lighting & ELV</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Project Details</label>
                      <textarea id="message" rows={4} value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-black/10 bg-white/5 px-4 py-3 font-sans text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-[#0000FF]/50"
                        placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] md:w-auto">
                      Send Message
                      <Send size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#f2f2f2] pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="flex h-[320px] flex-col items-center justify-center md:h-[400px]">
              <MapPin size={40} className="text-[#0000FF]" />
              <h3 className="mt-4 font-sans text-xl font-bold text-black">Dubai, UAE</h3>
              <p className="mt-2 max-w-md text-center font-sans text-sm text-black/60">
                Serving clients across Dubai and the UAE with smart home,
                security, networking, and AV solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
