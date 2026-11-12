import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-sand px-6 text-center">
      <h1 className="text-8xl font-serif font-bold text-brand-teal mb-4">404</h1>
      <h2 className="text-3xl font-bold text-brand-blue mb-4">Página no encontrada</h2>
      <p className="text-graytext max-w-md mx-auto mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida. Te invitamos a volver al inicio para seguir explorando Navidad.
      </p>
      <Link 
        to="/" 
        className="bg-brand-blue text-white px-8 py-3 rounded font-bold hover:bg-brand-teal transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}