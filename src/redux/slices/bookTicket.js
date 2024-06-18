import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedFilm: null,
}

const bookTicketSlice = createSlice({
  name: 'bookTicket',
  initialState,
  reducers: {
    setSelectedFilm: (state, action) => {
      state.selectedFilm = action.payload
    }
  }
})

export const {
  setSelectedFilm
} = bookTicketSlice.actions

export default bookTicketSlice.reducer
