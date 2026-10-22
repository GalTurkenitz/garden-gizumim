import { useSyncExternalStore } from 'react'

// Google Ads measurement. The base tag, consent defaults and the official
// gtag_report_conversion() snippet live in index.html; this module wires them
// to the React UI. Runs once per page load (module scope), so React re-renders
// and StrictMode double-mounts never add listeners or configs twice.

const BUSINESS_DISPLAY = '054-955-2228'
const BUSINESS_TEL = 'tel:0549552228'
const CALL_SEND_TO = 'AW-779313511/BMgvCKDg_Z4dEOfCzfMC'
const WHATSAPP_SELECTOR = 'a[href^="https://wa.me/972549552228"]'

// ---- Website call conversions (Google forwarding number) ----
// Google calls phone_conversion_callback only for eligible ad visits. We keep
// the number in a tiny store so every tel: link re-renders with it, including
// links that mount later (mobile menu) — instead of patching the DOM React owns.

let phone = { display: BUSINESS_DISPLAY, tel: BUSINESS_TEL }
const subscribers = new Set()

function setPhone(next) {
  phone = next
  subscribers.forEach(fn => fn())
}

export function usePhone() {
  return useSyncExternalStore(
    fn => { subscribers.add(fn); return () => subscribers.delete(fn) },
    () => phone,
  )
}

// ---- WhatsApp transition (secondary, not a verified lead) ----

let lastWhatsAppReport = 0

export function reportWhatsApp() {
  // One event per interaction: swallow double-clicks / repeated taps.
  const now = Date.now()
  if (now - lastWhatsAppReport < 1500) return
  lastWhatsAppReport = now
  // No URL argument: the site keeps opening WhatsApp itself and nothing about
  // the visitor (name, phone, message text) is passed to Google.
  if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion()
}

function init() {
  if (window.__ggTrackingInit) return
  window.__ggTrackingInit = true

  if (typeof window.gtag === 'function') {
    window.gtag('config', CALL_SEND_TO, {
      phone_conversion_number: BUSINESS_DISPLAY,
      phone_conversion_callback: (formatted_number, mobile_number) => {
        if (!formatted_number || !mobile_number) return
        setPhone({ display: formatted_number, tel: 'tel:' + mobile_number })
      },
    })
  }

  // Single delegated listener covers all WhatsApp links, present or future,
  // and clicks on their inner SVG/icon.
  document.addEventListener('click', e => {
    const link = e.target instanceof Element ? e.target.closest(WHATSAPP_SELECTOR) : null
    if (link) reportWhatsApp()
  })
}

init()
