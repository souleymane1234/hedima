export default function SectionTitle({ title, text, align = 'left', as: Tag = 'h2', id }) {
  return (
    <div className={`section-title${align === 'center' ? ' section-title--center' : ''}`}>
      <hr className="section-title__rule" aria-hidden="true" />
      <Tag id={id}>{title}</Tag>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}
