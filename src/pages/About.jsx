import { Shield, Eye, Sparkles } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import Section from '../components/common/Section.jsx'
import SectionTitle from '../components/common/SectionTitle.jsx'
import Img from '../components/common/Img.jsx'
import Reveal from '../components/common/Reveal.jsx'
import ValueCard from '../components/common/ValueCard.jsx'
import CTASection from '../components/common/CTASection.jsx'
import Seo from '../components/common/Seo.jsx'
import { VALUES } from '../data/services.js'

const VALUE_ICONS = {
  serenite: <Shield size={26} strokeWidth={1.6} />,
  transparence: <Eye size={26} strokeWidth={1.6} />,
  reactivite: <Sparkles size={26} strokeWidth={1.6} />,
}

const INFO_BLOCKS = [
  {
    id: 'vision',
    title: 'Vision',
    text: 'Faire de la gestion de patrimoine immobilier un service de confiance : proche, lisible et exigeant, à la hauteur de ce que les propriétaires confient.',
  },
  {
    id: 'mission',
    title: 'Mission',
    text: 'Valoriser les investissements immobiliers de nos clients et les libérer des contraintes du quotidien, avec une prise en charge intégrale, transparente et rigoureuse.',
  },
  {
    id: 'positionnement',
    title: 'Positionnement',
    text: 'Hedima s’adresse aux propriétaires qui souhaitent confier leur bien à une structure établie à Cocody, attentive, et dont l’identité repose sur la protection de la valeur.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="À propos de HEDIMA | Gestion de patrimoine immobilier à Cocody"
        description="Découvrez Hedima, entreprise d’accompagnement et de gestion de patrimoine immobilier à Cocody, Abidjan. Vision, mission et valeurs."
      />
      <PageHero
        eyebrow="À propos"
        title="Hedima, gardien de votre patrimoine."
        text="Depuis Cocody, à Abidjan, Hedima accompagne les propriétaires de biens immobiliers en Côte d’Ivoire. Une marque de confiance, bâtie autour de la proximité et de la rigueur."
        image="/images/architecture.webp"
        alt="Villa contemporaine illustrant le positionnement premium de Hedima"
      />

      <Section tone="white" aria-labelledby="entreprise-title">
        <div className="split">
          <Reveal variant="left" className="split__copy">
            <SectionTitle
              id="entreprise-title"
              title="L’entreprise"
              text="Hedima accompagne les propriétaires dans la gestion et la valorisation de leurs biens. L’entreprise les libère des contraintes du quotidien grâce à une prise en charge intégrale, transparente et rigoureuse."
            />
            <Reveal delay={180} variant="up">
              <p>
                Hedima propose une prise en charge claire et structurée : gestion locative,
                conciergerie, location saisonnière et rénovation, au service de la valorisation
                de votre patrimoine.
              </p>
            </Reveal>
          </Reveal>
          <Reveal variant="right" delay={140} className="split__media">
            <Img src="/images/cour.webp" alt="Architecture contemporaine vue depuis un patio intérieur" />
          </Reveal>
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="vision-title" className="about-info-section">
        <div className="info-grid">
          {INFO_BLOCKS.map((block, i) => (
            <Reveal
              as="article"
              key={block.id}
              className="info-block"
              delay={80 + i * 130}
              variant="scale"
            >
              <span className="info-block__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 id={i === 0 ? 'vision-title' : undefined}>{block.title}</h2>
              <p>{block.text}</p>
              <span className="info-block__line" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" aria-labelledby="valeurs-title" className="values-section">
        <Reveal variant="up">
          <SectionTitle id="valeurs-title" title="Nos valeurs" align="center" />
        </Reveal>
        <div className="card-grid card-grid--3 card-grid--values">
          {VALUES.map((value, i) => (
            <ValueCard
              key={value.id}
              icon={VALUE_ICONS[value.id]}
              title={value.title}
              text={value.text}
              index={i}
              delay={120 + i * 140}
            />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
