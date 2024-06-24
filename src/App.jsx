import { ToastContainer } from 'react-toastify'
import useRouteElements from './routes/useRouteElements'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
