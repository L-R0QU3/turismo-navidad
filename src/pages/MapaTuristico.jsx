import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, ImageOverlay } from 'react-leaflet'
import L from 'leaflet'
import usePageTitle from '../utils/usePageTitle'
import { Navigation } from 'lucide-react'

// --- 1. DATOS DE LOS PINES ---
const puntosInteres = [
  { id: 1, nombre: "Playa de Matanzas", categoria: "Playas", posicion: [-33.9618, -71.8583], desc: "Capital del windsurf y kitesurf.", imagen: "/img/PlayaMatanzas1.png" },
  { id: 2, nombre: "La Boca (Estuario Rapel)", categoria: "Naturaleza", posicion: [-33.8982, -71.8315], desc: "Desembocadura del río, ideal para la pesca.", imagen: "/img/LaBoca.png" },
  { id: 3, nombre: "Caleta Puertecillo", categoria: "Playas", posicion: [-33.9821, -71.8730], desc: "Caleta de pescadores famosa por sus olas.", imagen: "/img/PlayaMatanzas2.png" },
  { id: 4, nombre: "Centro de Navidad", categoria: "Cultura", posicion: [-33.9500, -71.8300], desc: "Plaza de Armas y centro cívico.", imagen: "/img/LaBoca2Caleta.JPG" },
  { id: 5, nombre: "Mirador Rucatalca", categoria: "Miradores", posicion: [-33.9550, -71.8250], desc: "Vista panorámica con escultura.", imagen: "/img/LaBocaMirador.png" },
  { id: 6, nombre: "Museo de Licancheu", categoria: "Cultura", posicion: [-33.9200, -71.8100], desc: "Historia y tradiciones locales.", imagen: "/img/MuseoLicancheu.png" },
  { id: 7, nombre: "Laguna El Culenar", categoria: "Naturaleza", posicion: [-33.9700, -71.8000], desc: "Humedal con abundante flora y fauna.", imagen: "/img/Rapel2.jpg" },
]

// --- 2. COMPONENTES AUXILIARES ---
function MapController({ center, zoom }) {
  const map = useMap()
  useEffect(() => {
    if (center) map.flyTo(center, zoom, { duration: 1.5 })
  }, [center, zoom, map])
  return null
}

const createCustomIcon = (categoria) => {
  let colorHex = '#0A1F2C'
  if (categoria === 'Playas') colorHex = '#008A9E'
  if (categoria === 'Naturaleza') colorHex = '#7A8B3C'
  if (categoria === 'Cultura') colorHex = '#C0942C'
  if (categoria === 'Miradores') colorHex = '#4A3B32'

  const pinSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${colorHex}" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-9 h-9 drop-shadow-lg transition-transform hover:scale-110">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="white"></circle>
    </svg>
  `;

  return L.divIcon({
    className: 'bg-transparent border-none',
    html: pinSvg,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  })
}

// --- 3. COMPONENTE PRINCIPAL ---
export default function MapaTuristico() {
  usePageTitle('Mapa Turístico Interactivo')

  const [mapCenter, setMapCenter] = useState([-33.95, -71.85])
  const [mapZoom, setMapZoom] = useState(11) 
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedPlace, setSelectedPlace] = useState(null)

  const puntosFiltrados = puntosInteres.filter(p => activeCategory === 'Todos' || p.categoria === activeCategory)

  const handlePlaceClick = (punto) => {
    setMapCenter(punto.posicion)
    setMapZoom(14)
    setSelectedPlace(punto.id)
  }

  // Coordenadas de la imagen (Esquina superior izquierda y esquina inferior derecha)
  // Si la imagen queda desalineada, ajusta estos valores.
  const boundsImagen = [
    [-34.08, -71.98], // Suroeste (Abajo, Izquierda)
    [-33.82, -71.65]  // Noreste (Arriba, Derecha)
  ]

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      
      {/* HERO */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/LaBoca.png" alt="Mapa Turístico Navidad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">Mapa Turístico</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">Ubica los principales atractivos y localidades de la comuna. Explora nuestro territorio.</p>
        </div>
      </div>

      {/* MAPA */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-brand-teal flex flex-col h-[80vh]">
          
          <div className="bg-white border-b border-gray-100 py-3 px-6 flex flex-wrap gap-3 items-center justify-center shrink-0">
            <span className="text-sm font-bold text-brand-dark uppercase tracking-wider mr-2">Filtrar por:</span>
            {['Todos', 'Playas', 'Naturaleza', 'Cultura', 'Miradores'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat ? 'bg-brand-dark text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
            
            {/* Lista Lateral */}
            <div className="w-full lg:w-1/3 bg-white overflow-y-auto h-1/3 lg:h-full shadow-inner flex flex-col border-r border-gray-100 z-10">
              <div className="p-4 space-y-3">
                {puntosFiltrados.map(punto => (
                  <div 
                    key={punto.id}
                    onClick={() => handlePlaceClick(punto)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 flex gap-4 ${
                      selectedPlace === punto.id ? 'border-brand-teal bg-brand-teal/5 shadow-sm' : 'border-transparent bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <img src={punto.imagen} alt={punto.nombre} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div>
                      <h3 className="font-bold text-brand-dark text-lg leading-tight mb-1">{punto.nombre}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-sand text-brand-dark mb-2 inline-block">{punto.categoria}</span>
                      <div className="flex items-center text-brand-teal text-xs font-bold mt-1">
                        <Navigation className="w-3 h-3 mr-1" /> Ver en mapa
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="w-full lg:w-2/3 h-2/3 lg:h-full relative z-0">
              <MapContainer 
                center={[-33.95, -71.85]} 
                zoom={11} 
                minZoom={10}
                maxBounds={[[-34.15, -72.1], [-33.65, -71.5]]} 
                scrollWheelZoom={true} 
                style={{ height: "100%", width: "100%" }}
                className="z-0"
              >
                {/* Mapa base en blanco y negro */}
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                  className="grayscale-map"
                />
                
                {/* IMAGEN DEL MAPA TEMÁTICO SUPERPUESTA */}
                <ImageOverlay 
                  url="/img/mapa-navidad.png" 
                  bounds={boundsImagen} 
                  opacity={0.9} 
                />

                <MapController center={mapCenter} zoom={mapZoom} />

                {puntosFiltrados.map(punto => (
                  <Marker 
                    key={punto.id} 
                    position={punto.posicion}
                    icon={createCustomIcon(punto.categoria)}
                    eventHandlers={{ click: () => setSelectedPlace(punto.id) }}
                  >
                    <Popup>
                      <div className="w-[220px] overflow-hidden rounded-xl bg-white">
                        <div className="h-32 w-full relative">
                          <img src={punto.imagen} alt={punto.nombre} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <strong className="text-brand-dark text-lg block mb-1 font-serif leading-tight">{punto.nombre}</strong>
                          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{punto.desc}</p>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}