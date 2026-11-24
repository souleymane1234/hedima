import PageHero from '../components/common/PageHero.jsx'
import Section from '../components/common/Section.jsx'
import Seo from '../components/common/Seo.jsx'
import { BRAND } from '../data/brand.js'

export default function Legal() {
  return (
    <>
      <Seo
        title="Mentions légales | HEDIMA"
        description="Mentions légales du site vitrine de Hedima, entreprise de gestion de patrimoine immobilier à Cocody, Abidjan."
      />
      <PageHero
        eyebrow="Informations"
        title="Mentions légales"
        text="Informations relatives à l’éditeur du site et à son utilisation."
      />
      <Section tone="white" size="narrow">
        <article className="legal">
          <h2>Éditeur</h2>
          <p>
            Le présent site est édité par <strong>HEDIMA</strong>, entreprise spécialisée dans
            l’accompagnement et la gestion de patrimoine immobilier.
          </p>
          <p>
            Localisation : {BRAND.location}.
            <br />
            Téléphone : {BRAND.phone}.
          </p>
          <p>
            Aucune adresse e-mail ni aucun nom de domaine officiel supplémentaire ne sont publiés
            sur ce site.
          </p>

          <h2>Objet du site</h2>
          <p>
            Ce site est un site vitrine. Il présente l’activité de Hedima. Il ne constitue pas une
            offre commerciale exhaustive, ni un espace transactionnel.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Le nom Hedima, le slogan, le logo (cour et cauri), la charte graphique et les contenus
            rédigés sont protégés. Toute reproduction non autorisée est interdite.
          </p>
          <p>
            Les photographies illustratives sont utilisées en attendant les visuels officiels de
            Hedima. Elles n’identifient pas des biens gérés par l’entreprise.
          </p>

          <h2>Hébergement</h2>
          <p>
            Les mentions relatives à l’hébergeur du site seront complétées lors de la mise en ligne
            officielle.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question, contactez Hedima par téléphone au {BRAND.phone} ou via WhatsApp.
          </p>
        </article>
      </Section>
    </>
  )
}
