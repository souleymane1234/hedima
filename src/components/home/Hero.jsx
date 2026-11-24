import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../common/Button.jsx'
import { BRAND } from '../../data/brand.js'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    video.muted = true
    const play = () => {
      const attempt = video.play()
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => {})
      }
    }

    play()
    video.addEventListener('loadeddata', play)
    return () => video.removeEventListener('loadeddata', play)
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-afrique.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero__content">
        <div className="hero__copy">
          <p className="eyebrow">Gestion de patrimoine immobilier · Abidjan</p>
          <h1 id="hero-title">{BRAND.slogan}</h1>
          <p className="lead">
            Confiez-nous la gestion de votre bien immobilier et profitez d’une prise en charge
            intégrale, transparente et rigoureuse.
          </p>
          <div className="hero__actions">
            <Button to="/services" variant="gold" icon={<ArrowRight size={18} aria-hidden="true" />}>
              Découvrir nos services
            </Button>
            <Button to="/contact" variant="outline-light">
              Confier mon bien
            </Button>
          </div>
        </div>

        <div className="hero__caption">
          <span>HEDIMA</span>
          <strong>Cocody, Abidjan</strong>
        </div>
      </div>
    </section>
  )
}
