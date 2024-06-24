import { customFetch, showError } from '@/utils/http'
import { PROVINCE_CITY_URL } from './constant'

export const getCinemasOfProvinces = async () => {
  return await customFetch.get(PROVINCE_CITY_URL, { signalKey: 'getCinemasOfProvinces' }).catch(showError)
}
