import {
  Tractor, HeartPulse, Truck, ShoppingBag, Building2, Zap,
} from 'lucide-react'

const cases = [
  { icon: Tractor,    label: 'Agrícola y Ganadero',  desc: 'Control de cultivos, ganado y maquinaria desde campo.' },
  { icon: HeartPulse, label: 'Salud',                 desc: 'Clínicas y hospitales con registros digitales remotos.' },
  { icon: Truck,      label: 'Transporte',             desc: 'Marítimo, aéreo y terrestre con seguimiento en tiempo real.' },
  { icon: ShoppingBag,label: 'Comercial',              desc: 'Inventarios, ventas y atención al cliente integrados.' },
  { icon: Building2,  label: 'Empresarial',            desc: 'Gestión de procesos y datos corporativos centralizados.' },
  { icon: Zap,        label: 'Industria Eléctrica',    desc: 'Monitoreo y control de sistemas eléctricos en la nube.' },
]

export default function UseCasesSection() {
  return (
    <section id="sectores" className="bg-brand-dark min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">
            Sectores
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ScadaTech funciona en{' '}
            <span className="text-brand-cyan">todas las industrias</span>
          </h2>
          <p className="text-text-light leading-relaxed">
            No importa el sector — si necesitas capturar datos, gestionar usuarios
            o ejecutar lógica de negocio, SkyFox es para ti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cases.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-cyan/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-electric/20 flex items-center justify-center group-hover:bg-brand-electric/30 transition-colors">
                <Icon size={22} className="text-brand-cyan" />
              </div>
              <p className="text-xs font-semibold text-white leading-tight">{label}</p>
              <p className="text-xs text-text-light leading-tight hidden sm:block">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-text-light text-sm mb-4">
            ¿Tu sector no está aquí? SkyFox se adapta a cualquier necesidad.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contacto')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-dark bg-brand-cyan hover:bg-brand-cyan/90 rounded-lg transition-all duration-150 active:scale-95"
          >
            Cuéntanos tu proyecto
          </button>
        </div>
      </div>
    </section>
  )
}
