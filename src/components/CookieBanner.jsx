import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, CheckCircle2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consentimiento = localStorage.getItem('cookie-consent')
    if (!consentimiento) {
      // Retraso de 1 segundo para que no aparezca de golpe al cargar
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          // Contenedor flotante inferior
          className="fixed bottom-0 left-0 w-full z-[9999] p-4 md:p-6 pointer-events-none"
        >
          {/* Tarjeta del banner */}
          <div className="pointer-events-auto max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 justify-between relative overflow-hidden">
            
            {/* Línea de color superior sutil */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-gold"></div>

            {/* Texto e ícono */}
            <div className="flex items-start md:items-center gap-4 flex-grow">
              <div className="bg-brand-sand p-3 rounded-full shrink-0 hidden sm:block">
                <Cookie className="w-6 h-6 text-brand-dark" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Tu privacidad es importante</h3>
                <p className="text-sm text-gray-600">
                  Utilizamos cookies propias para garantizar el funcionamiento del portal y recordar tus preferencias. 
                  <Link to="/politica-de-cookies" className="text-brand-teal hover:underline font-semibold ml-1">
                    Leer más
                  </Link>
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-brand-teal text-white font-bold py-2.5 px-6 rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <CheckCircle2 className="w-4 h-4" /> Aceptar cookies
              </button>
              
              {/* Botón de cerrar (asume rechazo de no esenciales) */}
              <button 
                onClick={handleAccept} 
                className="p-2.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                title="Cerrar y usar solo esenciales"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}