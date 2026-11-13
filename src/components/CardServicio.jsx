import { MapPin, Phone, Mail } from 'lucide-react'

export default function CardServicio({ servicio }) {
  const imagenMostrar = servicio.imagen_url || '/img/PlayaMatanzas1.png';

  return (
    <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden group border border-gray-100/50 hover:-translate-y-1">
      
      {/* Imagen */}
      <div className="h-64 w-full bg-gray-100 relative overflow-hidden">
        <img 
          src={imagenMostrar} 
          alt={servicio.nombre} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
          onError={(e) => { e.target.src = "/img/PlayaMatanzas1.png"; }}
        />
        <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          {servicio.categoria || servicio.categorias?.nombre || 'General'}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2 leading-tight">{servicio.nombre}</h3>
        
        <p className="text-sm text-brand-teal font-bold mb-5 flex items-center gap-1.5 uppercase tracking-wide">
          <MapPin className="w-4 h-4" /> {servicio.localidad}
        </p>
        
        <div className="text-sm text-graytext space-y-3 mb-8 flex-grow font-medium">
          <p className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <span>{servicio.direccion || 'Dirección no especificada'}</span>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400 shrink-0" />
            <a href={`tel:${servicio.telefono}`} className="hover:text-brand-blue transition-colors">{servicio.telefono || 'No disponible'}</a>
          </p>
          <p className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <a href={`mailto:${servicio.email}`} className="hover:text-brand-blue transition-colors truncate">{servicio.email || 'No disponible'}</a>
          </p>
        </div>

        {/* Botones */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-gray-100">
          <a 
            href={`tel:${servicio.telefono}`} 
            className="bg-brand-dark text-white text-center py-3 rounded-xl text-sm font-bold hover:bg-brand-teal transition-colors"
          >
            Llamar
          </a>
          <a 
            href={`mailto:${servicio.email}`} 
            className="bg-brand-sand text-brand-dark text-center py-3 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            Correo
          </a>
        </div>
      </div>
    </div>
  )
}