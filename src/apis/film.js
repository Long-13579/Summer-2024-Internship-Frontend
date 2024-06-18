import { customFetch, showError } from '@/utils/http'
import { FILM_URL, ON_CASTING_URL, UPCOMING_URL } from './constant'

export const getOnCastingFilm = async () => {
  return await customFetch.get(ON_CASTING_URL, { signalKey: 'getOnCastingFilm' }).catch(showError)
}

export const getUpComingFilm = async () => {
  return await customFetch.get(UPCOMING_URL, { signalKey: 'getUpComingFilm' }).catch(showError)
}

export const getInformationOfFilm = async (id) => {
  return await customFetch.get(FILM_URL, { query: { id }, signalKey: 'getInformationOfFilm' }).catch(showError)
}

export const getMoviesByCinemaId = async (cinemaId) => {
  return await customFetch
    .get(FILM_URL, {
      signalKey: 'getMoviesByCinemaId',
      query: {
        cinemaId
      }
    })
    .catch(showError)
}
