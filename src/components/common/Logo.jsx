import { useState } from 'react'
import { BRAND } from '../../data/brand.js'

/**
 * Logo officiel HEDIMA : fichier fourni uniquement, jamais recréé en texte ou CSS.
 * variant : 'default' (fonds clairs) | 'light' (fonds bleu / sombres)
 */
export default function Logo({ variant = 'default', height = 52, className = '' }) {
  const [missing, setMissing] = useState(false)
  const src = variant === 'light' ? BRAND.logo.light : BRAND.logo.default

  return (
    <span className={`logo logo--${variant} ${className}`.trim()} style={{ '--logo-h': `${height}px` }}>
      {missing ? (
        <span className="logo__placeholder" role="img" aria-label="Emplacement du logo officiel HEDIMA">
          Logo officiel à ajouter
        </span>
      ) : (
        <img
          className="logo__img"
          src={src}
          alt="HEDIMA"
          width={Math.round(height * 3.17)}
          height={height}
          onError={() => setMissing(true)}
        />
      )}
    </span>
  )
}
