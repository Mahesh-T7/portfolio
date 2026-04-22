import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { personal } from '../data'

export default function Footer() {
  const { isDark } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className={`relative py-12 border-t ${
      isDark ? 'bg-ink-950 border-white/5' : 'bg-slate-50 border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div>
          <span className="font-display font-800 text-xl">
            <span className="text-gradient">MT</span>
          </span>
          <p className={`text-xs font-mono mt-1 ${isDark ? 'text-white/25' : 'text-ink-300'}`}>
            Full-Stack Developer · Bangalore
          </p>
        </div>

        {/* Center */}
        <p className={`text-xs font-body flex items-center gap-1.5 ${isDark ? 'text-white/25' : 'text-ink-300'}`}>
          © {year} Mahesh T · Built with
          <Heart size={11} className="text-coral fill-coral" />
          in React + Tailwind
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: personal.github, label: 'GitHub' },
            { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className={`p-2 rounded-lg transition-all ${
                isDark
                  ? 'text-white/25 hover:text-acid hover:bg-acid/10'
                  : 'text-black/25 hover:text-acid-dim hover:bg-acid/10'
              }`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
