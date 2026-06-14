import { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <div>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#070b0a] pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0000FF]/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection>
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#0000FF]">
              Contact Us
            </span>
            <h1 className="mt-4 max-w-3xl font-inter text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
              Let’s build something smart
              <span className="text-[#0000FF]">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/60">
              Ready to upgrade your space? Get in touch for a free consultation
              and discover how NestLink Technologies can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[#0a100e] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                <h2 className="font-inter text-2xl font-bold text-white">
                  Get in touch
                </h2>
                <p className="mt-3 font-inter text-sm leading-relaxed text-white/60">
                  Our team is available to discuss your project, answer
                  questions, and schedule a site survey.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="font-inter text-xs uppercase tracking-wider text-white/50">
                        Phone / WhatsApp
                      </span>
                      <a
                        href="tel:+971504429734"
                        className="mt-1 block font-inter text-base font-semibold text-white transition-colors hover:text-[#0000FF]"
                      >
                        +971 50 442 9734
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="font-inter text-xs uppercase tracking-wider text-white/50">
                        Email
                      </span>
                      <a
                        href="mailto:info@nestlink.ae"
                        className="mt-1 block font-inter text-base font-semibold text-white transition-colors hover:text-[#0000FF]"
                      >
                        info@nestlink.ae
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="font-inter text-xs uppercase tracking-wider text-white/50">
                        Location
                      </span>
                      <span className="mt-1 block font-inter text-base font-semibold text-white">
                        Dubai, UAE
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0000FF]/10 text-[#0000FF]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="font-inter text-xs uppercase tracking-wider text-white/50">
                        Working Hours
                      </span>
                      <span className="mt-1 block font-inter text-base font-semibold text-white">
                        Sun - Sat: 9:00 AM - 7:00 PM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                <h2 className="font-inter text-2xl font-bold text-white">
                  Request a free consultation
                </h2>
                <p className="mt-2 font-inter text-sm text-white/60">
                  Fill out the form below and we’ll get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#0000FF]/20 bg-[#0000FF]/10 p-6">
                    <CheckCircle className="text-[#0000FF]" size={24} />
                    <div>
                      <h3 className="font-inter text-base font-bold text-white">
                        Message sent successfully
                      </h3>
                      <p className="font-inter text-sm text-white/60">
                        Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#0000FF]/50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#0000FF]/50"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#0000FF]/50"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white outline-none transition-colors focus:border-[#0000FF]/50"
                      >
                        <option value="" className="bg-[#070b0a]">
                          Select a service
                        </option>
                        <option value="smart-home" className="bg-[#070b0a]">
                          Smart Home Automation
                        </option>
                        <option value="security" className="bg-[#070b0a]">
                          Security & CCTV
                        </option>
                        <option value="access-control" className="bg-[#070b0a]">
                          Access Control & Intercom
                        </option>
                        <option value="networking" className="bg-[#070b0a]">
                          Networking Solutions
                        </option>
                        <option value="av" className="bg-[#070b0a]">
                          Audio, Video & Home Cinema
                        </option>
                        <option value="lighting" className="bg-[#070b0a]">
                          Lighting & ELV
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#0000FF]/50"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0000FF] px-8 py-4 font-inter text-sm font-bold uppercase text-white transition-transform duration-200 hover:scale-[1.02] md:w-auto"
                    >
                      Send Message
                      <Send
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-[#070b0a] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <AnimatedSection className="overflow-hidden rounded-3xl border border-white/10">
            <div className="flex h-[320px] flex-col items-center justify-center bg-white/[0.02] md:h-[400px]">
              <MapPin size={40} className="text-[#0000FF]" />
              <h3 className="mt-4 font-inter text-xl font-bold text-white">
                Dubai, UAE
              </h3>
              <p className="mt-2 max-w-md text-center font-inter text-sm text-white/60">
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
