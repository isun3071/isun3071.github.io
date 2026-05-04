import { useEffect, useRef, useState } from 'react'

const RESEARCH = [
  {
    title: 'Session Host — RSA Conference 2026',
    subtitle: 'RSAC 2026 · March 2026 · San Francisco, CA',
    category: 'Role',
    bullets: [
      'Selected as one of roughly 70 session hosts from 40,000+ attendees at the world\'s largest cybersecurity conference',
      'Facilitated sessions spanning enterprise security, human-layer risk, identity, AI, and Zero Trust tracks',
      'Conducted field research through live framework stress-tests with senior practitioners including Zero Trust architects, field CISOs, and behavioral science researchers',
    ],
    link: null,
  },
  {
    title: 'The Dissonance Test: What Can\'t Be Faked?',
    subtitle: 'SecureWorld Financial Services 2025',
    category: 'Conference Talk',
    bullets: [
      'Introduced a behavioral hiring control to ~40 security leaders in financial services',
      'Positioned workforce infiltration as an upstream governance problem',
      'Demonstrated how conversational controls in the human layer complement technical defenses',
    ],
    link: 'https://events.secureworld.io/agenda/financial-services-2-2025/',
  },
  {
    title: 'How Two Interview Questions Can Stop APTs and Seed Security Culture',
    subtitle: 'Medium / LinkedIn',
    category: 'Article',
    bullets: [
      'Breaks down the psychological mechanics behind the Dissonance Test',
      'Provides deployable examples hiring managers can use immediately',
      'Explains why cognitive dissonance exposes deception better than standard mitigations',
    ],
    link: 'https://medium.com/@iansun20/how-two-interview-questions-can-stop-apts-and-seed-security-culture-b406eade4ca3',
  },
  {
    title: 'Workforce Identity in the Age of Remote Deception',
    subtitle: 'SecureWorld Boston 2026',
    category: 'Conference Talk',
    bullets: [
      'Introduces the bounded vs. unbounded deception lens and the stake differential',
      'Explains why remote hiring gates unintentionally favor synthetic actors',
      'Proposes lightweight upstream controls for workforce identity risk',
    ],
    link: 'https://events.secureworld.io/agenda/boston-ma-2026/',
  },
  {
    title: 'When Labs Have Stakes: Teaching Cybersecurity Through Real Consequences',
    subtitle: 'NICE Conference 2026 · June 2, 2026 · Philadelphia, PA',
    category: 'Conference Talk',
    bullets: [
      'Co-presenting with Dr. Faisal Abdullah (CAO, Evolve Security Academy)',
      'Argues that labs with real friction and stakes build genuine security instinct where clean, curated environments fail',
      'Draws on live AD lab experience where consequences are real and habits formed under pressure actually transfer',
    ],
    link: null,
  },
  {
    title: 'Deception Disruption Framework (DDF)',
    subtitle: 'Layer 8 Conference · June 5–6, 2026 · Boston, MA',
    category: 'Conference Talk',
    bullets: [
      'Debuting an original behavioral verification system using three probe types: Lived Experience, Context Change, and Moral Reflection',
      'Designed to give defenders a real-time playbook when something feels wrong in a live interaction',
      'Addresses why "trust your gut" is insufficient when attackers are trained to bypass instinct and rush people through gates',
    ],
    link: null,
  },
]

export default function Research() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        id="research"
        ref={sectionRef}
        className="py-16 px-8 md:px-16 lg:px-24"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}
      >
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Public Work
            </h2>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Research &amp; Talks
            </p>
          </div>

          <div className="w-full max-w-3xl space-y-6">
            {RESEARCH.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated rounded-lg p-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(20px)',
                  transition: isVisible
                    ? `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`
                    : 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
                onTransitionEnd={(e) => {
                  if (e.propertyName === 'opacity' && isVisible) {
                    e.currentTarget.style.transition = ''
                    e.currentTarget.style.opacity = ''
                    e.currentTarget.style.transform = ''
                  }
                }}
              >
                {/* Tag */}
                <span
                  className="inline-block px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold rounded-full mb-5"
                  style={{
                    backgroundColor: 'var(--color-accent-muted)',
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {item.category}
                </span>

                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-xs font-medium mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.subtitle}
                </p>
                <br />
                <ul className="space-y-2.5 mb-5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <br />
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.category === 'Article' ? 'View Article' : 'See Agenda'}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
