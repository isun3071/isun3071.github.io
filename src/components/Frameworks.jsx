import { frameworks } from '../content.js'

// Names only until one is clicked. Without script, every panel shows under its own heading.
export default function Frameworks() {
  return (
    <section id="frameworks" className="section" aria-labelledby="frameworks-title">
      <h2 id="frameworks-title">Frameworks</h2>

      <div className="picker">
        <ul className="picker-list">
          {frameworks.map(({ id, name }) => (
            <li key={id}>
              <button type="button" id={`fw-${id}-button`} aria-expanded="false" aria-controls={`fw-${id}`}>
                <span>{name}</span>
                <svg className="picker-icon" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h10M8 3v10" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {frameworks.map(({ id, name, detail, probes, venue }) => (
          <div key={id} id={`fw-${id}`} className="picker-panel" role="region" aria-labelledby={`fw-${id}-button`}>
            <h3 className="picker-heading">{name}</h3>
            {detail.map((sentence) => (
              <p key={sentence}>
                <span className="redact">{sentence}</span>
              </p>
            ))}
            {probes && (
              <ol className="probes">
                {probes.map((probe) => (
                  <li key={probe}>
                    <span className="redact">{probe}</span>
                  </li>
                ))}
              </ol>
            )}
            <p className="venue">
              <span className="redact">{venue}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
