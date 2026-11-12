export default function Galeria() {
  // Agregamos las imágenes de tu carpeta public/img
  const imagenes = [
    "/img/Foto1.png", "/img/Foto2.png", "/img/Foto3.png", 
    "/img/Foto4.png", "/img/Foto5.JPG", "/img/foto6.png", 
    "/img/Foto7.png", "/img/Foto8.png", "/img/Foto9.png",
    "/img/Foto10.png", "/img/Foto11.png", "/img/Foto12.png",
    "/img/Foto13.png", "/img/Foto14.png", "/img/Foto15.jpg",
    "/img/Foto16.jpg", "/img/Foto17.jpg"
  ]

  return (
    <div className="bg-brand-sand min-h-screen pb-20">
      <div className="bg-brand-blue text-white py-16 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galería Fotográfica</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Imágenes de los paisajes, playas y cultura de Navidad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {imagenes.map((img, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src={img} 
                alt={`Fotografía de Navidad ${index + 1}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none' }} // Oculta la imagen si no se encuentra
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}