import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Zap, Download } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { personal, stats } from '../data'

const roles = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'AI Integration Specialist',
  'Real-Time Systems Builder',
]

function TypeWriter({ texts }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = texts[idx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 70)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 35)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % texts.length)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, texts])

  return <span>{text}<span className="animate-blink text-acid">|</span></span>
}

function GridBackground({ isDark }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 grid-dots opacity-${isDark ? '100' : '40'}`} />
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-acid/5' : 'bg-acid/8'} animate-pulse-slow`} />
      <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-sky-neon/5' : 'bg-sky-neon/8'} animate-pulse-slow`} style={{ animationDelay: '2s' }} />
      <div className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-coral/4' : 'bg-coral/6'} animate-pulse-slow`} style={{ animationDelay: '4s' }} />
    </div>
  )
}

export default function Hero() {
  const { isDark } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden noise-bg ${
        isDark ? 'bg-ink-950' : 'bg-slate-50'
      }`}
    >
      <GridBackground isDark={isDark} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-8">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium ${
                isDark ? 'glass border-acid/20 text-acid' : 'bg-acid/10 border border-acid/30 text-acid-dim'
              }`}>
                <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={item}>
              <h1 className={`font-display font-800 text-5xl md:text-7xl leading-none mb-4 ${
                isDark ? 'text-white' : 'text-ink-900'
              }`}>
                Mahesh<span className="text-gradient"> T</span>
              </h1>
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <p className={`font-display text-xl md:text-2xl font-500 ${
                isDark ? 'text-white/50' : 'text-ink-500'
              }`}>
                <TypeWriter texts={roles} />
              </p>
            </motion.div>

            <motion.p variants={item} className={`text-base md:text-lg max-w-xl leading-relaxed mb-10 ${
              isDark ? 'text-white/60' : 'text-ink-500'
            }`}>
              {personal.tagline} Specializing in{' '}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-ink-800'}`}>MERN stack</span>,{' '}
              <span className="text-acid font-medium">real-time collaboration</span>, and{' '}
              <span className={`font-medium ${isDark ? 'text-sky-neon' : 'text-blue-600'}`}>AI integration</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-acid text-ink-950 font-display font-700 text-sm hover:bg-acid-dim transition-all duration-200 glow-acid hover:scale-105 active:scale-100"
              >
                <Zap size={16} />
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-600 text-sm border transition-all duration-200 hover:scale-105 active:scale-100 ${
                  isDark
                    ? 'border-white/15 text-white/80 hover:border-acid/50 hover:text-acid glass'
                    : 'border-black/15 text-ink-700 hover:border-acid/50 hover:text-acid-dim bg-white'
                }`}
              >
                <Download size={16} />
                Resume
              </a>
              <a
                href="#contact"
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-600 text-sm border transition-all duration-200 hover:scale-105 active:scale-100 ${
                  isDark
                    ? 'border-white/15 text-white/80 hover:border-acid/50 hover:text-acid glass'
                    : 'border-black/15 text-ink-700 hover:border-acid/50 hover:text-acid-dim bg-white'
                }`}
              >
                Let's Talk
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                    isDark
                      ? 'border-white/10 text-white/40 hover:border-acid/50 hover:text-acid hover:bg-acid/10'
                      : 'border-black/10 text-black/40 hover:border-acid/50 hover:text-acid-dim hover:bg-acid/8'
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full pointer-events-none"
                  style={{
                    background: i % 2 === 0 ? 'rgba(0,255,135,0.7)' : 'rgba(0,212,255,0.7)',
                    top: `${10 + (i * 11) % 80}%`,
                    left: `${(i * 17 + 5) % 110 - 10}%`,
                    width: i % 3 === 0 ? '6px' : '4px',
                    height: i % 3 === 0 ? '6px' : '4px',
                  }}
                  animate={{
                    y: [0, -18, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 2.8 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Outer breathing glow ring (pulse animation) */}
              <motion.div
                className="absolute -inset-6 rounded-full pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 25px 4px rgba(0,255,135,0.12), 0 0 50px 8px rgba(0,212,255,0.06)',
                    '0 0 45px 12px rgba(0,255,135,0.28), 0 0 80px 20px rgba(0,212,255,0.14)',
                    '0 0 25px 4px rgba(0,255,135,0.12), 0 0 50px 8px rgba(0,212,255,0.06)',
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Spinning outer ring */}
              <motion.div
                className="absolute -inset-4 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: `conic-gradient(from 0deg, transparent 65%, ${isDark ? 'rgba(0,255,135,0.3)' : 'rgba(0,204,106,0.35)'} 100%)`,
                  borderRadius: '9999px',
                }}
              />

              {/* Static border ring */}
              <div className={`absolute -inset-4 rounded-full border pointer-events-none ${
                isDark ? 'border-acid/15' : 'border-acid/20'
              }`} />

              {/* Glassmorphism card glow border */}
              <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none"
                animate={{
                  opacity: [0.4, 0.85, 0.4],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(0,255,135,0.18) 0%, rgba(0,212,255,0.10) 50%, rgba(255,107,107,0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(0,204,106,0.15) 0%, rgba(0,180,220,0.09) 50%, rgba(220,80,80,0.06) 100%)',
                  borderRadius: '9999px',
                  backdropFilter: 'blur(1px)',
                  border: isDark ? '1px solid rgba(0,255,135,0.2)' : '1px solid rgba(0,204,106,0.18)',
                }}
              />

              {/* Photo with hover lift + glow */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: isDark
                    ? '0 40px 90px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,255,135,0.25), 0 0 40px rgba(0,255,135,0.3), 0 0 80px rgba(0,212,255,0.15)'
                    : '0 40px 90px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,204,106,0.3), 0 0 40px rgba(0,204,106,0.2)',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden cursor-pointer"
                style={{
                  boxShadow: isDark
                    ? '0 30px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,255,135,0.12), 0 0 20px rgba(0,255,135,0.1)'
                    : '0 30px 70px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,204,106,0.18)',
                }}
              >
                <img
                  src="/mahesh-photo.jpg"
                  alt="Mahesh T — Full-Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Cyan rim light — left edge */}
                <div className="absolute inset-y-0 left-0 w-1 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.6), transparent)' }} />

                {/* Green rim light — right edge */}
                <div className="absolute inset-y-0 right-0 w-1 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,255,135,0.5), transparent)' }} />

                {/* Top gloss shine */}
                <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,255,135,0.06), transparent)' }} />

                {/* Bottom gradient overlay */}
                <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${
                  isDark ? 'from-ink-950/60 to-transparent' : 'from-white/30 to-transparent'
                } pointer-events-none`} />
              </motion.div>

              {/* Badge: top-right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className={`absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-xs font-mono font-medium shadow-lg ${
                  isDark ? 'bg-ink-800/90 border border-acid/30 text-acid backdrop-blur-sm' : 'bg-white border border-acid/25 text-acid-dim'
                }`}
                style={isDark ? { boxShadow: '0 0 12px rgba(0,255,135,0.2)' } : {}}
              >
                MCA @ CMRIT
              </motion.div>

              {/* Badge: bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className={`absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full text-xs font-mono font-medium shadow-lg ${
                  isDark ? 'bg-ink-800/90 border border-sky-neon/30 text-sky-neon backdrop-blur-sm' : 'bg-white border border-blue-200 text-blue-600'
                }`}
                style={isDark ? { boxShadow: '0 0 12px rgba(0,212,255,0.2)' } : {}}
              >
                🇮🇳 Bangalore
              </motion.div>

              {/* Pulsing corner dot accents */}
              <motion.div
                className="absolute top-2 left-2 w-2 h-2 rounded-full bg-acid"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-sky-neon"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl ${
            isDark ? 'glass' : 'bg-white border border-black/5 shadow-sm'
          }`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`font-display font-800 text-2xl md:text-3xl ${isDark ? 'text-acid' : 'text-acid-dim'}`}>
                {stat.value}
              </div>
              <div className={`text-xs font-body mt-1 ${isDark ? 'text-white/40' : 'text-ink-400'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`font-mono text-xs tracking-widest ${isDark ? 'text-white/20' : 'text-black/20'}`}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} className={isDark ? 'text-white/20' : 'text-black/20'} />
        </motion.div>
      </motion.div>
    </section>
  )
}
