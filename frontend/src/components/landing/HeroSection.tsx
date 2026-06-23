import { ArrowRight, ChevronDown, Cloud, Code2, Globe } from 'lucide-react'
import { asset } from '@/lib/utils/assets'

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
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-electric/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-brand-electric/20 border border-brand-electric/40">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">
                SkyFox Web Server — Nueva Generación
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Programa desde{' '}
              <span className="text-brand-cyan">la nube</span>
              <br />
              y llega{' '}
              <span className="relative inline-block">
                más lejos
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-electric to-brand-cyan" />
              </span>
            </h1>

            <p className="text-lg text-text-light leading-relaxed mb-8 max-w-lg">
              Crea y ejecuta tus propias <strong className="text-white">Aplicaciones Web</strong> desde
              cualquier navegador — teléfono, tablet o computadora. Sin instalaciones, sin complicaciones.
              Solo un link y tus usuarios conectados al instante.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo('#planes')}
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95 shadow-glow-blue"
              >
                Ver planes
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('#como-funciona')}
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-text-light border border-border-dark hover:border-brand-cyan/50 hover:text-white rounded-lg transition-all duration-150 active:scale-95 hover:bg-white/5"
              >
                ¿Cómo funciona?
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: Cloud,  label: 'Sin instalaciones' },
                { icon: Code2,  label: 'Fácil de aprender' },
                { icon: Globe,  label: 'Acceso mundial' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-text-light">
                  <Icon size={14} className="text-brand-cyan" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SkyFox product image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-brand-electric/20 rounded-3xl blur-2xl scale-110" />

              <img
                src={asset('assets/skyfox.png')}
                alt="SkyFox Web Server — plataforma cloud para desarrollo de aplicaciones web"
                className="relative z-10 w-full max-w-md rounded-2xl drop-shadow-2xl"
              />

              {/* Badge "New Evolution" */}
              <div className="absolute -top-4 -left-4 z-20 bg-brand-electric rounded-xl px-4 py-2 shadow-glow-blue">
                <p className="text-xs font-bold text-white leading-tight">New Evolution</p>
                <p className="text-xs text-brand-cyan font-semibold">New Generation</p>
              </div>

              {/* Badge plan gratis */}
              <div className="absolute -bottom-3 -right-3 z-20 bg-green-500 rounded-xl px-3 py-2 shadow-lg">
                <p className="text-xs font-bold text-white">Plan Gratis disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#como-funciona')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-light hover:text-white transition-colors animate-bounce"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
