import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EASE = [0.23, 1, 0.32, 1]

const services = [
  { num: '01', title: 'גיזום עצים',    desc: 'עיצוב וחיתוך מקצועי של ענפים, שמירה על צורת העץ ובריאותו לאורך שנים.' },
  { num: '02', title: 'כריתת עצים',    desc: 'הסרה בטוחה של עצים שלמים בכל גובה ובכל סביבה — עירונית או פרטית.' },
  { num: '03', title: 'פינוי גזם',      desc: 'פינוי מלא של ענפים וגזמים עד שהשטח נקי לחלוטין, בסיום כל עבודה.' },
  { num: '04', title: 'העתקת עצים',    desc: 'בחירה, שתילה ועיגון נכון לכל סוג עץ, כולל ייעוץ מקצועי על מיקום ומינים.' },
  { num: '05', title: 'כרסום גדמים',    desc: 'כרסום גדמי עצים שנכרתו עד לפני השטח, ללא פגיעה בדשא או בתשתיות.' },
]

function ServiceRow({ s, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="service-row flex items-start gap-5 py-5 md:py-6"
      onClick={() => setOpen(o => !o)}
    >
      <span style={{
        fontWeight: 900, fontSize: 10, letterSpacing: '0.06em',
        color: 'oklch(0.69 0.122 150 / 0.45)',
        paddingTop: 4, minWidth: 24, flexShrink: 0,
      }}>
        {s.num}
      </span>

      <div className="flex-1 min-w-0">
        <div style={{
          fontWeight: 700,
          fontSize: 'clamp(18px, 2.4vw, 24px)',
          color: 'oklch(0.985 0.007 85)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          {s.title}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="desc"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              style={{ overflow: 'hidden' }}
            >
              <p style={{
                fontSize: 14, lineHeight: 1.7,
                color: 'oklch(0.86 0.068 150 / 0.6)',
                marginTop: 8,
              }}>
                {s.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="shrink-0 mt-1"
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.22, ease: EASE }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="oklch(0.69 0.122 150 / 0.45)" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const listRef   = useRef(null)
  const inView    = useInView(headerRef, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!listRef.current) return
    const rows = listRef.current.querySelectorAll('.service-row')
    gsap.fromTo(rows,
      { opacity: 0, x: 28 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 74%' } }
    )
  }, [])

  return (
    <section id="services" className="relative overflow-hidden" style={{ background: 'var(--g900)' }}>

      {/* Subtle radial light */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.41 0.108 147 / 0.06) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-1 rounded-full" style={{ background: 'var(--g400)' }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'oklch(0.69 0.122 150 / 0.65)' }}>
                השירותים שלנו
              </span>
            </div>
            <h2 style={{
              fontWeight: 900,
              fontSize: 'clamp(34px, 5vw, 60px)',
              letterSpacing: '-0.035em',
              color: 'oklch(0.985 0.007 85)',
              lineHeight: 1.05,
            }}>
              מה אנחנו עושים
            </h2>
          </motion.div>
        </div>

        {/* Two column: list + sticky photo */}
        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-20 lg:items-start">

          {/* List */}
          <div ref={listRef} style={{ borderTop: '1px solid oklch(0.86 0.068 150 / 0.1)' }}>
            {services.map((s, i) => (
              <ServiceRow key={i} s={s} index={i} />
            ))}
          </div>

          {/* Sticky photo — desktop only */}
          <motion.div
            className="hidden lg:block sticky top-28 rounded-2xl overflow-hidden"
            style={{ height: 500, boxShadow: '0 24px 60px oklch(0.16 0.038 145 / 0.4)' }}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.9, ease: EASE }}
          >
            <img src="/images/crane-sky.jpg" alt="גיזום עצים בגובה"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, var(--g950) 0%, transparent 45%)',
            }} />
            <div className="absolute bottom-5 right-5 left-5">
              <p style={{ fontSize: 13, fontWeight: 600, color: 'oklch(0.86 0.068 150 / 0.8)', lineHeight: 1.5 }}>
                כריתה וגיזום בגובה — ציוד מקצועי, עבודה בטוחה
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="mt-16 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}>
          <a href="tel:0549552228"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[14px]"
            style={{
              background: 'var(--g400)', color: 'var(--g950)',
              boxShadow: '0 4px 18px oklch(0.69 0.122 150 / 0.3)',
              transition: 'transform 160ms var(--ease), box-shadow 160ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 24px oklch(0.69 0.122 150 / 0.42)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 18px oklch(0.69 0.122 150 / 0.3)' }}
          >
            קבל הצעת מחיר
          </a>
          <span style={{ fontSize: 13, color: 'oklch(0.69 0.122 150 / 0.5)' }}>
            ללא התחייבות · מענה מהיר
          </span>
        </motion.div>
      </div>
    </section>
  )
}
