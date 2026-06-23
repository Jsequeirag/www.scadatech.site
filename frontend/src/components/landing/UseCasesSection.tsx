import { Tractor, HeartPulse, Truck, ShoppingBag, Building2, Zap, Utensils, Factory } from 'lucide-react'

const sectors = [
  { icon: Tractor,    label: 'Agrícola',          sub: 'y ganadera' },
  { icon: HeartPulse, label: 'Salud',              sub: 'clínicas / hospitales' },
  { icon: Truck,      label: 'Transporte',         sub: 'marítimo · aéreo · terrestre' },
  { icon: ShoppingBag,label: 'Comercial',          sub: 'ventas y gestión' },
  { icon: Building2,  label: 'Empresarial',        sub: 'procesos corporativos' },
  { icon: Utensils,   label: 'Ind. Alimenticia',   sub: 'control de producción' },
  { icon: Zap,        label: 'Eléctrica',          sub: 'sistemas de control' },
  { icon: Factory,    label: 'Industrial',         sub: 'automatización' },
]

export default function UseCasesSection() {
  return (
    <section id="sectores" className="bg-brand-dark min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📌</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Acerca de la{' '}
            <span className="text-brand-cyan">Captura Remota de Datos</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">

          {/* Left: Text */}
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              La captura de datos en el campo{' '}
              <em className="text-white font-medium">
                (fuera de las instalaciones donde no hay computadoras)
              </em>{' '}
              siempre es esencial. Normalmente necesitarás utilizar{' '}
              <strong className="text-white">tablets o los mismos teléfonos móviles (celulares)</strong>{' '}
              para la captura de datos. Aquí es donde entran en juego las{' '}
              <span className="text-brand-cyan font-medium">Aplicaciones Web...</span>
            </p>

            <p>
              Estas te ayudarán a mostrar pantallas de captura de datos para guardarlos
              en una Base de Datos determinada, ya sea en un servidor físico o virtual
              en la nube de internet.
            </p>

            <p>
              Es importante saber que en muchas ocasiones{' '}
              <strong className="text-white">
                no es necesario trasladar todo un proyecto a la web.
              </strong>{' '}
              Basta solo con desarrollar aquellas pantallas que se requieren para capturar
              cierta información que luego será procesada.
            </p>

            <div className="pt-2 border-t border-white/10">
              <p className="text-sm text-text-light mb-2">Esto ocurre en todas las áreas como:</p>
              <p className="text-sm">
                <span className="text-brand-cyan font-medium">agrícola</span>
                {' — '}
                <span className="text-brand-cyan font-medium">ganadera</span>
                {' — '}
                <span className="text-brand-cyan font-medium">salud (clínicas/hospitales)</span>
                {' — '}
                <span className="text-brand-cyan font-medium">transporte (marítimo·aéreo·terrestre)</span>
                {' — '}
                <span className="text-brand-cyan font-medium">comercial</span>
                {' — '}
                <span className="text-brand-cyan font-medium">empresarial</span>
                {' — '}
                <span className="text-brand-cyan font-medium">industria alimenticia</span>
                {' — '}
                <span className="text-brand-cyan font-medium">eléctrica</span>
                {' — etc...'}
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex flex-col gap-4">
            {/* Devices illustration */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-electric/20 flex items-center justify-center shrink-0">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">SkyFox Web Server</p>
                  <p className="text-xs text-text-light">Captura de datos en cualquier dispositivo</p>
                </div>
              </div>

              {/* Device list */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '📱', device: 'Teléfono móvil',  desc: 'Captura en campo' },
                  { emoji: '📟', device: 'Tablet',           desc: 'Formularios remotos' },
                  { emoji: '💻', device: 'Computadora',      desc: 'Gestión en oficina' },
                  { emoji: '🖥️', device: 'Servidor / Nube',  desc: 'Base de datos central' },
                ].map(({ emoji, device, desc }) => (
                  <div key={device} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-lg">{emoji}</span>
                    <div>
                      <p className="text-xs font-semibold text-white">{device}</p>
                      <p className="text-xs text-text-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-brand-cyan font-medium">
                  Un solo link · Cualquier lugar · Tiempo real
                </p>
              </div>
            </div>

            {/* Key insight */}
            <div className="rounded-2xl bg-brand-electric/15 border border-brand-electric/30 p-5">
              <p className="text-sm text-white font-semibold mb-1">💡 No necesitas migrar todo</p>
              <p className="text-sm text-text-light leading-relaxed">
                Solo desarrolla las pantallas de captura que necesitas.
                El resto de tu sistema puede seguir operando como siempre.
              </p>
            </div>
          </div>
        </div>

        {/* Sector cards */}
        <div>
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-5 text-center">
            Sectores donde se aplica
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {sectors.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-cyan/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-electric/20 flex items-center justify-center">
                  <Icon size={18} className="text-brand-cyan" />
                </div>
                <p className="text-xs font-semibold text-white leading-tight">{label}</p>
                <p className="text-[10px] text-text-light leading-tight">{sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
