import { ArrowRight, Shield, Eye, Sparkles } from 'lucide-react'
import Hero from '../components/home/Hero.jsx'
import Section from '../components/common/Section.jsx'
import SectionTitle from '../components/common/SectionTitle.jsx'
import Button from '../components/common/Button.jsx'
import Img from '../components/common/Img.jsx'
import Reveal from '../components/common/Reveal.jsx'
import ServiceCard from '../components/common/ServiceCard.jsx'
import ValueCard from '../components/common/ValueCard.jsx'
import CTASection from '../components/common/CTASection.jsx'
import Seo from '../components/common/Seo.jsx'
import { SERVICES, VALUES, APPROACH_STEPS } from '../data/services.js'

const ICONS = {
  serenite: <Shield size={26} strokeWidth={1.6} />,
  transparence: <Eye size={26} strokeWidth={1.6} />,
  reactivite: <Sparkles size={26} strokeWidth={1.6} />,
}

const PILLARS = ['Sérénité', 'Transparence', 'Réactivité']

export default function Home() {
  return (
    <>
      <Seo
        title="HEDIMA — Votre patrimoine, gardé au cœur. | Gestion immobilière à Abidjan"
        description="Hedima accompagne les propriétaires de biens immobiliers à Cocody, Abidjan : gestion locative, conciergerie, location saisonnière et rénovation en Côte d’Ivoire."
      />
      <Hero />

      <Section tone="white" aria-labelledby="intro-title">
        <div className="split">
          <Reveal variant="left" className="split__media">
            <Img
              src="/images/femme-africaine.webp"
              alt="Femme africaine confiante, symbole de l’accompagnement Hedima"
            />
          </Reveal>
          <Reveal variant="right" delay={140} className="split__copy">
            <SectionTitle
              id="intro-title"
              title="Votre patrimoine mérite une attention particulière."
              text="Hedima accompagne les propriétaires de biens immobiliers en Côte d’Ivoire. Depuis Cocody, à Abidjan, nous valorisons vos investissements et vous libérons des contraintes du quotidien."
            />
            <ul className="pill-list">
              {PILLARS.map((label, i) => (
                <Reveal as="li" key={label} delay={220 + i * 90} variant="scale">
                  {label}
                </Reveal>
              ))}
            </ul>
            <Reveal delay={480} variant="up">
              <Button to="/a-propos" variant="outline" icon={<ArrowRight size={16} aria-hidden="true" />}>
                Connaître Hedima
              </Button>
            </Reveal>
          </Reveal>
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="services-title">
        <Reveal variant="up">
          <SectionTitle
            id="services-title"
            title="Une gestion complète de votre patrimoine."
            text="Quatre métiers, une même exigence : prendre soin de votre bien comme s’il s’agissait du nôtre."
          />
        </Reveal>
        <div className="card-grid card-grid--services">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              delay={80 + i * 100}
            />
          ))}
        </div>
      </Section>

      <Section tone="white" aria-labelledby="why-title" className="values-section">
        <Reveal variant="up">
          <SectionTitle
            id="why-title"
            align="center"
            title="Votre bien entre de bonnes mains."
            text="Hedima s’adresse aux propriétaires qui souhaitent une prise en charge intégrale, sans perdre la lisibilité de ce qui se passe sur leur bien."
          />
        </Reveal>
        <div className="card-grid card-grid--3 card-grid--values">
          {VALUES.map((value, i) => (
            <ValueCard
              key={value.id}
              icon={ICONS[value.id]}
              title={value.title}
              text={value.text}
              index={i}
              delay={120 + i * 140}
            />
          ))}
        </div>
      </Section>

      <Section tone="sand" aria-labelledby="approche-title" className="approach-section">
        <Reveal variant="up">
          <SectionTitle
            id="approche-title"
            title="Notre approche"
            text="Un parcours simple, pensé pour clarifier la relation dès le premier échange. Il s’agit d’une proposition d’accompagnement, non d’un processus contractuel."
          />
        </Reveal>
        <ol className="timeline">
          {APPROACH_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={100 + i * 150}
              variant="up"
              className="timeline__step"
            >
              <span className="timeline__n">{step.n}</span>
              <div className="timeline__content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTASection />
    </>
  )
}
