import useRouteElements from './routes/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <>{routeElements}</>
}

export default App
