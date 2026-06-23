const partners = [
  { name: 'GE Grid Solutions',       abbr: 'GE',      desc: 'Grid Solutions y Telecomunicaciones' },
  { name: 'Eaton',                   abbr: 'Eaton',   desc: 'Grid Automation System Solutions' },
  { name: 'PCVue (ARC Informatique)',abbr: 'PCVue',   desc: 'Software HMI/SCADA' },
  { name: 'Siemens',                 abbr: 'Siemens', desc: 'Automatización industrial' },
  { name: 'ABB',                     abbr: 'ABB',     desc: 'Electrificación y automatización' },
  { name: 'Cisco',                   abbr: 'Cisco',   desc: 'Networking y ciberseguridad' },
]

export default function PartnersSection() {
  return (
    <section className="bg-surface-soft py-16 lg:py-20 border-y border-border">
      <div className="container">
        <p className="text-center text-xs font-bold text-muted uppercase tracking-widest mb-10">
          Tecnología de los líderes mundiales
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map(({ name, abbr, desc }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-brand-electric/40 hover:shadow-card transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-dark flex items-center justify-center">
                <span className="text-xs font-bold text-brand-cyan tracking-tight">{abbr}</span>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-text leading-tight">{name}</p>
                <p className="text-xs text-muted leading-tight mt-0.5 hidden sm:block">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
