import Img from './Img.jsx'
import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

export default function PageHero({
  eyebrow = 'HEDIMA',
  title,
  text,
  image,
  alt,
  tone = 'cream',
}) {
  return (
    <header className={`page-hero page-hero--${tone}`}>
      <Container className="page-hero__grid">
        <Reveal variant="left" className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {text && <p className="lead">{text}</p>}
        </Reveal>
        {image && (
          <Reveal variant="right" delay={140} className="page-hero__media">
            <Img src={image} alt={alt || ''} eager />
          </Reveal>
        )}
      </Container>
    </header>
  )
}
