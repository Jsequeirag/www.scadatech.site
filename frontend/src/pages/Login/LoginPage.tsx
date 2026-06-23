import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const navigate   = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [form,     setForm]     = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col">

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-electric/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 container flex items-center justify-between h-16 lg:h-20">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/') }}
          className="flex items-center gap-2 group"
          aria-label="Volver al inicio"
        >
          <img
            src="/assets/logo.png"
            alt="ScadaTech logo"
            className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </a>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-text-light hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </button>
      </header>

      {/* Login card */}
      <main
        id="main-content"
        className="relative z-10 flex flex-1 items-center justify-center px-4 py-12"
      >
        <div className="w-full max-w-md">

          {/* Brand badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-electric/20 border border-brand-electric/40">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">
                SkyFox Web Server
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-card">
            <h1 className="text-2xl font-bold text-white text-center mb-1">
              Accede a tu cuenta
            </h1>
            <p className="text-sm text-text-light text-center mb-8">
              Ingresa tus credenciales para entrar a la plataforma
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-text-light mb-1.5">
                  Usuario / Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="username"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 text-sm text-white placeholder-white/30 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-electric/50 focus:border-brand-electric transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-semibold text-text-light mb-1.5">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-11 text-sm text-white placeholder-white/30 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-electric/50 focus:border-brand-electric transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-white transition-colors"
                    aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !form.email || !form.password}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-brand-electric hover:bg-primary-hover rounded-lg transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow-blue"
              >
                {loading
                  ? <><Loader2 size={16} className="animate-spin" /> Ingresando...</>
                  : 'Ingresar a SkyFox'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-text-light">
                ¿No tienes cuenta?{' '}
                <a
                  href="/#planes"
                  onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => document.querySelector('#planes')?.scrollIntoView({ behavior: 'smooth' }), 150) }}
                  className="text-brand-cyan hover:underline font-medium"
                >
                  Ver planes y registrarte
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-text-light mt-6">
            ¿Problemas para ingresar?{' '}
            <a
              href="https://wa.me/50670396600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
