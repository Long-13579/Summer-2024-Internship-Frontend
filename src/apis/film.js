import { customFetch, showError } from '@/utils/http'

export const getInformationOfFilm = async (filmId) => {
  return await customFetch.get(`/film/${filmId}`, { signalKey: 'getInformationOfFilm' }).catch(showError)
}
