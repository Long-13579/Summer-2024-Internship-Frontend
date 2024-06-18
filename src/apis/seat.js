import { customFetch, showError } from '@/utils/http'
import { SET_SEATS_ON_HOLD } from './constant'

export const setSeatsOnHold = async (showId, seats) => {
  return await customFetch
    .post(SET_SEATS_ON_HOLD, {
      body: {
        showId,
        data: seats
      }
    })
    .catch(showError)
}
