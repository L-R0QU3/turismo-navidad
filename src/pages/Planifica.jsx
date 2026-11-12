import usePageTitle from '../utils/usePageTitle'

export default function Planifica() {
  usePageTitle('Planifica tu Viaje')

  const distancias = [
    { ciudad: "Santiago", km: "160 km", tiempo: "2:20 horas" },
    { ciudad: "Rancagua", km: "95 km", tiempo: "1:40 horas" },
    { ciudad: "San Antonio", km: "74 km", tiempo: "1:20 horas" },
    { ciudad: "Pichilemu", km: "85 km", tiempo: "1:30 horas" },
    { ciudad: "Santa Cruz", km: "106 km", tiempo: "1:50 horas" },
  ]

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Planifica tu Viaje</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Todo lo que necesitas saber para llegar y disfrutar de la Comuna de Navidad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Cómo llegar */}
          <div className="bg-surface p-8 rounded-lg shadow-md border-t-4 border-brand-gold md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-4">¿Cómo llegar a Navidad?</h2>
            <p className="text-graytext mb-6">
              Ubicada en el extremo norponiente de la Región de O'Higgins, es un destino costero de fácil acceso desde Santiago. 
              Te sugerimos tomar la <strong>Autopista del Sol (Ruta 78)</strong> hacia San Antonio, desviarte en la salida a Leyda/Santo Domingo para conectar con la <strong>Ruta G-80</strong> hacia el sur hasta llegar a Rapel, la puerta de entrada a la comuna.
            </p>
            <p className="text-graytext mb-8">
              <strong>Locomoción pública:</strong> Existen servicios directos desde Santiago (Terminal San Borja) y desde San Antonio (Terminal Llolleo).
            </p>

            <h3 className="font-bold text-brand-blue mb-4 uppercase tracking-wider text-sm">Distancias y Tiempos</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-blue text-white">
                    <th className="p-3 font-bold">Ciudad de Origen</th>
                    <th className="p-3 font-bold">Distancia</th>
                    <th className="p-3 font-bold">Tiempo Estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {distancias.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-brand-sand' : 'bg-white'}>
                      <td className="p-3 text-brand-blue font-semibold border-b border-gray-200">{d.ciudad}</td>
                      <td className="p-3 text-graytext border-b border-gray-200">{d.km}</td>
                      <td className="p-3 text-graytext border-b border-gray-200">{d.tiempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recomendaciones / Turismo Responsable */}
          <div className="bg-surface p-8 rounded-lg shadow-md border-t-4 border-brand-teal md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6">Visita Navidad de manera responsable</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-graytext text-sm">
                <li><strong className="text-brand-blue">1. La naturaleza es nuestro tesoro:</strong> Visita sitios naturales de manera responsable. Cuida playas, humedales y bosques.</li>
                <li><strong className="text-brand-blue">2. Respeta los límites de velocidad:</strong> Estás en el campo y la playa. Nuestros caminos no son autopistas.</li>
                <li><strong className="text-brand-blue">3. Hazte cargo de tu basura:</strong> Recicla y ayúdanos a mantener la comuna limpia y sustentable.</li>
              </ul>
              <ul className="space-y-4 text-graytext text-sm">
                <li><strong className="text-brand-blue">4. Apoya la economía local:</strong> Consume servicios que cumplan la normativa y reflejen la identidad de Navidad.</li>
                <li><strong className="text-brand-blue">5. Respeta a la comunidad local:</strong> Estás de visita, respeta las costumbres y tradiciones.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}