import { Check, Star } from 'lucide-react'

const plans = [
  {
    name:      'Plan Gratis',
    price:     '0',
    period:    '',
    badge:     null,
    desc:      'Para probar la plataforma y sus funcionalidades sin costo.',
    users:     '2 usuarios concurrentes',
    features:  [
      'Acceso a la plataforma SkyFox',
      '2 usuarios concurrentes',
      'Crear y ejecutar aplicaciones web',
      'Soporte por email',
    ],
    cta:       'Empezar gratis',
    highlight: false,
  },
  {
    name:      'Plan 1',
    price:     '20',
    period:    '/mes',
    badge:     null,
    desc:      'Ideal para equipos pequeños o proyectos en crecimiento.',
    users:     '5 usuarios concurrentes',
    features:  [
      'Todo lo del Plan Gratis',
      '5 usuarios concurrentes',
      'Acceso prioritario al soporte',
      'Mayor capacidad de uso',
    ],
    cta:       'Elegir Plan 1',
    highlight: false,
  },
  {
    name:      'Plan 2',
    price:     '40',
    period:    '/mes',
    badge:     'Más popular',
    desc:      'Para empresas con equipos medianos y mayor demanda.',
    users:     '12 usuarios concurrentes',
    features:  [
      'Todo lo del Plan 1',
      '12 usuarios concurrentes',
      'Soporte prioritario',
      'Mayor ancho de banda',
    ],
    cta:       'Elegir Plan 2',
    highlight: true,
  },
  {
    name:      'Plan 3',
    price:     '60',
    period:    '/mes',
    badge:     null,
    desc:      'Para organizaciones con equipos grandes y alta concurrencia.',
    users:     '20 usuarios concurrentes',
    features:  [
      'Todo lo del Plan 2',
      '20 usuarios concurrentes',
      'Soporte dedicado',
      'Máxima capacidad disponible',
    ],
    cta:       'Elegir Plan 3',
    highlight: false,
  },
]

const scrollToContact = () => {
  const el = document.querySelector('#contacto')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function PricingSection() {
  return (
    <section id="planes" className="bg-surface-soft min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
            Planes y Precios
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Escoge el plan{' '}
            <span className="text-brand-electric">que se adapta a ti</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Comienza gratis y escala cuando lo necesites. Todos los planes incluyen
            acceso completo a la plataforma SkyFox.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map(({ name, price, period, badge, desc, features, cta, highlight }) => (
            <article
              key={name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-200 ${
                highlight
                  ? 'bg-brand-dark border-brand-electric shadow-glow-blue ring-1 ring-brand-electric'
                  : 'bg-white border-border hover:border-brand-electric/40 hover:shadow-card'
              }`}
            >
              {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-brand-electric text-white text-xs font-bold shadow">
                    <Star size={10} fill="white" />
                    {badge}
                  </div>
                </div>
              )}

              <div className="mb-5">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${highlight ? 'text-brand-cyan' : 'text-muted'}`}>
                  {name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-xs font-semibold ${highlight ? 'text-text-light' : 'text-muted'}`}>$</span>
                  <span className={`text-4xl font-black ${highlight ? 'text-white' : 'text-text'}`}>{price}</span>
                  {period && (
                    <span className={`text-sm ${highlight ? 'text-text-light' : 'text-muted'}`}>{period}</span>
                  )}
                </div>
                <p className={`text-xs mt-2 leading-snug ${highlight ? 'text-text-light' : 'text-muted'}`}>{desc}</p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${highlight ? 'text-brand-cyan' : 'text-brand-electric'}`}
                    />
                    <span className={highlight ? 'text-text-light' : 'text-muted'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-all duration-150 active:scale-95 ${
                  highlight
                    ? 'bg-brand-electric text-white hover:bg-primary-hover shadow-glow-blue'
                    : 'bg-surface-soft text-brand-electric border border-brand-electric/30 hover:bg-brand-electric/5'
                }`}
              >
                {cta}
              </button>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          ¿Tienes dudas sobre qué plan elegir?{' '}
          <button
            onClick={scrollToContact}
            className="text-brand-electric hover:underline font-medium"
          >
            Contáctanos por WhatsApp
          </button>{' '}
          y te asesoramos sin compromiso.
        </p>
      </div>
    </section>
  )
}
