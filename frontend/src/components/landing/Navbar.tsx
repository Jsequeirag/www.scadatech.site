import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Productos',     href: '#productos' },
  { label: 'Planes',        href: '#planes' },
  { label: 'Sectores',      href: '#sectores' },
  { label: 'Nosotros',      href: '#nosotros' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-border-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <a
            href="#inicio"
            onClick={(e) => handleLink(e, '#inicio')}
            className="flex items-center gap-2 group"
            aria-label="ScadaTech — ir al inicio"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-electric/20 border border-brand-electric/40 group-hover:bg-brand-electric/30 transition-colors">
              <Code2 size={18} className="text-brand-cyan" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Scada<span className="text-brand-cyan">Tech</span>
            </span>
          </a>

          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-text-light hover:text-white rounded-lg hover:bg-white/10 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="ml-2 px-4 py-2 text-sm font-medium text-text-light border border-border-dark hover:border-brand-cyan/50 hover:text-white rounded-lg transition-all duration-150 active:scale-95 hover:bg-white/5"
            >
              Accede a tu cuenta
            </a>
            <a
              href="#planes"
              onClick={(e) => handleLink(e, '#planes')}
              className="ml-1 px-5 py-2 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95 shadow-glow-blue"
            >
              Empezar gratis
            </a>
          </nav>

          <button
            className="lg:hidden p-2 text-text-light hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-md border-t border-border-dark">
          <nav aria-label="Navegación móvil" className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="px-4 py-3 text-sm font-medium text-text-light hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="px-4 py-3 text-sm font-medium text-text-light border border-border-dark hover:border-brand-cyan/50 hover:text-white text-center rounded-lg transition-colors"
            >
              Accede a tu cuenta
            </a>
            <a
              href="#planes"
              onClick={(e) => handleLink(e, '#planes')}
              className="px-4 py-3 text-sm font-semibold text-white text-center bg-brand-electric hover:bg-primary-hover rounded-lg transition-colors active:scale-95"
            >
              Empezar gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
