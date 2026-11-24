import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CTASection({
  title = 'Et si vous confiiez votre patrimoine à des experts ?',
  text = 'Parlons ensemble de votre projet immobilier.',
  label = 'Contactez notre équipe',
  to = '/contact',
  tone = 'hedima',
}) {
  return (
    <Section tone={tone} className="cta-section" aria-labelledby="cta-title">
      <Reveal variant="scale" className="cta-section__inner">
        <p className="eyebrow">HEDIMA</p>
        <h2 id="cta-title">{title}</h2>
        <p className="lead">{text}</p>
        <Button to={to} variant="gold" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
          {label}
        </Button>
      </Reveal>
    </Section>
  )
}
