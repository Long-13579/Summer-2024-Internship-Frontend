import { customFetch, showError } from '@/utils/http'
import { CINEMA_URL } from './constant'

export const getAllCinemas = async () => {
  const response = await customFetch.get(CINEMA_URL, { signalKey: 'getAllCinemas' }).catch(showError)
  return response.map((cinema) => ({ id: cinema.id, name: cinema.name }))
}

export const getCinemaInfo = async (id) => {
  return await customFetch
    .get(CINEMA_URL, {
      query: { id },
      signalKey: 'getCinemaInfo'
    })
    .catch(showError)
}
