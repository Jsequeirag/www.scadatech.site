import { Server, Database, Layers, Wrench, Globe, Cpu, ArrowRight } from 'lucide-react'

const otherProducts = [
  {
    icon:  Database,
    name:  'FoxDen',
    desc:  'Gestión de base de datos integrada con la plataforma SkyFox.',
    color: 'text-brand-electric',
    bg:    'bg-brand-electric/10',
  },
  {
    icon:  Cpu,
    name:  'DLL',
    desc:  'Librería de componentes dinámicos para extender funcionalidades.',
    color: 'text-amber',
    bg:    'bg-amber/10',
  },
  {
    icon:  Wrench,
    name:  'WT (WorkTool)',
    desc:  'Herramientas complementarias para desarrollo y mantenimiento.',
    color: 'text-green-400',
    bg:    'bg-green-400/10',
  },
  {
    icon:  Layers,
    name:  'FoxBuilder Industrial',
    desc:  'Constructor visual de soluciones de automatización industrial.',
    color: 'text-purple-400',
    bg:    'bg-purple-400/10',
  },
  {
    icon:  Globe,
    name:  'Captura Remota',
    desc:  'Formularios web para captura de datos desde campo en tiempo real.',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
  },
]

const scrollToContact = () => {
  const el = document.querySelector('#contacto')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function ServicesSection() {
  return (
    <section id="productos" className="bg-white min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container space-y-16">

        {/* ── ¿Qué es SkyFox? ── */}
        <div>
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3 text-center">
            Producto Principal
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-10 text-center">
            ¿Qué es <span className="text-brand-electric">SkyFox</span>?
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: description card */}
            <div className="rounded-2xl bg-brand-dark p-8 border border-brand-electric/30 shadow-glow-blue">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand-electric/20 border border-brand-electric/40 flex items-center justify-center shrink-0">
                  <Server size={26} className="text-brand-cyan" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">
                    New Evolution · New Generation
                  </p>
                  <p className="text-xl font-bold text-white">SkyFox Web Server</p>
                </div>
              </div>

              <p className="text-text-light leading-relaxed mb-6">
                <strong className="text-white">SkyFox</strong> es una plataforma instalada en la nube
                que te permite realizar fácilmente el{' '}
                <span className="text-brand-cyan font-medium">desarrollo y lanzamiento</span>{' '}
                de tus propias Aplicaciones Web utilizando la poderosa programación procedural
                (<em>propiedades y eventos</em>) orientada a objetos, con un lenguaje popular-familiar.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  'Sin instalaciones — solo un navegador web',
                  'Programación orientada a objetos, propiedades y eventos',
                  'Corre en teléfono, tablet y computadora',
                  'Base de datos centralizada multi-usuario',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                    <span className="text-brand-cyan mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95"
              >
                Quiero saber más
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right: key stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100%', label: 'En la nube', sub: 'Sin instalar nada', color: 'text-brand-cyan' },
                { value: '0',    label: 'Instalaciones', sub: 'Solo un link de acceso', color: 'text-green-400' },
                { value: 'Multi', label: 'Usuario', sub: 'Hasta 20 concurrentes', color: 'text-brand-electric' },
                { value: '24/7', label: 'Disponible', sub: 'Desde cualquier lugar', color: 'text-amber' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl bg-surface-soft border border-border hover:shadow-card transition-shadow duration-200 text-center"
                >
                  <p className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</p>
                  <p className="text-sm font-semibold text-text">{s.label}</p>
                  <p className="text-xs text-muted mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Otros productos ── */}
        <div>
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-3 text-center">
            Suite completa
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-text mb-8 text-center">
            Otros Productos de <span className="text-brand-electric">ScadaTech</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherProducts.map(({ icon: Icon, name, desc, color, bg }) => (
              <article
                key={name}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-surface-soft border border-border hover:border-brand-electric/40 hover:shadow-card hover:bg-white transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon size={22} className={color} />
                </div>
                <p className="text-sm font-semibold text-text leading-tight">{name}</p>
                <p className="text-xs text-muted leading-snug">{desc}</p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
