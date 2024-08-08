import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShowMovieOverlay: false,
  isShowPopUp: false,
  popUpContent: {},
  filmIdOfShowedTrailer: null
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
    },
    setFilmIdOfShowedTrailer: (state, action) => {
      state.filmIdOfShowedTrailer = action.payload
    }
  }
})

export const { toggleMovieOverlay, setIsShowPopUp, setPopUpContent, setFilmIdOfShowedTrailer } = uiSlice.actions

export default uiSlice.reducer
