import { Link } from 'react-router-dom'
import { atractivos } from '../data/atractivos'
import CardAtractivo from '../components/CardAtractivo'
import { ArrowRight } from 'lucide-react'

export default function AtractivosDestacados() {
  return (
    <section className="py-32 bg-brand-sand">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4">Destinos <br/>Imperdibles</h2>
            <p className="text-lg text-graytext max-w-xl">Explora los paisajes que hacen de Navidad un lugar único en el litoral chileno.</p>
          </div>
          <Link 
            to="/atractivos" 
            className="group flex items-center gap-3 text-brand-dark font-bold uppercase tracking-widest text-sm hover:text-brand-teal transition-colors"
          >
            Ver Catálogo Completo
            <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atractivos.slice(0, 3).map((atractivo) => (
            <CardAtractivo key={atractivo.id} atractivo={atractivo} />
          ))}
        </div>
      </div>
    </section>
  )
}