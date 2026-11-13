import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import CardServicio from '../components/CardServicio'
import usePageTitle from '../utils/usePageTitle'

export default function Servicios() {
  usePageTitle('Servicios Turísticos')

  const [servicios, setServicios] = useState([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Todas')

  useEffect(() => {
    async function fetchServicios() {
      setLoading(true)
      // Hacemos la consulta a Supabase, uniendo la tabla categorias para obtener el nombre
      const { data, error } = await supabase
        .from('servicios')
        .select(`
          *,
          categorias (nombre)
        `)
        .order('created_at', { ascending: false }) // Los más nuevos primero
      
      if (error) {
        console.error('Error cargando servicios:', error)
      } else {
        // Adaptamos los datos al formato que espera tu componente CardServicio
        const serviciosFormateados = data.map(s => ({
          ...s,
          categoria: s.categorias?.nombre || 'General'
        }))
        setServicios(serviciosFormateados)
      }
      setLoading(false)
    }
    fetchServicios()
  }, [])

  // Extraer categorías y localidades únicas
  const categorias = ['Todas', ...new Set(servicios.map(s => s.categoria))]
  const localidades = ['Todas', ...new Set(servicios.map(s => s.localidad))]

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
            <div>
              <label className="block text-sm font-bold text-brand-blue mb-2">Categoría</label>
              <select 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-teal bg-white"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              >
                {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-blue mb-2">Localidad</label>
              <select 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-teal bg-white"
                value={localidadSeleccionada}
                onChange={(e) => setLocalidadSeleccionada(e.target.value)}
              >
                {localidades.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        {loading ? (
          <div className="text-center py-20 text-brand-blue text-xl font-bold">Cargando servicios...</div>
        ) : serviciosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosFiltrados.map(servicio => (
              <CardServicio key={servicio.id} servicio={servicio} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-lg shadow-sm">
            <p className="text-xl text-graytext mb-2">No se encontraron servicios con esos criterios.</p>
          </div>
        )}
      </div>
    </div>
  )
}