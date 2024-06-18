import { createSelector, createSlice } from '@reduxjs/toolkit'
import lodash from 'lodash'

const initialState = {
  selectedFilm: null,
  selectedShowtime: null,
  selectedCinemaShow: null,
  seatList: []
}

const bookTicketSlice = createSlice({
  name: 'bookTicket',
  initialState,
  reducers: {
    setSelectedFilm: (state, action) => {
      state.selectedFilm = action.payload
    },
    setSelectedShowtime: (state, action) => {
      state.selectedShowtime = action.payload
    },
    setSelectedCinemaShow: (state, action) => {
      state.selectedCinemaShow = action.payload
    },
    toggleSelectedSeat: (state, action) => {
      const { name } = action.payload
      const seatIndex = state.seatList.findIndex((seat) => seat.name === name)

      if (seatIndex !== -1) {
        state.seatList.splice(seatIndex, 1)
      } else {
        state.seatList.push(action.payload)
      }
    },
    clearSeatList: (state) => {
      state.seatList = []
    },
    clearShowtime: (state) => {
      state.selectedShowtime = null
      state.selectedCinemaShow = null
      state.seatList = []
    }
  }
})

export const getSelectedShowtime = (state) => state.bookTicket.selectedShowtime

export const countSelectedSeats = createSelector(
  (state) => state.bookTicket.seatList,
  (seatList) => {
    return seatList ? seatList.length : 0
  }
)

export const sortedSelectedSeatList = createSelector(
  (state) => state.bookTicket.seatList,
  (seatList) => [...seatList].sort((a, b) => (a.name > b.name ? 1 : -1))
)

export const selectedSeatNamesString = createSelector(sortedSelectedSeatList, (sortedSeatList) => {
  return sortedSeatList.length > 0 ? sortedSeatList.map((seat) => seat.name).join(', ') : ''
})

export const isSelectedSeat = createSelector(
  (_, seat) => seat,
  (state) => state.bookTicket.seatList,
  (seat, seatList) => seatList.some((s) => lodash.isEqual(s, seat))
)

export const {
  setSelectedFilm,
  setSelectedShowtime,
  setSelectedCinemaShow,
  toggleSelectedSeat,
  clearSeatList,
  clearShowtime
} = bookTicketSlice.actions

export default bookTicketSlice.reducer
