import { customFetch, showError } from '@/utils/http'
export const getAllCinemas = async () => {
    const respond = await customFetch.get('/cinema', { signalKey: 'getAllCinemas' }).catch(showError)
    return respond.map(cinema => ({ id: cinema.id, name: cinema.name }));
  }
  