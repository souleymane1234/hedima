import Container from '../components/common/Container.jsx'
import Button from '../components/common/Button.jsx'
import Seo from '../components/common/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable | HEDIMA"
        description="La page demandée n’existe pas sur le site Hedima."
      />
      <section className="intro">
        <Container size="narrow">
          <p className="eyebrow">Erreur 404</p>
          <h1>Page introuvable</h1>
          <p className="lead">Cette adresse n’existe pas. Revenez à l’accueil pour continuer.</p>
          <Button to="/">Retour à l’accueil</Button>
        </Container>
      </section>
    </>
  )
}
