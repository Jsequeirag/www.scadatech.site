import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'

const Home = lazy(() => import('@/pages/Home/Home'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-dark">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-electric border-t-transparent" />
  </div>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white">
            <div className="text-center">
              <p className="text-6xl font-bold text-brand-cyan mb-4">404</p>
              <p className="text-text-light mb-6">La página que buscas no existe.</p>
              <a href="/" className="text-sm text-brand-electric hover:underline">
                Volver al inicio
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
])
