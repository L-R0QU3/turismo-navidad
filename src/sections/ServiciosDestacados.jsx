import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../utils/supabase'
import CardServicio from '../components/CardServicio'
import { ArrowRight } from 'lucide-react'

export default function ServiciosDestacados() {
  const [servicios, setServicios] = useState([])

  useEffect(() => {
    async function fetchServicios() {
      const { data } = await supabase
        .from('servicios')
        .select(`*, categorias (nombre)`)
        .limit(3)
      
      if (data) {
        const formateados = data.map(s => ({
          ...s,
          categoria: s.categorias?.nombre || 'General'
        }))
        setServicios(formateados)
      }
    }
    fetchServicios()
  }, [])

  if (servicios.length === 0) return null

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4">Tu Estadía Perfecta</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <CardServicio key={servicio.id} servicio={servicio} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/servicios-turisticos" className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-teal transition-all shadow-xl hover:-translate-y-1">
            Explorar Directorio Turístico <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}