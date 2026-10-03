import { hero } from '../content.js'

export default function Hero() {
  return (
    <header className="hero">
      {/* The CSS grid is the static fallback. main.js draws the drifting grid and scan line on the canvas. */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <canvas className="hero-canvas" />
        <ul className="hero-terms">
          {hero.terms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>

      <div className="hero-body">
        <h1>{hero.name}</h1>
        <p className="hero-line">{hero.line}</p>
        <div className="hero-actions">
          <a className="button primary" href="/resume.pdf">
            View resume
          </a>
          <a className="button" href="#projects">
            See the work
          </a>
        </div>
      </div>
    </header>
  )
}
