import PageHero from '../components/common/PageHero.jsx'
import Section from '../components/common/Section.jsx'
import Seo from '../components/common/Seo.jsx'
import { BRAND } from '../data/brand.js'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Politique de confidentialité | HEDIMA"
        description="Politique de confidentialité du site Hedima : données collectées via le formulaire de contact et modalités d’exercice des droits."
      />
      <PageHero
        eyebrow="Informations"
        title="Politique de confidentialité"
        text="Hedima traite les données personnelles avec la même exigence de clarté que la gestion des biens qui lui sont confiés."
      />
      <Section tone="white" size="narrow">
        <article className="legal">
          <h2>Responsable du traitement</h2>
          <p>
            HEDIMA, {BRAND.location}. Téléphone : {BRAND.phone}.
          </p>

          <h2>Données concernées</h2>
          <p>
            Le formulaire de contact peut recueillir : nom, téléphone, adresse e-mail, objet,
            type de service, informations sur un bien et message. Tant que le service d’envoi
            n’est pas configuré, ces informations restent sur votre navigateur et ne sont pas
            transmises à un serveur Hedima.
          </p>

          <h2>Finalités</h2>
          <p>
            Lorsque l’envoi sera activé, les données serviront uniquement à répondre à votre
            demande d’information ou de prise en charge, et à vous recontacter.
          </p>

          <h2>Base et durée</h2>
          <p>
            Le traitement reposera sur votre demande (prise de contact). Les données seront
            conservées le temps nécessaire au traitement de la demande, puis archivées ou
            supprimées selon les obligations applicables en Côte d’Ivoire.
          </p>

          <h2>Destinataires</h2>
          <p>
            Les données ne sont pas vendues. Elles ne seront accessibles qu’aux personnes habilitées
            au sein de Hedima, et le cas échéant à un prestataire d’envoi strictement mandaté.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la rectification ou la suppression des informations qui
            vous concernent en contactant Hedima au {BRAND.phone}.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site vitrine n’utilise pas, à ce stade, de cookies publicitaires. Des cookies
            techniques liés au fonctionnement du navigateur peuvent être déposés.
          </p>
        </article>
      </Section>
    </>
  )
}
