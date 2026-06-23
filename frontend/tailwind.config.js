/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:     '#080f1e',
          navy:     '#0d1f3c',
          blue:     '#1e3a8a',
          electric: '#2563eb',
          cyan:     '#0ea5e9',
          light:    '#dbeafe',
        },
        primary:        '#2563eb',
        'primary-hover':'#1d4ed8',
        secondary:      '#0f172a',
        surface:        '#ffffff',
        'surface-soft': '#f8fafc',
        'surface-dark': '#0f172a',
        border:         '#e2e8f0',
        'border-dark':  '#1e3a5f',
        text:           '#0f172a',
        muted:          '#64748b',
        'text-light':   '#cbd5e1',
        amber:          '#f59e0b',
      },
      fontFamily: {
        main: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgb(37 99 235 / 0.25)',
        card:        '0 4px 24px rgb(15 23 42 / 0.08)',
        'card-hover':'0 8px 40px rgb(15 23 42 / 0.15)',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #080f1e 0%, #0d1f3c 50%, #1e3a8a 100%)',
        'card-gradient':    'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
        'section-gradient': 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
