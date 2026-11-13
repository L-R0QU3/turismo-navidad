export default function CardServicio({ servicio }) {
  // Forzamos una imagen local por defecto si el campo viene vacío
  const imagenMostrar = servicio.imagen_url || '/img/PlayaMatanzas1.png';

  return (
    <div className="bg-surface rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 overflow-hidden group">
      
      {/* Imagen */}
      <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
        <img 
          src={imagenMostrar} 
          alt={`Imagen de ${servicio.nombre}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Si la imagen falla, intenta con esta ruta local
            e.target.onerror = null; 
            e.target.src = "/img/PlayaMatanzas1.png"; 
          }}
        />
        <div className="absolute top-4 right-4 bg-brand-olive text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">
          {servicio.categoria || servicio.categorias?.nombre || 'General'}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-blue mb-2 font-serif leading-tight">{servicio.nombre}</h3>
        
        <p className="text-sm text-brand-gold font-bold mb-4 flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          {servicio.localidad}
        </p>
        
        <div className="text-sm text-graytext space-y-2 mb-6 flex-grow">
          <p className="flex items-start gap-2">
            <span className="font-bold text-brand-blue shrink-0">Dirección:</span> 
            <span>{servicio.direccion || 'No especificada'}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold text-brand-blue shrink-0">Teléfono:</span> 
            <a href={`tel:${servicio.telefono}`} className="hover:text-brand-teal transition-colors">{servicio.telefono || 'No disponible'}</a>
          </p>
          <p className="flex items-center gap-2 overflow-hidden">
            <span className="font-bold text-brand-blue shrink-0">Email:</span> 
            <a href={`mailto:${servicio.email}`} className="hover:text-brand-teal transition-colors truncate">{servicio.email || 'No disponible'}</a>
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-100">
          <a 
            href={`tel:${servicio.telefono}`} 
            className="bg-brand-blue text-white text-center py-2 rounded text-sm font-bold hover:bg-brand-teal transition-colors"
          >
            Llamar
          </a>
          <a 
            href={`mailto:${servicio.email}`} 
            className="bg-brand-sand text-brand-blue border border-gray-300 text-center py-2 rounded text-sm font-bold hover:bg-brand-teal hover:text-white transition-colors"
          >
            Correo
          </a>
        </div>
      </div>
    </div>
  )
}