import { motion } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]

const lines = [
  { text: 'גיזום',   delay: 0.3 },
  { text: 'עצים',    delay: 0.42 },
  { text: 'מקצועי',  delay: 0.54, accent: true },
]

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] flex flex-col justify-end overflow-hidden">

      {/* Photo */}
      <div className="absolute inset-0">
        <img src="/images/hero.jpeg" alt="גיזום עצים מקצועי — גארדן גיזומים"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 22%' }}
        />
        {/* Multi-stop overlay: readable top (for nav) + strong bottom (for text) */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(
            to top,
            oklch(0.17 0.052 145 / 0.97) 0%,
            oklch(0.17 0.052 145 / 0.88) 28%,
            oklch(0.17 0.052 145 / 0.42) 58%,
            oklch(0.17 0.052 145 / 0.28) 80%,
            oklch(0.17 0.052 145 / 0.38) 100%
          )`
        }} />
      </div>

      {/* Content — bottom anchored */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-14 pt-0">

        {/* Tag */}
        <motion.div className="flex items-center gap-2.5 mb-7"
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.18 }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--g400)' }} />
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'oklch(0.77 0.102 150 / 0.85)',
          }}>
            גיזום מקצועי · הוד השרון והסביבה
          </span>
        </motion.div>

        {/* Headline */}
        <h1 style={{
          fontWeight: 900,
          fontSize: 'clamp(52px, 11vw, 112px)',
          letterSpacing: '-0.045em',
          lineHeight: 0.93,
          color: 'oklch(0.985 0.007 85)',
        }}>
          {lines.map((line, i) => (
            <div key={i} className="line-mask">
              <motion.div
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ delay: line.delay, duration: 0.82, ease: EASE }}
                style={line.accent ? { color: 'var(--g400)' } : {}}
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.65, ease: EASE }}
          style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: 'oklch(0.86 0.068 150 / 0.72)',
            marginTop: 22, maxWidth: '40ch', lineHeight: 1.65,
          }}
        >
          גיזום, כריתה ופינוי עצים. שיחה אחת ואנחנו אצלכם.
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-wrap gap-3 mt-9"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92, duration: 0.6, ease: EASE }}
        >
          <a href="tel:0549552228"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[15px]"
            style={{
              background: 'var(--g400)', color: 'var(--g950)',
              boxShadow: '0 4px 20px oklch(0.69 0.122 150 / 0.38)',
              transition: 'transform 160ms var(--ease), box-shadow 160ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 28px oklch(0.69 0.122 150 / 0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px oklch(0.69 0.122 150 / 0.38)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.12 7.82a19.79 19.79 0 01-3.07-8.67A2 2 0 011.9 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            054-955-2228
          </a>

          <a href="https://wa.me/972549552228?text=שלום%2C%20אשמח%20לשמוע%20על%20שירותי%20גיזום%20עצים"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-[15px]"
            style={{
              border: '1.5px solid oklch(0.77 0.102 150 / 0.3)',
              color: 'oklch(0.86 0.068 150 / 0.88)',
              transition: 'border-color 150ms, color 150ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'oklch(0.77 0.102 150 / 0.6)'; e.currentTarget.style.color = 'oklch(0.985 0.007 85)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'oklch(0.77 0.102 150 / 0.3)'; e.currentTarget.style.color = 'oklch(0.86 0.068 150 / 0.88)' }}
          >
            וואטסאפ
          </a>
        </motion.div>

        {/* Social proof line */}
        <motion.div className="flex flex-wrap items-center gap-5 mt-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          {['מעל 14 ביקורות 5 כוכבים', 'הוד השרון והסביבה', 'זמינות מהירה'].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[12px]"
              style={{ color: 'oklch(0.77 0.102 150 / 0.6)' }}>
              <span className="w-1 h-1 rounded-full shrink-0"
                style={{ background: 'var(--g400)' }} />
              {t}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.5 },
          y: { delay: 1.4, duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ border: '1px solid oklch(0.77 0.102 150 / 0.22)', background: 'oklch(0.77 0.102 150 / 0.07)' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="oklch(0.77 0.102 150 / 0.55)" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
