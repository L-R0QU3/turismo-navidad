import { rutas } from '../data/rutas'

export default function Rutas() {
  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      {/* Cabecera */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Rutas Turísticas</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Recorridos diseñados para que no te pierdas lo mejor de nuestra comuna.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8 max-w-4xl">
        <div className="space-y-12">
          {rutas.map((ruta) => (
            <div key={ruta.id} className="bg-surface rounded-lg shadow-lg overflow-hidden border-t-4 border-brand-teal">
              <div className="h-64 w-full">
                <img src={ruta.imagen} alt={ruta.nombre} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-2">{ruta.nombre}</h2>
                <p className="text-sm text-brand-gold font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Duración sugerida: {ruta.duracion}
                </p>
                <p className="text-graytext mb-6">{ruta.descripcion}</p>
                
                <h3 className="font-bold text-brand-blue mb-3 uppercase text-sm tracking-wider">Paradas sugeridas:</h3>
                <ul className="flex flex-wrap gap-2">
                  {ruta.paradas.map((parada, index) => (
                    <li key={index} className="bg-brand-sand text-brand-blue px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                      {index + 1}. {parada}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8 italic">* Las rutas son sugerencias de referencia. Los tiempos de viaje dependen del transporte utilizado.</p>
      </div>
    </div>
  )
}