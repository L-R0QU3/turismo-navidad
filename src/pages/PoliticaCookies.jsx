export default function PoliticaCookies() {
  return (
    <div className="bg-brand-sand min-h-screen py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-serif font-bold text-brand-dark mb-6">Política de Cookies</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              El portal <strong>Turismo Navidad</strong>, gestionado por la Ilustre Municipalidad de Navidad, utiliza cookies para mejorar tu experiencia de navegación.
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten recordar tus acciones y preferencias (como el inicio de sesión o la aceptación de este aviso) durante un período de tiempo.
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Cookies técnicas (esenciales):</strong> Son necesarias para el funcionamiento del sitio, especialmente para la autenticación de usuarios en el panel de administración y la seguridad del sistema (Supabase).</li>
              <li><strong>Cookies de preferencias:</strong> Nos permiten recordar si has aceptado el aviso de cookies para no mostrártelo en cada visita.</li>
            </ul>
            <p className="mb-4">
              <strong>No utilizamos</strong> cookies de terceros para publicidad, perfilamiento o rastreo comercial.
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">¿Cómo deshabilitar las cookies?</h2>
            <p>
              Puedes configurar tu navegador para bloquear o eliminar las cookies. Sin embargo, ten en cuenta que si bloqueas las cookies esenciales, es posible que algunas funcionalidades del portal (como el inicio de sesión) no funcionen correctamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}