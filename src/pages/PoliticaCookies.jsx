import usePageTitle from '../utils/usePageTitle'
import { Cookie } from 'lucide-react'

export default function PoliticaCookies() {
  usePageTitle('Política de Cookies')

  return (
    <div className="bg-brand-sand min-h-screen py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-brand-teal">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-sand p-4 rounded-full">
              <Cookie className="w-8 h-8 text-brand-dark" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-brand-dark">Política de Cookies</h1>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6 text-lg">
              El portal <strong>Turismo Navidad</strong>, gestionado por la Ilustre Municipalidad de Navidad, utiliza cookies para mejorar tu experiencia de navegación. A continuación, te explicamos qué son y cómo las utilizamos.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-dark mt-10 mb-4">¿Qué son las cookies?</h2>
            <p className="mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computador, tablet o celular) cuando visitas un sitio web. Nos permiten recordar tus acciones y preferencias (como el inicio de sesión o la aceptación de este aviso) durante un período de tiempo, para que no tengas que configurarlas cada vez que vuelvas.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-dark mt-10 mb-4">Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Cookies técnicas (esenciales):</strong> Son estrictamente necesarias para el funcionamiento del sitio. Se utilizan, por ejemplo, para mantener la sesión activa de los administradores en el panel de gestión (a través de Supabase) y para garantizar la seguridad del sistema.
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Nos permiten recordar si ya has aceptado el aviso de cookies, para no volver a mostrártelo en cada visita.
              </li>
            </ul>

            <div className="bg-brand-sand/50 p-6 rounded-xl border border-brand-teal/20 mb-8">
              <p className="font-bold text-brand-dark mb-2">Importante:</p>
              <p>
                <strong>No utilizamos</strong> cookies de terceros para publicidad, perfilamiento de usuarios o rastreo comercial. Tu privacidad es nuestra prioridad.
              </p>
            </div>

            <h2 className="text-2xl font-serif font-bold text-brand-dark mt-10 mb-4">¿Cómo deshabilitar las cookies?</h2>
            <p className="mb-6">
              Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento. Sin embargo, ten en cuenta que si bloqueas las cookies esenciales, es posible que algunas funcionalidades del portal (como el inicio de sesión en el panel de administración) no funcionen correctamente.
            </p>

            <p className="text-sm text-gray-400 mt-12 pt-6 border-t border-gray-100">
              Última actualización: Noviembre de 2026.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}