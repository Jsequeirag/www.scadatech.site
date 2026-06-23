import { Calendar, FolderKanban, Building2, Clock } from 'lucide-react'

const stats = [
  {
    icon:  Calendar,
    value: '+15',
    unit:  'años',
    label: 'de experiencia en el sector eléctrico',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
  },
  {
    icon:  FolderKanban,
    value: '+50',
    unit:  'proyectos',
    label: 'implementados en Chile y Latinoamérica',
    color: 'text-brand-electric',
    bg:    'bg-brand-electric/10',
  },
  {
    icon:  Building2,
    value: '10+',
    unit:  'clientes',
    label: 'grandes empresas energéticas',
    color: 'text-amber',
    bg:    'bg-amber/10',
  },
  {
    icon:  Clock,
    value: '24/7',
    unit:  '',
    label: 'soporte y monitoreo continuo',
    color: 'text-green-400',
    bg:    'bg-green-400/10',
  },
]

export default function StatsSection() {
  return (
    <section id="stats" className="bg-brand-dark border-y border-border-dark">
      <div className="container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, unit, label, color, bg }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={22} className={color} />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {value}
                  {unit && <span className="text-lg font-medium text-text-light ml-1">{unit}</span>}
                </p>
                <p className="text-sm text-text-light mt-1 leading-snug">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
