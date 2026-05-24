const items = [
  'גיזום עצים', 'כריתת עצים', 'פינוי גזם', 'השתלת עצים', 'ניקיון גינות',
  'מקצועי', 'אמין', 'מהיר', 'הוד השרון', 'זמינות מלאה',
  'גיזום עצים', 'כריתת עצים', 'פינוי גזם', 'השתלת עצים', 'ניקיון גינות',
  'מקצועי', 'אמין', 'מהיר', 'הוד השרון', 'זמינות מלאה',
]

export default function TrustMarquee() {
  return (
    <div className="relative overflow-hidden py-3.5"
      style={{
        background: 'var(--g800)',
        borderTop: '1px solid oklch(0.41 0.108 147 / 0.5)',
        borderBottom: '1px solid oklch(0.41 0.108 147 / 0.5)',
      }}>
      <div className="trust-track select-none">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-5 text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: 'oklch(0.86 0.068 150 / 0.75)' }}>
              {item}
            </span>
            <span style={{ color: 'oklch(0.69 0.122 150 / 0.35)', fontSize: 7 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
