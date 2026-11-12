import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Parche para que los iconos de Leaflet funcionen en React/Vite
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

export default function MapaTuristico() {
  // Coordenadas aproximadas de algunos puntos de interés en Navidad
  // (Reemplazar con las coordenadas exactas del PDF cuando las tengas)
  const puntosInteres = [
    { id: 1, nombre: "Playa Matanzas", posicion: [-33.9618, -71.8583], categoria: "Playa" },
    { id: 2, nombre: "La Boca (Desembocadura Rapel)", posicion: [-33.8982, -71.8315], categoria: "Naturaleza" },
    { id: 3, nombre: "Puertecillo", posicion: [-33.9821, -71.8730], categoria: "Surf" },
    { id: 4, nombre: "Centro de Navidad", posicion: [-33.9500, -71.8300], categoria: "Comuna" }
  ]

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      {/* Cabecera */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Mapa Turístico</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ubica los principales atractivos y localidades de la comuna. 
            <br/><span className="text-sm italic text-brand-gold">*Mapa de referencia. Coordenadas exactas pendientes de validación municipal.</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="bg-surface p-4 rounded-lg shadow-lg border-t-4 border-brand-teal overflow-hidden">
          {/* Contenedor del Mapa */}
          <div className="h-[600px] w-full rounded-md overflow-hidden relative z-0">
            <MapContainer 
              center={[-33.95, -71.85]} // Centro aproximado de Navidad
              zoom={12} 
              scrollWheelZoom={true} 
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {puntosInteres.map(punto => (
                <Marker key={punto.id} position={punto.posicion}>
                  <Popup>
                    <div className="text-center">
                      <strong className="text-brand-blue text-lg block mb-1">{punto.nombre}</strong>
                      <span className="text-xs bg-brand-sand text-brand-blue px-2 py-1 rounded">{punto.categoria}</span>
                      <p className="text-xs text-gray-500 mt-2">Coordenadas pendientes de validación.</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}