import { contact } from '../content.js'

// The line for what Ian is looking for goes under the heading once he writes it.
export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <ul className="contact-links">
        {contact.map(({ label, href, text }) => (
          <li key={label}>
            <span className="contact-label">{label}</span>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
