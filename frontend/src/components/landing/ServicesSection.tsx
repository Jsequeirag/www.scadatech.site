import {
  Monitor,
  Zap,
  Radio,
  Shield,
  Wrench,
  FileCheck,
} from 'lucide-react'

const services = [
  {
    icon:  Monitor,
    title: 'Sistemas SCADA y Centros de Control',
    desc:  'Diseño, implementación y puesta en marcha de plataformas HMI/SCADA para la supervisión y control de activos eléctricos en tiempo real.',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
    border:'border-brand-cyan/20',
  },
  {
    icon:  Zap,
    title: 'Integración de Subestaciones',
    desc:  'Integración de IEDs, RTUs y protocolos industriales (IEC 61850, DNP3, Modbus) en subestaciones de alta y media tensión.',
    color: 'text-brand-electric',
    bg:    'bg-brand-electric/10',
    border:'border-brand-electric/20',
  },
  {
    icon:  Radio,
    title: 'Telecomunicaciones Industriales',
    desc:  'Diseño e implementación de redes de telecomunicaciones para sistemas críticos, incluyendo fibra óptica, radiofrecuencia y redes privadas.',
    color: 'text-amber',
    bg:    'bg-amber/10',
    border:'border-amber/20',
  },
  {
    icon:  Shield,
    title: 'Ciberseguridad Industrial',
    desc:  'Protección de redes IT/OT, evaluación de vulnerabilidades y cumplimiento de normas de seguridad para infraestructura crítica energética.',
    color: 'text-green-400',
    bg:    'bg-green-400/10',
    border:'border-green-400/20',
  },
  {
    icon:  Wrench,
    title: 'Mantenimiento de Plataformas SCADA',
    desc:  'Servicio integral de mantenimiento preventivo y correctivo, actualizaciones y soporte 24/7 para plataformas en operación.',
    color: 'text-purple-400',
    bg:    'bg-purple-400/10',
    border:'border-purple-400/20',
  },
  {
    icon:  FileCheck,
    title: 'Asesoría en Normas Técnicas',
    desc:  'Consultoría especializada en normativa técnica de seguridad y estándares internacionales para sistemas eléctricos de potencia.',
    color: 'text-rose-400',
    bg:    'bg-rose-400/10',
    border:'border-rose-400/20',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-surface-soft py-20 lg:py-28">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Soluciones integrales para la{' '}
            <span className="text-brand-electric">infraestructura eléctrica</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Desde el diseño hasta la operación, acompañamos cada etapa del ciclo de vida
            de sus sistemas de control y automatización.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <article
              key={title}
              className={`group p-6 rounded-2xl bg-white border ${border} hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="text-base font-semibold text-text mb-3 leading-snug">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
