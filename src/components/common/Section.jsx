import Container from './Container.jsx'

/**
 * Section de page réutilisable.
 * tone : 'cream' | 'white' | 'sand' | 'hedima' | 'pay'  (hedima et pay passent le texte en clair)
 */
export default function Section({ tone = 'cream', size, id, className = '', children, ...props }) {
  const dark = tone === 'hedima' || tone === 'pay'
  return (
    <section id={id} className={`section section--${tone}${dark ? ' on-dark' : ''} ${className}`.trim()} {...props}>
      <Container size={size}>{children}</Container>
    </section>
  )
}
