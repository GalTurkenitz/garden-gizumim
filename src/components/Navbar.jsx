import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]
const links = [
  { label: 'שירותים', href: '#services' },
  { label: 'עבודות',  href: '#gallery' },
  { label: 'ביקורות', href: '#reviews' },
  { label: 'צור קשר', href: '#contact' },
]

function LeafIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-4 inset-x-0 z-[9980] flex justify-center px-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
      >
        <motion.nav
          className="flex items-center gap-2 px-3 py-2 rounded-full"
          animate={{
            background: scrolled ? 'oklch(0.985 0.007 85 / 0.95)' : 'oklch(0.985 0.007 85 / 0.72)',
            boxShadow: scrolled
              ? '0 1px 0 oklch(0.41 0.108 147 / 0.14), 0 6px 28px oklch(0.16 0.038 145 / 0.1)'
              : '0 1px 0 oklch(0.41 0.108 147 / 0.08), 0 3px 14px oklch(0.16 0.038 145 / 0.05)',
          }}
          transition={{ duration: 0.28 }}
          style={{ backdropFilter: 'blur(22px)', border: '1px solid oklch(0.41 0.108 147 / 0.14)' }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 px-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'var(--g800)' }}>
              <span style={{ color: 'var(--g50)' }}><LeafIcon size={13} /></span>
            </div>
            <span style={{ fontWeight: 800, fontSize: 13, color: 'var(--g900)', letterSpacing: '-0.01em' }}>
              גארדן גיזומים
            </span>
          </a>

          <div className="hidden md:block w-px h-4 mx-0.5"
            style={{ background: 'oklch(0.41 0.108 147 / 0.22)' }} />

          <div className="hidden md:flex items-center">
            {links.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium"
                style={{ color: 'var(--ink3)', transition: 'color 140ms' }}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, ease: EASE }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--g800)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink3)'}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block w-px h-4 mx-0.5"
            style={{ background: 'oklch(0.41 0.108 147 / 0.22)' }} />

          <motion.a href="tel:0549552228"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold"
            style={{ background: 'var(--g800)', color: 'var(--g50)', boxShadow: '0 2px 8px oklch(0.23 0.072 145 / 0.35)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          >
            054-955-2228
          </motion.a>

          <button className="md:hidden flex flex-col gap-[4px] p-2"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">
            {[0, 1].map(i => (
              <motion.span key={i} className="block rounded-full"
                style={{ width: 17, height: 1.5, background: 'var(--g800)' }}
                animate={menuOpen
                  ? { rotate: i === 0 ? 45 : -45, y: i === 0 ? 3 : -3 }
                  : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
              />
            ))}
          </button>
        </motion.nav>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[9970] md:hidden flex flex-col items-center justify-center gap-2 px-8"
            style={{ background: 'oklch(0.985 0.007 85 / 0.97)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mb-8 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'var(--g800)' }}>
                <span style={{ color: 'var(--g50)' }}><LeafIcon size={22} /></span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--g900)' }}>גארדן גיזומים</span>
            </div>
            {links.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-4 text-xl font-bold rounded-2xl"
                style={{ color: 'var(--ink)' }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.08, ease: EASE }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a href="tel:0549552228"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full text-center py-4 rounded-2xl font-bold text-base"
              style={{ background: 'var(--g800)', color: 'var(--g50)' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, ease: EASE }}
            >
              054-955-2228
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
