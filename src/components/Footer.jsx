export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--g950)', borderTop: '1px solid oklch(0.41 0.108 147 / 0.3)' }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: 'var(--g800)' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="var(--g100)" strokeWidth="2" strokeLinecap="round">
                <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <span style={{ fontWeight: 800, fontSize: 13, color: 'var(--g300)' }}>גארדן גיזומים</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {[
              { label: 'גיזום עצים', href: '#services' },
              { label: 'עבודות',     href: '#gallery' },
              { label: 'ביקורות',   href: '#reviews' },
              { label: 'צור קשר',   href: '#contact' },
            ].map(link => (
              <a key={link.href} href={link.href}
                className="text-[12px] font-medium"
                style={{ color: 'oklch(0.69 0.122 150 / 0.55)', transition: 'color 140ms' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--g300)'}
                onMouseLeave={e => e.currentTarget.style.color = 'oklch(0.69 0.122 150 / 0.55)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: 11, color: 'oklch(0.52 0.058 145 / 0.7)' }}>
            גארדן גיזומים © {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
