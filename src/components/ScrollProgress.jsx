import { useScroll, motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-acid origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}
