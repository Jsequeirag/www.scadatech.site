import { Mail, Phone, MessageCircle } from 'lucide-react'
import { asset } from '@/lib/utils/assets'

const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Productos',     href: '#productos' },
  { label: 'Planes',        href: '#planes' },
  { label: 'Sectores',      href: '#sectores' },
  { label: 'Nosotros',      href: '#nosotros' },
  { label: 'Contacto',      href: '#contacto' },
]

const products = [
  'SkyFox Web Server',
  'FoxDen',
  'FoxBuilder Industrial',
  'WorkTool (WT)',
  'Captura Remota de Datos',
  'Capacitación Internacional',
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
            <div className="mb-4">
              <div
                className="inline-block px-3 py-1.5"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 55%, transparent 80%)',
                }}
              >
                <img
                  src={asset('assets/logo.png')}
                  alt="ScadaTech logo"
                  className="h-16 w-auto object-contain drop-shadow-md"
                />
              </div>
            </div>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              Automatización y Control. Programa desde la nube y llega más lejos con SkyFox Web Server.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:scadatech@hotmail.com"
                className="flex items-center gap-2 text-xs text-text-light hover:text-brand-cyan transition-colors"
              >
                <Mail size={13} />
                scadatech@hotmail.com
              </a>
              <a
                href="tel:+50670396600"
                className="flex items-center gap-2 text-xs text-text-light hover:text-brand-cyan transition-colors"
              >
                <Phone size={13} />
                (+506) 7039-6600
              </a>
              <a
                href="https://wa.me/50670396600"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle size={13} />
                WhatsApp disponible
              </a>
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

          {/* Products */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Productos
            </p>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#productos"
                    onClick={(e) => handleLink(e, '#productos')}
                    className="text-sm text-text-light hover:text-brand-cyan transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Empieza hoy
            </p>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              El Plan Gratis está disponible sin tarjeta de crédito. Crea tu cuenta y comienza a desarrollar.
            </p>
            <a
              href="#planes"
              onClick={(e) => handleLink(e, '#planes')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95 mb-3 block text-center"
            >
              Ver planes
            </a>
            <a
              href="https://wa.me/50670396600"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-150 active:scale-95"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-text-light">
              © {new Date().getFullYear()} ScadaTech — Automatización y Control. Todos los derechos reservados.
            </p>
            <p className="text-xs text-text-light">
              Costa Rica · scadatech@hotmail.com · (+506) 7039-6600
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
