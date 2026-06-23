export default function SkyFoxDemoSection() {
  return (
    <section id="demo" className="bg-brand-dark min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="container">

        {/* Header text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">
            ¿Cómo funciona SkyFox Web?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            La Interfaz Gráfica que verás{' '}
            <span className="text-brand-cyan">en tu navegador</span>
          </h2>
          <p className="text-text-light leading-relaxed">
            Simplemente crea tu cuenta e ingresa a la plataforma. Verás el diseñador visual
            donde construyes formularios y aplicaciones web — sin instalar nada.
          </p>
        </div>

        {/* SkyFox UI Mockup */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(37,99,235,0.2)]">

          {/* ── Browser chrome ── */}
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-3 border-b border-white/10">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-[#1a1a1a] rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
              skyfox.scadatech.site/designer/my-app.wafp
            </div>
          </div>

          {/* ── SkyFox top bar ── */}
          <div className="bg-[#1e3a5f] px-4 py-2 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-brand-cyan">Provided by ScadaTech</span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-gray-300 font-mono truncate hidden sm:block">
                Form: /projects/demo_empresa.wafp
              </span>
            </div>
            <button className="px-3 py-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
              Exit
            </button>
          </div>

          {/* ── Designer toolbar ── */}
          <div className="bg-[#e8e8e8] border-b border-gray-400">
            {/* Row 1: Designer label + menu */}
            <div className="flex items-center gap-1 px-2 py-1 text-xs border-b border-gray-300">
              <span className="px-2 py-0.5 bg-[#3a6ea8] text-white font-bold rounded-sm text-[11px]">Designer</span>
              <span className="text-gray-500 ml-1">[ SkyFox Web Server ]</span>
            </div>

            {/* Row 2: Action buttons */}
            <div className="flex flex-wrap items-center gap-1 px-2 py-1 border-b border-gray-300">
              {['Server','QuickInfo','New Project','Open Project','Close Project','Save Project'].map((btn) => (
                <button
                  key={btn}
                  className="px-2 py-0.5 text-[11px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm transition-colors"
                >
                  {btn}
                </button>
              ))}
              <div className="flex items-center gap-1 ml-1">
                <button className="px-2 py-0.5 text-[11px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm">run</button>
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <button className="px-2 py-0.5 text-[11px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm">stop</button>
                <span className="w-2 h-2 rounded-sm bg-yellow-500 inline-block" />
                <button className="px-2 py-0.5 text-[11px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm">Params</button>
              </div>
              <span className="ml-auto text-[11px] text-blue-700 underline cursor-pointer hidden md:block">Official SkyFox Site</span>
            </div>

            {/* Row 3: Form/Program/DataBase tabs */}
            <div className="flex items-center gap-0 px-2 py-1 border-b border-gray-300">
              {['Form','Program','DataBase'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-3 py-0.5 text-[11px] border border-gray-400 rounded-t-sm -mb-px ${
                    i === 0 ? 'bg-white font-bold border-b-white z-10' : 'bg-[#d4d0c8] hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Row 4: Component palette */}
            <div className="flex flex-wrap items-center gap-1 px-2 py-1 bg-white border-b border-gray-300">
              <div className="flex gap-0 mr-2">
                {['Component','Extras','DBComponent','Scada'].map((t, i) => (
                  <button
                    key={t}
                    className={`px-2 py-0.5 text-[11px] border border-gray-400 ${
                      i === 0 ? 'bg-[#3a6ea8] text-white font-bold' : 'bg-[#d4d0c8] hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {['Button','Label','Edit','Memo','CheckBox','RadioGroup','ListBox','ComboBox'].map((comp) => (
                <button
                  key={comp}
                  className="px-2 py-0.5 text-[11px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#b8b8b8] rounded-sm transition-colors font-medium"
                >
                  {comp}
                </button>
              ))}
            </div>

            {/* Row 5: Object toolbar */}
            <div className="flex flex-wrap items-center gap-1 px-2 py-1 bg-white">
              <span className="text-[11px] text-gray-600">Object:</span>
              <input className="border border-gray-400 px-1 text-[11px] w-24 h-5 bg-white" readOnly />
              {['del','Copy-Prop','Paste-Prop','‹align','›align','Send to Back','Bring to Front'].map((btn) => (
                <button
                  key={btn}
                  className="px-1.5 py-0.5 text-[11px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* ── Main area: left panel + canvas ── */}
          <div className="flex bg-[#f0f0f0]" style={{ minHeight: '380px' }}>

            {/* Left panel */}
            <div className="w-20 bg-[#d4d0c8] border-r border-gray-400 flex flex-col gap-1 p-1.5 text-[10px] shrink-0">
              <div>
                <p className="text-gray-600 mb-0.5">Connection:</p>
                <select className="w-full border border-gray-400 bg-white text-[10px] h-5" />
              </div>
              <div>
                <p className="text-gray-600 mb-0.5">Field:</p>
                <select className="w-full border border-gray-400 bg-white text-[10px] h-5" />
              </div>
              <button className="w-full text-[10px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] py-0.5">Edit Grid</button>
              <button className="w-full text-[10px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] py-0.5">Edit</button>
              <button className="w-full text-[10px] bg-red-700 text-white border border-red-900 py-0.5 font-bold">Upload a file</button>
              <div className="grid grid-cols-2 gap-0.5 text-[10px] mt-1">
                <span className="text-gray-600">X:</span><input className="border border-gray-400 bg-white w-full h-4 text-[10px] px-0.5" defaultValue="0" readOnly />
                <span className="text-gray-600">Y:</span><input className="border border-gray-400 bg-white w-full h-4 text-[10px] px-0.5" defaultValue="0" readOnly />
              </div>
              <div className="flex flex-col items-center gap-0.5 mt-1">
                <button className="w-10 text-[10px] bg-[#d4d0c8] border border-gray-500 py-0.5">up</button>
                <div className="flex gap-0.5">
                  <button className="text-[10px] bg-[#d4d0c8] border border-gray-500 px-1 py-0.5">left</button>
                  <button className="text-[10px] bg-[#d4d0c8] border border-gray-500 px-1 py-0.5">right</button>
                </div>
                <button className="w-10 text-[10px] bg-[#d4d0c8] border border-gray-500 py-0.5">down</button>
              </div>
              <div className="mt-1 text-[10px]">
                <p className="text-gray-600">Width: <input className="border border-gray-400 w-7 h-3 bg-white text-[10px] px-0.5" defaultValue="0" readOnly /></p>
                <p className="text-gray-600 mt-0.5">Height: <input className="border border-gray-400 w-7 h-3 bg-white text-[10px] px-0.5" defaultValue="0" readOnly /></p>
              </div>
              {/* Color palette */}
              <div className="mt-1">
                <div className="grid grid-cols-4 gap-px">
                  {['#000','#800000','#008000','#808000','#000080','#800080','#008080','#c0c0c0',
                    '#808080','#ff0000','#00ff00','#ffff00','#0000ff','#ff00ff','#00ffff','#fff',
                    '#000080','#3a6ea8','#1e8449','#d4ac0d'].map((c) => (
                    <span key={c} className="w-3.5 h-3.5 border border-gray-500 cursor-pointer" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
              <button className="w-full text-[10px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] py-0.5 mt-1">Background</button>
            </div>

            {/* Form canvas */}
            <div className="flex-1 bg-white border border-gray-400 m-2 rounded-sm overflow-auto">
              {/* Form title */}
              <div className="bg-[#3a6ea8] text-white text-sm font-bold text-center py-1 px-3">
                Ejemplo Conexión con Microsoft Access
              </div>

              {/* Form body */}
              <div className="p-4 space-y-3">
                {/* Nombre */}
                <div className="flex items-center gap-3">
                  <label className="text-[12px] text-gray-700 w-20 text-right shrink-0">Nombre:</label>
                  <input className="border border-gray-400 bg-[#ffffc0] h-5 w-44 text-[12px] px-1 focus:outline-none" />
                  {/* Photo box */}
                  <div className="border border-gray-400 w-20 h-20 ml-4 flex items-center justify-center text-[10px] text-gray-400 row-span-4" style={{ gridRow: '1 / span 4' }}>
                    foto
                  </div>
                </div>
                {/* ID */}
                <div className="flex items-center gap-3">
                  <label className="text-[12px] text-gray-700 w-20 text-right shrink-0">ID</label>
                  <input className="border border-gray-400 bg-[#ffffc0] h-5 w-44 text-[12px] px-1 focus:outline-none" />
                </div>
                {/* Fecha Nac. */}
                <div className="flex items-center gap-3">
                  <label className="text-[12px] text-gray-700 w-20 text-right shrink-0">Fecha Nac.</label>
                  <input className="border border-gray-400 bg-[#ffffc0] h-5 w-44 text-[12px] px-1 focus:outline-none" />
                </div>
                {/* Género */}
                <div className="flex items-start gap-3">
                  <label className="text-[12px] text-gray-700 w-20 text-right shrink-0 pt-0.5">Género</label>
                  <div className="flex flex-col gap-1">
                    {['masculino','femenino','otro'].map((g) => (
                      <label key={g} className="flex items-center gap-1.5 text-[12px] text-gray-700 cursor-pointer">
                        <input type="radio" name="genero" className="w-3 h-3" />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Nacionalidad */}
                <div className="flex items-center gap-3">
                  <label className="text-[12px] text-gray-700 w-20 text-right shrink-0">Nacionalidad</label>
                  <select className="border border-gray-400 h-5 text-[12px] px-1 w-44 bg-white focus:outline-none">
                    <option>-- No Selection --</option>
                    <option>Costa Rica</option>
                    <option>México</option>
                    <option>Colombia</option>
                  </select>
                  <button className="px-3 py-0.5 bg-red-700 text-white text-[11px] font-bold border border-red-900 ml-1">
                    Upload a file
                  </button>
                </div>
                {/* Tiene empleo */}
                <div className="flex items-center gap-3">
                  <span className="w-20 shrink-0" />
                  <label className="flex items-center gap-1.5 text-[12px] text-gray-700 cursor-pointer">
                    <input type="checkbox" className="w-3 h-3" />
                    Tiene empleo
                  </label>
                </div>
                {/* NOTA */}
                <div className="flex items-start gap-3">
                  <label className="text-[12px] text-red-600 font-bold w-20 text-right shrink-0 pt-0.5">NOTA:</label>
                  <textarea className="border border-gray-400 w-44 h-16 text-[12px] px-1 py-0.5 bg-[#ffffcc] focus:outline-none resize-none" />
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-2 pt-2">
                  {['anterior','siguiente'].map((btn) => (
                    <button key={btn} className="px-3 py-1 text-[12px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm transition-colors">
                      {btn}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  {['nuevo','editar','guardar'].map((btn) => (
                    <button key={btn} className="px-3 py-1 text-[12px] bg-[#d4d0c8] border border-gray-500 hover:bg-[#c0bdb5] rounded-sm transition-colors">
                      {btn}
                    </button>
                  ))}
                </div>
                <div>
                  <button className="px-4 py-1 text-[12px] bg-[#3a9ed4] text-white border border-[#2a7ea8] hover:bg-[#2a7ea8] rounded-sm font-bold transition-colors">
                    Regresar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption bullets */}
        <div className="max-w-3xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { emoji: '🔗', text: 'Con un solo link accedes a tus aplicaciones desde cualquier dispositivo' },
            { emoji: '💾', text: 'Tus formularios y código fuente siempre disponibles desde tu cuenta' },
            { emoji: '📤', text: 'Envía el link a tus usuarios y ya pueden usar la aplicación al instante' },
          ].map(({ emoji, text }) => (
            <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xl shrink-0">{emoji}</span>
              <p className="text-sm text-text-light leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
