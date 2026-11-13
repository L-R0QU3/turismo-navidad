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
          dark: '#0A1F2C',    // Un azul más profundo y elegante (casi negro azulado)
          blue: '#003B4A',    // El azul institucional original
          teal: '#008A9E',    // El celeste/teal
          gold: '#C0942C',    // El dorado institucional
          olive: '#7A8B3C',   // Verde oliva
          sand: '#F7F5F0',    // Un tono crema suave (más elegante que el blanco puro)
        },
        surface: '#FFFFFF',
        graytext: '#5A6B73'
      },
      fontFamily: {
        sans: ['"Barlow"', 'sans-serif'],
        serif: ['"Barlow Condensed"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)', // Sombra muy sutil y difusa
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}