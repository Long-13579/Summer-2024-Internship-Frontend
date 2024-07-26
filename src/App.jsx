import { ToastContainer } from 'react-toastify'
import useRouteElements from './routes/useRouteElements'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const routeElements = useRouteElements()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
