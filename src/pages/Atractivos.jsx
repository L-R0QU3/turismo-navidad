import { useState } from 'react'
import { atractivos } from '../data/atractivos'
import CardAtractivo from '../components/CardAtractivo'
import usePageTitle from '../utils/usePageTitle' // <-- SEO

export default function Atractivos() {
  usePageTitle('Atractivos Turísticos') // <-- SEO
  
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
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Atractivos Turísticos</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explora la belleza natural, la cultura y las tradiciones de nuestra comuna.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="bg-surface p-6 rounded-lg shadow-md mb-12 flex flex-col md:flex-row gap-4 justify-between items-center border-t-4 border-brand-teal">
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Buscar por nombre o localidad..." 
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-brand-teal"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-end">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-4 py-2 rounded text-sm font-bold transition-colors ${
                  categoriaSeleccionada === cat 
                    ? 'bg-brand-teal text-white' 
                    : 'bg-gray-100 text-brand-blue hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {atractivosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atractivosFiltrados.map(atractivo => (
              <CardAtractivo key={atractivo.id} atractivo={atractivo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-graytext">No se encontraron atractivos con esos criterios.</p>
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