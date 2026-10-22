import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Minimal Consent Mode v2 banner. Defaults (denied) are set in index.html before
// the Google tag loads; this only records the visitor's choice and updates gtag.
const KEY = 'gg-consent'

function readChoice() {
  try { return localStorage.getItem(KEY) } catch { return null }
}

function applyChoice(value) {
  try { localStorage.setItem(KEY, value) } catch { /* private mode: choice lasts this page only */ }
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: value, ad_user_data: value, ad_personalization: value, analytics_storage: value,
    })
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event('gg-consent-open'))
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(() => !readChoice())

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener('gg-consent-open', show)
    return () => window.removeEventListener('gg-consent-open', show)
  }, [])

  const choose = value => { applyChoice(value); setOpen(false) }

  return (
    <AnimatePresence>
      {open && (
        <motion.div role="region" aria-label="הגדרות עוגיות"
          // Sits above the floating WhatsApp + accessibility buttons (~80px) and under the a11y panel.
          className="fixed inset-x-4 z-[99990] mx-auto max-w-xl rounded-2xl p-5"
          style={{
            bottom: 92,
            background: 'var(--g950)', color: 'var(--g50)',
            boxShadow: '0 8px 32px oklch(0.16 0.038 145 / 0.35)',
          }}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
        >
          <p style={{ fontSize: 13.5, lineHeight: 1.6 }}>
            אנחנו משתמשים בעוגיות ובכלי המדידה של Google כדי למדוד פניות שמגיעות מפרסום.
            אפשר לאשר או לדחות — האתר עובד כרגיל בכל מקרה.
          </p>
          <div className="flex gap-3 mt-4">
            <button type="button" onClick={() => choose('granted')}
              className="px-5 py-2 rounded-full font-bold text-[13px]"
              style={{ background: 'var(--g400)', color: 'var(--g950)' }}>
              מאשר/ת
            </button>
            <button type="button" onClick={() => choose('denied')}
              className="px-5 py-2 rounded-full font-semibold text-[13px]"
              style={{ border: '1.5px solid oklch(0.86 0.068 150 / 0.35)', color: 'var(--g100)' }}>
              לא, תודה
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
