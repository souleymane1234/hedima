import { Link } from 'react-router-dom'

/**
 * Bouton réutilisable.
 * - to="/chemin"  → lien interne (React Router)
 * - href="https…" → lien externe
 * - sinon         → <button>
 * variant : primary | gold | outline | outline-light | pay | ghost
 * size    : sm | md | lg
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon,
  to,
  href,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'btn',
    variant !== 'primary' && `btn--${variant}`,
    size !== 'md' && `btn--${size}`,
    block && 'btn--block',
    className,
  ].filter(Boolean).join(' ')

  const content = (<>{children}{icon}</>)

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {content}
      </a>
    )
  }
  return <button type="button" className={classes} {...props}>{content}</button>
}
