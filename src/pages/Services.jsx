import { ArrowRight, Check } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import Img from '../components/common/Img.jsx'
import Reveal from '../components/common/Reveal.jsx'
import CTASection from '../components/common/CTASection.jsx'
import Seo from '../components/common/Seo.jsx'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <>
      <Seo
        title="Nos services | Gestion locative, conciergerie et rénovation — HEDIMA"
        description="Hedima propose une gestion complète du patrimoine immobilier à Abidjan : gestion locative, conciergerie, location saisonnière et rénovation."
      />
      <PageHero
        eyebrow="Nos services"
        title="Une gestion complète de votre patrimoine."
        text="Quatre accompagnements, une même exigence de clarté et de rigueur. Chaque service peut être engagé séparément ou dans le cadre d’une prise en charge plus large."
        image="/images/villa.webp"
        alt="Résidence contemporaine valorisée par une gestion immobilière professionnelle"
      />

      {SERVICES.map((service, index) => {
        const imageLeft = index % 2 === 0
        return (
          <Section
            key={service.id}
            id={service.id}
            tone={imageLeft ? 'white' : 'cream'}
            aria-labelledby={`${service.id}-title`}
            className="service-detail"
          >
            <div className={`split ${imageLeft ? '' : 'split--reverse'}`.trim()}>
              <Reveal
                variant={imageLeft ? 'left' : 'right'}
                className="split__media"
              >
                <Img src={service.image} alt={service.alt} />
              </Reveal>
              <Reveal
                variant={imageLeft ? 'right' : 'left'}
                delay={120}
                className="split__copy service-detail__copy"
              >
                <p className="eyebrow">0{index + 1}</p>
                <h2 id={`${service.id}-title`}>{service.title}</h2>
                <p className="lead">{service.short}</p>
                <p>{service.text}</p>
                <ul className="check-list">
                  {service.advantages.map((item, i) => (
                    <Reveal
                      as="li"
                      key={item}
                      delay={200 + i * 90}
                      variant="up"
                      className="check-list__item"
                    >
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={200 + service.advantages.length * 90} variant="up">
                  <Button
                    to={`/contact?service=${service.id}`}
                    variant="gold"
                    icon={<ArrowRight size={16} aria-hidden="true" />}
                  >
                    Demander des informations
                  </Button>
                </Reveal>
              </Reveal>
            </div>
          </Section>
        )
      })}

      <CTASection
        title="Un bien, plusieurs besoins."
        text="Parlons de la formule d’accompagnement la plus juste pour votre patrimoine."
      />
    </>
  )
}
