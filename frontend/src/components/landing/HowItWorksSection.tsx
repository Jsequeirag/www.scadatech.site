import { UserPlus, Code2, Send } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon:   UserPlus,
    title:  'Crea tu cuenta',
    desc:   'Regístrate con usuario y contraseña. Accede a la plataforma SkyFox desde tu navegador — sin descargar ni instalar nada.',
    color:  'text-brand-cyan',
    bg:     'bg-brand-cyan/10',
    border: 'border-brand-cyan/30',
  },
  {
    number: '02',
    icon:   Code2,
    title:  'Diseña tu aplicación',
    desc:   'Usa la interfaz gráfica para crear formularios, conectar a base de datos y programar lógica de negocio. Compatible con Microsoft Access y más.',
    color:  'text-brand-electric',
    bg:     'bg-brand-electric/10',
    border: 'border-brand-electric/30',
  },
  {
    number: '03',
    icon:   Send,
    title:  'Comparte el link',
    desc:   'Envía un solo link a tus usuarios. Ellos acceden desde cualquier computadora, teléfono o tablet con conexión a internet. Así de simple.',
    color:  'text-amber',
    bg:     'bg-amber/10',
    border: 'border-amber/30',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-white min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
            ¿Cómo funciona?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Tres pasos para tener tu{' '}
            <span className="text-brand-electric">app web lista</span>
          </h2>
          <p className="text-muted leading-relaxed">
            No necesitas ser experto. SkyFox está diseñado para personas con conocimientos
            básicos en programación que quieren crear soluciones profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map(({ number, icon: Icon, title, desc, color, bg, border }, i) => (
            <div key={title} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%-1rem)] w-8 h-px bg-border z-10" />
              )}

              <article
                className={`p-6 rounded-2xl border ${border} ${bg} hover:shadow-card transition-all duration-200 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-4xl font-black ${color} opacity-30 leading-none`}>
                    {number}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                    <Icon size={20} className={color} />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-text mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </article>
            </div>
          ))}
        </div>

        {/* Capabilities grid */}
        <div className="mt-14 rounded-2xl bg-surface-soft border border-border p-8">
          <p className="text-center text-sm font-semibold text-text mb-6">
            Tu código fuente y formularios siempre accesibles desde tu cuenta, desde cualquier lugar del mundo
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              '📱 Teléfono móvil',
              '💻 Computadora',
              '📟 Tablet',
              '🌐 Cualquier navegador',
              '🗄️ Base de datos',
              '👥 Multi-usuario',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center text-center p-3 rounded-xl bg-white border border-border text-xs font-medium text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
