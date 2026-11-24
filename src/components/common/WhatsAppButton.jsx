import { MessageCircle } from 'lucide-react'
import { BRAND } from '../../data/brand.js'

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={BRAND.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à Hedima sur WhatsApp"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}
