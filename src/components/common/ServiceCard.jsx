import { ArrowUpRight, Building2, ConciergeBell, Palmtree, Paintbrush } from 'lucide-react'
import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import Reveal from './Reveal.jsx'

const ICONS = {
  'gestion-locative': Building2,
  conciergerie: ConciergeBell,
  'location-saisonniere': Palmtree,
  renovation: Paintbrush,
}

export default function ServiceCard({ service, delay = 0, index = 0 }) {
  const Icon = ICONS[service.id] || Building2
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal as="article" className="service-card" delay={delay} variant="scale">
      <Link to={`/services#${service.id}`} className="service-card__link">
        <div className="service-card__media" aria-hidden="true">
          <Img src={service.image} alt="" />
        </div>

        <div className="service-card__shade" aria-hidden="true" />

        <div className="service-card__top">
          <span className="service-card__index">{number}</span>
          <span className="service-card__icon">
            <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
          </span>
        </div>

        <div className="service-card__body">
          <h3>{service.title}</h3>
          <p>{service.short}</p>
          <span className="service-card__cta">
            Découvrir
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
