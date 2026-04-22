import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2, Brain, Mail, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { personal } from '../data'

const strengths = [
  {
    icon: Code2,
    title: 'Full-Stack Mastery',
    desc: 'End-to-end MERN development with clean architecture and scalable patterns.',
    color: '#00ff87',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Bridging OpenAI APIs with real products — from code completion to vision AI.',
    color: '#00d4ff',
  },
  {
    icon: GraduationCap,
    title: 'Strong Foundations',
    desc: 'Solid CS fundamentals: DSA, system design, microservices, and Agile practices.',
    color: '#ff6b6b',
  },
]

export default function About() {
  const { isDark } = useTheme()
  const { ref, isInView } = useScrollReveal()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-ink-900' : 'bg-white'}`}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <motion.span variants={item} className="section-tag">
              About Me
            </motion.span>

            <motion.h2
              variants={item}
              className={`font-display font-800 text-4xl md:text-5xl leading-tight mb-6 ${
                isDark ? 'text-white' : 'text-ink-900'
              }`}
            >
              Building software that{' '}
              <span className="text-gradient">actually ships.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className={`text-base md:text-lg leading-relaxed mb-6 ${
                isDark ? 'text-white/60' : 'text-ink-500'
              }`}
            >
              {personal.bio}
            </motion.p>

            <motion.p
              variants={item}
              className={`text-base leading-relaxed mb-8 ${
                isDark ? 'text-white/50' : 'text-ink-400'
              }`}
            >
              When I'm not coding, I'm grinding competitive programming, contributing to open source, playing chess, or learning new languages — both human and machine.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-2">
              <MapPin size={16} className={isDark ? 'text-acid' : 'text-acid-dim'} />
              <span className={`font-mono text-sm ${isDark ? 'text-white/50' : 'text-ink-400'}`}>
                {personal.location}
              </span>
            </motion.div>
          </div>

          {/* Right — photo + strength cards */}
          <motion.div variants={item} className="space-y-4">
            {/* Profile photo card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`flex items-center gap-5 p-5 rounded-2xl ${
                isDark ? 'glass' : 'bg-slate-50 border border-black/5'
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-acid/30">
                  <img
                    src="/mahesh-photo.jpg"
                    alt="Mahesh T"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-acid border-2 border-ink-950" />
              </div>
              <div>
                <p className={`font-display font-700 text-lg ${isDark ? 'text-white' : 'text-ink-900'}`}>Mahesh T</p>
                <p className={`text-sm mb-3 ${isDark ? 'text-acid' : 'text-acid-dim'}`}>Full-Stack Developer</p>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: personal.github },
                    { icon: Linkedin, href: personal.linkedin },
                    { icon: Mail, href: `mailto:${personal.email}` },
                  ].map(({ icon: Icon, href }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDark ? 'text-white/30 hover:text-acid hover:bg-acid/10' : 'text-black/30 hover:text-acid-dim hover:bg-acid/10'
                      }`}>
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {strengths.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? 'glass hover:border-white/15'
                    : 'bg-slate-50 border border-black/5 hover:border-black/10 hover:bg-white'
                }`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <div>
                  <h3 className={`font-display font-700 text-base mb-1 ${
                    isDark ? 'text-white' : 'text-ink-900'
                  }`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-white/50' : 'text-ink-400'
                  }`}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Interests */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`p-5 rounded-2xl ${
                isDark ? 'glass' : 'bg-slate-50 border border-black/5'
              }`}
            >
              <p className={`text-sm font-mono mb-3 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>
                interests[]
              </p>
              <div className="flex flex-wrap gap-2">
                {['Competitive Programming', 'Open Source', 'Chess', 'Language Learning'].map(tag => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark
                        ? 'bg-acid/10 text-acid border border-acid/20'
                        : 'bg-acid/10 text-acid-dim border border-acid/20'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
