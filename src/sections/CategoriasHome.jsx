import { Link } from 'react-router-dom'
import { Waves, Trees, Utensils, Landmark, ArrowRight } from 'lucide-react'

export default function CategoriasHome() {
  const categorias = [
    { title: 'Playas y Costa', imagen: '/img/LaBoca.png', icon: <Waves />, path: '/que-hacer' },
    { title: 'Naturaleza', imagen: '/img/RioRapel.png', icon: <Trees />, path: '/que-hacer' },
    { title: 'Cultura', imagen: '/img/MuseoLicancheu.png', icon: <Landmark />, path: '/descubre-navidad' },
    { title: 'Gastronomía', imagen: '/img/Comida.png', icon: <Utensils />, path: '/servicios-turisticos' },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4">Experiencias <br/><span className="text-brand-teal">Inolvidables</span></h2>
          </div>
          <p className="text-lg text-graytext max-w-md">Elige tu propia aventura. Desde deportes náuticos hasta la tranquilidad de nuestros bosques nativos.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, index) => (
            <Link 
              key={index} 
              to={cat.path}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-md"
            >
              <img 
                src={cat.imagen} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">{cat.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}