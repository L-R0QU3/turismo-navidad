import { useState } from 'react'
import { atractivos } from '../data/atractivos'
import CardAtractivo from '../components/CardAtractivo'
import usePageTitle from '../utils/usePageTitle'
import { Search, Compass } from 'lucide-react'

export default function Atractivos() {
  usePageTitle('Atractivos Turísticos')
  
  const [busqueda, setBusqueda] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')

  const categorias = ['Todos', ...new Set(atractivos.map(a => a.categoria))]

  const atractivosFiltrados = atractivos.filter(atractivo => {
    const coincideBusqueda = atractivo.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                             atractivo.localidad.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaSeleccionada === 'Todos' || atractivo.categoria === categoriaSeleccionada
    return coincideBusqueda && coincideCategoria
  })

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      
      {/* Hero de Altura Fija */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/RioRapel.png" 
            alt="Atractivos Navidad" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Atractivos Turísticos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Explora la belleza natural, la cultura y las tradiciones de nuestra comuna. Encuentra tu próximo destino.
          </p>
        </div>
      </div>

      {/* Contenedor de Búsqueda y Filtros Flotante */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl mb-12 border-t-4 border-brand-gold flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar por nombre o localidad..." 
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-gray-50"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-wrap gap-2 justify-start lg:justify-end">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  categoriaSeleccionada === cat 
                    ? 'bg-brand-dark text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resultados */}
        {atractivosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atractivosFiltrados.map(atractivo => (
              <CardAtractivo key={atractivo.id} atractivo={atractivo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <Compass className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-graytext mb-2">No se encontraron atractivos con esos criterios.</p>
            <button 
              onClick={() => { setBusqueda(''); setCategoriaSeleccionada('Todos'); }}
              className="mt-4 text-brand-teal font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}