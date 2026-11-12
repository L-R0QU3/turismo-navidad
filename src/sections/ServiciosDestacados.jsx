import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import CardServicio from '../components/CardServicio'

export default function ServiciosDestacados() {
  const serviciosHome = servicios.slice(0, 3)

  return (
    <section className="py-20 bg-brand-sand">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">
            Servicios Turísticos
          </h2>
          <p className="text-lg text-graytext max-w-2xl mx-auto">
            Encuentra alojamiento, gastronomía y actividades para complementar tu viaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosHome.map((servicio) => (
            <CardServicio key={servicio.id} servicio={servicio} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/servicios-turisticos" 
            className="inline-block bg-brand-blue text-white px-8 py-3 rounded font-bold hover:bg-brand-teal transition-colors"
          >
            Ver directorio completo
          </Link>
        </div>
      </div>
    </section>
  )
}