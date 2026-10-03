import { certifications, degrees, jobs, lab } from '../content.js'

export default function Background() {
  return (
    <div className="split">
      <section id="experience" className="section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <Rows items={jobs} />
      </section>

      <section id="education" className="section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <Rows items={degrees} />

        <h3>Certifications</h3>
        <ul className="certs">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>

        <h3>Lab</h3>
        <p className="lab">{lab}</p>
      </section>
    </div>
  )
}

function Rows({ items }) {
  return (
    <ul className="rows">
      {items.map(({ title, org, dates }) => (
        <li key={title} className="row">
          <span className="row-main">{title}</span>
          <span className="row-meta">{org}</span>
          <span className="row-meta row-dates">{dates}</span>
        </li>
      ))}
    </ul>
  )
}
