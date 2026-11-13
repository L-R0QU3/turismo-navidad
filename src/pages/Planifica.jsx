import { motion } from 'framer-motion'
import { experiencias } from '../data/experiencias'
import { Link } from 'react-router-dom'
import { Waves, Mountain, Anchor, CheckCircle2, CalendarDays, ArrowRight, Clock, Car } from 'lucide-react'
import usePageTitle from '../utils/usePageTitle'

export default function Planifica() {
  usePageTitle('Planifica tu Viaje')

  const distancias = [
    { ciudad: "Santiago", km: "160 km", tiempo: "2:20 horas" },
    { ciudad: "Rancagua", km: "95 km", tiempo: "1:40 horas" },
    { ciudad: "San Antonio", km: "74 km", tiempo: "1:20 horas" },
    { ciudad: "Pichilemu", km: "85 km", tiempo: "1:30 horas" },
    { ciudad: "Santa Cruz", km: "106 km", tiempo: "1:50 horas" },
  ]

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Waves': return <Waves className="w-8 h-8" />
      case 'Mountain': return <Mountain className="w-8 h-8" />
      case 'Anchor': return <Anchor className="w-8 h-8" />
      default: return <Waves className="w-8 h-8" />
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/PlayaMatanzas2.png" alt="Planifica tu viaje" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block py-1 px-4 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/50 text-brand-gold font-bold text-xs tracking-widest uppercase mb-6">
              Tu Próxima Aventura
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Planifica tu Visita
            </h1>
            <p className="text-xl text-gray-200 font-light leading-relaxed">
              Todo lo que necesitas saber para disfrutar Navidad: qué hacer, cómo llegar y las mejores recomendaciones para tu viaje.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 1: QUÉ HACER */}
      <section className="py-24 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Qué Hacer en Navidad</h2>
          <p className="text-lg text-graytext">Un destino de turismo aventura por excelencia.</p>
        </div>

        <div className="space-y-32">
          {experiencias.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-brand-gold translate-x-4 translate-y-4 rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                    <img src={exp.imagen} alt={exp.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 text-brand-teal mb-4">
                    {getIcon(exp.icono)}
                    <span className="font-bold uppercase tracking-widest text-sm">{exp.categoria}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-2 leading-tight">{exp.titulo}</h2>
                  <h3 className="text-xl text-brand-gold font-medium mb-6 italic">{exp.subtitulo}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{exp.descripcion}</p>
                  
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

      {/* SECCIÓN 2: EVENTOS */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/Foto8.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/20 pb-8">
            <div>
              <div className="flex items-center gap-3 text-brand-gold mb-4">
                <CalendarDays className="w-8 h-8" />
                <span className="font-bold uppercase tracking-widest text-sm">Panoramas todo el año</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Eventos y Festivales</h2>
            </div>
            <Link to="/actualidad" className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
              Ver calendario completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">{evento.tipo}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2">{evento.title}</h3>
                  <p className="text-gray-400 text-sm">{evento.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CÓMO LLEGAR */}
      <section className="py-24 container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="bg-surface rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-brand-sand p-8 md:p-12 border-b border-gray-200">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-3">
              <Car className="w-8 h-8 text-brand-teal" /> ¿Cómo llegar a Navidad?
            </h2>
            <p className="text-graytext text-lg leading-relaxed">
              Ubicada en el extremo norponiente de la Región de O'Higgins, es un destino costero de fácil acceso. 
              Te sugerimos tomar la <strong>Autopista del Sol (Ruta 78)</strong> hacia San Antonio, desviarte en la salida a Leyda/Santo Domingo para conectar con la <strong>Ruta G-80</strong> hacia el sur hasta llegar a Rapel, la puerta de entrada a la comuna.
            </p>
            <p className="text-graytext mt-4">
              <strong>Locomoción pública:</strong> Existen servicios directos desde Santiago (Terminal San Borja) y desde San Antonio (Terminal Llolleo).
            </p>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="font-bold text-brand-dark mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" /> Distancias y Tiempos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="p-4 font-bold rounded-tl-lg">Ciudad de Origen</th>
                    <th className="p-4 font-bold">Distancia</th>
                    <th className="p-4 font-bold rounded-tr-lg">Tiempo Estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {distancias.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-brand-sand/50' : 'bg-white'}>
                      <td className="p-4 text-brand-dark font-semibold border-b border-gray-100">{d.ciudad}</td>
                      <td className="p-4 text-graytext border-b border-gray-100">{d.km}</td>
                      <td className="p-4 text-graytext border-b border-gray-100">{d.tiempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: RECOMENDACIONES */}
      <section className="py-24 bg-brand-sand">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Visita Responsable</h2>
            <p className="text-lg text-graytext">La naturaleza es nuestro principal tesoro. Ayúdanos a cuidarla.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "1. La naturaleza es nuestro tesoro", text: "Visita sitios naturales de manera responsable. Cuida playas, humedales y bosques." },
              { title: "2. Respeta los límites de velocidad", text: "Estás en el campo y la playa. Nuestros caminos no son autopistas y muchos aún están sin asfaltar." },
              { title: "3. Hazte cargo de tu basura", text: "Queremos una comuna limpia. Recicla y utiliza los puntos de reciclaje disponibles." },
              { title: "4. Apoya la economía local", text: "Consume servicios que cumplan la normativa vigente y reflejen la identidad de Navidad." },
              { title: "5. Respeta a la comunidad local", text: "Estás de visita. Respeta las costumbres, tradiciones y el orden establecido." },
              { title: "6. Disfruta y comparte", text: "Llévate los mejores recuerdos y comparte la magia de nuestra comuna." },
            ].map((rec, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-teal flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">{rec.title}</h3>
                  <p className="text-graytext text-sm leading-relaxed">{rec.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}