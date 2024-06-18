import { customFetch, showError } from '@/utils/http'

export const getCinemaShowOfFilm = async (filmId, date, provinceCityId) => {
  return await customFetch
    .get('/show/filmDetail', {
      signalKey: 'getInformationOfFilm',
      query: {
        filmId,
        date,
        provinceCityId
      }
    })
    .catch(showError)
}
