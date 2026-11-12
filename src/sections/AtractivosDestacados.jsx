import { Link } from 'react-router-dom'
import { atractivos } from '../data/atractivos'
import CardAtractivo from '../components/CardAtractivo'

export default function AtractivosDestacados() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-2">
              Nuestros Atractivos
            </h2>
            <p className="text-lg text-graytext">
              Desde playas vírgenes hasta bosques nativos.
            </p>
          </div>
          <Link 
            to="/atractivos" 
            className="mt-4 md:mt-0 text-brand-teal font-bold hover:text-brand-blue flex items-center gap-2 group transition-colors"
          >
            Ver todos los atractivos 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {atractivos.map((atractivo) => (
            <CardAtractivo key={atractivo.id} atractivo={atractivo} />
          ))}
        </div>
      </div>
    </section>
  )
}