import { customFetch, showError } from '@/utils/http'
import { PROVINCE_CITY_URL } from './constant'

export const getCinemasOfProvinces = async () => {
  return await customFetch.get(PROVINCE_CITY_URL, { signalKey: 'getCinemasOfProvinces' }).catch(showError)
}

export const getProvinceCityById = async (provinceCityId) => {
  return await customFetch.get(`/provinceCity/${provinceCityId}`, { signalKey: 'getProvinceCityById' }).catch(showError)
}