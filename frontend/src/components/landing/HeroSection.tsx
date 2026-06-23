import { ArrowRight, ChevronDown, Shield, Zap, Network } from 'lucide-react'

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative glow circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-electric/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-brand-electric/20 border border-brand-electric/40">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">
                Desde 2010
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Automatización{' '}
              <span className="text-brand-cyan">Inteligente</span>
              <br />
              para el Sistema{' '}
              <span className="relative inline-block">
                Eléctrico
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-electric to-brand-cyan" />
              </span>
            </h1>

            <p className="text-lg text-text-light leading-relaxed mb-8 max-w-lg">
              Proveemos soluciones integrales en ingeniería, desarrollo, suministro e implementación
              de sistemas SCADA, telecomunicaciones industriales y ciberseguridad para el sector eléctrico.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo('#servicios')}
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95 shadow-glow-blue"
              >
                Ver servicios
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('#contacto')}
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-text-light border border-border-dark hover:border-brand-cyan/50 hover:text-white rounded-lg transition-all duration-150 active:scale-95 hover:bg-white/5"
              >
                Contáctenos
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: Shield, label: 'Ciberseguridad industrial' },
                { icon: Zap,    label: 'Sistemas SCADA' },
                { icon: Network, label: 'Telecomunicaciones' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-text-light">
                  <Icon size={14} className="text-brand-cyan" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main dashboard card */}
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 shadow-card">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-text-light font-medium uppercase tracking-widest mb-1">
                      Sistema SCADA
                    </p>
                    <p className="text-lg font-bold text-white">Centro de Control</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">En línea</span>
                  </div>
                </div>

                {/* Simulated chart bars */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Subestación Norte',  value: 87, color: 'bg-brand-cyan' },
                    { label: 'Subestación Sur',     value: 62, color: 'bg-brand-electric' },
                    { label: 'Red de Distribución', value: 94, color: 'bg-green-400' },
                    { label: 'Sistema de Control',  value: 78, color: 'bg-amber' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-text-light mb-1">
                        <span>{item.label}</span>
                        <span className="font-medium text-white">{item.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '99.9%', label: 'Uptime' },
                    { value: '24/7',  label: 'Monitoreo' },
                    { value: '<1ms',  label: 'Latencia' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-sm font-bold text-brand-cyan">{stat.value}</p>
                      <p className="text-xs text-text-light mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-electric rounded-xl px-3 py-2 shadow-glow-blue">
                <p className="text-xs font-bold text-white">+50 proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-light hover:text-white transition-colors animate-bounce"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
