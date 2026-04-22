import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggle, isDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'glass border-b border-white/5 py-3'
              : 'glass-light border-b border-black/5 py-3'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-display font-800 text-xl group">
            <span className="text-gradient">MT</span>
            <span className={`ml-2 text-sm font-mono font-normal ${isDark ? 'text-white/30' : 'text-black/30'}`}>
              .dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className={`font-body text-sm font-medium transition-colors duration-200 relative group ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-acid group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-white/50 hover:text-acid hover:bg-acid/10'
                  : 'text-black/50 hover:text-acid-dim hover:bg-acid/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-acid text-ink-950 text-sm font-display font-600 hover:bg-acid-dim transition-all duration-200 glow-acid group"
            >
              <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              Resume
            </a>

            {/* Mobile menu */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white/70' : 'text-black/70'}`}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 right-0 z-40 w-72 ${
              isDark ? 'bg-ink-950 border-l border-white/5' : 'bg-white border-l border-black/5'
            } flex flex-col pt-24 pb-12 px-8`}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                className={`py-4 font-display text-lg font-600 border-b ${
                  isDark ? 'border-white/5 text-white/80 hover:text-acid' : 'border-black/5 text-black/80 hover:text-acid-dim'
                } transition-colors`}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-8 flex items-center justify-center gap-2 py-3 rounded-lg bg-acid text-ink-950 font-display font-600"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
