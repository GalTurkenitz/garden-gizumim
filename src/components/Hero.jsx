import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]

function TreeIllustration() {
  return (
    <svg viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}>

      {/* Ground */}
      <ellipse cx="130" cy="298" rx="72" ry="10" fill="oklch(0.31 0.092 145 / 0.18)" />

      {/* Trunk */}
      <rect x="118" y="220" width="24" height="78" rx="10" fill="oklch(0.41 0.108 147 / 0.55)" />
      <rect x="123" y="220" width="6" height="78" rx="3" fill="oklch(0.41 0.108 147 / 0.2)" />

      {/* Canopy — back layer */}
      <ellipse cx="130" cy="178" rx="68" ry="62" fill="oklch(0.31 0.092 145 / 0.55)" />

      {/* Canopy — mid layer */}
      <ellipse cx="130" cy="162" rx="55" ry="52" fill="oklch(0.41 0.108 147 / 0.75)" />

      {/* Canopy — top bright */}
      <ellipse cx="130" cy="148" rx="42" ry="40" fill="oklch(0.51 0.122 148)" />

      {/* Highlight on canopy */}
      <ellipse cx="118" cy="132" rx="18" ry="14" fill="oklch(0.69 0.122 150 / 0.45)" />

      {/* Small clusters / texture bumps */}
      <circle cx="82" cy="170" r="20" fill="oklch(0.41 0.108 147 / 0.6)" />
      <circle cx="178" cy="164" r="18" fill="oklch(0.41 0.108 147 / 0.55)" />
      <circle cx="96" cy="142" r="15" fill="oklch(0.51 0.122 148 / 0.7)" />
      <circle cx="164" cy="148" r="17" fill="oklch(0.51 0.122 148 / 0.65)" />
      <circle cx="130" cy="112" r="16" fill="oklch(0.59 0.132 148 / 0.6)" />

      {/* Scissors / shears — right side of tree */}
      <g transform="translate(176, 148) rotate(-30)">
        {/* Blade 1 */}
        <path d="M0 0 L22 -6 L24 -2 L4 6 Z" fill="oklch(0.86 0.068 150)" />
        {/* Blade 2 */}
        <path d="M0 0 L22 6 L24 2 L4 -6 Z" fill="oklch(0.77 0.102 150)" />
        {/* Pivot */}
        <circle cx="4" cy="0" r="3.5" fill="oklch(0.69 0.122 150)" />
        {/* Handle 1 */}
        <path d="M-2 -2 L-18 -10 L-20 -6 L-4 2 Z" fill="oklch(0.23 0.072 145)" />
        {/* Handle 2 */}
        <path d="M-2 2 L-18 10 L-20 6 L-4 -2 Z" fill="oklch(0.17 0.052 145)" />
      </g>

      {/* Cut branch falling */}
      <g transform="translate(172, 192) rotate(25)" opacity="0.7">
        <rect x="0" y="-3" width="28" height="6" rx="3" fill="oklch(0.41 0.108 147 / 0.6)" />
        <ellipse cx="28" cy="0" rx="10" ry="8" fill="oklch(0.51 0.122 148 / 0.7)" />
        <circle cx="30" cy="-2" r="4" fill="oklch(0.59 0.132 148 / 0.6)" />
      </g>

      {/* Small leaves floating */}
      <g transform="translate(196, 200) rotate(-15)" opacity="0.65">
        <ellipse cx="0" cy="0" rx="7" ry="4" fill="oklch(0.69 0.122 150)" />
      </g>
      <g transform="translate(208, 222) rotate(20)" opacity="0.45">
        <ellipse cx="0" cy="0" rx="5" ry="3" fill="oklch(0.59 0.132 148)" />
      </g>
    </svg>
  )
}

function PhotoMockup() {
  return (
    <motion.div
      className="relative w-full max-w-[300px] mx-auto lg:mx-0"
      initial={{ opacity: 0, scale: 0.9, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
    >
      <div style={{ transform: 'perspective(800px) rotateY(4deg) rotateX(2deg)' }}>
        {/* Frame */}
        <div className="rounded-[2rem] p-[2.5px]"
          style={{
            background: 'linear-gradient(145deg, var(--g300) 0%, var(--g600) 40%, var(--g900) 80%, var(--g400) 100%)',
            boxShadow: '0 24px 80px oklch(0.41 0.108 147 / 0.22), 0 4px 16px oklch(0.16 0.038 145 / 0.1)',
          }}>
          <div className="rounded-[1.75rem] overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(160deg, oklch(0.93 0.038 150) 0%, oklch(0.86 0.068 150 / 0.6) 50%, oklch(0.97 0.018 150) 100%)',
              aspectRatio: '3/4',
            }}>
            <TreeIllustration />
          </div>
        </div>
      </div>

      {/* Badge — top left (visual right in RTL) */}
      <motion.div
        className="absolute rounded-2xl px-4 py-3"
        style={{
          background: 'oklch(0.985 0.007 85)',
          boxShadow: '0 8px 28px oklch(0.31 0.092 145 / 0.18), 0 1px 4px oklch(0.16 0.038 145 / 0.07)',
          border: '1px solid oklch(0.41 0.108 147 / 0.14)',
          right: '-8%', top: '16%',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-xs font-bold" style={{ color: 'var(--g700)' }}>זמינים 24/7</div>
        <div className="text-[10px] mt-0.5" style={{ color: 'var(--ink4)' }}>מענה מהיר</div>
      </motion.div>

      {/* Badge — bottom right */}
      <motion.div
        className="absolute rounded-2xl px-4 py-3"
        style={{
          background: 'var(--g700)',
          boxShadow: '0 8px 28px oklch(0.41 0.108 147 / 0.35)',
          left: '-6%', bottom: '22%',
        }}
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <div className="text-xs font-bold text-white">מחיר הוגן</div>
        <div className="text-[10px] mt-0.5" style={{ color: 'oklch(0.94 0.04 150 / 0.75)' }}>ללא הפתעות</div>
      </motion.div>
    </motion.div>
  )
}

function GreenBtn({ href, children }) {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 20 })
  const sy = useSpring(y, { stiffness: 180, damping: 20 })
  const onMove = e => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.28)
    y.set((e.clientY - r.top - r.height / 2) * 0.28)
  }
  return (
    <motion.div ref={ref} className="inline-block" style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0) }}>
      <a href={href}
        className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[14px]"
        style={{
          background: 'linear-gradient(135deg, var(--g600), var(--g400))',
          color: 'var(--g950)',
          boxShadow: '0 1px 0 oklch(0.94 0.04 150 / 0.25) inset, 0 6px 20px oklch(0.51 0.122 148 / 0.3)',
        }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
      >
        {children}
      </a>
    </motion.div>
  )
}

function GhostBtn({ href, children, external }) {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 20 })
  const sy = useSpring(y, { stiffness: 180, damping: 20 })
  const onMove = e => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.28)
    y.set((e.clientY - r.top - r.height / 2) * 0.28)
  }
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <motion.div ref={ref} className="inline-block" style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0) }}>
      <a href={href} {...extra}
        className="flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-[14px]"
        style={{
          border: '1.5px solid oklch(0.41 0.108 147 / 0.28)',
          color: 'var(--ink3)',
          transition: 'border-color 150ms, color 150ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'oklch(0.41 0.108 147 / 0.55)'; e.currentTarget.style.color = 'var(--ink)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'oklch(0.41 0.108 147 / 0.28)'; e.currentTarget.style.color = 'var(--ink3)' }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
      >
        {children}
      </a>
    </motion.div>
  )
}

const headlineLines = [
  { text: 'גיזום וכריתת עצים', delay: 0.1 },
  { text: 'בהוד השרון',        delay: 0.22 },
  { text: <span key="p" style={{ color: 'var(--g600)' }}>בידיים טובות</span>, delay: 0.34 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--s0)' }} />
      <div className="dot-grid absolute inset-0 opacity-40" />

      {/* Ambient orbs */}
      <div className="orb orb-1 absolute pointer-events-none"
        style={{ width: 520, height: 520, background: 'oklch(0.41 0.108 147 / 0.06)', top: '-15%', right: '25%' }} />
      <div className="orb orb-2 absolute pointer-events-none"
        style={{ width: 380, height: 380, background: 'oklch(0.59 0.132 148 / 0.04)', bottom: '5%', left: '10%' }} />

      {/* Top line */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.41 0.108 147 / 0.18), transparent)' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div className="mb-7"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}>
              <span className="section-tag">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--g500)' }} />
                גיזום עצים מקצועי · הוד השרון
              </span>
            </motion.div>

            <h1 style={{
              fontWeight: 900, letterSpacing: '-0.04em',
              lineHeight: 1.02, color: 'var(--ink)',
              fontSize: 'clamp(30px, 7.5vw, 76px)',
            }}>
              {headlineLines.map((line, i) => (
                <div key={i} className="line-mask">
                  <motion.div
                    initial={{ y: '108%' }} animate={{ y: '0%' }}
                    transition={{ delay: line.delay, duration: 0.78, ease: EASE }}
                  >
                    {line.text}
                  </motion.div>
                </div>
              ))}
            </h1>

            <motion.p className="mt-6 leading-relaxed"
              style={{ fontSize: 17, color: 'var(--ink3)', maxWidth: '44ch' }}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.65, ease: EASE }}
            >
              גיזום, כריתה ופינוי עצים בהוד השרון והסביבה. מהיר, אמין, ובמחיר שלא יפתיע אותך.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 mt-9"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.6, ease: EASE }}>
              <GreenBtn href="tel:0549552228">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.12 7.82a19.79 19.79 0 01-3.07-8.67A2 2 0 011.9 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                054-955-2228
              </GreenBtn>
              <GhostBtn href="https://wa.me/972549552228?text=שלום%2C%20אשמח%20לשמוע%20על%20שירותי%20גיזום%20עצים" external>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                וואטסאפ
              </GhostBtn>
            </motion.div>

            <motion.div className="flex flex-wrap items-center gap-5 mt-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.88, duration: 0.5 }}>
              {['גיזום מקצועי', 'ביקורות 5 כוכבים', 'הוד השרון והסביבה'].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[13px]"
                  style={{ color: 'var(--ink4)' }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--g500)' }} />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <PhotoMockup />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="bounce-arrow absolute bottom-7 left-1/2 pointer-events-none z-10">
        <div className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ border: '1px solid oklch(0.41 0.108 147 / 0.2)', background: 'oklch(0.985 0.007 85 / 0.6)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="var(--g600)" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--s1))' }} />
    </section>
  )
}
