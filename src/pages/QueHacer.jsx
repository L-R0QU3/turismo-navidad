import { motion } from 'framer-motion'
import { experiencias } from '../data/experiencias'
import { Link } from 'react-router-dom'
import { Waves, Mountain, Anchor, CheckCircle2, CalendarDays, ArrowRight } from 'lucide-react'
import usePageTitle from '../utils/usePageTitle'

export default function QueHacer() {
  usePageTitle('Qué Hacer')

  // Mapeo de íconos según el string del archivo de datos
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Waves': return <Waves className="w-8 h-8" />
      case 'Mountain': return <Mountain className="w-8 h-8" />
      case 'Anchor': return <Anchor className="w-8 h-8" />
      default: return <Waves className="w-8 h-8" />
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/PlayaMatanzas2.png" alt="Aventura en Navidad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block py-1 px-4 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/50 text-brand-gold font-bold text-xs tracking-widest uppercase mb-6">
              Vive la Aventura
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Qué Hacer en Navidad
            </h1>
            <p className="text-xl text-gray-200 font-light leading-relaxed">
              Un destino de turismo aventura y deportivo por excelencia. Desde las mejores olas del Pacífico hasta la tranquilidad de los bosques nativos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. EXPERIENCIAS (Diseño Alternado Tipo Revista) */}
      <section className="py-24 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="space-y-32">
          {experiencias.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Imagen */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-brand-gold translate-x-4 translate-y-4 rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                    <img 
                      src={exp.imagen} 
                      alt={exp.titulo} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 text-brand-teal mb-4">
                    {getIcon(exp.icono)}
                    <span className="font-bold uppercase tracking-widest text-sm">{exp.categoria}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-2 leading-tight">{exp.titulo}</h2>
                  <h3 className="text-xl text-brand-gold font-medium mb-6 italic">{exp.subtitulo}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {exp.descripcion}
                  </p>
                  
                  {/* Lista de actividades */}
                  <div className="bg-brand-sand p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Actividades Destacadas:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exp.actividades.map((act, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" /> {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 3. EVENTOS DESTACADOS (Extraído de la Guía) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/Foto8.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/20 pb-8"
          >
            <div>
              <div className="flex items-center gap-3 text-brand-gold mb-4">
                <CalendarDays className="w-8 h-8" />
                <span className="font-bold uppercase tracking-widest text-sm">Panoramas todo el año</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Eventos y Festivales</h2>
            </div>
            <p className="text-gray-400 max-w-md">Desde competencias internacionales de surf hasta fiestas costumbristas y gastronómicas.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Chile World Cup Matanzas", tipo: "Deporte", img: "/img/PlayaMatanzas1.png", desc: "Competencia internacional de deportes náuticos." },
              { title: "Fiesta del Piure Asado", tipo: "Gastronomía", img: "/img/Comida.png", desc: "Tradicional fiesta en la caleta de Matanzas." },
              { title: "Gran Fondo Matanzas", tipo: "Ciclismo", img: "/img/Rapel2.jpg", desc: "Competencia de ciclismo por los paisajes de la comuna." }
            ].map((evento, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="h-48 overflow-hidden relative">
                  <img src={evento.img} alt={evento.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {evento.tipo}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2">{evento.title}</h3>
                  <p className="text-gray-400 text-sm">{evento.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/actualidad" className="inline-flex items-center gap-2 text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors font-bold uppercase tracking-wider text-sm">
              Ver calendario completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}