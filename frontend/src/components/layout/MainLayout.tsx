import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-electric focus:text-white focus:rounded-full"
      >
        Saltar al contenido principal
      </a>
      <main id="main-content">
        <Outlet />
      </main>
    </>
  )
}
