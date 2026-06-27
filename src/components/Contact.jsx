import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative overflow-hidden"
      style={{ background: 'var(--g900)' }}>

      {/* Background photo with heavy overlay */}
      <div className="absolute inset-0">
        <img src="/images/crane-city.png" alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{
          background: 'oklch(0.23 0.072 145 / 0.92)',
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: headline + phone */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-1 rounded-full" style={{ background: 'var(--g400)' }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'oklch(0.69 0.122 150 / 0.65)' }}>
                צרו קשר
              </span>
            </div>

            <h2 style={{
              fontWeight: 900,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              letterSpacing: '-0.035em',
              color: 'oklch(0.985 0.007 85)',
              lineHeight: 1.05,
              marginBottom: 20,
            }}>
              שיחה אחת —
              <br />
              <span style={{ color: 'var(--g400)' }}>ואנחנו אצלכם</span>
            </h2>

            <p style={{
              fontSize: 15, lineHeight: 1.65,
              color: 'oklch(0.86 0.068 150 / 0.65)',
              marginBottom: 36,
              maxWidth: '38ch',
            }}>
              זמינים לשאלות, הצעות מחיר ועבודות דחופות. מענה מהיר, הגעה מהירה.
            </p>

            {/* Big phone */}
            <a href="tel:0549552228"
              className="block mb-4 font-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 58px)',
                letterSpacing: '-0.04em',
                color: 'var(--g400)',
                lineHeight: 1,
                transition: 'color 160ms',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'oklch(0.985 0.007 85)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--g400)'}
            >
              054-955-2228
            </a>

            <p style={{ fontSize: 12, color: 'oklch(0.69 0.122 150 / 0.5)', marginBottom: 28 }}>
              לחץ לחיוג ישיר
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:0549552228"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14px]"
                style={{
                  background: 'var(--g400)', color: 'var(--g950)',
                  boxShadow: '0 4px 18px oklch(0.69 0.122 150 / 0.3)',
                  transition: 'transform 160ms var(--ease)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.12 7.82a19.79 19.79 0 01-3.07-8.67A2 2 0 011.9 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                התקשרו עכשיו
              </a>

              <a href="https://wa.me/972549552228?text=שלום%2C%20אשמח%20לשמוע%20על%20שירותי%20גיזום%20עצים"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px]"
                style={{
                  background: 'rgba(37,211,102,0.15)',
                  border: '1.5px solid rgba(37,211,102,0.3)',
                  color: 'rgba(37,211,102,0.9)',
                  transition: 'transform 160ms var(--ease), background 160ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.background = 'rgba(37,211,102,0.22)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(37,211,102,0.15)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                וואטסאפ
              </a>
            </div>
          </motion.div>

          {/* Right: details card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
          >
            <div className="rounded-2xl p-7"
              style={{
                background: 'oklch(0.985 0.007 85 / 0.06)',
                border: '1px solid oklch(0.86 0.068 150 / 0.12)',
                backdropFilter: 'blur(12px)',
              }}>

              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="var(--g400)" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.12 7.82a19.79 19.79 0 01-3.07-8.67A2 2 0 011.9 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  label: 'טלפון',
                  value: '054-955-2228',
                  href: 'tel:0549552228',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="var(--g400)" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'כתובת',
                  value: 'בני ברית 17, הוד השרון',
                  href: 'https://maps.google.com/?q=בני+ברית+17+הוד+השרון',
                },
              ].map((item, i) => (
                <a key={i} href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 py-4 group"
                  style={{
                    borderBottom: i === 0 ? '1px solid oklch(0.86 0.068 150 / 0.1)' : 'none',
                    textDecoration: 'none',
                  }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'oklch(0.69 0.122 150 / 0.12)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'oklch(0.69 0.122 150 / 0.5)',
                      letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: 15, fontWeight: 600, color: 'oklch(0.985 0.007 85)',
                      transition: 'color 140ms',
                    }}
                      className="group-hover:text-g400">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}

              <div className="mt-5 pt-1">
                <p style={{ fontSize: 13, color: 'oklch(0.69 0.122 150 / 0.5)', lineHeight: 1.6 }}>
                  פועלים באזור הוד השרון, רמת השרון, כפר סבא, רעננה ומעלה.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
