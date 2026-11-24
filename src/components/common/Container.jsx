export default function Container({ as: Tag = 'div', size, className = '', children, ...props }) {
  const mod = size ? ` container--${size}` : ''
  return (
    <Tag className={`container${mod} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  )
}
