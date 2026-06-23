import { CheckCircle2, Award, Users, Globe } from 'lucide-react'

const highlights = [
  'Fundada en 2010 con foco en automatización eléctrica',
  'Equipo de ingenieros certificados en sistemas SCADA',
  'Socios tecnológicos: GE, Eaton, PCVue, Siemens, ABB',
  'Experiencia en proyectos de alta y media tensión',
  'Cumplimiento de estándares IEC 61850 y DNP3',
  'Operamos a nivel nacional e internacional',
]

const values = [
  {
    icon:  Award,
    title: 'Excelencia técnica',
    desc:  'Ingenieros especializados con experiencia en sistemas eléctricos críticos.',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
  },
  {
    icon:  Users,
    title: 'Enfoque en el cliente',
    desc:  'Soluciones a medida adaptadas a los requerimientos de cada organización.',
    color: 'text-brand-electric',
    bg:    'bg-brand-electric/10',
  },
  {
    icon:  Globe,
    title: 'Proyección regional',
    desc:  'Experiencia en proyectos a lo largo de Chile y Latinoamérica.',
    color: 'text-amber',
    bg:    'bg-amber/10',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
              Quiénes Somos
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 leading-tight">
              Más de 15 años liderando la{' '}
              <span className="text-brand-electric">automatización eléctrica</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              SCADATECH es una empresa chilena fundada en 2010, especializada en ingeniería
              y servicios para la automatización de sistemas eléctricos de potencia. Nuestro
              propósito es proveer soluciones integrales que contribuyan a la confiabilidad,
              seguridad y eficiencia de la infraestructura energética.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Trabajamos con las principales empresas de generación, transmisión y distribución
              eléctrica del país, aportando tecnología de punta y el respaldo de los fabricantes
              líderes a nivel mundial.
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

          {/* Right: Value cards */}
          <div className="space-y-4">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-surface-soft border border-border hover:shadow-card transition-shadow duration-200"
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

            {/* Highlight box */}
            <div className="p-6 rounded-2xl bg-brand-dark text-white">
              <p className="text-sm text-text-light mb-2">Sede central</p>
              <p className="font-semibold">Santiago, Chile</p>
              <p className="text-sm text-text-light mt-1">Quilín 4745, Macul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
