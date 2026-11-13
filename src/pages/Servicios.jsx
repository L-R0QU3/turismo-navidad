import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import CardServicio from '../components/CardServicio'
import usePageTitle from '../utils/usePageTitle'
import { Search, Filter } from 'lucide-react'

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
      const { data, error } = await supabase
        .from('servicios')
        .select(`*, categorias (nombre)`)
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('Error cargando servicios:', error)
      } else {
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
      
      {/* Hero de Altura Fija (Igual al resto de páginas) */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/PlayaMatanzas1.png" 
            alt="Servicios Navidad" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Servicios Turísticos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Encuentra alojamiento, gastronomía y actividades para complementar tu viaje por Navidad.
          </p>
        </div>
      </div>

      {/* Contenedor de Filtros Flotantes */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl mb-12 border-t-4 border-brand-teal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-wider">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Ej: Cabañas, Hotel..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-gray-50"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-wider">Categoría</label>
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-gray-50 appearance-none"
                  value={categoriaSeleccionada}
                  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                >
                  {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-wider">Localidad</label>
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-gray-50 appearance-none"
                  value={localidadSeleccionada}
                  onChange={(e) => setLocalidadSeleccionada(e.target.value)}
                >
                  {localidades.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        {loading ? (
          <div className="text-center py-20 text-brand-dark text-xl font-bold animate-pulse">Cargando servicios...</div>
        ) : serviciosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosFiltrados.map(servicio => (
              <CardServicio key={servicio.id} servicio={servicio} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <p className="text-xl text-graytext mb-2">No se encontraron servicios con esos criterios.</p>
            <button 
              onClick={() => { setBusqueda(''); setCategoriaSeleccionada('Todas'); setLocalidadSeleccionada('Todas'); }}
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