import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Turismo <span className="text-brand-gold">Navidad</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-8">
              Portal oficial de la Ilustre Municipalidad de Navidad. Un destino donde la naturaleza, el mar y la cultura se encuentran.
            </p>
            <div className="flex items-center gap-4">
              <img src="/img/LogoMuniNavidad.png" alt="Logo" className="h-12 w-auto bg-white/10 p-2 rounded-full backdrop-blur-sm" />
              <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Comuna de Paisajes</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-widest text-xs">Descubre</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/atractivos" className="hover:text-white transition-colors">Atractivos Turísticos</Link></li>
              <li><Link to="/servicios-turisticos" className="hover:text-white transition-colors">Dónde Alojar</Link></li>
              <li><Link to="/que-hacer" className="hover:text-white transition-colors">Actividades</Link></li>
              <li><Link to="/rutas-turisticas" className="hover:text-white transition-colors">Rutas y Mapas</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
                <span>Plaza General Bonilla N° 24,<br/>Navidad, O'Higgins</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="mailto:oficina@partes@muninavidad.cl" className="hover:text-white">oficina@partes@muninavidad.cl</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <span>(56) 72-2344540</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Ilustre Municipalidad de Navidad.</p>
          <div className="flex gap-6">
            <a href="https://www.muninavidad.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold flex items-center gap-1 transition-colors">
              Sitio Municipal Oficial <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}