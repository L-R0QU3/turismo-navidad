import usePageTitle from '../utils/usePageTitle'

export default function Actualidad() {
  usePageTitle('Actualidad y Eventos')

  const eventos = [
    {
      titulo: "Chile World Cup Matanzas",
      fecha: "Marzo - Abril",
      descripcion: "Competencia internacional de deportes náuticos que reúne a los mejores exponentes mundiales en las olas de Matanzas.",
      imagen: "/img/Foto8.png"
    },
    {
      titulo: "Expo Navidad",
      fecha: "Octubre",
      descripcion: "Feria costumbrista y gastronómica en la Plaza de Armas. Actividad impulsada por el Gobierno Regional y el municipio.",
      imagen: "/img/Foto9.png"
    },
    {
      titulo: "Gran Fondo Matanzas",
      fecha: "Fecha por confirmar",
      descripcion: "Competencia de ciclismo con rutas de 45, 80 y 120 km, recorriendo los hermosos paisajes de la comuna.",
      imagen: "/img/Foto10.png"
    },
    {
      titulo: "Fiesta del Piure Asado",
      fecha: "Agosto",
      descripcion: "Tradicional fiesta en el sector caleta de Matanzas para disfrutar de la gastronomía local y apoyar a los pescadores.",
      imagen: "/img/Foto11.png"
    }
  ]

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Actualidad y Eventos</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¡En Navidad, panoramas todo el año! Desde fiestas típicas hasta competencias deportivas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventos.map((evento, index) => (
            <div key={index} className="bg-surface rounded-lg shadow-md overflow-hidden flex flex-col group border-t-4 border-brand-gold">
              <div className="h-56 overflow-hidden">
                <img 
                  src={evento.imagen} 
                  alt={evento.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-brand-teal font-bold text-sm uppercase tracking-wider">{evento.fecha}</span>
                <h2 className="text-2xl font-serif font-bold text-brand-blue mt-1 mb-3">{evento.titulo}</h2>
                <p className="text-graytext text-sm">{evento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}