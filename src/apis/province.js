import { customFetch, showError } from '@/utils/http'

export const getCinemasOfProvinces = async () => {
  return await customFetch.get('/provinceCity', { signalKey: 'getCinemasOfProvinces' }).catch(showError)
}
