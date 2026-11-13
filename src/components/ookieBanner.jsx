import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X, CheckCircle2 } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificamos si el usuario ya aceptó o rechazó las cookies
    const consentimiento = localStorage.getItem('cookie-consent')
    if (!consentimiento) {
      // Si no hay registro, mostramos el banner después de un pequeño delay
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999] animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
        
        {/* Detalle de color superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-teal"></div>

        <button 
          onClick={handleReject}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4">
          <div className="bg-brand-sand p-3 rounded-full shrink-0">
            <Cookie className="w-6 h-6 text-brand-dark" />
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-dark mb-2">Tu privacidad es importante</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Utilizamos cookies propias (técnicas y de sesión) para garantizar el correcto funcionamiento del portal y recordar tus preferencias. No utilizamos cookies de rastreo publicitario.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-brand-teal text-white text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Aceptar todas
              </button>
              <button 
                onClick={handleReject}
                className="flex-1 bg-gray-100 text-gray-600 text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Solo esenciales
              </button>
            </div>
            
            <div className="mt-3 text-center">
              <Link to="/politica-de-cookies" onClick={() => setIsVisible(false)} className="text-xs text-brand-teal hover:underline font-semibold">
                Leer política completa de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}