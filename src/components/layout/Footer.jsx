import { Link } from 'react-router-dom'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'
import { BRAND, NAV_LINKS, FOOTER_SERVICES } from '../../data/brand.js'

export default function Footer() {
  return (
    <footer className="site-footer on-dark">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo variant="light" height={52} />
            <p className="site-footer__slogan">{BRAND.slogan}</p>
            <p>
              Hedima accompagne les propriétaires de biens immobiliers en Côte d’Ivoire.
              Depuis Cocody, à Abidjan, nous valorisons vos investissements et vous libérons
              des contraintes du quotidien.
            </p>
          </div>

          <div>
            <h2>Navigation</h2>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Services</h2>
            <ul>
              {FOOTER_SERVICES.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__contact">
            <h2>Contact</h2>
            <a href={BRAND.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              {BRAND.phone}
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {BRAND.location}
            </span>
            <Button
              href={BRAND.whatsappHref}
              variant="gold"
              size="sm"
              icon={<MessageCircle size={16} aria-hidden="true" />}
            >
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} HEDIMA. Tous droits réservés.</p>
          <p>
            <Link to="/mentions-legales">Mentions légales</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
