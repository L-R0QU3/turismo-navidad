import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { useNavigate, Link } from 'react-router-dom'
import { 
  LogOut, PlusCircle, Image as ImageIcon, CheckCircle, Plus, 
  AlertCircle, ExternalLink, Pencil, Trash2, X 
} from 'lucide-react'

export default function AdminDashboard() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [servicios, setServicios] = useState([])
  const [categorias, setCategorias] = useState([])
  const [localidades, setLocalidades] = useState([])
  const navigate = useNavigate()

  // --- ESTADOS PARA EL MODAL DE EDICIÓN ---
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({
    nombre: '', categoriaId: '', localidad: '', direccion: '', telefono: '', email: '', currentImageUrl: ''
  })
  const [editImagenFile, setEditImagenFile] = useState(null)

  // --- ESTADOS PARA EL FORMULARIO DE CREACIÓN ---
  const [newForm, setNewForm] = useState({
    nombre: '', categoriaId: '', localidad: '', direccion: '', telefono: '', email: ''
  })
  const [newImagenFile, setNewImagenFile] = useState(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mensaje, setMensaje] = useState(null)
  const [mensajeModal, setMensajeModal] = useState(null)

  // Estados para agregar opciones
  const [nuevaCategoria, setNuevaCategoria] = useState('')
  const [nuevaLocalidad, setNuevaLocalidad] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login')
      } else {
        setSession(session)
        fetchData()
      }
    })
  }, [navigate])

  const fetchData = async () => {
    setLoading(true)
    const { data: servs } = await supabase.from('servicios').select('*, categorias(nombre)').order('created_at', { ascending: false })
    const { data: cats } = await supabase.from('categorias').select('*').order('nombre')
    const { data: locs } = await supabase.from('localidades').select('*').order('nombre')
    
    if (servs) setServicios(servs)
    if (cats) {
      setCategorias(cats)
      if (cats.length > 0) setNewForm(prev => ({ ...prev, categoriaId: cats[0].id }))
    }
    if (locs) {
      setLocalidades(locs)
      if (locs.length > 0) setNewForm(prev => ({ ...prev, localidad: locs[0].nombre }))
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const agregarCategoria = async () => {
    if (!nuevaCategoria.trim()) return
    const slug = nuevaCategoria.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    const { error } = await supabase.from('categorias').insert({ nombre: nuevaCategoria, slug })
    
    if (error) alert('Error al crear categoría: ' + error.message)
    else {
      setNuevaCategoria('')
      fetchData()
    }
  }

  const agregarLocalidad = async () => {
    if (!nuevaLocalidad.trim()) return
    const { error } = await supabase.from('localidades').insert({ nombre: nuevaLocalidad })
    
    if (error) alert('Error al crear localidad: ' + error.message)
    else {
      setNuevaLocalidad('')
      fetchData()
    }
  }

  // --- CREAR NUEVO SERVICIO ---
  const handleCreateSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMensaje(null)

    try {
      let imagenUrl = ''
      if (newImagenFile) {
        const fileExt = newImagenFile.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
        const { error: uploadError } = await supabase.storage.from('servicios').upload(fileName, newImagenFile)
        if (uploadError) throw new Error('Error al subir imagen: ' + uploadError.message)

        const { data: { publicUrl } } = supabase.storage.from('servicios').getPublicUrl(fileName)
        imagenUrl = publicUrl
      }

      const { error: dbError } = await supabase.from('servicios').insert({
        nombre: newForm.nombre,
        categoria_id: newForm.categoriaId,
        localidad: newForm.localidad,
        direccion: newForm.direccion,
        telefono: newForm.telefono,
        email: newForm.email,
        imagen_url: imagenUrl
      })

      if (dbError) throw new Error('Error al guardar: ' + dbError.message)

      setMensaje({ tipo: 'exito', texto: '¡Servicio agregado correctamente!' })
      setNewForm(prev => ({ ...prev, nombre: '', direccion: '', telefono: '', email: '' }))
      setNewImagenFile(null)
      document.getElementById('file-upload-new').value = null
      fetchData()

    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- ABRIR MODAL DE EDICIÓN ---
  const openEditModal = (servicio) => {
    setEditingId(servicio.id)
    setEditForm({
      nombre: servicio.nombre,
      categoriaId: servicio.categoria_id,
      localidad: servicio.localidad,
      direccion: servicio.direccion || '',
      telefono: servicio.telefono || '',
      email: servicio.email || '',
      currentImageUrl: servicio.imagen_url || ''
    })
    setEditImagenFile(null)
    setMensajeModal(null)
    setIsModalOpen(true)
  }

  const closeEditModal = () => {
    setIsModalOpen(false)
    setEditingId(null)
  }

  // --- ACTUALIZAR SERVICIO ---
  const handleEditSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMensajeModal(null)

    try {
      let imagenUrl = editForm.currentImageUrl // Mantiene la actual o queda vacía si se eliminó

      if (editImagenFile) {
        const fileExt = editImagenFile.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
        const { error: uploadError } = await supabase.storage.from('servicios').upload(fileName, editImagenFile)
        if (uploadError) throw new Error('Error al subir nueva imagen: ' + uploadError.message)

        const { data: { publicUrl } } = supabase.storage.from('servicios').getPublicUrl(fileName)
        imagenUrl = publicUrl
      }

      const { error: dbError } = await supabase.from('servicios').update({
        nombre: editForm.nombre,
        categoria_id: editForm.categoriaId,
        localidad: editForm.localidad,
        direccion: editForm.direccion,
        telefono: editForm.telefono,
        email: editForm.email,
        imagen_url: imagenUrl || null // Si está vacío, se guarda como nulo
      }).eq('id', editingId)

      if (dbError) throw new Error('Error al actualizar: ' + dbError.message)

      closeEditModal()
      fetchData()

    } catch (error) {
      setMensajeModal({ tipo: 'error', texto: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- ELIMINAR SERVICIO ---
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este servicio? Esta acción no se puede deshacer.')) {
      const { error } = await supabase.from('servicios').delete().eq('id', id)
      if (error) {
        alert('Error al eliminar: ' + error.message)
      } else {
        fetchData()
      }
    }
  }

  if (loading) return <div className="p-20 text-center text-brand-blue font-bold">Cargando panel...</div>

  return (
    <div className="bg-brand-sand min-h-screen py-10 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* CABECERA */}
        <div className="bg-brand-blue text-white p-6 rounded-t-xl flex flex-col md:flex-row justify-between items-center shadow-md gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-serif font-bold">Panel de Administración</h1>
            <p className="text-sm text-gray-300">Sesión iniciada como: {session?.user?.email}</p>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="bg-brand-teal hover:bg-brand-gold hover:text-brand-blue px-4 py-2 rounded flex items-center gap-2 transition-colors font-bold text-sm">
              <ExternalLink className="w-4 h-4" /> Ver Sitio Web
            </Link>
            <button onClick={handleLogout} className="bg-white/10 hover:bg-red-500 px-4 py-2 rounded flex items-center gap-2 transition-colors font-bold text-sm">
              <LogOut className="w-4 h-4" /> Salir
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* FORMULARIO DE CREACIÓN (IZQUIERDA) */}
          <div className="bg-surface p-6 rounded-xl shadow-lg lg:col-span-1 h-fit">
            <h2 className="text-xl font-bold text-brand-blue mb-4 flex items-center gap-2">
              <PlusCircle className="w-5 h-5" /> Nuevo Servicio
            </h2>

            {mensaje && (
              <div className={`p-3 rounded mb-4 text-sm flex items-start gap-2 ${mensaje.tipo === 'exito' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {mensaje.tipo === 'exito' ? <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" /> : <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                <span>{mensaje.texto}</span>
              </div>
            )}

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-brand-blue block mb-1">Nombre</label>
                <input required type="text" value={newForm.nombre} onChange={e => setNewForm({...newForm, nombre: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
              </div>
              
              <div>
                <label className="text-xs font-bold text-brand-blue block mb-1">Categoría</label>
                <select value={newForm.categoriaId} onChange={e => setNewForm({...newForm, categoriaId: e.target.value})} className="w-full p-2 border rounded text-sm bg-white focus:border-brand-teal focus:outline-none">
                  {categorias.map(cat => <option key={cat.id} value={cat.id}>{cat.nombre}</option>)}
                </select>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Nueva categoría..." value={nuevaCategoria} onChange={e => setNuevaCategoria(e.target.value)} className="w-full p-1.5 border rounded text-xs focus:border-brand-teal focus:outline-none" />
                  <button type="button" onClick={agregarCategoria} className="bg-brand-olive text-white px-3 rounded hover:bg-brand-teal transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-brand-blue block mb-1">Localidad</label>
                <select value={newForm.localidad} onChange={e => setNewForm({...newForm, localidad: e.target.value})} className="w-full p-2 border rounded text-sm bg-white focus:border-brand-teal focus:outline-none">
                  {localidades.map(loc => <option key={loc.id} value={loc.nombre}>{loc.nombre}</option>)}
                </select>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Nueva localidad..." value={nuevaLocalidad} onChange={e => setNuevaLocalidad(e.target.value)} className="w-full p-1.5 border rounded text-xs focus:border-brand-teal focus:outline-none" />
                  <button type="button" onClick={agregarLocalidad} className="bg-brand-olive text-white px-3 rounded hover:bg-brand-teal transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-brand-blue block mb-1">Dirección</label>
                <input type="text" value={newForm.direccion} onChange={e => setNewForm({...newForm, direccion: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-brand-blue block mb-1">Teléfono</label>
                  <input type="text" value={newForm.telefono} onChange={e => setNewForm({...newForm, telefono: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-blue block mb-1">Email</label>
                  <input type="email" value={newForm.email} onChange={e => setNewForm({...newForm, email: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-brand-blue block mb-1">Fotografía (Opcional)</label>
                <div className="border-2 border-dashed border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition-colors">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <input id="file-upload-new" type="file" accept="image/*" onChange={e => setNewImagenFile(e.target.files[0])} className="text-xs w-full text-gray-500" />
                </div>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-brand-teal text-white font-bold py-3 rounded mt-4 hover:bg-brand-blue transition-colors disabled:opacity-50">
                {isSubmitting ? 'Guardando...' : 'Guardar Servicio'}
              </button>
            </form>
          </div>

          {/* TABLA DE SERVICIOS (DERECHA) */}
          <div className="bg-surface p-6 rounded-xl shadow-lg lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Servicios Publicados ({servicios.length})</h2>
            
            {servicios.length === 0 ? (
              <p className="text-graytext text-center py-10">Aún no has subido ningún servicio.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-sand text-brand-blue font-bold border-b-2 border-gray-200">
                    <tr>
                      <th className="p-3">Imagen</th>
                      <th className="p-3">Nombre</th>
                      <th className="p-3">Localidad</th>
                      <th className="p-3 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicios.map(serv => (
                      <tr key={serv.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-3">
                          <img src={serv.imagen_url || 'https://placehold.co/100x100/e2e8f0/64748b?text=Sin+Foto'} alt={serv.nombre} className="w-12 h-12 object-cover rounded shadow-sm" />
                        </td>
                        <td className="p-3 font-semibold text-brand-blue">
                          {serv.nombre}
                          <span className="block text-xs font-normal text-gray-500 mt-1">{serv.categorias?.nombre}</span>
                        </td>
                        <td className="p-3 text-graytext">{serv.localidad}</td>
                        <td className="p-3 flex justify-center gap-2">
                          <button onClick={() => openEditModal(serv)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors" title="Editar">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(serv.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors" title="Eliminar">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* --- MODAL DE EDICIÓN --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Cabecera del Modal */}
            <div className="sticky top-0 bg-brand-blue text-white p-5 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold font-serif flex items-center gap-2">
                <Pencil className="w-5 h-5" /> Editar Servicio
              </h2>
              <button onClick={closeEditModal} className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6">
              {mensajeModal && (
                <div className={`p-3 rounded mb-4 text-sm flex items-start gap-2 ${mensajeModal.tipo === 'exito' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{mensajeModal.texto}</span>
                </div>
              )}

              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-brand-blue block mb-1">Nombre del Servicio</label>
                    <input required type="text" value={editForm.nombre} onChange={e => setEditForm({...editForm, nombre: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-blue block mb-1">Categoría</label>
                    <select value={editForm.categoriaId} onChange={e => setEditForm({...editForm, categoriaId: e.target.value})} className="w-full p-2 border rounded text-sm bg-white focus:border-brand-teal focus:outline-none">
                      {categorias.map(cat => <option key={cat.id} value={cat.id}>{cat.nombre}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-blue block mb-1">Localidad</label>
                    <select value={editForm.localidad} onChange={e => setEditForm({...editForm, localidad: e.target.value})} className="w-full p-2 border rounded text-sm bg-white focus:border-brand-teal focus:outline-none">
                      {localidades.map(loc => <option key={loc.id} value={loc.nombre}>{loc.nombre}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-blue block mb-1">Dirección</label>
                    <input type="text" value={editForm.direccion} onChange={e => setEditForm({...editForm, direccion: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-blue block mb-1">Teléfono</label>
                    <input type="text" value={editForm.telefono} onChange={e => setEditForm({...editForm, telefono: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-blue block mb-1">Email</label>
                    <input type="email" value={editForm.email} onChange={e => setEditForm({...editForm, email: e.target.value})} className="w-full p-2 border rounded text-sm focus:border-brand-teal focus:outline-none" />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold text-brand-blue block mb-2">Fotografía Actual</label>
                  
                  {editForm.currentImageUrl ? (
                    <div className="relative inline-block">
                      <img src={editForm.currentImageUrl} alt="Actual" className="h-32 w-auto rounded object-cover border-2 border-gray-200" />
                      <button 
                        type="button"
                        onClick={() => setEditForm({...editForm, currentImageUrl: ''})}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-md hover:bg-red-700 transition-colors"
                        title="Eliminar imagen"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm text-red-500 font-bold mb-2">No hay imagen seleccionada</p>
                  )}

                  <div className="mt-4">
                    <label className="text-xs font-bold text-gray-500 block mb-1">
                      {editForm.currentImageUrl ? 'Subir una nueva foto (reemplazará la actual)' : 'Subir una foto'}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition-colors">
                      <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input type="file" accept="image/*" onChange={e => setEditImagenFile(e.target.files[0])} className="text-xs w-full text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
                  <button type="button" onClick={closeEditModal} className="px-6 py-2 rounded text-gray-600 font-bold hover:bg-gray-100 transition-colors">
                    Cancelar
                  </button>
                  <button disabled={isSubmitting} type="submit" className="px-6 py-2 rounded text-white bg-brand-gold hover:bg-yellow-600 font-bold transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Guardando...' : 'Actualizar Servicio'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}