export const BRAND = {
  name: 'HEDIMA',
  slogan: 'Votre patrimoine, gardé au cœur.',
  phone: '+225 07 68 11 80 09',
  phoneHref: 'tel:+2250768118009',
  whatsappHref: 'https://wa.me/2250768118009',
  location: 'Cocody, Abidjan, Côte d’Ivoire',
  activity:
    'Accompagnement des propriétaires de biens immobiliers en Côte d’Ivoire : gestion locative, conciergerie, location saisonnière et rénovation.',
  values: ['Sérénité', 'Transparence', 'Réactivité', 'Protection', 'Valeur', 'Confiance'],
  logo: {
    default: '/logo/Logo.png',
    light: '/logo/hedima-logo-light.png',
    mark: '/images/symbole-hedima.png',
  },
}

export const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos services', to: '/services' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_SERVICES = [
  { label: 'Gestion locative', to: '/services#gestion-locative' },
  { label: 'Conciergerie', to: '/services#conciergerie' },
  { label: 'Location saisonnière', to: '/services#location-saisonniere' },
  { label: 'Rénovation', to: '/services#renovation' },
]

export const SERVICE_OPTIONS = [
  { value: '', label: 'Sélectionnez un service' },
  { value: 'gestion-locative', label: 'Gestion locative' },
  { value: 'conciergerie', label: 'Conciergerie' },
  { value: 'location-saisonniere', label: 'Location saisonnière' },
  { value: 'renovation', label: 'Rénovation' },
  { value: 'autre', label: 'Autre demande' },
]
