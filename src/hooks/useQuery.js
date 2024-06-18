import { useLocation } from 'react-router-dom'

const useQuery = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const queryObject = {}

  searchParams.forEach((value, key) => {
    queryObject[key] = value
  })

  return queryObject
}

export default useQuery
