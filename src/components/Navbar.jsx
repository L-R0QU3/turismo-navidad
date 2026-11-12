import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para cambiar de transparente a sólido
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'La Comuna', path: '/descubre-navidad' },
    { name: 'Qué Hacer', path: '/que-hacer' },
    { name: 'Servicios', path: '/servicios-turisticos' },
        { name: 'Atractivos', path: '/atractivos' },
    { name: 'Planifica', path: '/planifica-tu-viaje' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2 border-b-4 border-brand-olive' : 'bg-gradient-to-b from-brand-blue/80 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- NUEVO LOGO MEJORADO --- */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Oficial en un contenedor circular elegante */}
          <div className={`p-1.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-brand-sand' : 'bg-white/90 backdrop-blur-sm shadow-lg'}`}>
            <img 
              src="/img/LogoMuniNavidad.png" 
              alt="Logo Municipalidad" 
              className="h-10 w-10 object-contain rounded-full"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          
          {/* Logotipo Tipográfico */}
          <div className="flex flex-col justify-center border-l-2 pl-3 border-white/30 transition-colors duration-300 group-hover:border-brand-gold">
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase leading-tight ${scrolled ? 'text-brand-teal' : 'text-brand-gold'}`}>
              Ilustre Municipalidad
            </span>
            <span className={`text-2xl font-serif font-bold leading-tight tracking-wide ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
              Turismo Navidad
            </span>
          </div>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => 
                `relative text-sm font-bold transition-colors duration-300 uppercase tracking-wider py-2 group ${
                  isActive 
                    ? 'text-brand-gold' 
                    : scrolled ? 'text-brand-blue hover:text-brand-teal' : 'text-white hover:text-brand-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Línea animada inferior */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100 bg-brand-gold' : 'scale-x-0 group-hover:scale-x-100 bg-current'}`}></span>
                </>
              )}
            </NavLink>
          ))}
          
          <Link 
            to="/mapa-turistico" 
            className={`px-5 py-2.5 rounded-full transition-all font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
              scrolled ? 'bg-brand-blue text-white hover:bg-brand-teal' : 'bg-brand-gold text-brand-blue hover:bg-white'
            }`}
          >
            Ver Mapa
          </Link>
        </nav>

        {/* Botón Móvil */}
        <button 
          className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-brand-blue hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Menú Móvil */}
      <div className={`lg:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="px-6 py-4 text-sm font-bold text-brand-blue hover:text-brand-gold hover:bg-brand-sand uppercase border-b border-gray-50 flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="text-brand-gold">&rarr;</span>
            </Link>
          ))}
          <div className="px-6 pt-6 pb-2">
            <Link 
              to="/mapa-turistico" 
              className="block w-full text-center bg-brand-blue text-white px-5 py-4 rounded-lg hover:bg-brand-teal transition-all font-bold text-sm"
              onClick={() => setIsOpen(false)}
            >
              Ver Mapa Turístico
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}