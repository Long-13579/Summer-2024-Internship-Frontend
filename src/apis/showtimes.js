import { fetchApi } from './fetch.api'

const showTimeApi = {
  getDates() {
    return fetchApi('showtimes').then((response) => {
      const data = response.data
      return data.map((item) => item.date)
    })
  },
  getShowTimes(date) {
    return fetchApi('showtimes').then((response) => {
      const data = response.data
      const showtimesByDate = data.find((item) => item.date === date)
      return showtimesByDate.times.reduce((acc, showtime) => {
        const { theater_id, theater_name_en } = showtime
        if (!acc[theater_id]) {
          acc[theater_id] = {
            theater_name_en,
            times: []
          }
        }
        acc[theater_id].times.push(showtime)
        return acc
      }, {})
    })
  }
}

export default showTimeApi
