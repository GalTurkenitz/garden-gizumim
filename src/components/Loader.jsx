import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]
const WORD1 = 'גארדן'.split('')
const WORD2 = 'גיזומים'.split('')
const ALL   = [...WORD1, null, ...WORD2] // null = space

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="var(--g50)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
}

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none"
          style={{ background: 'var(--s0)' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          {/* Ambient */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 55% 55% at 50% 50%, oklch(0.41 0.108 147 / 0.07) 0%, transparent 70%)',
          }} />
          <div className="dot-grid absolute inset-0 opacity-40" />

          {/* Icon */}
          <motion.div
            className="mb-7 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--g800)', boxShadow: '0 8px 32px oklch(0.31 0.092 145 / 0.35)' }}
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: EASE }}
          >
            <LeafIcon />
          </motion.div>

          {/* Name — letters animate in RTL order */}
          <div className="flex items-baseline gap-0" style={{ direction: 'rtl' }}>
            {ALL.map((letter, i) => (
              letter === null
                ? <span key={i} style={{ width: 10 }} />
                : (
                  <motion.span key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.52 + i * 0.08, duration: 0.38, ease: EASE }}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'Heebo, sans-serif',
                      fontWeight: 900,
                      fontSize: 30,
                      color: 'var(--g800)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {letter}
                  </motion.span>
                )
            ))}
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            style={{
              fontFamily: 'Heebo, sans-serif',
              fontSize: 11, letterSpacing: '0.2em',
              color: 'var(--ink4)',
              marginTop: 8,
            }}
          >
            גיזום עצים מקצועי
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-10 overflow-hidden rounded-full"
            style={{ width: 100, height: 1.5, background: 'oklch(0.41 0.108 147 / 0.15)' }}>
            <motion.div className="h-full rounded-full"
              style={{ background: 'var(--g600)' }}
              initial={{ scaleX: 0, transformOrigin: 'right center' }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 2.55, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
