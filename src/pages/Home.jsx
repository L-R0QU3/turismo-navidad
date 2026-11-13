import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, Leaf, ShieldCheck, Heart } from 'lucide-react'
import CategoriasHome from '../sections/CategoriasHome'
import AtractivosDestacados from '../sections/AtractivosDestacados'
import ServiciosDestacados from '../sections/ServiciosDestacados'
import usePageTitle from '../utils/usePageTitle'

export default function Home() {
  usePageTitle('Inicio')

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="w-full bg-brand-sand">
      {/* Hero a pantalla completa */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/PlayaMatanzas1.png" alt="Navidad" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center mt-24">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-5xl mx-auto">
            
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-[0.2em] uppercase mb-8">
              <Compass className="w-4 h-4 text-brand-gold" /> Descubre el Litoral Central
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl">
              Navidad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Comuna de Paisajes.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Donde el río Rapel se encuentra con el Pacífico. Vive la aventura, la tradición y la calidez de nuestra gente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/atractivos" className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(192,148,44,0.3)] flex items-center justify-center gap-3 group">
                Explorar Destinos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/planifica-tu-viaje" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3">
                Planifica tu Viaje
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <CategoriasHome />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <AtractivosDestacados />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <ServiciosDestacados />
      </motion.div>

      {/* Sección Turismo Responsable */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/RioRapel3.png')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Compromiso con el Territorio</h2>
            <p className="text-xl text-gray-400 font-light">La naturaleza es nuestro principal tesoro. Visita Navidad siendo parte de la solución.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8" />, title: "Cuida el Entorno", text: "Hazte cargo de tu basura, recicla y respeta los límites de velocidad en caminos rurales." },
              { icon: <Heart className="w-8 h-8" />, title: "Apoya lo Local", text: "Prefiere servicios que cumplan la normativa y reflejen la identidad de nuestra comuna." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Respeta la Comunidad", text: "Estás de visita. Respeta las costumbres, tradiciones y el orden de nuestros vecinos." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                <div className="text-brand-gold mb-6">{item.icon}</div>
                <h3 className="font-bold text-2xl mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}