import { motion } from 'framer-motion'
import { BookOpen, MapPin, Anchor, Landmark, Compass, ShieldAlert } from 'lucide-react'
import usePageTitle from '../utils/usePageTitle'

export default function DescubreNavidad() {
  usePageTitle('Historia y Patrimonio')

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="bg-surface">
      {/* Cabecera con imagen de fondo */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/img/Rapel3.jpg" alt="Paisaje de Navidad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-blue/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-6 mt-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              Descubre la Historia de Navidad
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
              Un viaje por el tiempo, desde los primeros misioneros y piratas, hasta la identidad de nuestra querida comuna.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl space-y-24">
        
        {/* 1. TERRITORIO */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-brand-teal" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue">El Territorio</h2>
            </div>
            <div className="space-y-4 text-graytext leading-relaxed">
              <p>
                El <strong>14 de agosto de 1867</strong>, el actual territorio se definió por primera vez como Subdelegación N.º 15 del Departamento de San Fernando, antigua provincia de Colchagua.
              </p>
              <p>
                El 22 de diciembre de 1891, el presidente Jorge Montt crea la comuna de <strong>Matanzas</strong>. Sin embargo, el 28 de septiembre de 1936 se restaura la comuna, esta vez con la denominación de <strong>Navidad</strong>, localidad que había sido cabecera comunal de la antigua Matanzas.
              </p>
              <p>
                Finalmente, por decreto de octubre de 1979, la comuna de Navidad pasa a pertenecer a la provincia Cardenal Caro, en la Región del Libertador General Bernardo O'Higgins.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="/img/NavidadPlaza.jpg" alt="Localidad de Navidad" className="rounded-xl shadow-2xl object-cover h-[400px] w-full" />
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-blue p-6 rounded-xl shadow-lg hidden md:block max-w-[200px]">
              <p className="font-serif font-bold text-lg leading-tight">Una comuna con historia desde 1867.</p>
            </div>
          </div>
        </motion.section>

        {/* 2. TOPONIMIA (Origen del Nombre) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-brand-sand rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <BookOpen className="w-64 h-64 text-brand-blue" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-6">¿Por qué se llama Navidad?</h2>
            <div className="space-y-4 text-graytext leading-relaxed">
              <p>
                La tradición oral nos cuenta que a mediados del siglo XVI llegaron al Puerto de Matanzas los primeros religiosos franciscanos, justo en vísperas de la Navidad. Pernoctaron por algunos días y celebraron el nacimiento del niño Jesús representándolo en un pesebre. Por la hermosura del lugar y la gran devoción mostrada, este lugar se denominó <strong>"Valle de Navidad"</strong>.
              </p>
              <p>
                Años más tarde, en 1619, los jesuitas también dejaron su huella. Instruyeron a los lugareños en las letras y oficios, destacando la fabricación de tinajas y ollas de greda, una tradición que perduró en el tiempo.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. HECHOS HISTÓRICOS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Anchor className="w-10 h-10 text-brand-teal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue">Hechos que marcaron la historia</h2>
            <p className="text-graytext mt-2 max-w-2xl mx-auto">Desde el paso de la sal hasta batallas y piratas, Navidad ha sido testigo de grandes acontecimientos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-xl shadow-md border-t-4 border-brand-olive">
              <h3 className="text-xl font-bold text-brand-blue mb-3">El Camino de la Sal y los Piratas</h3>
              <p className="text-sm text-graytext leading-relaxed mb-4">
                En el siglo XVIII, la zona formaba parte del "camino costino o de la sal". Años más tarde, Matanzas fue invadido por piratas que vencieron a la flota española anclada en el puerto. Se dice que aún quedan vestigios de barcos hundidos frente a Lagunillas.
              </p>
            </div>
            
            <div className="bg-surface p-8 rounded-xl shadow-md border-t-4 border-brand-blue">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Guerras y Personajes Ilustres</h3>
              <p className="text-sm text-graytext leading-relaxed mb-4">
                Tras la Batalla de Maipú, el ejército realista huyó pasando por Navidad. En la comuna también nació el bisabuelo de la Presidenta Michelle Bachelet y el primer ingeniero agrónomo de Chile, Máximo Jeria. 
              </p>
            </div>

            <div className="bg-surface p-8 rounded-xl shadow-md border-t-4 border-brand-gold md:col-span-2">
              <h3 className="text-xl font-bold text-brand-blue mb-3">El Escándalo de Topocalma</h3>
              <p className="text-sm text-graytext leading-relaxed">
                En la vecina localidad de Topocalma ocurrieron dos hechos de gran conmoción en el siglo XIX. El primero fue el asalto a la embarcación HMS Scorpion, en el que se vieron involucradas autoridades de la época, incluyendo al último Gobernador español. El segundo fue la captura de Vicente Benavides, un chileno que luchó contra los patriotas tras ser perdonado por José de San Martín.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 4. MITOS Y LEYENDAS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <img src="/img/LaCueva.png" alt="Cueva del Chivato" className="rounded-xl shadow-2xl object-cover h-[400px] w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
              <p className="text-white font-bold text-lg flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-gold" /> La Cueva del Chivato, Puertecillo.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-8 h-8 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue">El Tesoro de Benavides</h2>
            </div>
            <p className="text-graytext leading-relaxed mb-4">
              Cuenta la leyenda que en el sector de <strong>Paso del Soldado</strong>, un soldado leal a Vicente Benavides fue herido y cuidado por un matrimonio de ancianos. Al sanar, desapareció sin aviso.
            </p>
            <p className="text-graytext leading-relaxed mb-4">
              Antes de irse, les confesó que en un lugar donde se unen tres cerros, estaba enterrado un riquísimo tesoro perteneciente a Benavides. 
            </p>
            <div className="bg-brand-blue text-white p-6 rounded-lg italic border-l-4 border-brand-gold">
              "Todavía hay quienes buscan el tesoro. Aparentemente se encuentra en una caverna en Puertecillo llamada La Cueva del Chivato."
            </div>
          </div>
        </motion.section>

        {/* Cita Histórica */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-4xl mx-auto border-t border-gray-200 pt-16">
          <Landmark className="w-10 h-10 text-gray-300 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-serif text-brand-blue italic leading-relaxed">
            "Navidad... Aldea del departamento de San Fernando que yace inmediata á la banda sur de la boca del río Rapel y junto á la costa del Pacífico... Contiene 579 habitantes, escuela gratuita, correo y una pequeña iglesia."
          </blockquote>
          <p className="mt-4 text-brand-gold font-bold uppercase tracking-widest text-sm">
            — Francisco Astaburoaga, Diccionario Geográfico (1899)
          </p>
        </motion.section>

      </div>
    </div>
  )
}