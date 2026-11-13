import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../utils/supabase'
import { Lock, Mail } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Credenciales incorrectas. Verifica tu correo y contraseña.')
      setLoading(false)
    } else {
      // Si el login es exitoso, vamos al dashboard
      navigate('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-blue px-4">
      <div className="bg-surface p-10 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-brand-gold">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-sand rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-brand-blue">Acceso Administrativo</h1>
          <p className="text-graytext text-sm mt-2">Ingresa tus credenciales para gestionar el portal.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-6 text-sm text-center border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-brand-blue mb-2">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                placeholder="admin@muninavidad.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-blue mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-brand-teal transition-colors disabled:opacity-70"
          >
            {loading ? 'Iniciando sesión...' : 'Ingresar al Panel'}
          </button>
        </form>
      </div>
    </div>
  )
}