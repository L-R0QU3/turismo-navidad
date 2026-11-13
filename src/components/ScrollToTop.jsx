import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 'instant' asegura que suba de inmediato, sin efecto de desplazamiento
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    })
  }, [pathname])

  return null
}