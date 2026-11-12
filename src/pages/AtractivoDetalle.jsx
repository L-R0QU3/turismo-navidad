import { useParams, Link } from 'react-router-dom'
import { atractivos } from '../data/atractivos'

export default function AtractivoDetalle() {
  const { id } = useParams()
  const atractivo = atractivos.find(a => a.id === id)

  if (!atractivo) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-serif font-bold text-brand-blue mb-4">Atractivo no encontrado</h1>
        <p className="text-graytext mb-8">El lugar que buscas no existe o fue removido.</p>
        <Link to="/atractivos" className="bg-brand-teal text-white px-6 py-2 rounded font-bold">Volver al catálogo</Link>
      </div>
    )
  }

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      {/* Hero del Atractivo */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <img 
          src={atractivo.imagenPrincipal} 
          alt={atractivo.nombre} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link to="/atractivos" className="text-brand-gold font-bold mb-4 inline-block hover:text-white transition-colors">
              &larr; Volver a Atractivos
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{atractivo.nombre}</h1>
            <p className="text-xl text-gray-200 flex items-center gap-2">
              <span className="bg-brand-teal px-3 py-1 rounded text-sm uppercase tracking-wider">{atractivo.categoria}</span>
              <span>📍 {atractivo.localidad}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-surface rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto -mt-20 relative z-10">
          <h2 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-gray-200 pb-2">Sobre este lugar</h2>
          <p className="text-graytext text-lg leading-relaxed mb-8">
            {atractivo.descripcion}
          </p>

          <div className="bg-brand-sand p-6 rounded border-l-4 border-brand-gold mb-8">
             <h3 className="font-bold text-brand-blue mb-2">Información de visita</h3>
             <p className="text-sm text-graytext italic">
               [PENDIENTE_DE_VALIDACION_MUNICIPAL] - Aquí se integrarán los horarios, recomendaciones de seguridad y accesibilidad extraídos de la Guía Turística.
             </p>
          </div>

          {/* Galería secundaria */}
          {atractivo.imagenesSecundarias && atractivo.imagenesSecundarias.length > 0 && (
            <div>
              <h3 className="text-xl font-serif font-bold text-brand-blue mb-4">Galería</h3>
              <div className="grid grid-cols-2 gap-4">
                {atractivo.imagenesSecundarias.map((img, index) => (
                  <img key={index} src={img} alt={`Vista de ${atractivo.nombre}`} className="w-full h-48 object-cover rounded shadow-sm hover:opacity-90 transition-opacity" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}