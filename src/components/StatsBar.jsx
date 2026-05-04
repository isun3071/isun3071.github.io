const SIGNALS = [
  'RSAC 2026 Session Host',
  'PNPT Certified',
  'SecureWorld · NICE · Layer 8 Speaker',
  'CompTIA Net+ / Sec+ / ISC² CC',
]

export default function StatsBar() {
  return (
    <>
      <section className="py-10 px-8 md:px-16 lg:px-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {SIGNALS.map((signal) => (
            <span
              key={signal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{
                backgroundColor: 'var(--color-accent-muted)',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-border)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full stat-pulse"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              {signal}
            </span>
          ))}
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
