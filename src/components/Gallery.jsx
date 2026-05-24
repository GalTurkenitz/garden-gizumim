import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]

const photos = [
  { src: '/images/hero.jpeg',           alt: 'גיזום עצים מקצועי',        wide: true  },
  { src: '/images/worker-climbing.png', alt: 'טיפוס מקצועי לצמרת העץ',   wide: false },
  { src: '/images/crane-sky.jpg',       alt: 'כריתת עצים בגובה',          wide: false },
  { src: '/images/palms-white.jpeg',    alt: 'גיזום דקלים בסביבה עירונית', wide: false },
  { src: '/images/crane-city.png',      alt: 'ציוד כבד לגיזום עירוני',    wide: false },
  { src: '/images/evening-palm.jpeg',   alt: 'עבודת ערב, נגישות מלאה',    wide: false },
]

function PhotoCard({ photo, index, inView }) {
  return (
    <motion.div
      className="photo-reveal rounded-xl overflow-hidden"
      style={{
        gridColumn: photo.wide ? 'span 2' : 'span 1',
        aspectRatio: photo.wide ? '16/9' : '3/4',
        boxShadow: '0 4px 20px oklch(0.16 0.038 145 / 0.12)',
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08 + 0.1, duration: 0.7, ease: EASE }}
    >
      <img src={photo.src} alt={photo.alt}
        className="w-full h-full object-cover"
        loading="lazy"
        style={{ objectPosition: 'center 30%' }}
      />
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--s1)' }}>

      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.41 0.108 147 / 0.18), transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div ref={ref} className="mb-12"
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--g600)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ink4)' }}>
              גלריית עבודות
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 style={{
              fontWeight: 900, fontSize: 'clamp(32px, 4.5vw, 52px)',
              letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.06,
            }}>
              העבודות שלנו
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: '38ch', lineHeight: 1.55 }}>
              כל עבודה מבוצעת בדקדוק, עד לתוצאה אחת — גינה נקייה ומסודרת
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          style={{ gridAutoRows: 'auto' }}>
          {photos.map((photo, i) => (
            <PhotoCard key={i} photo={photo} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div className="mt-10 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}>
          <a href="tel:0549552228"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: 'var(--g700)', transition: 'opacity 150ms' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span>רוצים גינה כזאת? קראו עכשיו</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
