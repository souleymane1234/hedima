import Reveal from './Reveal.jsx'

export default function ValueCard({ icon, title, text, index = 0, delay = 0 }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal as="article" className="value-card" delay={delay} variant="up">
      <span className="value-card__index" aria-hidden="true">
        {number}
      </span>
      <div className="value-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="value-card__line" aria-hidden="true" />
    </Reveal>
  )
}
