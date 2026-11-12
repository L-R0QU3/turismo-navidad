import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Páginas
import Home from './pages/Home'
import DescubreNavidad from './pages/DescubreNavidad'
import QueHacer from './pages/QueHacer'
import Atractivos from './pages/Atractivos'
import AtractivoDetalle from './pages/AtractivoDetalle'
import Servicios from './pages/Servicios'
import Rutas from './pages/Rutas'
import MapaTuristico from './pages/MapaTuristico'
import Planifica from './pages/Planifica'
import Galeria from './pages/Galeria'
import Actualidad from './pages/Actualidad'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/descubre-navidad" element={<DescubreNavidad />} />
        <Route path="/que-hacer" element={<QueHacer />} />
        <Route path="/atractivos" element={<Atractivos />} />
        <Route path="/atractivos/:id" element={<AtractivoDetalle />} />
        <Route path="/servicios-turisticos" element={<Servicios />} />
        <Route path="/rutas-turisticas" element={<Rutas />} />
        <Route path="/mapa-turistico" element={<MapaTuristico />} />
        <Route path="/planifica-tu-viaje" element={<Planifica />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/actualidad" element={<Actualidad />} />
        
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App