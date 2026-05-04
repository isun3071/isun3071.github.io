export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient-bg px-8 md:px-16 lg:px-24">
      {/* BG layers */}
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="scanline-overlay" />

      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-center">
        {/* Left — text block */}
        <div>
          {/* Eyebrow */}
          <p
            data-animate="fade-up"
            style={{ animationDelay: '0.15s', color: 'var(--color-accent)' }}
            className="text-[11px] uppercase tracking-[0.25em] font-medium mb-8"
          >
            Cybersecurity Practitioner &middot; Human&#8209;Layer Security &middot; Behavioral Risk
          </p>

          {/* Headline */}
          <h1
            data-animate="fade-up"
            style={{ animationDelay: '0.3s' }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[var(--color-text-primary)]"
          >
            Security fails at the human layer. I build frameworks that don&rsquo;t.
          </h1>

          {/* Supporting text */}
          <p
            data-animate="fade-up"
            style={{ animationDelay: '0.5s' }}
            className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-[var(--color-text-secondary)]"
          >
            RSAC 2026 Session Host. Creator of the Dissonance Test and the Deception Disruption Framework. SecureWorld, NICE, and Layer 8 Speaker. PNPT certified.
          </p>

          {/* CTAs */}
          <div
            data-animate="fade-up"
            style={{ animationDelay: '0.7s' }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-semibold tracking-wider uppercase text-white"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12M12 16.5V3" />
              </svg>
              View Resume
            </a>
            <a
              href="#contact"
              className="btn-outline inline-flex items-center gap-2 px-7 py-3 rounded-md text-sm font-semibold tracking-wider uppercase text-[var(--color-text-primary)] hover:text-white"
              style={{ borderColor: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}
            >
              Contact
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-animate="fade"
        style={{ animationDelay: '1.2s' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-600/70 flex justify-center pt-2.5">
          <div className="w-1 h-2.5 rounded-full bg-gray-500 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
