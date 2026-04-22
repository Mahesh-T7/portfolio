import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { education, certifications } from '../data'

function EducationCard({ edu, index, isDark }) {
  const { ref, isInView } = useScrollReveal(0.1)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative pl-8 pb-12 last:pb-0`}
    >
      {/* Timeline line */}
      {index < education.length - 1 && (
        <div className={`absolute left-[11px] top-6 bottom-0 w-px ${isDark ? 'bg-white/8' : 'bg-black/8'}`} />
      )}
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-acid flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-ink-950" />
      </div>

      <div className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        isDark ? 'glass' : 'bg-white border border-black/6 shadow-sm'
      }`}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className={`font-display font-700 text-lg leading-snug mb-1 ${isDark ? 'text-white' : 'text-ink-900'}`}>
              {edu.degree}
            </h3>
            <p className={`font-medium text-sm ${isDark ? 'text-acid' : 'text-acid-dim'}`}>
              {edu.institution}
            </p>
          </div>
          <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-mono ${
            edu.status === 'Ongoing'
              ? isDark ? 'bg-acid/15 text-acid border border-acid/25' : 'bg-acid/10 text-acid-dim border border-acid/20'
              : isDark ? 'bg-white/8 text-white/50 border border-white/10' : 'bg-black/5 text-ink-400 border border-black/8'
          }`}>
            {edu.status}
          </span>
        </div>

        <div className={`flex flex-wrap gap-4 text-xs ${isDark ? 'text-white/40' : 'text-ink-400'}`}>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {edu.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {edu.location}
          </span>
          <span className="flex items-center gap-1 font-mono font-medium" style={{ color: '#fbbf24' }}>
            <Award size={12} />
            CGPA: {edu.gpa}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const { isDark } = useTheme()
  const { ref, isInView } = useScrollReveal()

  return (
    <section
      id="education"
      ref={ref}
      className={`relative py-28 ${isDark ? 'bg-ink-950' : 'bg-slate-50'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Education & Certs</span>
          <h2 className={`font-display font-800 text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-ink-900'}`}>
            Academic{' '}
            <span className="text-gradient">journey.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education timeline */}
          <div>
            <p className={`font-mono text-xs mb-8 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>
              // education
            </p>
            {education.map((edu, i) => (
              <EducationCard key={i} edu={edu} index={i} isDark={isDark} />
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p className={`font-mono text-xs mb-8 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>
              // certifications
            </p>
            <div className="space-y-4">
              {certifications.map((cert, i) => {
                const { ref: cRef, isInView: cInView } = useScrollReveal(0.1)
                return (
                  <motion.div
                    key={i}
                    ref={cRef}
                    initial={{ opacity: 0, x: 30 }}
                    animate={cInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${
                      isDark ? 'glass hover:border-acid/20' : 'bg-white border border-black/6 shadow-sm hover:border-acid/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark ? 'bg-acid/10 border border-acid/20' : 'bg-acid/8 border border-acid/15'
                    }`}>
                      <Award size={18} className={isDark ? 'text-acid' : 'text-acid-dim'} />
                    </div>
                    <div>
                      <p className={`font-medium text-sm leading-snug ${isDark ? 'text-white/85' : 'text-ink-800'}`}>
                        {cert.name}
                      </p>
                      <p className={`text-xs mt-0.5 ${isDark ? 'text-white/35' : 'text-ink-400'}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Languages spoken */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`mt-8 p-5 rounded-2xl ${isDark ? 'glass' : 'bg-white border border-black/6 shadow-sm'}`}
            >
              <p className={`font-mono text-xs mb-4 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>
                // languages spoken
              </p>
              <div className="space-y-3">
                {[
                  { lang: 'English', level: 'Professional', pct: 90 },
                  { lang: 'Hindi', level: 'Professional', pct: 85 },
                  { lang: 'Kannada', level: 'Native', pct: 100 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-ink-700'}`}>{lang}</span>
                      <span className={`text-xs font-mono ${isDark ? 'text-white/35' : 'text-ink-400'}`}>{level}</span>
                    </div>
                    <div className={`h-1 rounded-full ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-acid to-sky-neon"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
