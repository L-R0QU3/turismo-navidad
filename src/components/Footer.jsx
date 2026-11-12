export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-600 pb-12">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
             <img src="/img/LogoMuniNavidad.png" alt="Logo Municipalidad" className="h-14 w-auto bg-white rounded-full p-1" />
             <h3 className="text-2xl font-serif font-bold text-white">
              Turismo <span className="text-brand-gold">Navidad</span>
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Portal oficial de la Ilustre Municipalidad de Navidad. Descubre la costa, la naturaleza y la cultura de nuestra comuna.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">Explorar</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Atractivos Turísticos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dónde Alojar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gastronomía</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rutas y Mapas</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Plaza General Bonilla N° 24,<br/>Navidad, O'Higgins</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="mailto:oficina@partes@muninavidad.cl" className="hover:text-white">oficina@partes@muninavidad.cl</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>(56) 72-2344540</span>
            </li>
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">Enlaces Oficiales</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ley del Lobby</a></li>
            <li><a href="https://www.muninavidad.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-brand-gold font-bold">Ir a muninavidad.cl &rarr;</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-8 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ilustre Municipalidad de Navidad. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}