const clients = [
  { name: 'Colbún',                       sector: 'Generación eléctrica' },
  { name: 'Transelec',                    sector: 'Transmisión eléctrica' },
  { name: 'Coordinador Eléctrico Nacional', sector: 'Coordinación del sistema' },
  { name: 'Enel Chile',                   sector: 'Distribución eléctrica' },
  { name: 'Empresas Eléctricas A.G.',     sector: 'Sector eléctrico' },
  { name: 'AES Gener',                    sector: 'Generación eléctrica' },
  { name: 'Engie Chile',                  sector: 'Energía' },
  { name: 'ENAP',                         sector: 'Energía y combustibles' },
]

export default function ClientsSection() {
  return (
    <section id="clientes" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
            Nuestros Clientes
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            La confianza de los{' '}
            <span className="text-brand-electric">líderes del sector energético</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Trabajamos con las principales empresas de generación, transmisión y distribución
            eléctrica de Chile, aportando soluciones de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map(({ name, sector }) => (
            <div
              key={name}
              className="group p-5 rounded-2xl bg-surface-soft border border-border hover:border-brand-electric/40 hover:shadow-card hover:bg-white transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center mb-3">
                <span className="text-xs font-bold text-brand-cyan">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="font-semibold text-text text-sm leading-tight mb-1">{name}</p>
              <p className="text-xs text-muted">{sector}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl bg-hero-gradient p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            ¿Listo para modernizar su infraestructura?
          </h3>
          <p className="text-text-light mb-6 max-w-lg mx-auto">
            Cuéntenos sobre su proyecto y le presentaremos la solución más adecuada
            para sus necesidades.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contacto')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-dark bg-brand-cyan hover:bg-brand-cyan/90 rounded-lg transition-all duration-150 active:scale-95"
          >
            Iniciar conversación
          </button>
        </div>
      </div>
    </section>
  )
}
