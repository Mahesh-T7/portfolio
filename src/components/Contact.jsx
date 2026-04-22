import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { personal } from '../data'

export default function Contact() {
  const { isDark } = useTheme()
  const { ref, isInView } = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate a send (replace with EmailJS or Formspree in production)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  const inputBase = `w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200 ${
    isDark
      ? 'bg-white/5 border border-white/8 text-white placeholder-white/25 focus:border-acid/50 focus:bg-acid/5'
      : 'bg-slate-50 border border-black/8 text-ink-900 placeholder-ink-300 focus:border-acid/50 focus:bg-white'
  }`

  const socials = [
    { icon: Github, label: 'GitHub', href: personal.github, value: 'Mahesh-T7' },
    { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin, value: 'mahesht07a8634' },
    { icon: Mail, label: 'Email', href: `mailto:${personal.email}`, value: personal.email },
    { icon: Phone, label: 'Phone', href: `tel:${personal.phone}`, value: personal.phone },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-ink-900' : 'bg-white'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid/30 to-transparent" />

      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-acid/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-tag justify-center">Get In Touch</span>
          <h2 className={`font-display font-800 text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-ink-900'}`}>
            Let's build something{' '}
            <span className="text-gradient">great.</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-white/50' : 'text-ink-400'}`}>
            I'm open to full-time roles, freelance projects, and interesting collaborations. Drop a message — I respond fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info — left col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {socials.map(({ icon: Icon, label, href, value }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                  isDark ? 'glass hover:border-acid/25' : 'bg-slate-50 border border-black/6 hover:border-acid/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isDark
                    ? 'bg-acid/10 border border-acid/20 text-acid group-hover:bg-acid group-hover:text-ink-950'
                    : 'bg-acid/10 border border-acid/15 text-acid-dim group-hover:bg-acid group-hover:text-ink-950'
                }`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className={`text-xs font-mono mb-0.5 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>{label}</p>
                  <p className={`text-sm font-medium truncate ${isDark ? 'text-white/80' : 'text-ink-700'}`}>{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <div className={`flex items-center gap-4 p-4 rounded-2xl ${
              isDark ? 'glass' : 'bg-slate-50 border border-black/6'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isDark ? 'bg-acid/10 border border-acid/20 text-acid' : 'bg-acid/10 border border-acid/15 text-acid-dim'
              }`}>
                <MapPin size={18} />
              </div>
              <div>
                <p className={`text-xs font-mono mb-0.5 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>Location</p>
                <p className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-ink-700'}`}>{personal.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form — right col */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`lg:col-span-3 p-8 rounded-3xl ${
              isDark ? 'glass' : 'bg-slate-50 border border-black/6'
            }`}
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle size={48} className="text-acid mb-4" />
                <h3 className={`font-display font-700 text-xl mb-2 ${isDark ? 'text-white' : 'text-ink-900'}`}>
                  Message sent!
                </h3>
                <p className={`${isDark ? 'text-white/50' : 'text-ink-400'}`}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-mono mb-2 ${isDark ? 'text-white/40' : 'text-ink-400'}`}>
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-mono mb-2 ${isDark ? 'text-white/40' : 'text-ink-400'}`}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono mb-2 ${isDark ? 'text-white/40' : 'text-ink-400'}`}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono mb-2 ${isDark ? 'text-white/40' : 'text-ink-400'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-coral text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-acid text-ink-950 font-display font-700 text-sm transition-all duration-200 hover:bg-acid-dim glow-acid hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className={`text-xs text-center ${isDark ? 'text-white/25' : 'text-ink-300'}`}>
                  To enable real email delivery, integrate EmailJS or Formspree (see README).
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
