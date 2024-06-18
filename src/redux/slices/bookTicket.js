import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedFilm: null,
  selectedShowtime: null,
  selectedCinemaShow: null
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

export const { setSelectedFilm, setSelectedShowtime, setSelectedCinemaShow, clearSeatList, clearShowtime } =
  bookTicketSlice.actions

export default bookTicketSlice.reducer
