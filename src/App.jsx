import Hero from './components/Hero'
import Projects from './components/Projects'
import Frameworks from './components/Frameworks'
import Talks from './components/Talks'
import { Education, Experience } from './components/Background'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <main>
        <Projects />
        <Frameworks />
        <div className="split">
          <Talks />
          <Experience />
        </div>
        <div className="split">
          <Education />
          <Contact />
        </div>
      </main>
    </>
  )
}

// main.js sets aria-pressed from the active theme and saves the choice.
function ThemeToggle() {
  return (
    <button type="button" className="theme-toggle" aria-label="Dark theme" aria-pressed="false" data-theme-toggle="">
      <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  )
}
