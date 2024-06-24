import { customFetch, showError } from '@/utils/http'
import { ON_CASTING_URL, UPCOMING_URL } from './constant'

export const getOnCastingFilm = async () => {
  return await customFetch.get(ON_CASTING_URL, { signalKey: 'getOnCastingFilm' }).catch(showError)
}

export const getUpComingFilm = async () => {
  return await customFetch.get(UPCOMING_URL, { signalKey: 'getUpComingFilm' }).catch(showError)
}
