import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.23, 1, 0.32, 1]

const services = [
  'גיזום עצים',
  'כריתת עצים',
  'פינוי גזם',
  'העתקת עצים',
  'כרסום גדמים',
  'אחר',
]

export default function LeadForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', phone: '', service: '', note: '' })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const onSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.phone) return

    const lines = [
      `שם: ${form.name}`,
      `טלפון: ${form.phone}`,
      form.service ? `שירות: ${form.service}` : null,
      form.note    ? `הערה: ${form.note}` : null,
    ].filter(Boolean).join('%0A')

    const msg = `פנייה חדשה מהאתר 🌿%0A${lines}`
    window.open(`https://wa.me/972549552228?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="lead" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--s1)' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.41 0.108 147 / 0.18), transparent)' }} />

      {/* Ambient orb */}
      <div className="absolute pointer-events-none"
        style={{ width: 480, height: 480, borderRadius: '50%', filter: 'blur(90px)',
          background: 'oklch(0.59 0.132 148 / 0.06)', top: '10%', right: '5%' }} />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6">

        {/* Header */}
        <motion.div className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--g500)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ink4)' }}>
              השאירו פרטים
            </span>
          </div>
          <h2 style={{
            fontWeight: 900, fontSize: 'clamp(28px, 4vw, 46px)',
            letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1,
          }}>
            נחזור אליכם{' '}
            <span style={{ color: 'var(--g600)' }}>תוך דקות</span>
          </h2>
          <p className="mt-3" style={{ fontSize: 15, color: 'var(--ink3)' }}>
            ממלאים פרטים, לוחצים שלח — ואנחנו עונים בוואטסאפ.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
        >
          <div className="rounded-3xl p-8 md:p-10"
            style={{
              background: 'oklch(0.985 0.007 85)',
              border: '1px solid oklch(0.41 0.108 147 / 0.1)',
              boxShadow: '0 8px 48px oklch(0.16 0.038 145 / 0.08), 0 2px 8px oklch(0.16 0.038 145 / 0.04)',
            }}>

            {sent ? (
              <motion.div className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'oklch(0.59 0.132 148 / 0.12)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="var(--g600)" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p style={{ fontWeight: 800, fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>
                  תודה, קיבלנו!
                </p>
                <p style={{ fontSize: 14, color: 'var(--ink3)' }}>
                  נחזור אליכם בוואטסאפ בהקדם.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="שם מלא" required
                    value={form.name} onChange={v => set('name', v)}
                    placeholder="ישראל ישראלי" />
                  <Field label="טלפון" required type="tel"
                    value={form.phone} onChange={v => set('phone', v)}
                    placeholder="054-000-0000" />
                </div>

                {/* Service */}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink2)',
                    display: 'block', marginBottom: 7 }}>
                    סוג שירות
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map(s => (
                      <button key={s} type="button"
                        onClick={() => set('service', form.service === s ? '' : s)}
                        className="px-4 py-2 rounded-full text-[13px] font-medium transition-all"
                        style={{
                          border: form.service === s
                            ? '1.5px solid var(--g500)'
                            : '1.5px solid oklch(0.41 0.108 147 / 0.2)',
                          background: form.service === s
                            ? 'oklch(0.59 0.132 148 / 0.1)'
                            : 'transparent',
                          color: form.service === s ? 'var(--g700)' : 'var(--ink3)',
                        }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink2)',
                    display: 'block', marginBottom: 7 }}>
                    הערות <span style={{ fontWeight: 400, color: 'var(--ink4)' }}>(לא חובה)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={e => set('note', e.target.value)}
                    placeholder="תיאור קצר של העבודה, כתובת, כל פרט שיעזור..."
                    style={{
                      width: '100%', resize: 'none',
                      padding: '12px 14px',
                      borderRadius: 14,
                      border: '1.5px solid oklch(0.41 0.108 147 / 0.18)',
                      background: 'var(--s0)',
                      fontSize: 14, color: 'var(--ink)',
                      outline: 'none',
                      fontFamily: 'Heebo, sans-serif',
                      transition: 'border-color 150ms',
                    }}
                    onFocus={e => e.target.style.borderColor = 'oklch(0.51 0.122 148 / 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'oklch(0.41 0.108 147 / 0.18)'}
                  />
                </div>

                {/* Submit */}
                <button type="submit"
                  disabled={!form.name || !form.phone}
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-bold text-[15px]"
                  style={{
                    background: !form.name || !form.phone
                      ? 'oklch(0.41 0.108 147 / 0.2)'
                      : 'linear-gradient(135deg, var(--g600), var(--g400))',
                    color: !form.name || !form.phone ? 'var(--ink4)' : 'var(--g950)',
                    cursor: !form.name || !form.phone ? 'not-allowed' : 'pointer',
                    boxShadow: !form.name || !form.phone
                      ? 'none'
                      : '0 6px 24px oklch(0.51 0.122 148 / 0.28)',
                    transition: 'all 160ms',
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  שלחו לוואטסאפ
                </button>

              </form>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, placeholder, required, type = 'text' }) {
  return (
    <div>
      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink2)',
        display: 'block', marginBottom: 7 }}>
        {label} {required && <span style={{ color: 'var(--g600)' }}>*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: 14,
          border: '1.5px solid oklch(0.41 0.108 147 / 0.18)',
          background: 'var(--s0)',
          fontSize: 14, color: 'var(--ink)',
          outline: 'none',
          fontFamily: 'Heebo, sans-serif',
          transition: 'border-color 150ms',
        }}
        onFocus={e => e.target.style.borderColor = 'oklch(0.51 0.122 148 / 0.5)'}
        onBlur={e => e.target.style.borderColor = 'oklch(0.41 0.108 147 / 0.18)'}
      />
    </div>
  )
}
