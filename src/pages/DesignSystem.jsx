import { Info } from 'lucide-react'
import Section from '../components/common/Section.jsx'
import SectionTitle from '../components/common/SectionTitle.jsx'
import Button from '../components/common/Button.jsx'
import Logo from '../components/common/Logo.jsx'

const COLORS = [
  { name: 'Bleu Hedima', hex: '#0C466E', v: '--color-hedima', role: 'Couleur principale', dark: true },
  { name: 'Or cauri', hex: '#D9A441', v: '--color-gold', role: 'Accent' },
  { name: 'Sable', hex: '#E9D9BE', v: '--color-sand', role: 'Fond secondaire' },
  { name: 'Crème', hex: '#F2EADD', v: '--color-cream', role: 'Fond principal' },
  { name: 'Bleu Pay', hex: '#648CA5', v: '--color-pay', role: 'Réservé à Hedima Pay', dark: true },
  { name: 'Anthracite', hex: '#1A1A1A', v: '--color-text', role: 'Texte', dark: true },
]

const TYPE = [
  { tag: 'H1', cls: 'h1', size: '48–64 px · Bold 700', sample: 'Votre patrimoine, gardé au cœur.' },
  { tag: 'H2', cls: 'h2', size: '36–44 px · SemiBold 600', sample: 'Une gestion complète de votre patrimoine.' },
  { tag: 'H3', cls: 'h3', size: '24–28 px · SemiBold 600', sample: 'Gestion locative' },
  { tag: 'H4', cls: 'h4', size: '18–20 px · Medium 500', sample: 'Prise de contact' },
]

export default function DesignSystem() {
  return (
    <>
      <Section tone="cream">
        <SectionTitle as="h1" title="Système de design HEDIMA" text="Couleurs, typographie, boutons et logo : la base commune de toutes les pages." />
      </Section>

      <Section tone="white" aria-labelledby="ds-colors">
        <SectionTitle id="ds-colors" title="Couleurs" />
        <div className="ds-grid ds-grid--swatches">
          {COLORS.map((c) => (
            <div className="ds-swatch" key={c.v}>
              <div className="ds-swatch__color" style={{ background: `var(${c.v})` }} />
              <div className="ds-swatch__meta">
                <strong>{c.name}</strong>
                <code>{c.hex}</code><br />
                <code>{c.v}</code><br />
                {c.role}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="ds-type">
        <SectionTitle id="ds-type" title="Typographie" text="Montserrat exclusivement : 300, 400, 500, 600, 700." />
        <div className="ds-panel ds-panel--light">
          {TYPE.map((t) => (
            <div className="ds-type-row" key={t.tag}>
              <small>{t.tag}<br />{t.size}</small>
              <div className={t.cls} style={{ margin: 0 }}>{t.sample}</div>
            </div>
          ))}
          <div className="ds-type-row">
            <small>Paragraphe<br />15–17 px · Regular 400</small>
            <p style={{ margin: 0 }}>
              Hedima accompagne les propriétaires de biens immobiliers en Côte d’Ivoire et valorise
              leurs investissements.
            </p>
          </div>
          <div className="ds-type-row">
            <small>Graisses</small>
            <div className="ds-row">
              {[300, 400, 500, 600, 700].map((w) => (
                <span key={w} style={{ fontWeight: w, fontSize: '1.25rem' }}>Hedima {w}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" aria-labelledby="ds-buttons">
        <SectionTitle id="ds-buttons" title="Boutons" />
        <div className="ds-panel ds-panel--light" style={{ background: 'var(--color-cream)' }}>
          <div className="ds-row">
            <Button>Principal</Button>
            <Button variant="gold">Accent or</Button>
            <Button variant="outline">Contour</Button>
            <Button variant="ghost">Discret</Button>
            <Button variant="pay">Hedima Pay</Button>
          </div>
          <div className="ds-row" style={{ marginTop: 'var(--space-5)' }}>
            <Button size="sm">Petit</Button>
            <Button>Moyen</Button>
            <Button size="lg">Grand</Button>
          </div>
        </div>
        <div className="ds-panel on-dark" style={{ background: 'var(--color-hedima)', marginTop: 'var(--space-5)' }}>
          <div className="ds-row">
            <Button variant="gold">Sur fond bleu</Button>
            <Button variant="outline-light">Contour clair</Button>
          </div>
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="ds-logo">
        <SectionTitle id="ds-logo" title="Logo" />
        <div className="ds-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div className="ds-panel" style={{ background: 'var(--color-white)', boxShadow: 'var(--shadow-soft)' }}>
            <Logo height={64} />
          </div>
          <div className="ds-panel" style={{ background: 'var(--color-hedima)' }}>
            <Logo variant="light" height={64} />
          </div>
        </div>
        <div className="ds-note" style={{ marginTop: 'var(--space-5)' }}>
          <Info size={20} aria-hidden="true" style={{ flexShrink: 0, color: 'var(--color-gold-dark)' }} />
          <span>
            Les fichiers officiels se déposent dans <code>public/logo/</code> :
            {' '}<code>hedima-logo.svg</code> et <code>hedima-logo-light.svg</code>.
            Le logo n’est jamais recréé en texte ou en CSS.
          </span>
        </div>
      </Section>

    </>
  )
}
