import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon:  Mail,
    label: 'Correo electrónico',
    value: 'scadatech@hotmail.com',
    href:  'mailto:scadatech@hotmail.com',
    desc:  'Respuesta en horario laboral',
  },
  {
    icon:  Phone,
    label: 'Teléfono / WhatsApp',
    value: '(+506) 7039-6600',
    href:  'https://wa.me/50670396600',
    desc:  'Escríbenos por WhatsApp',
  },
  {
    icon:  MessageCircle,
    label: 'WhatsApp directo',
    value: 'Enviar mensaje ahora',
    href:  'https://wa.me/50670396600?text=Hola%20ScadaTech%2C%20me%20interesa%20conocer%20más%20sobre%20SkyFox',
    desc:  'Atención rápida por chat',
  },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-white min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-electric uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
            Hablemos sobre{' '}
            <span className="text-brand-electric">tu proyecto</span>
          </h2>
          <p className="text-muted leading-relaxed">
            ¿Tienes dudas sobre qué plan elegir o cómo implementar tu solución?
            Contáctanos — te asesoramos sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left: Contact info */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-surface-soft border border-border hover:border-brand-electric/40 hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-electric/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand-electric" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-text group-hover:text-brand-electric transition-colors">
                    {value}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{desc}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA destacado */}
            <a
              href="https://wa.me/50670396600?text=Hola%20ScadaTech%2C%20me%20interesa%20saber%20más%20sobre%20SkyFox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all duration-150 active:scale-95 shadow-lg"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>

            <div className="p-6 rounded-2xl bg-brand-dark text-white">
              <p className="font-semibold mb-2">Impulsa tu Proyecto Web</p>
              <p className="text-sm text-text-light">
                Con ScadaTech puedes crear, lanzar y crecer tu aplicación web desde cero,
                sin necesidad de infraestructura compleja ni grandes inversiones.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-surface-soft border border-border rounded-2xl p-6 lg:p-8 shadow-card">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle2 size={48} className="text-green-500" />
                <h3 className="text-xl font-bold text-text">¡Mensaje enviado!</h3>
                <p className="text-muted text-sm max-w-xs">
                  Gracias por contactarnos. Le responderemos a la brevedad posible.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', company: '', email: '', message: '' }) }}
                  className="text-sm text-brand-electric hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-text mb-1.5">
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Su nombre"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-electric/30 focus:border-brand-electric transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-text mb-1.5">
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Su empresa (opcional)"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-electric/30 focus:border-brand-electric transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-text mb-1.5">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@empresa.com"
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-electric/30 focus:border-brand-electric transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-text mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, qué plan te interesa o cualquier consulta..."
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-electric/30 focus:border-brand-electric transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95"
                >
                  <Send size={15} />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
