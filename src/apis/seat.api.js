import { fetchApi } from './fetch.api'

const seatApi = {
  getSeatByShow() {
    return fetchApi('seat_map')
  }
}

export default seatApi
