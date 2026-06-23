import { CheckCircle2, Cloud, Code2, Users } from 'lucide-react'

const highlights = [
  'Plataforma 100% en la nube — sin instalaciones locales',
  'Programación procedural orientada a objetos (propiedades y eventos)',
  'Ideal para principiantes con conocimientos básicos en programación',
  'Compatible con base de datos Microsoft Access y más',
  'Acceso simultáneo multi-usuario desde cualquier dispositivo',
  'Formularios y código siempre disponibles desde tu cuenta',
]

const values = [
  {
    icon:  Cloud,
    title: 'Sin complicaciones',
    desc:  'Olvídate de instalaciones. Accede a todo con un link desde cualquier computadora o móvil.',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
  },
  {
    icon:  Code2,
    title: 'Lenguaje familiar',
    desc:  'Programación con un lenguaje popular y familiar, orientado a objetos con propiedades y eventos.',
    color: 'text-brand-electric',
    bg:    'bg-brand-electric/10',
  },
  {
    icon:  Users,
    title: 'Multi-usuario',
    desc:  'Tus usuarios trabajan juntos en una única base de datos centralizada desde cualquier lugar.',
    color: 'text-amber',
    bg:    'bg-amber/10',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-surface-soft min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
              ¿Quiénes somos?
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 leading-tight">
              ScadaTech: la manera más{' '}
              <span className="text-brand-electric">rápida y fácil</span>{' '}
              de llevar tu proyecto a la web
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              ¿Necesitas llevar tu proyecto a la nube por el camino más fácil, sin enredos
              ni jeroglíficos? Llegaste al lugar indicado. En ScadaTech desarrollamos
              <strong className="text-text"> SkyFox Web Server</strong>, una plataforma que te
              permite crear tus propias aplicaciones web ejecutables desde el navegador de
              cualquier dispositivo.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Diseñado para personas con conocimientos básicos en programación que desean
              escalar y brindar soluciones integrales en la nube, sin necesidad de ser
              expertos ni depender de infraestructura costosa.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-electric mt-0.5 shrink-0" />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-border hover:shadow-card transition-shadow duration-200"
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-brand-dark text-white">
              <p className="font-semibold mb-1">¿No has podido ofrecer soluciones web?</p>
              <p className="text-sm text-text-light">
                Estás buscando la manera más rápida y fácil de desarrollar aplicaciones
                web empresariales con las que se pueda interactuar desde teléfonos y tablets.
                SkyFox es la respuesta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
