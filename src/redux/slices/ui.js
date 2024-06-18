import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShowMovieOverlay: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMovieOverlay: (state) => {
      state.isShowMovieOverlay = !state.isShowMovieOverlay
    }
  }
})

export const { toggleMovieOverlay } = uiSlice.actions

export default uiSlice.reducer
