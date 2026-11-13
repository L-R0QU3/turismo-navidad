# Turismo Navidad - Portal Turístico y Panel de Administración

Este proyecto es el portal turístico digital oficial para la **Ilustre Municipalidad de Navidad**. Consiste en un sitio web público orientado a promocionar los atractivos y servicios de la comuna, junto con un **Panel de Administración privado** que permite gestionar dinámicamente los servicios turísticos en tiempo real.

## 🚀 Características Principales

### Sitio Público (Frontend)
*   **Diseño Moderno y Responsivo**: Interfaz visualmente atractiva adaptada a dispositivos móviles, utilizando la tipografía oficial (Barlow) y la paleta de colores institucional.
*   **Catálogo de Servicios Dinámico**: Los servicios turísticos (alojamientos, gastronomía, etc.) se cargan en tiempo real desde la base de datos.
*   **Filtros Avanzados**: Búsqueda por nombre, categoría y localidad.
*   **Historia y Patrimonio**: Sección editorial que relata la historia de la comuna, sus mitos y leyendas.
*   **Mapa Interactivo**: Integración con Leaflet para visualizar los puntos de interés.
*   **Animaciones Fluidas**: Uso de `framer-motion` para transiciones y efectos al hacer scroll.
*   **Optimización SEO**: Títulos dinámicos por página y estructura semántica.

### Panel de Administración (Backend / Admin)
*   **Autenticación Segura**: Acceso restringido mediante correo y contraseña a través de Supabase Auth.
*   **CRUD Completo de Servicios**: Permite Crear, Leer, Actualizar y Eliminar servicios turísticos.
*   **Gestión de Imágenes**: Subida de fotografías directamente al Storage de Supabase (con opción de eliminar o reemplazar).
*   **Gestión de Categorías y Localidades**: El administrador puede añadir nuevas categorías y localidades sobre la marcha sin tocar el código.
*   **Modal de Edición**: Interfaz limpia para editar servicios existentes.

## 🛠️ Tecnologías Utilizadas

*   **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
*   **Ruteo**: [React Router DOM](https://reactrouter.com/)
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
*   **Iconografía**: [Lucide React](https://lucide.dev/)
*   **Mapas**: [React Leaflet](https://react-leaflet.js.org/)
*   **Base de Datos y Backend (BaaS)**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)
*   **Gestor de Paquetes**: [PNPM](https://pnpm.io/)

## 📂 Estructura del Proyecto

```text
turismo-navidad/
├── public/                 # Imágenes locales y archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (Navbar, Footer, Tarjetas)
│   ├── data/               # Archivos JS con datos estáticos (atractivos, experiencias)
│   ├── layouts/            # Layout principal (MainLayout)
│   ├── pages/              # Vistas del sitio y del panel de admin
│   ├── sections/           # Secciones específicas del Home
│   ├── utils/              # Configuración de Supabase y hooks (usePageTitle)
│   ├── App.jsx             # Configuración de rutas
│   └── index.css           # Estilos globales y directivas de Tailwind
├── .env                    # Variables de entorno (Ignorado en Git)
├── tailwind.config.js      # Configuración del tema y tipografías
└── vite.config.js          # Configuración del bundler