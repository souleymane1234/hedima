import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import { NAV_LINKS } from '../../data/brand.js'

export default function Header() {
  const { pathname } = useLocation()
  const overlayable = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = !overlayable || scrolled || open
  const headerClass = [
    'site-header',
    solid ? 'site-header--solid' : 'site-header--overlay',
    open ? 'is-open' : '',
  ].join(' ')

  return (
    <header className={headerClass}>
      <Container className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="HEDIMA — retour à l’accueil">
          <Logo variant={solid ? 'default' : 'light'} height={46} />
        </Link>

        <nav className="site-nav" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <Button to="/contact" variant="gold" size="sm">
            Confiez-nous votre bien
          </Button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
      </Container>

      <div id="menu-mobile" className={`mobile-nav${open ? ' is-open' : ''}`} hidden={!open} aria-hidden={!open}>
        <Container>
          <nav aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/contact" variant="gold" block onClick={() => setOpen(false)}>
            Confiez-nous votre bien
          </Button>
        </Container>
      </div>
    </header>
  )
}
