import { motion } from 'framer-motion'
import { Github, ExternalLink, Zap } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data'

function ProjectCard({ project, index, isDark }) {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col rounded-3xl overflow-hidden transition-shadow duration-500 ${
        isDark
          ? 'glass hover:shadow-2xl hover:shadow-acid/5'
          : 'bg-white border border-black/6 shadow-sm hover:shadow-xl hover:shadow-black/8'
      }`}
    >
      {/* Top color stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Content */}
      <div className="p-7 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
            >
              {project.icon}
            </div>
            <div>
              <span
                className="text-xs font-mono font-medium px-2 py-0.5 rounded-full"
                style={{ background: `${project.color}18`, color: project.color }}
              >
                {project.status}
              </span>
            </div>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-white/40 hover:text-white hover:bg-white/8' : 'text-black/40 hover:text-black hover:bg-black/5'
              }`}
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'text-white/40 hover:text-white hover:bg-white/8' : 'text-black/40 hover:text-black hover:bg-black/5'
                }`}
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-display font-700 text-xl mb-3 leading-snug ${
          isDark ? 'text-white' : 'text-ink-900'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 ${
          isDark ? 'text-white/55' : 'text-ink-500'
        }`}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <Zap size={12} className="mt-1 shrink-0" style={{ color: project.color }} />
              <span className={`text-xs leading-relaxed ${
                isDark ? 'text-white/50' : 'text-ink-400'
              }`}>
                {h}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack footer */}
      <div className={`px-7 py-4 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded-md text-xs font-mono ${
                isDark ? 'bg-white/5 text-white/40' : 'bg-black/4 text-ink-400'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { isDark } = useTheme()
  const { ref, isInView } = useScrollReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-28 ${isDark ? 'bg-ink-900' : 'bg-white'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="section-tag">Projects</span>
            <h2 className={`font-display font-800 text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-ink-900'}`}>
              Things I've{' '}
              <span className="text-gradient">built.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Mahesh-T7"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark ? 'text-white/40 hover:text-acid' : 'text-ink-400 hover:text-acid-dim'
            }`}
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
