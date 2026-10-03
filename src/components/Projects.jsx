import { filters, projects } from '../content.js'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-head">
        <h2 id="projects-title">Projects</h2>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map(({ id, label }) => (
            <button key={id} type="button" data-filter={id} aria-pressed={id === 'all' ? 'true' : 'false'}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <p className="visually-hidden" aria-live="polite" data-filter-status="" />

      <ul className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </ul>
    </section>
  )
}

function ProjectCard({ name, tags, line, figure, link, caseStudy }) {
  return (
    <li className="card" data-tags={tags.join(' ')}>
      <h3>{name}</h3>
      <p className="card-line">{line}</p>
      {figure && <Figure {...figure} />}
      {link && (
        <a className="card-link" href={link.href}>
          {link.text}
          <span aria-hidden="true"> ↗</span>
        </a>
      )}
      {caseStudy && (
        <details className="case-study">
          <summary>Case study</summary>
          {caseStudy.map((paragraph) => (
            <p key={paragraph}>
              <span className="redact">{paragraph}</span>
            </p>
          ))}
        </details>
      )}
    </li>
  )
}

// The final value is in the HTML. main.js counts up to it when the card scrolls into view.
function Figure({ value, decimals = 0, prefix = '', suffix = '', label }) {
  const text = value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return (
    <p className="figure">
      <span className="figure-value">
        {prefix}
        <span data-count={value} data-decimals={decimals}>
          {text}
        </span>
        {suffix}
      </span>
      <span className="figure-label">{label}</span>
    </p>
  )
}
