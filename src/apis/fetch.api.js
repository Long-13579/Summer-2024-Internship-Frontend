import { toast } from 'react-toastify'

export const fetchApi = async (fileName) => {
  try {
    const response = await fetch(`/mockData/${fileName}.json`)
    return response.json()
  } catch (error) {
    toast.error(error)
  }
}