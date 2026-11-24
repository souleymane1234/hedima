import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Button from './Button.jsx'
import { SERVICE_OPTIONS, BRAND } from '../../data/brand.js'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function digits(value) {
  return (value || '').replace(/\D/g, '')
}

function validate(values) {
  const errors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Indiquez votre nom complet.'
  }
  const phoneDigits = digits(values.phone)
  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = 'Indiquez un numéro de téléphone valide.'
  }
  if (!EMAIL.test(values.email.trim())) {
    errors.email = 'Indiquez une adresse e-mail valide.'
  }
  if (!values.subject.trim()) {
    errors.subject = 'Précisez l’objet de votre demande.'
  }
  if (!values.service) {
    errors.service = 'Sélectionnez le type de service recherché.'
  }
  if (!values.message.trim() || values.message.trim().length < 12) {
    errors.message = 'Décrivez votre besoin en quelques phrases.'
  }
  return errors
}

export default function ContactForm({
  heading = 'Votre demande',
  submitLabel = 'Envoyer la demande',
  defaultService = '',
  extraFields = false,
}) {
  const location = useLocation()
  const preset = useMemo(() => {
    const params = new URLSearchParams(location.search)
    return params.get('service') || defaultService
  }, [location.search, defaultService])

  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    service: preset,
    propertyType: '',
    area: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0]
      document.getElementById(`field-${first}`)?.focus()
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={36} aria-hidden="true" />
        <h3>Merci, {values.name.split(' ')[0]}.</h3>
        <p>
          Votre demande a été enregistrée sur cette page. L’envoi automatique vers nos équipes
          sera activé lors de l’intégration du service de messagerie.
        </p>
        <p>
          Pour une réponse immédiate, appelez le{' '}
          <a href={BRAND.phoneHref}>{BRAND.phone}</a>
          {' '}ou écrivez-nous sur{' '}
          <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h2 className="form__title">{heading}</h2>
      <div className="form__grid">
        <Field id="name" label="Nom complet" value={values.name} onChange={set('name')} error={errors.name} required autoComplete="name" />
        <Field id="phone" label="Téléphone" type="tel" value={values.phone} onChange={set('phone')} error={errors.phone} required autoComplete="tel" placeholder="+225 07 00 00 00 00" />
        <Field id="email" label="Adresse e-mail" type="email" value={values.email} onChange={set('email')} error={errors.email} required autoComplete="email" className="form__span" />
        <Field id="subject" label="Objet de la demande" value={values.subject} onChange={set('subject')} error={errors.subject} required className="form__span" />
        <div className={`field ${extraFields ? '' : 'form__span'}`}>
          <label htmlFor="field-service">Type de service recherché</label>
          <select
            id="field-service"
            value={values.service}
            onChange={set('service')}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'error-service' : undefined}
            required
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value || 'empty'} value={opt.value} disabled={!opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && <p id="error-service" className="field__error">{errors.service}</p>}
        </div>
        {extraFields && (
          <>
            <div className="field">
              <label htmlFor="field-propertyType">Type de bien</label>
              <select id="field-propertyType" value={values.propertyType} onChange={set('propertyType')}>
                <option value="">À préciser</option>
                <option value="villa">Villa</option>
                <option value="appartement">Appartement</option>
                <option value="immeuble">Immeuble</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <Field id="area" label="Localisation du bien" value={values.area} onChange={set('area')} placeholder="Commune, quartier" />
          </>
        )}
        <div className="field form__span">
          <label htmlFor="field-message">Message</label>
          <textarea
            id="field-message"
            rows={6}
            value={values.message}
            onChange={set('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'error-message' : undefined}
            required
          />
          {errors.message && <p id="error-message" className="field__error">{errors.message}</p>}
        </div>
      </div>
      <p className="form__note">
        Les champs marqués d’un astérisque sont indispensables. Aucune donnée n’est transmise tant que
        le service d’envoi n’est pas configuré.
      </p>
      <Button type="submit" variant="gold">{submitLabel}</Button>
    </form>
  )
}

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  className = '',
  autoComplete,
  placeholder,
}) {
  return (
    <div className={`field ${className}`.trim()}>
      <label htmlFor={`field-${id}`}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={`field-${id}`}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `error-${id}` : undefined}
        required={required}
      />
      {error && <p id={`error-${id}`} className="field__error">{error}</p>}
    </div>
  )
}
