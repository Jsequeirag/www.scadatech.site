import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Clientes',  href: '#clientes' },
  { label: 'Contacto',  href: '#contacto' },
]

const services = [
  'Sistemas SCADA',
  'Integración de subestaciones',
  'Telecomunicaciones industriales',
  'Ciberseguridad industrial',
  'Mantenimiento SCADA',
  'Asesoría técnica',
]

export default function Footer() {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark border-t border-border-dark">
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-electric/20 border border-brand-electric/40">
                <Zap size={18} className="text-brand-cyan" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SCADA<span className="text-brand-cyan">TECH</span>
              </span>
            </div>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              Ingeniería y automatización para sistemas eléctricos de potencia desde 2010.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:comercial@scadatech.cl"
                className="flex items-center gap-2 text-xs text-text-light hover:text-brand-cyan transition-colors"
              >
                <Mail size={13} />
                comercial@scadatech.cl
              </a>
              <a
                href="tel:+56954124704"
                className="flex items-center gap-2 text-xs text-text-light hover:text-brand-cyan transition-colors"
              >
                <Phone size={13} />
                +56 9 5412 4704
              </a>
              <p className="flex items-start gap-2 text-xs text-text-light">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                Quilín 4745, Macul, Santiago
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="text-sm text-text-light hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Servicios
            </p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    onClick={(e) => handleLink(e, '#servicios')}
                    className="text-sm text-text-light hover:text-brand-cyan transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              ¿Tiene un proyecto?
            </p>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              Contáctenos y le presentaremos la solución más adecuada para su infraestructura.
            </p>
            <a
              href="#contacto"
              onClick={(e) => handleLink(e, '#contacto')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-text-light">
              © {new Date().getFullYear()} SCADATECH. Todos los derechos reservados.
            </p>
            <p className="text-xs text-text-light">
              Santiago, Chile — Ingeniería SCADA &amp; Technologies Ltda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
