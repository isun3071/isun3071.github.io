import { talks } from '../content.js'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// 'Sep 2026' -> '2026-09'
function isoMonth(date) {
  const [month, year] = date.split(' ')
  return `${year}-${String(MONTHS.indexOf(month) + 1).padStart(2, '0')}`
}

export default function Talks() {
  return (
    <section id="talks" className="section" aria-labelledby="talks-title">
      <h2 id="talks-title">Talks</h2>
      <ol className="rows talks">
        {talks.map(({ date, event, href, title }) => (
          <li key={title} className="row">
            <time className="row-meta" dateTime={isoMonth(date)}>
              {date}
            </time>
            <span className="row-meta">{href ? <a href={href}>{event}</a> : event}</span>
            <span className="row-main">{title}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
