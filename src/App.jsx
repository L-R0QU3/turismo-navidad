import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Páginas Públicas
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

// Páginas de Administración (No llevan MainLayout para que no tengan el Navbar público)
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS (Con Navbar y Footer) */}
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
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* RUTAS DE ADMINISTRACIÓN (Pantalla completa, sin Navbar público) */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  )
}

export default App