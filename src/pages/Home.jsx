import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Leaf, ShieldCheck, Heart } from 'lucide-react'
import CategoriasHome from '../sections/CategoriasHome'
import AtractivosDestacados from '../sections/AtractivosDestacados'
import ServiciosDestacados from '../sections/ServiciosDestacados'
import usePageTitle from '../utils/usePageTitle'

export default function Home() {
  usePageTitle('Inicio')

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="w-full">
      {/* Hero a pantalla completa */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Imagen de fondo principal */}
          <img src="/img/PlayaMatanzas1.png" alt="Paisaje de Navidad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/70 via-brand-blue/40 to-brand-blue/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/50 text-brand-gold font-bold text-sm tracking-widest uppercase mb-6">
              Ilustre Municipalidad de Navidad
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
              Descubre la magia de nuestra costa.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              Un destino único que equilibra la aventura, la tradición y servicios turísticos de primer nivel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/atractivos" className="bg-brand-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-blue transition-all shadow-[0_0_20px_rgba(0,138,158,0.4)] flex items-center justify-center gap-2 group">
                Explorar Atractivos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/planifica-tu-viaje" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-blue transition-all flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Cómo llegar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secciones animadas */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <CategoriasHome />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <AtractivosDestacados />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <ServiciosDestacados />
      </motion.div>

      {/* Nueva Sección: Turismo Responsable */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/RioRapel3.png')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Visita Navidad de manera responsable</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">La naturaleza es nuestro principal tesoro. Ayúdanos a cuidarla.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors">
              <Leaf className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Cuida el Entorno</h3>
              <p className="text-sm text-gray-300">Hazte cargo de tu basura, recicla y respeta los límites de velocidad. Nuestros caminos son rurales.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors">
              <Heart className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Apoya lo Local</h3>
              <p className="text-sm text-gray-300">Prefiere y consume servicios que cumplan la normativa vigente y reflejen la identidad de Navidad.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors">
              <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Respeta la Comunidad</h3>
              <p className="text-sm text-gray-300">Estás de visita. Respeta las costumbres, tradiciones y el orden establecido por nuestros vecinos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}