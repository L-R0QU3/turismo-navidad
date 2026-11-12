import { Link } from 'react-router-dom'
import { Waves, Trees, Utensils, Landmark } from 'lucide-react'

export default function CategoriasHome() {
  const categorias = [
    { title: 'Playas y Costa', imagen: '/img/LaBoca.png', icon: <Waves />, path: '/que-hacer' },
    { title: 'Naturaleza', imagen: '/img/RioRapel.png', icon: <Trees />, path: '/que-hacer' },
    { title: 'Cultura y Patrimonio', imagen: '/img/MuseoLicancheu.png', icon: <Landmark />, path: '/descubre-navidad' },
    { title: 'Gastronomía Local', imagen: '/img/Comida.png', icon: <Utensils />, path: '/servicios-turisticos' },
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Explora por categoría</h2>
          <p className="text-lg text-graytext max-w-2xl mx-auto">¿Qué te gustaría descubrir hoy en Navidad?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, index) => (
            <Link 
              key={index} 
              to={cat.path}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={cat.imagen} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-brand-gold transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white tracking-wide">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}