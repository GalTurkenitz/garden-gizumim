import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]

const reviews = [
  { name: 'לקוח גארדן גיזומים', text: 'הצוות של מתן מדהים, עניינים, מקצועיים, מחירים טובים, זמינות ומענה מושלם' },
  { name: 'Ofir Hershco',        text: 'מספר 1! אדיבות מקצועיות ואמינות ברמה הכי גבוהה בארץ' },
  { name: 'מל סוכנות לביטוח',   text: 'מספר 1 ומקצוען בתחומו. איש ישר והגון!' },
  { name: 'נופר ביבש',           text: 'אלוף מספר 1 מחירים טובים' },
  { name: 'Mary Fisher',         text: 'תודה רבה על שירות מעבר למצופה!' },
  { name: 'אליקו עובדיה',        text: 'מקצועי ברמה הגבוהה ביותר מקסים ואדיב' },
  { name: 'Support Support',     text: 'הצוות הגיע ועבד בצורה מקצועית, פינה וגזם את העצים, הגיעו מהר ועבדו יעיל ונתנו שירות מהלב' },
  { name: 'Refael Shitrit',      text: 'אמין ומקצועי, תענוג לקבל שירות' },
  { name: 'אוראל בן חיים',       text: 'מקצועי ביותר שירות ברמה גבוהה' },
  { name: 'Itay Elnekave',       text: 'שירות מדהים, מקצועיות ואמינות מומלץ מאוד' },
  { name: 'Shirley Sofer',       text: 'השירות היה מעולה מחיר לכל כיס אדיבות והכי חשוב מקצועיות' },
  { name: 'מיראל קדוש',          text: 'תותח על ועובד מהלב!' },
  { name: 'לירון ברהום',         text: 'איכותי, מקצועי ואמין. ממליץ בחום!' },
  { name: 'איתי בן חיים',        text: 'דייקנות, איכות ומקצועיות' },
]

const doubled = [...reviews, ...reviews]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
          fill="var(--g400)" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ r }) {
  return (
    <div className="shrink-0 flex flex-col gap-3 p-5 rounded-2xl"
      style={{
        width: 280,
        background: 'oklch(0.985 0.007 85)',
        border: '1px solid oklch(0.41 0.108 147 / 0.1)',
        boxShadow: '0 2px 12px oklch(0.16 0.038 145 / 0.06)',
      }}>
      <Stars />
      <p style={{
        fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink2)',
        flex: 1,
      }}>
        "{r.text}"
      </p>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink4)' }}>{r.name}</div>
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--s0)' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.41 0.108 147 / 0.14), transparent)' }} />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-12">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--g600)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ink4)' }}>
              מה אומרים הלקוחות
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 style={{
              fontWeight: 900, fontSize: 'clamp(32px, 4.5vw, 52px)',
              letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.06,
            }}>
              14 ביקורות,{' '}
              <span style={{ color: 'var(--g700)' }}>14 כוכבים</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink3)', maxWidth: '36ch' }}>
              כולן 5 כוכבים. לא במקרה.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <motion.div className="relative overflow-hidden"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        {/* Fade edges */}
        <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, var(--s0), transparent)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, var(--s0), transparent)' }} />

        <div className="reviews-track px-6 pb-2">
          {doubled.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </motion.div>
    </section>
  )
}
