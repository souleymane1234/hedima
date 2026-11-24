import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import WhatsAppButton from '../common/WhatsAppButton.jsx'

export default function Layout() {
  return (
    <div className="app">
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <ScrollToTop />
      <Header />
      <main id="contenu" className="app__main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
