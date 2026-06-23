import { Server, Database, Layers, Wrench, BookOpen, Globe } from 'lucide-react'

const products = [
  {
    icon:   Server,
    name:   'SkyFox Web Server',
    tag:    'Producto principal',
    desc:   'Plataforma cloud para desarrollar y ejecutar aplicaciones web con programación procedural orientada a objetos. Sin instalaciones, desde cualquier navegador.',
    color:  'text-brand-cyan',
    bg:     'bg-brand-cyan/10',
    border: 'border-brand-cyan/20',
    highlight: true,
  },
  {
    icon:   Database,
    name:   'FoxDen',
    tag:    'Base de datos',
    desc:   'Solución de gestión de base de datos integrada con la plataforma SkyFox para almacenar y administrar datos de tus aplicaciones.',
    color:  'text-brand-electric',
    bg:     'bg-brand-electric/10',
    border: 'border-brand-electric/20',
    highlight: false,
  },
  {
    icon:   Layers,
    name:   'FoxBuilder Industrial',
    tag:    'Automatización',
    desc:   'Herramienta avanzada para construcción de soluciones de automatización y control industrial, con interfaz visual de diseño.',
    color:  'text-amber',
    bg:     'bg-amber/10',
    border: 'border-amber/20',
    highlight: false,
  },
  {
    icon:   Wrench,
    name:   'WT (WorkTool)',
    tag:    'Utilitarios',
    desc:   'Conjunto de herramientas complementarias para optimizar el desarrollo y mantenimiento de aplicaciones en la plataforma ScadaTech.',
    color:  'text-green-400',
    bg:     'bg-green-400/10',
    border: 'border-green-400/20',
    highlight: false,
  },
  {
    icon:   Globe,
    name:   'Captura Remota de Datos',
    tag:    'Movilidad',
    desc:   'Formularios web accesibles desde campo con teléfonos o tablets. Datos centralizados en tiempo real sin desplazarse a oficina.',
    color:  'text-purple-400',
    bg:     'bg-purple-400/10',
    border: 'border-purple-400/20',
    highlight: false,
  },
  {
    icon:   BookOpen,
    name:   'Capacitación Internacional',
    tag:    'Formación',
    desc:   'Conferencias y talleres para aprender desarrollo de aplicaciones web con SkyFox. Desde principiantes hasta soluciones empresariales.',
    color:  'text-rose-400',
    bg:     'bg-rose-400/10',
    border: 'border-rose-400/20',
    highlight: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="productos" className="bg-white min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
            Productos y Servicios
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Todo lo que necesitas para{' '}
            <span className="text-brand-electric">llevar tu proyecto a la web</span>
          </h2>
          <p className="text-muted leading-relaxed">
            ScadaTech ofrece una suite completa de herramientas para el desarrollo,
            automatización y control de aplicaciones web empresariales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, name, tag, desc, color, bg, border, highlight }) => (
            <article
              key={name}
              className={`group p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                highlight
                  ? 'bg-brand-dark border-brand-electric shadow-glow-blue'
                  : `bg-white ${border} hover:shadow-card-hover`
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${highlight ? 'bg-brand-cyan/20' : bg} flex items-center justify-center`}>
                  <Icon size={22} className={highlight ? 'text-brand-cyan' : color} />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  highlight
                    ? 'bg-brand-electric/20 text-brand-cyan'
                    : 'bg-surface-soft text-muted border border-border'
                }`}>
                  {tag}
                </span>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${highlight ? 'text-white' : 'text-text'}`}>
                {name}
              </h3>
              <p className={`text-sm leading-relaxed ${highlight ? 'text-text-light' : 'text-muted'}`}>
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
