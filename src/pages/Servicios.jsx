import { useState } from 'react'
import { servicios } from '../data/servicios'
import CardServicio from '../components/CardServicio'

export default function Servicios() {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Todas')

  // Extraer categorías y localidades únicas
  const categorias = ['Todas', ...new Set(servicios.map(s => s.categoria))]
  const localidades = ['Todas', ...new Set(servicios.map(s => s.localidad))]

  // Lógica de filtrado
  const serviciosFiltrados = servicios.filter(servicio => {
    const coincideBusqueda = servicio.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaSeleccionada === 'Todas' || servicio.categoria === categoriaSeleccionada
    const coincideLocalidad = localidadSeleccionada === 'Todas' || servicio.localidad === localidadSeleccionada
    return coincideBusqueda && coincideCategoria && coincideLocalidad
  })

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      {/* Cabecera */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Servicios Turísticos</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Encuentra alojamiento, gastronomía y actividades para complementar tu viaje por Navidad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        {/* Panel de Filtros */}
        <div className="bg-surface p-6 rounded-lg shadow-md mb-12 border-t-4 border-brand-olive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Buscador */}
            <div>
              <label className="block text-sm font-bold text-brand-blue mb-2">Buscar por nombre</label>
              <input 
                type="text" 
                placeholder="Ej: Cabañas, Hotel, Kayak..." 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-teal"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {/* Filtro Categoría */}
            <div>
              <label className="block text-sm font-bold text-brand-blue mb-2">Categoría</label>
              <select 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-teal bg-white"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              >
                {categorias.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Filtro Localidad */}
            <div>
              <label className="block text-sm font-bold text-brand-blue mb-2">Localidad</label>
              <select 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-teal bg-white"
                value={localidadSeleccionada}
                onChange={(e) => setLocalidadSeleccionada(e.target.value)}
              >
                {localidades.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Botón para limpiar filtros */}
          {(busqueda || categoriaSeleccionada !== 'Todas' || localidadSeleccionada !== 'Todas') && (
            <div className="mt-4 text-right">
              <button 
                onClick={() => { setBusqueda(''); setCategoriaSeleccionada('Todas'); setLocalidadSeleccionada('Todas'); }}
                className="text-sm text-brand-teal font-bold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        {/* Resultados */}
        {serviciosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosFiltrados.map(servicio => (
              <CardServicio key={servicio.id} servicio={servicio} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-lg shadow-sm">
            <p className="text-xl text-graytext mb-2">No se encontraron servicios con esos criterios.</p>
            <p className="text-sm text-gray-500">Intenta buscando con otras palabras o cambiando los filtros.</p>
          </div>
        )}
      </div>
    </div>
  )
}