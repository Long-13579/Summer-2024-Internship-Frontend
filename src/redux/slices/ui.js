import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShowMovieOverlay: false,
  isShowPopUp: false,
  popUpContent: {}
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMovieOverlay: (state) => {
      state.isShowMovieOverlay = !state.isShowMovieOverlay
    },
    setIsShowPopUp: (state, action) => {
      state.isShowPopUp = action.payload
    },
    setPopUpContent: (state, action) => {
      state.popUpContent = action.payload
    }
  }
})

export const { toggleMovieOverlay, setIsShowPopUp, setPopUpContent } = uiSlice.actions

export default uiSlice.reducer
