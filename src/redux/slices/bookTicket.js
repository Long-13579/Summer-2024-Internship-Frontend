import { createSelector, createSlice } from '@reduxjs/toolkit'
import lodash from 'lodash'
import { NOT_FOUND, REMOVE_ONE_ITEM, SORT_ORDER } from './constants'
import { BOOK_TICKET_STEP } from '@/constants/bookTicket'
import moment from 'moment'

const initialState = {
  selectedFilm: null,
  selectedShowtime: null,
  selectedCinemaShow: null,
  screenName: null,
  seatPrice: 0,
  seatList: [],
  selectedPaymentMethod: null,
  checkoutStepId: BOOK_TICKET_STEP.CHOOSE_PAYMENT_METHOD,
  userInfo: {}
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
    setScreenName: (state, action) => {
      state.screenName = action.payload
    },
    setSeatPrice: (state, action) => {
      state.seatPrice = action.payload
    },
    toggleSelectedSeat: (state, action) => {
      const { name } = action.payload
      const seatIndex = state.seatList.findIndex((seat) => seat.name === name)

      if (seatIndex !== NOT_FOUND) {
        state.seatList.splice(seatIndex, REMOVE_ONE_ITEM)
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
      state.screenName = null
      state.seatPrice = 0
    },
    setSelectedPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload
    },
    setCheckoutStepId: (state, action) => {
      state.checkoutStepId = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    }
  }
})

export const countSelectedSeats = createSelector(
  (state) => state.bookTicket.seatList,
  (seatList) => {
    return seatList ? seatList.length : 0
  }
)

export const sortedSelectedSeatList = createSelector(
  (state) => state.bookTicket.seatList,
  (seatList) => {
    return [...seatList].sort((a, b) => {
      if (a.name < b.name) return SORT_ORDER.LESS_THAN
      if (a.name > b.name) return SORT_ORDER.GREATER_THAN
      return SORT_ORDER.EQUAL
    })
  }
)

export const selectedSeatNamesString = createSelector(sortedSelectedSeatList, (sortedSeatList) => {
  return sortedSeatList.length > 0 ? sortedSeatList.map((seat) => seat.name).join(', ') : ''
})

export const isSelectedSeat = createSelector(
  (_, seat) => seat,
  (state) => state.bookTicket.seatList,
  (seat, seatList) => seatList.some((s) => lodash.isEqual(s, seat))
)

export const getTotalPriceOfSelectedSeats = createSelector(
  (state) => state.bookTicket.seatList.length,
  (state) => state.bookTicket.seatPrice,
  (numOfSeats, price) => {
    return numOfSeats * price
  }
)

export const getTicketInfo = createSelector(
  (state) => state.bookTicket.selectedFilm,
  (state) => state.bookTicket.selectedShowtime,
  (state) => state.bookTicket.selectedCinemaShow,
  (state) => state.bookTicket.seatList,
  (state) => state.bookTicket.screenName,
  selectedSeatNamesString,
  getTotalPriceOfSelectedSeats,
  (selectedFilm, selectedShowtime, selectedCinemaShow, seatList, screenName, seatNamesString, totalPrice) => ({
    film: selectedFilm,
    showtime: selectedShowtime,
    cinemaShow: selectedCinemaShow,
    seatList: seatList,
    seatNames: seatNamesString,
    screenName,
    totalPrice,
    expiredTime: moment().add(5, 'minutes').toISOString()
  })
)

export const {
  setSelectedFilm,
  setSelectedShowtime,
  setSelectedCinemaShow,
  setScreenName,
  setSeatPrice,
  toggleSelectedSeat,
  clearSeatList,
  clearShowtime,
  setSelectedPaymentMethod,
  setCheckoutStepId,
  setUserInfo
} = bookTicketSlice.actions

export default bookTicketSlice.reducer
