import { customFetch, showError } from '@/utils/http'
import { SHOW_URL, SHOWS_OF_FILM } from './constant'

export const getCinemaShowOfFilm = async (filmId, dateStart, provinceCityId) => {
  return await customFetch
    .get(SHOWS_OF_FILM, {
      signalKey: 'getInformationOfFilm',
      query: {
        filmId,
        dateStart,
        provinceCityId
      }
    })
    .catch(showError)
}

export const getShowInfo = async (id) => {
  return await customFetch
    .get(SHOW_URL, {
      query: { id },
      signalKey: 'getShowInfo'
    })
    .catch(showError)
}
