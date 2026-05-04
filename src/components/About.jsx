export default function About() {
  return (
    <>
      <section id="about" className="py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-[240px_1fr] gap-12 items-start">
          {/* Left — avatar */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/profilepicture.jpg"
              alt="Ian Sun"
              className="w-48 h-48 rounded-xl object-cover"
              style={{
                border: '1px solid var(--color-border)',
              }}
            />
          </div>

          {/* Right — bio */}
          <div>
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              About
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Ian Sun
            </h3>
            <br />

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>I&rsquo;m a cybersecurity practitioner and framework developer focused on human-layer security and behavioral risk. My work sits at the intersection of how people deceive, how organizations verify, and what controls actually work before credentials are issued.</p>
              <br />
              <p>In 2025 I introduced the Dissonance Test at SecureWorld Financial Services, a behavioral hiring control that converts threat intelligence on workforce infiltration into deployable mitigations for hiring, onboarding, and access review. In April 2026 I returned to SecureWorld Boston with &ldquo;Workforce Identity in the Age of Remote Deception,&rdquo; introducing the bounded vs. unbounded deception lens for understanding why some candidates bypass every gate via the stake differential.</p>
              <br />
              <p>In June 2026 I debut the Deception Disruption Framework (DDF) at Layer 8 and co-present &ldquo;When Labs Have Stakes&rdquo; with Dr. Faisal Abdullah at the NICE Conference. Earlier this year I served as a session host at RSAC 2026, one of roughly 70 selected from 40,000+ attendees.</p>
              <br />
              <p>Alongside research and conference work, I build and operate enterprise lab environments with real stakes, support production IT systems at a 30,000+ student university, and previously interned at a regional MSP serving 40+ enterprise clients. I hold the PNPT, CompTIA Network+, Security+, and ISC&sup2; CC certifications.</p>
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                Looking for
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Human-layer security research, CISO office strategy, and security consulting roles
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
