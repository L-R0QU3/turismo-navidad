import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-sand font-sans text-brand-dark">
      <Navbar />
      
      {/* Al no haber animación, el contenido simplemente se reemplaza al instante */}
      <main className="flex-grow bg-brand-sand">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}