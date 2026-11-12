import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

export default function CardAtractivo({ atractivo }) {
  return (
    <Link to={`/atractivos/${atractivo.id}`} className="group block bg-surface rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-teal/30 hover:-translate-y-1">
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img 
          src={atractivo.imagenPrincipal} 
          alt={atractivo.nombre} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-blue text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {atractivo.localidad}
        </div>
      </div>
      <div className="p-6 relative bg-white">
        <p className="text-brand-gold text-xs font-bold tracking-wider uppercase mb-2">{atractivo.categoria}</p>
        <h3 className="text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-teal transition-colors">{atractivo.nombre}</h3>
        <p className="text-sm text-graytext line-clamp-2 leading-relaxed">{atractivo.descripcion}</p>
        
        <div className="mt-6 flex items-center text-brand-teal font-bold text-sm gap-2 group-hover:gap-3 transition-all">
          Descubrir más <span>&rarr;</span>
        </div>
      </div>
    </Link>
  )
}