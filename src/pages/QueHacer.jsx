import { experiencias } from '../data/experiencias'

export default function QueHacer() {
  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      {/* Cabecera */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Qué Hacer en Navidad</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Desde la aventura en el océano hasta la tranquilidad de nuestros bosques. Encuentra tu experiencia perfecta.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiencias.map((exp) => (
            <div key={exp.id} className="bg-surface rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row group border border-gray-100">
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={exp.imagen} 
                  alt={exp.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">{exp.categoria}</span>
                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-4">{exp.titulo}</h2>
                <p className="text-graytext text-sm leading-relaxed">{exp.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}