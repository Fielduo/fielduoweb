'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react'

const ContactPage = () => {

  const contactDetails = [
    { icon: MapPin, title: "Production Office", lines: ["2261 Market Street STE 86773", "San Francisco, CA 94114"] },
    { icon: Mail, title: "Email Us", lines: ["sales@fielduo.com"] },
    { icon: Phone, title: "Sales", lines: ["US: +1 (415) 915 7065", "IND: +91 962 962 7092"] },
    { icon: Phone, title: "Support", lines: ["+1 (415) 200 5240"] },
  ];

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<null | { ok: boolean; message: string }>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('full-name') || ''),
      email: String(formData.get('email') || ''),
      subject: String(formData.get('subject') || ''),
      country: String(formData.get('country') || ''),
      phone: String(formData.get('phone') || ''),
      message: String(formData.get('message') || ''),
    }
    if (!payload.email || !payload.subject || !payload.phone || !payload.message) {
      setSubmitted({ ok: false, message: 'Email, subject, phone and message are required.' })
      return
    }
    try {
      setSubmitting(true)
      setSubmitted(null)
      console.log('📤 Submitting contact form to admin panel...', payload)
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || 'Failed to send message')
      }
      const result = await res.json()
      console.log('✅ Contact form submitted successfully:', result)
      form.reset()
      setSubmitted({ ok: true, message: 'Thanks! Your message has been sent and will appear in our admin panel.' })
    } catch (err: any) {
      console.error('❌ Contact form submission error:', err)
      setSubmitted({ ok: false, message: err?.message || 'Something went wrong.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-950 text-gray-100 border-b border-gray-800 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-cyan-900/30 to-[#1479ae]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div>
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                >
                    Get in Touch
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                >
                    We're here to help and answer any question you might have. We look forward to hearing from you and discussing your next project.
                </motion.p>
            </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-bold text-gray-100 mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                    Reach out to us through any of the following channels. Our team is ready to assist you with all your industrial solution needs.
                </p>
                <div className="space-y-8">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-5 group">
                            <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg border border-gray-700 group-hover:bg-[#1479ae] transition-all duration-300 group-hover:scale-105">
                                <detail.icon className="w-8 h-8 text-[#1479ae] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-100 text-lg mb-1">{detail.title}</h3>
                                {detail.lines.map((line, i) => (
                                    <p key={i} className="text-gray-400">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              className="lg:col-span-7 bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-2">Submit your Enquiry</h2>
              <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              {submitted && (
                <div className={`mb-4 rounded-md border px-4 py-3 text-sm ${submitted.ok ? 'border-green-700 bg-green-900/30 text-green-200' : 'border-red-700 bg-red-900/30 text-red-200'}`}>
                  {submitted.message}
                </div>
              )}

               <form onSubmit={onSubmit} className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="full-name" className="block text-sm font-medium text-gray-300">Full Name</label>
                     <input type="text" name="full-name" id="full-name" autoComplete="name" className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition text-white" />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                     <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition text-white" />
                   </div>
                   <div className="sm:col-span-2">
                     <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                     <input id="subject" name="subject" type="text" required placeholder="What is this regarding?" className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition text-white" />
                   </div>
                   <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-300">Country</label>
                    {(() => {
                      const countryCodes = [
                        { code: "US", name: "United States", dial: "+1" },
                        { code: "IN", name: "India", dial: "+91" },
                        { code: "GB", name: "United Kingdom", dial: "+44" },
                        { code: "AE", name: "United Arab Emirates", dial: "+971" },
                        { code: "CA", name: "Canada", dial: "+1" },
                        { code: "AU", name: "Australia", dial: "+61" },
                        { code: "DE", name: "Germany", dial: "+49" },
                        { code: "FR", name: "France", dial: "+33" },
                        { code: "SG", name: "Singapore", dial: "+65" },
                        { code: "JP", name: "Japan", dial: "+81" },
                        { code: "CN", name: "China", dial: "+86" },
                        { code: "BR", name: "Brazil", dial: "+55" },
                        { code: "ZA", name: "South Africa", dial: "+27" },
                        { code: "IT", name: "Italy", dial: "+39" },
                        { code: "ES", name: "Spain", dial: "+34" },
                        { code: "MX", name: "Mexico", dial: "+52" },
                        { code: "KR", name: "South Korea", dial: "+82" },
                        { code: "RU", name: "Russia", dial: "+7" },
                        { code: "SA", name: "Saudi Arabia", dial: "+966" },
                        { code: "AR", name: "Argentina", dial: "+54" },
                        { code: "NL", name: "Netherlands", dial: "+31" },
                        { code: "SE", name: "Sweden", dial: "+46" },
                        { code: "CH", name: "Switzerland", dial: "+41" },
                        { code: "NO", name: "Norway", dial: "+47" },
                        { code: "FI", name: "Finland", dial: "+358" },
                        { code: "IE", name: "Ireland", dial: "+353" },
                        { code: "NZ", name: "New Zealand", dial: "+64" },
                        { code: "TH", name: "Thailand", dial: "+66" },
                        { code: "PH", name: "Philippines", dial: "+63" },
                        { code: "PK", name: "Pakistan", dial: "+92" },
                        { code: "BD", name: "Bangladesh", dial: "+880" },
                        { code: "LK", name: "Sri Lanka", dial: "+94" },
                        { code: "MY", name: "Malaysia", dial: "+60" },
                        { code: "VN", name: "Vietnam", dial: "+84" },
                        { code: "ID", name: "Indonesia", dial: "+62" },
                        { code: "TR", name: "Turkey", dial: "+90" },
                        { code: "IR", name: "Iran", dial: "+98" },
                        { code: "IQ", name: "Iraq", dial: "+964" },
                        { code: "EG", name: "Egypt", dial: "+20" },
                        { code: "NG", name: "Nigeria", dial: "+234" },
                        { code: "KE", name: "Kenya", dial: "+254" },
                        { code: "GH", name: "Ghana", dial: "+233" },
                        { code: "ET", name: "Ethiopia", dial: "+251" },
                        { code: "TZ", name: "Tanzania", dial: "+255" },
                        { code: "UG", name: "Uganda", dial: "+256" },
                        { code: "ZM", name: "Zambia", dial: "+260" },
                        { code: "ZW", name: "Zimbabwe", dial: "+263" },
                        { code: "QA", name: "Qatar", dial: "+974" },
                        { code: "KW", name: "Kuwait", dial: "+965" },
                        { code: "OM", name: "Oman", dial: "+968" },
                        { code: "BH", name: "Bahrain", dial: "+973" },
                        { code: "IL", name: "Israel", dial: "+972" },
                        { code: "JO", name: "Jordan", dial: "+962" },
                        { code: "LB", name: "Lebanon", dial: "+961" },
                        { code: "NP", name: "Nepal", dial: "+977" },
                        { code: "MM", name: "Myanmar", dial: "+95" },
                        { code: "KH", name: "Cambodia", dial: "+855" },
                        { code: "LA", name: "Laos", dial: "+856" },
                        { code: "PL", name: "Poland", dial: "+48" },
                        { code: "BE", name: "Belgium", dial: "+32" },
                        { code: "AT", name: "Austria", dial: "+43" },
                        { code: "DK", name: "Denmark", dial: "+45" },
                        { code: "CZ", name: "Czech Republic", dial: "+420" },
                        { code: "PT", name: "Portugal", dial: "+351" },
                        { code: "HU", name: "Hungary", dial: "+36" },
                        { code: "GR", name: "Greece", dial: "+30" },
                        { code: "RO", name: "Romania", dial: "+40" },
                        { code: "BG", name: "Bulgaria", dial: "+359" },
                        { code: "HR", name: "Croatia", dial: "+385" },
                        { code: "SI", name: "Slovenia", dial: "+386" },
                        { code: "SK", name: "Slovakia", dial: "+421" },
                        { code: "IS", name: "Iceland", dial: "+354" },
                        { code: "UA", name: "Ukraine", dial: "+380" },
                        { code: "RS", name: "Serbia", dial: "+381" },
                        { code: "BA", name: "Bosnia and Herzegovina", dial: "+387" },
                        { code: "AL", name: "Albania", dial: "+355" },
                        { code: "GE", name: "Georgia", dial: "+995" },
                        { code: "AM", name: "Armenia", dial: "+374" },
                        { code: "AZ", name: "Azerbaijan", dial: "+994" },
                        { code: "KZ", name: "Kazakhstan", dial: "+7" },
                        { code: "UZ", name: "Uzbekistan", dial: "+998" },
                        { code: "KG", name: "Kyrgyzstan", dial: "+996" },
                        { code: "TJ", name: "Tajikistan", dial: "+992" },
                        { code: "MN", name: "Mongolia", dial: "+976" },
                        { code: "AF", name: "Afghanistan", dial: "+93" },
                        { code: "HK", name: "Hong Kong", dial: "+852" },
                      ];

                      return (
                        <select
                          id="country"
                          name="country"
                          required
                          defaultValue="US"
                          className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition text-white"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.name} ({c.dial})
                            </option>
                          ))}
                        </select>
                      );
                    })()}
                  </div>

                   <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                     <input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="e.g. (415) 200 5240" className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition text-white" />
                   </div>
                 </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">How can we help?</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] transition text-white"></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`group w-full inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transform transition-all duration-300 shadow-lg ${submitting ? 'bg-gray-700 cursor-not-allowed text-gray-400' : 'bg-[#1479ae] text-white hover:bg-[#0d5d85] hover:scale-105 hover:shadow-[#1479ae]/40'}`}
                  >
                    {submitting ? 'Submitting...' : 'Submit'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Our Location</h2>
          <div className="w-full h-[500px] rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl">
             <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019725714447!2d-122.42652868468162!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5b63f5d7%3A0x6c0c7e5a4a4a4a4a!2s2261%20Market%20St%20%2386773%2C%20San%20Francisco%2C%20CA%2094114%2C%20USA!5e0!3m2!1sen!2sus!4v1628532135848!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Map of our location in San Francisco"
              ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage