import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner' // <-- Importar

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-sand font-sans text-brand-dark">
      <Navbar />
      
      <main className="flex-grow bg-brand-sand">
        <Outlet />
      </main>

      <Footer />
      
      {/* El banner flota sobre todo el contenido */}
      <CookieBanner />
    </div>
  )
}