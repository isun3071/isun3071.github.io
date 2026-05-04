import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    title: 'RedHacks AI Red Team CTF',
    subtitle: 'BU Cybersecurity Association · April 2026 · Boston, MA',
    award: "BU's First LLM Red Team CTF",
    bullets: [
      'Designed and co-organized BU\'s first LLM red team CTF; authored five rounds targeting prompt injection, tool call exploitation, and agent manipulation',
      'Developed novel attack techniques including language-mixing with cognitive load misdirection and definition trap prompts',
      'Debut event drew 24 sign-ups',
    ],
    link: null,
  },
  {
    title: 'SafeContractor',
    subtitle: 'Civic Tech Hackathon · February 2025 · Boston, MA',
    award: 'Won Best Overall + Best Scam Protection',
    bullets: [
      'Engineered React and FastAPI platform integrating MariaDB, SQLAlchemy, and OpenAI; scraped 70K+ contractor license records from Massachusetts public records',
      'Indexed 1.5M+ database rows with optimized SQL keys for performance; implemented elastic search so residents can find contractors without exact name matches',
      'Generated AI-driven contractor credential summaries to help Boston residents verify contractors and avoid fraud',
    ],
    link: 'https://devpost.com/software/safe-contractors',
  },
]

export default function Projects() {
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
        id="projects"
        ref={sectionRef}
        className="py-16 px-8 md:px-16 lg:px-24"
      >
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: '#f97316' }}
            >
              Operational Implementations
            </h2>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Applied Projects
            </p>
          </div>

          <div className="w-full max-w-3xl space-y-6">
            {PROJECTS.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated rounded-lg p-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(20px)',
                  transition: isVisible
                    ? `opacity 0.8s ease-out ${index * 0.4}s, transform 0.8s ease-out ${index * 0.4}s`
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
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.subtitle}
                </p>
                {item.award && (
                  <p
                    className="text-xs font-semibold mb-5"
                    style={{ color: '#f97316' }}
                  >
                    {item.award}
                  </p>
                )}
                <br />
                <ul className="space-y-2.5 mb-5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#f97316' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <br />
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:underline"
                    style={{ color: '#f97316' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
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
