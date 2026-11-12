/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#003B4A',   // Azul petróleo oscuro
          teal: '#008A9E',   // Celeste/Teal
          olive: '#7A8B3C',  // Verde Oliva
          gold: '#C0942C',   // Dorado/Mostaza
          brown: '#4A3B32',  // Marrón
          sand: '#F5EFE6',   // Fondo arena claro
        },
        surface: '#FFFFFF',    // Blanco para tarjetas y navbar
        graytext: '#4B5563'    // Gris para párrafos
      },
      fontFamily: {
        // Asignamos Barlow para el cuerpo y Barlow Condensed para los títulos
        sans: ['"Barlow"', 'sans-serif'],
        serif: ['"Barlow Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}