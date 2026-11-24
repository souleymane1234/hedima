import { Phone, MapPin, MessageCircle } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import Reveal from '../components/common/Reveal.jsx'
import ContactForm from '../components/common/ContactForm.jsx'
import Seo from '../components/common/Seo.jsx'
import { BRAND } from '../data/brand.js'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact HEDIMA | Cocody, Abidjan — Gestion immobilière"
        description="Contactez Hedima à Cocody, Abidjan. Téléphone +225 07 68 11 80 09. Formulaire de demande pour la gestion de votre bien immobilier."
      />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre patrimoine."
        text="Une question, un bien à confier, un premier échange : l’équipe Hedima vous répond depuis Cocody, Abidjan."
        image="/images/tropical.webp"
        alt="Villa tropicale contemporaine, visuel d’accueil de la page contact Hedima"
      />

      <Section tone="white" aria-labelledby="contact-title">
        <div className="contact-layout">
          <Reveal>
            <h2 id="contact-title">Nous trouver</h2>
            <ul className="contact-facts">
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <span>Téléphone</span>
                  <a href={BRAND.phoneHref}>{BRAND.phone}</a>
                </div>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span>Localisation</span>
                  <strong>{BRAND.location}</strong>
                </div>
              </li>
            </ul>
            <div className="contact-actions">
              <Button href={BRAND.phoneHref}>Appeler</Button>
              <Button
                href={BRAND.whatsappHref}
                variant="gold"
                icon={<MessageCircle size={16} aria-hidden="true" />}
              >
                WhatsApp
              </Button>
            </div>
            <p className="small">
              Aucune adresse e-mail officielle n’est publiée sur ce site.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
