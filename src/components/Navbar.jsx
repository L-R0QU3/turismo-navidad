import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'La Comuna', path: '/descubre-navidad' },
    { name: 'Atractivos', path: '/atractivos' },
    { name: 'Servicios', path: '/servicios-turisticos' },
    { name: 'Planifica tu Viaje', path: '/planifica-tu-viaje' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* LOGO DESTACADO */}
        <Link to="/" className="flex items-center gap-4 group">
          
          {/* Círculo blanco sólido para resaltar el logo */}
          <div className={`p-1 rounded-full transition-all duration-500 shadow-lg ${
            scrolled ? 'bg-white border border-gray-100' : 'bg-white/95'
          }`}>
            <img 
              src="/img/LogoMuniNavidad.png" 
              alt="Logo Municipalidad" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-500 group-hover:scale-110" 
            />
          </div>

          {/* Textos con sombra para legibilidad */}
          <div className={`flex flex-col border-l-2 pl-4 transition-colors duration-500 ${
            scrolled ? 'border-brand-gold' : 'border-white/70'
          }`}>
            <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase ${
              scrolled ? 'text-brand-blue' : 'text-brand-gold drop-shadow-md'
            }`}>
              Ilustre Municipalidad
            </span>
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-wide leading-none ${
              scrolled ? 'text-brand-dark' : 'text-white drop-shadow-lg'
            }`}>
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
                `relative text-sm font-bold transition-colors duration-300 uppercase tracking-widest py-2 group ${
                  isActive 
                    ? 'text-brand-gold' 
                    : scrolled ? 'text-brand-dark hover:text-brand-teal' : 'text-white hover:text-brand-gold drop-shadow-md'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100 bg-brand-gold' : 'scale-x-0 group-hover:scale-x-100 bg-current'}`}></span>
                </>
              )}
            </NavLink>
          ))}
          
          <Link 
            to="/mapa-turistico" 
            className={`px-6 py-2.5 rounded-full transition-all font-bold text-sm tracking-wide shadow-xl hover:-translate-y-0.5 ${
              scrolled ? 'bg-brand-blue text-white hover:bg-brand-teal' : 'bg-brand-gold text-brand-dark hover:bg-white'
            }`}
          >
            Ver Mapa
          </Link>
        </nav>

        {/* Botón Móvil */}
        <button 
          className={`lg:hidden p-2 rounded-full transition-colors ${
            scrolled ? 'text-brand-dark bg-gray-100' : 'text-white bg-white/20 backdrop-blur-md shadow-md'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú Móvil */}
      <div className={`lg:hidden absolute w-full bg-white shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <nav className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="py-4 text-sm font-bold text-brand-dark hover:text-brand-gold uppercase tracking-widest border-b border-gray-100 flex justify-between items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="text-brand-gold opacity-50">&rarr;</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}