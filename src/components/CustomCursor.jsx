import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function CustomCursor() {
  const { position, isHovering } = useMousePosition()

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot fixed pointer-events-none z-[9999] rounded-full bg-acid"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 30 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          border: isHovering ? '1.5px solid #00ff87' : '1.5px solid rgba(0,255,135,0.5)',
          background: isHovering ? 'rgba(0,255,135,0.08)' : 'transparent',
        }}
        animate={{
          x: position.x - (isHovering ? 26 : 18),
          y: position.y - (isHovering ? 26 : 18),
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />
    </>
  )
}
