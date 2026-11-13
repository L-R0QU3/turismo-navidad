import { Link } from 'react-router-dom'
import { MapPin, ArrowUpRight } from 'lucide-react'

export default function CardAtractivo({ atractivo }) {
  // Asegurarnos de que la ruta no sea file:///
  const imagenSegura = atractivo.imagenPrincipal?.startsWith('file:') 
    ? '/img/PlayaMatanzas1.png' 
    : (atractivo.imagenPrincipal || '/img/PlayaMatanzas1.png');

  return (
    <Link to={`/atractivos/${atractivo.id}`} className="group block relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="aspect-[4/5] w-full overflow-hidden relative">
        <img 
          src={imagenSegura} 
          alt={atractivo.nombre} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
          onError={(e) => { e.target.src = '/img/PlayaMatanzas1.png'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80"></div>
        
        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {atractivo.categoria}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="flex items-center gap-2 text-brand-gold text-sm font-bold mb-2 uppercase tracking-widest">
            <MapPin className="w-4 h-4" /> {atractivo.localidad}
          </p>
          <h3 className="text-3xl font-serif font-bold text-white mb-3 leading-tight">{atractivo.nombre}</h3>
          
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">{atractivo.descripcion}</p>
            <span className="inline-flex items-center gap-2 text-white font-bold text-sm border-b border-brand-gold pb-1">
              Descubrir lugar <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}