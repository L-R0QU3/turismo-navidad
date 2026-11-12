# Turismo Navidad - Portal Turístico Oficial

Sitio web desarrollado para la Ilustre Municipalidad de Navidad, orientado a la promoción turística de la comuna, sus atractivos, servicios y cultura.

## 🚀 Tecnologías Utilizadas
- **React** (Vite)
- **Tailwind CSS** (Diseño y estilos)
- **React Router DOM** (Navegación)
- **Leaflet / React-Leaflet** (Mapa interactivo)
- **PNPM** (Gestor de paquetes)

## 📂 Estructura del Proyecto
- `/src/components`: Componentes reutilizables (Navbar, Footer, Tarjetas).
- `/src/pages`: Vistas principales del sitio.
- `/src/sections`: Secciones específicas del Home.
- `/src/data`: Archivos JS con la información (servicios, atractivos, rutas). **Aquí se debe actualizar el contenido sin tocar el diseño.**
- `/public/img`: Recursos fotográficos oficiales.

## 🛠️ Instalación y Desarrollo
1. Clonar el repositorio.
2. Instalar dependencias: `pnpm install`
3. Iniciar servidor local: `pnpm dev`
4. Compilar para producción: `pnpm build`

## 📝 Notas Importantes
- Los textos marcados con `[PENDIENTE_DE_VALIDACION_MUNICIPAL]` deben ser reemplazados por la información oficial de la Guía Turística 2026 y el PLADETUR.
- Las imágenes utilizadas son de referencia local (`/public/img`). Verificar derechos de autor antes del lanzamiento.
- El mapa utiliza coordenadas aproximadas. Se deben actualizar en `src/pages/MapaTuristico.jsx` con los datos exactos del PDF oficial.