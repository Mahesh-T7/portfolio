import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills, skillTags } from '../data'

const categories = [
  { key: 'languages', label: 'Languages', color: '#00ff87' },
  { key: 'frontend', label: 'Frontend', color: '#00d4ff' },
  { key: 'backend', label: 'Backend', color: '#ff6b6b' },
  { key: 'database', label: 'Database', color: '#a78bfa' },
  { key: 'tools', label: 'Tools & APIs', color: '#fbbf24' },
]

function SkillBar({ name, level, color, index, isDark }) {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-ink-700'}`}>
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { isDark } = useTheme()
  const { ref, isInView } = useScrollReveal()

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-ink-950' : 'bg-slate-50'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Technical Skills</span>
          <h2 className={`font-display font-800 text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-ink-900'}`}>
            My tech{' '}
            <span className="text-gradient">arsenal.</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {categories.map(({ key, label, color }) => (
            <motion.div
              key={key}
              variants={item}
              className={`p-6 rounded-2xl ${
                isDark ? 'glass' : 'bg-white border border-black/5 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                <h3 className={`font-display font-700 text-sm uppercase tracking-wider ${
                  isDark ? 'text-white/70' : 'text-ink-500'
                }`}>
                  {label}
                </h3>
              </div>
              {skills[key].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={color}
                  index={i}
                  isDark={isDark}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className={`font-mono text-xs mb-4 ${isDark ? 'text-white/30' : 'text-ink-300'}`}>
            // All technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag, i) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium cursor-default transition-colors ${
                  isDark
                    ? 'bg-white/5 text-white/60 border border-white/8 hover:border-acid/40 hover:text-acid hover:bg-acid/8'
                    : 'bg-black/4 text-ink-500 border border-black/8 hover:border-acid/40 hover:text-acid-dim hover:bg-acid/8'
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
