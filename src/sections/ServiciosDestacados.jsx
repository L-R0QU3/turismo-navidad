import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios' // Nota: Si quieres que traiga los de Supabase aquí, cambia esto después.
import CardServicio from '../components/CardServicio'
import { ArrowRight } from 'lucide-react'

export default function ServiciosDestacados() {
  const serviciosHome = servicios.slice(0, 3)

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4">Tu Estadía Perfecta</h2>
          <p className="text-lg text-graytext">Hospedajes con encanto, gastronomía local y experiencias diseñadas para que no quieras irte.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosHome.map((servicio) => (
            <CardServicio key={servicio.id} servicio={servicio} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/servicios-turisticos" 
            className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-teal transition-all shadow-xl hover:-translate-y-1"
          >
            Explorar Directorio Turístico
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}